/* 台南・冬の小旅行 2027 — renders every section from window.TRIP */
(function () {
  'use strict';
  const D = window.TRIP;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const WD = ['日', '月', '火', '水', '木', '金', '土'];
  const V = '?v=' + D.photoVer;

  /* ---------- storage ---------- */
  const store = {
    get() { try { return JSON.parse(localStorage.getItem(D.key)) || {}; } catch (e) { return {}; } },
    set(v) { try { localStorage.setItem(D.key, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };
  let state = Object.assign({ done: {}, chk: {} }, store.get());
  const save = () => store.set(state);

  /* ---------- helpers ---------- */
  const parseDate = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const fmtDay = (s) => { const d = parseDate(s); return `${d.getMonth() + 1}月${d.getDate()}日（${WD[d.getDay()]}）`; };
  const dotDate = (s) => { const d = parseDate(s); return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`; };
  const isPortrait = (n) => { const p = D.photos[n]; return p && p.h > p.w; };
  // sizes: 's' small, 'm' medium, '' large (original width)
  const src = (n, k = '') => `assets/photos/${n}${k === true ? '-s' : k ? '-' + k : ''}.webp${V}`;
  const srcset = (n) => isPortrait(n)
    ? `${src(n, 's')} 480w, ${src(n, 'm')} 768w, ${src(n)} 1024w`
    : `${src(n, 's')} 640w, ${src(n, 'm')} 1024w, ${src(n)} 1536w`;
  const img = (n, sizes, extra = '') => {
    const p = D.photos[n] || {};
    return `<img src="${src(n, true)}" srcset="${srcset(n)}" sizes="${sizes}" width="${p.w || 1536}" height="${p.h || 1024}" alt="${esc(p.alt || '')}" loading="lazy" decoding="async" ${extra}>`;
  };
  const stBadge = (s) => {
    if (s === 'v') return `<span class="st st-v" title="${D.verifiedOn} に確認">✓ 確認済</span>`;
    if (s === 'c') return `<span class="st st-c" title="出発前に確認">要確認</span>`;
    return `<span class="st st-e">目安</span>`;
  };
  const mapUrl = (q) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  const dirUrl = (dest, mode = 'driving', origin, waypoints) => {
    let u = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(dest) + '&travelmode=' + mode;
    if (origin) u += '&origin=' + encodeURIComponent(origin);
    if (waypoints && waypoints.length) u += '&waypoints=' + encodeURIComponent(waypoints.join('|'));
    return u;
  };
  const toast = (msg) => { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 1800); };
  const copy = async (text) => {
    try { await navigator.clipboard.writeText(text); toast('コピーしました'); }
    catch (e) { const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); toast('コピーしました'); } catch (_) { toast(text); } ta.remove(); }
  };

  /* ---------- theme + cover ---------- */
  const root = document.documentElement;
  function setCover() {
    const n = root.dataset.theme === 'dark' ? 'cover-night' : 'cover-day';
    $('#coverPic').innerHTML = `<img src="${src(n)}" srcset="${srcset(n)}" sizes="100vw" alt="${esc(D.photos[n].alt)}" fetchpriority="high">`;
    const meta = $$('meta[name="theme-color"]');
    meta.forEach((m) => m.setAttribute('content', root.dataset.theme === 'dark' ? '#121722' : '#F5F0E6'));
  }
  $('#themeBtn').addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('tainan-winter-2027-theme', root.dataset.theme); } catch (e) {}
    setCover();
  });
  setCover();
  const s = parseDate(D.start), e = parseDate(D.end);
  $('#coverDates').innerHTML = `<b>${dotDate(D.start)}</b> ${WD[s.getDay()]} — <b>${e.getMonth() + 1}.${e.getDate()}</b> ${WD[e.getDay()]}`;

  /* ---------- overview ---------- */
  $('#ovTheme').innerHTML = `<p class="ja">${esc(D.theme.ja)}</p><p class="zh" lang="zh-Hant">${esc(D.theme.zh)}</p><p class="en">${esc(D.theme.en)}</p>`;
  const facts = [
    ['日程', `${fmtDay(D.start)} — ${fmtDay(D.end)}`, `${D.days.length}日間・${D.nights}泊`],
    ['移動', D.car.ja, D.car.zh],
    ['宿', D.hotel.name.ja + '（2泊）', D.hotel.name.en]
  ];
  $('#ovFacts').innerHTML = facts.map(([k, a, b]) => `<dt>${k}</dt><dd><b>${esc(a)}</b><span class="zh" lang="zh-Hant">${esc(b)}</span></dd>`).join('');
  $('#ovDays').innerHTML = D.days.map((d, i) => `
    <a class="ov-day reveal" href="#itinerary" data-day="${i}" style="--c:${d.color}">
      ${img(d.hero, '(max-width:560px) 60vw, 33vw')}
      <span class="ov-day-text"><span class="ov-day-no"><i></i>DAY ${i + 1}</span>
      <span class="ov-day-title">${esc(d.title.ja)}</span>
      <span class="ov-day-date">${fmtDay(d.date)}</span></span>
    </a>`).join('');
  $$('.ov-day').forEach((a) => a.addEventListener('click', () => selectDay(+a.dataset.day)));

  /* ---------- itinerary ---------- */
  $('#legend').innerHTML = `${stBadge('v')}<span>${D.verifiedOn.replace('-', '年')}月に確認</span>${stBadge('e')}<span>目安・予定</span>${stBadge('c')}<span>出発前に確認</span><span>○ をタップすると済みにできます</span>`;
  $('#dayTabs').innerHTML = D.days.map((d, i) => `
    <button class="day-tab" role="tab" id="tab-${d.id}" aria-controls="panel-${d.id}" aria-selected="${i === 0}" style="--c:${d.color}" data-i="${i}">
      <small>DAY ${i + 1} · ${parseDate(d.date).getMonth() + 1}/${parseDate(d.date).getDate()} ${WD[parseDate(d.date).getDay()]}</small><b>${esc(d.title.ja)}</b><span class="bar"></span>
    </button>`).join('');
  $('#dayPanels').innerHTML = D.days.map((d, i) => `
    <div class="day-panel" role="tabpanel" id="panel-${d.id}" aria-labelledby="tab-${d.id}" style="--c:${d.color}" ${i ? 'hidden' : ''}>
      <div class="day-media">
        <button class="day-hero" data-photo="${d.hero}" aria-label="写真を拡大">${img(d.hero, '(max-width:860px) 60vw, 40vw')}</button>
        <div class="day-thumbs">${d.thumbs.map((t) => `<button data-photo="${t}" aria-label="写真を拡大">${img(t, '15vw')}</button>`).join('')}</div>
      </div>
      <div class="day-body">
        <div class="day-head">
          <p class="date">DAY ${i + 1} — ${fmtDay(d.date)}</p>
          <h3>${esc(d.title.ja)}</h3><span class="zh" lang="zh-Hant">${esc(d.title.zh)}</span>
          <p class="lead">${esc(d.lead.ja)}</p><span class="zh" lang="zh-Hant">${esc(d.lead.zh)}</span>
        </div>
        <div class="day-meta"><span>${esc(d.drive.ja)}</span><span class="prog" data-prog="${d.id}"></span></div>
        <ol class="tl">${d.items.map((it, k) => {
          const id = `${d.id}-${k}`;
          const more = it.d && (it.d.ja || it.d.zh);
          return `<li class="tl-item${it.drive ? ' drive' : ''}${state.done[id] ? ' done' : ''}" data-id="${id}">
            <span class="tl-time">${it.time}</span>
            <span class="tl-dot"><input type="checkbox" aria-label="${esc(it.t.ja)} 済み" ${state.done[id] ? 'checked' : ''}></span>
            <div class="tl-body">
              <h4>${esc(it.t.ja)}${stBadge(it.status)}</h4>
              <span class="zh" lang="zh-Hant">${esc(it.t.zh)}${it.t.en ? ' · <i class="en-i">' + esc(it.t.en) + '</i>' : ''}</span>
              ${it.n && it.n.ja ? `<p>${esc(it.n.ja)}</p>` : ''}
              ${it.n && it.n.zh ? `<span class="zh" lang="zh-Hant">${esc(it.n.zh)}</span>` : ''}
              ${(it.map || more || it.photo) ? `<div class="tl-tools">
                ${more ? `<button class="chip js-more" aria-expanded="false">詳しく ＋</button>` : ''}
                ${it.photo ? `<button class="chip" data-photo="${it.photo}">写真</button>` : ''}
                ${it.map ? `<a class="chip" href="${mapUrl(it.map)}" target="_blank" rel="noopener">地図 ↗</a>` : ''}
              </div>` : ''}
              ${more ? `<div class="tl-more" hidden><div>${esc(it.d.ja)}</div><span class="zh" lang="zh-Hant">${esc(it.d.zh)}</span></div>` : ''}
            </div>
          </li>`;
        }).join('')}</ol>
      </div>
    </div>`).join('');

  function updateProgress() {
    D.days.forEach((d, i) => {
      const n = d.items.length, k = d.items.filter((_, j) => state.done[`${d.id}-${j}`]).length;
      const tab = $(`#tab-${d.id}`); tab.style.setProperty('--p', (k / n * 100) + '%');
      const p = $(`[data-prog="${d.id}"]`); if (p) p.textContent = `${k} / ${n} 済み`;
    });
  }
  function selectDay(i) {
    $$('.day-tab').forEach((t, j) => t.setAttribute('aria-selected', String(i === j)));
    $$('.day-panel').forEach((p, j) => { p.hidden = i !== j; });
  }
  $$('.day-tab').forEach((t) => t.addEventListener('click', () => selectDay(+t.dataset.i)));
  $('#dayTabs').addEventListener('keydown', (ev) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(ev.key)) return;
    const cur = $$('.day-tab').findIndex((t) => t.getAttribute('aria-selected') === 'true');
    const nx = (cur + (ev.key === 'ArrowRight' ? 1 : -1) + D.days.length) % D.days.length;
    selectDay(nx); $$('.day-tab')[nx].focus();
  });
  $('#dayPanels').addEventListener('change', (ev) => {
    if (ev.target.type !== 'checkbox') return;
    const li = ev.target.closest('.tl-item'); const id = li.dataset.id;
    if (ev.target.checked) state.done[id] = 1; else delete state.done[id];
    li.classList.toggle('done', ev.target.checked); save(); updateProgress();
  });
  $('#dayPanels').addEventListener('click', (ev) => {
    const b = ev.target.closest('.js-more'); if (!b) return;
    const box = b.closest('.tl-body').querySelector('.tl-more');
    box.hidden = !box.hidden; b.setAttribute('aria-expanded', String(!box.hidden)); b.textContent = box.hidden ? '詳しく ＋' : '閉じる －';
  });
  updateProgress();
  // open today's tab during the trip
  (function () { const today = new Date(); const i = D.days.findIndex((d) => { const x = parseDate(d.date); return x.toDateString() === today.toDateString(); }); if (i > 0) selectDay(i); })();

  /* ---------- route ---------- */
  $('#routes').innerHTML = D.routes.map((r) => {
    const di = D.days.findIndex((d) => d.id === r.day); const d = D.days[di];
    const q = r.stops.map((x) => x.q);
    const url = dirUrl(q[q.length - 1], r.mode, q[0], q.slice(1, -1));
    return `<div class="route-card reveal" style="--c:${d.color}">
      <div class="route-day"><span>DAY ${di + 1} · ${parseDate(d.date).getMonth() + 1}/${parseDate(d.date).getDate()}</span><b>${esc(d.title.ja)}</b></div>
      <ol class="route-line">${r.stops.map((x, k) => `<li>${esc(x.ja)}<span class="zh" lang="zh-Hant">${esc(x.zh)}</span>${r.legs[k] ? `<span class="leg">${esc(r.legs[k])}</span>` : ''}</li>`).join('')}</ol>
      <a class="btn route-go" href="${url}" target="_blank" rel="noopener">Google マップでルート ↗</a>
    </div>`;
  }).join('');

  /* ---------- spots ---------- */
  $('#spotGrid').innerHTML = D.spots.map((p) => {
    const d = D.days[p.day - 1];
    return `<article class="spot reveal" style="--c:${d.color}">
      <button class="spot-img" data-photo="${p.photo}" aria-label="${esc(p.name.ja)}の写真を拡大">${img(p.photo, '(max-width:560px) 60vw, (max-width:860px) 50vw, 33vw')}<span class="spot-day">DAY ${p.day}</span></button>
      <h3>${esc(p.name.ja)}</h3><span class="zh" lang="zh-Hant">${esc(p.name.zh)} · <i>${esc(p.name.en)}</i></span>
      <p>${esc(p.desc.ja)}</p>
      <div class="spot-info"><span>${esc(p.info.ja)}</span>${stBadge(p.status)}<a class="chip" href="${mapUrl(p.map)}" target="_blank" rel="noopener">地図 ↗</a></div>
    </article>`;
  }).join('');

  /* ---------- food ---------- */
  $('#foodRow').innerHTML = D.food.map((f) => `
    <figure class="dish reveal"><button data-photo="${f.photo}" aria-label="${esc(f.name.ja)}の写真を拡大">${img(f.photo, '(max-width:560px) 50vw, 20vw')}</button>
    <figcaption><h3>${esc(f.name.ja)}</h3><span class="zh" lang="zh-Hant">${esc(f.name.zh)} · <i>${esc(f.name.en)}</i></span><p>${esc(f.desc.ja)}</p></figcaption></figure>`).join('');

  /* ---------- stay ---------- */
  const H = D.hotel;
  $('#stay-body').innerHTML = `
    <button class="stay-photo reveal" data-photo="${H.photo}" aria-label="客室イメージを拡大">${img(H.photo, '(max-width:860px) 60vw, 50vw')}<span class="cap">イメージ（実際の客室ではありません）</span></button>
    <div class="reveal">
      <h3 class="stay-name">${esc(H.name.ja)}</h3><span class="en">${esc(H.name.en)}</span>
      <p class="stay-addr"><span class="zh" lang="zh-Hant">${esc(H.address)}</span><span class="en">${esc(H.addressEn)}</span></p>
      <div class="stay-times"><div><small>CHECK-IN</small><b>${H.checkin}</b></div><div><small>CHECK-OUT</small><b>${H.checkout}</b></div><div><small>NIGHTS</small><b>${D.nights}</b></div></div>
      <div class="rooms">${H.rooms.map((r) => `<div class="room"><small>${esc(r.who.ja)}</small><b>${esc(r.type.ja)}<span class="zh" lang="zh-Hant">${esc(r.type.zh)}</span></b>${stBadge(r.status)}</div>`).join('')}</div>
      <ul class="notes">${H.notes.map((n) => `<li><span>${esc(n.t.ja)}<span class="zh" lang="zh-Hant">${esc(n.t.zh)}</span></span>${stBadge(n.status)}</li>`).join('')}</ul>
      <div class="btn-row">
        <button class="btn fill" type="button" id="copyAddr">住所をコピー（中文）</button>
        <a class="btn" href="${mapUrl(H.map)}" target="_blank" rel="noopener">地図 ↗</a>
        <a class="btn" href="tel:${H.phone.replace(/[^+\d]/g, '')}">電話</a>
      </div>
    </div>`;
  $('#copyAddr').addEventListener('click', () => copy(H.address));

  /* ---------- transport / tips / phrases / checklist ---------- */
  $('#trList').innerHTML = D.transport.map((t) => `<dt>${esc(t.k.ja)}<span class="zh" lang="zh-Hant">${esc(t.k.zh)}</span></dt><dd><span>${esc(t.v.ja)}<span class="zh" lang="zh-Hant">${esc(t.v.zh)}</span></span>${stBadge(t.status)}</dd>`).join('');
  $('#tipGrid').innerHTML = D.tips.map((t, i) => `<div class="tip reveal"><span class="tip-no">${String(i + 1).padStart(2, '0')}</span><h3>${esc(t.t.ja)}</h3><p>${esc(t.d.ja)}</p><span class="zh" lang="zh-Hant">${esc(t.d.zh)}</span>${stBadge(t.status)}</div>`).join('');
  $('#phrGrid').innerHTML = D.phrases.map((p, i) => `<button class="phr" type="button" data-i="${i}"><span class="ja">${esc(p.ja)}</span><span class="zhb" lang="zh-Hant">${esc(p.zh)}</span><span class="py">${esc(p.py)}</span></button>`).join('');
  $('#phrGrid').addEventListener('click', (ev) => { const b = ev.target.closest('.phr'); if (!b) return; const p = D.phrases[+b.dataset.i]; $('#pbZh').textContent = p.zh; $('#pbPy').textContent = p.py; $('#pbJa').textContent = p.ja; $('#phrBig').hidden = false; });
  $('#phrBig').addEventListener('click', () => { $('#phrBig').hidden = true; });

  $('#chkGrid').innerHTML = D.checklist.map((g, gi) => `<div class="chk-group"><h3><span>${esc(g.g.ja)} <span class="zh" lang="zh-Hant" style="display:inline">${esc(g.g.zh)}</span></span><small data-cnt="${gi}"></small></h3>
    ${g.items.map((it, k) => { const id = `c${gi}-${k}`; return `<label><input type="checkbox" data-id="${id}" ${state.chk[id] ? 'checked' : ''}><span>${esc(it.ja)}<span class="zh" lang="zh-Hant">${esc(it.zh)}</span></span></label>`; }).join('')}</div>`).join('');
  const chkCount = () => D.checklist.forEach((g, gi) => { const k = g.items.filter((_, j) => state.chk[`c${gi}-${j}`]).length; $(`[data-cnt="${gi}"]`).textContent = `${k} / ${g.items.length}`; });
  $('#chkGrid').addEventListener('change', (ev) => { const id = ev.target.dataset.id; if (!id) return; if (ev.target.checked) state.chk[id] = 1; else delete state.chk[id]; save(); chkCount(); });
  chkCount();

  /* ---------- gallery + lightbox ---------- */
  $('#gal').innerHTML = D.gallery.map((g) => `<button data-photo="${g}" aria-label="${esc(D.photos[g].alt)}">${img(g, '(max-width:560px) 60vw, 33vw')}</button>`).join('');
  let lbList = D.gallery, lbIdx = 0;
  const lb = $('#lightbox');
  function lbShow(i) {
    lbIdx = (i + lbList.length) % lbList.length; const n = lbList[lbIdx];
    $('#lbImg').src = src(n); $('#lbImg').alt = D.photos[n].alt;
    $('#lbCap').textContent = `${D.photos[n].alt}　${lbIdx + 1} / ${lbList.length}${n === 'hotel-room' ? '　（イメージ）' : ''}`;
  }
  function lbOpen(n) { lbList = D.gallery.includes(n) ? D.gallery : [n]; lbShow(lbList.indexOf(n)); lb.hidden = false; document.body.style.overflow = 'hidden'; $('.lb-close', lb).focus(); }
  function lbClose() { lb.hidden = true; document.body.style.overflow = ''; }
  document.addEventListener('click', (ev) => { const b = ev.target.closest('[data-photo]'); if (b && !ev.target.closest('#travel')) { ev.preventDefault(); lbOpen(b.dataset.photo); } });
  $('.lb-close', lb).addEventListener('click', lbClose);
  $('.lb-prev', lb).addEventListener('click', () => lbShow(lbIdx - 1));
  $('.lb-next', lb).addEventListener('click', () => lbShow(lbIdx + 1));
  lb.addEventListener('click', (ev) => { if (ev.target === lb) lbClose(); });
  let tx = null;
  lb.addEventListener('touchstart', (ev) => { tx = ev.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (ev) => { if (tx == null) return; const dx = ev.changedTouches[0].clientX - tx; if (Math.abs(dx) > 40) lbShow(lbIdx + (dx < 0 ? 1 : -1)); tx = null; });
  document.addEventListener('keydown', (ev) => {
    if (!lb.hidden) { if (ev.key === 'Escape') lbClose(); if (ev.key === 'ArrowRight') lbShow(lbIdx + 1); if (ev.key === 'ArrowLeft') lbShow(lbIdx - 1); }
    if (!$('#phrBig').hidden && ev.key === 'Escape') $('#phrBig').hidden = true;
  });

  /* ---------- sources ---------- */
  $('#srcBody').innerHTML = `<div class="src-legend">
      <p>${stBadge('v')}<span>${D.verifiedOn.replace('-', '年')}月にウェブで確認した情報。</span></p>
      <p>${stBadge('e')}<span>計算や一般的な情報からの目安。</span></p>
      <p>${stBadge('c')}<span>情報源によって違う、または変わりやすいため出発前に確認。</span></p>
      <p><span>写真はすべて AI 生成のイメージで、実際の景色・客室とは異なります。</span></p>
    </div>
    <ol class="src-list">${D.sources.map((s) => `<li><a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.t)}</a></li>`).join('')}</ol>`;

  /* ---------- travel mode ---------- */
  const flat = [];
  D.days.forEach((d, i) => d.items.forEach((it) => { const [h, m] = it.time.split(':').map(Number); const t = parseDate(d.date); t.setHours(h, m); flat.push({ d, i, it, t }); }));
  let tvIdx = 0;
  const pickNow = () => { const now = Date.now() - 20 * 60 * 1000; const k = flat.findIndex((f) => f.t.getTime() >= now); return k === -1 ? flat.length - 1 : k; };
  function tvRender() {
    const f = flat[tvIdx], it = f.it;
    const before = Date.now() < flat[0].t.getTime();
    $('#tvLabel').textContent = tvIdx === pickNow() ? (before ? '最初の予定' : '次の予定') : '予定';
    $('#tvDay').textContent = `DAY ${f.i + 1} · ${fmtDay(f.d.date)}`;
    $('#tvTime').textContent = it.time;
    $('#tvTitle').textContent = it.t.ja; $('#tvZh').textContent = it.t.zh;
    $('#tvNote').textContent = (it.n && it.n.ja) || '';
    const ph = it.photo || f.d.hero;
    $('#tvBg').style.backgroundImage = `url("${src(ph, 'm')}")`;
    const go = $('#tvGo');
    if (it.map) { go.hidden = false; go.href = dirUrl(it.map, it.walk ? 'walking' : 'driving'); } else { go.hidden = true; }
  }
  function tvClock() { const n = new Date(); $('#tvClock').textContent = `${n.getHours()}:${String(n.getMinutes()).padStart(2, '0')}`; }
  function route() {
    const on = location.hash === '#travel';
    $('#travel').hidden = !on; document.body.style.overflow = on ? 'hidden' : '';
    if (on) { tvIdx = pickNow(); tvRender(); tvClock(); }
  }
  $('#tvPrev').addEventListener('click', () => { tvIdx = Math.max(0, tvIdx - 1); tvRender(); });
  $('#tvNext').addEventListener('click', () => { tvIdx = Math.min(flat.length - 1, tvIdx + 1); tvRender(); });
  $('#tvNow').addEventListener('click', () => { tvIdx = pickNow(); tvRender(); });
  $('#tvCopy').addEventListener('click', () => copy(H.address));
  $('.tv-phr').addEventListener('click', () => { $('#travel').hidden = true; document.body.style.overflow = ''; });
  window.addEventListener('hashchange', route);
  setInterval(() => { if (!$('#travel').hidden) tvClock(); }, 30000);
  route();

  /* ---------- top bar, nav highlight, reveal ---------- */
  const bar = $('.topbar');
  const onScroll = () => bar.classList.toggle('solid', window.scrollY > window.innerHeight * 0.6);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px' });
    $$('.reveal').forEach((el) => io.observe(el));
    const links = $$('.nav a');
    const so = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
    $$('main > section[id]').forEach((s) => so.observe(s));
  } else { $$('.reveal').forEach((el) => el.classList.add('in')); }
})();
