/* 台南・冬の小旅行 2027 — all trip data lives here.
   status: v = 確認済（verifiedOn）, e = 目安, c = 出発前に確認 */
(function () {
  const T = (ja, zh, en) => ({ ja, zh, en });

  window.TRIP = {
    key: 'tainan-winter-2027-v1',
    photoVer: 3,
    verifiedOn: '2026-11',
    title: T('台南・冬の小旅行', '台南冬日小旅行', 'A Winter Journey to Tainan'),
    kicker: T('古都と日本時代の建築をめぐる 3日間', '古都與日治建築的三日旅程', 'Three days of old capital and Japanese-era architecture'),
    start: '2027-01-28',
    end: '2027-01-30',
    nights: 2,
    car: T('自家用車・国道1号', '自駕・國道1號', 'By car on National Freeway 1'),
    theme: T(
      '林百貨、旧台南州庁、明治製糖の總爺、そして日本人建築家・坂茂の美術館。台南に残る「日本とのつながり」を一本の線でたどります。',
      '林百貨、原臺南州廳、明治製糖的總爺，以及日本建築師坂茂設計的美術館——用一條線串起台南與日本的連結。',
      'Hayashi Department Store, the former Tainan Prefecture Hall, the Meiji Sugar works at Tsung-Yeh and a museum by Shigeru Ban: one line through Tainan\'s ties to Japan.'
    ),

    hotel: {
      name: T('友愛街旅館', '友愛街旅館', 'U.I.J Hotel & Hostel'),
      address: '台南市中西區友愛街115巷5號',
      addressEn: 'No. 5, Ln. 115, You\'ai St., West Central Dist., Tainan',
      phone: '+886-6-221-8188',
      checkin: '15:00', checkout: '11:00',
      map: '友愛街旅館 U.I.J Hotel Tainan',
      rooms: [
        { type: T('ツイン（友致客房・二小床／26㎡）', '雙床房（友致客房－二小床／26㎡）', 'Twin room, 26 m²'), status: 'v' },
        { type: T('ダブル1名利用（友致客房・一大床）', '一大床房一人入住（友致客房－一大床）', 'Double room, single use'), status: 'c' }
      ],
      notes: [
        { t: T('チェックイン 15:00／チェックアウト 11:00', '入住 15:00／退房 11:00', 'Check-in 15:00 / check-out 11:00'), status: 'v' },
        { t: T('現在の客室一覧にシングルルームはないため、ダブルを1名で利用', '目前房型表沒有單人房，改訂一大床房一人入住', 'No single rooms listed, so a double is booked for one'), status: 'c' },
        { t: T('駐車場の有無と料金は予約時に確認', '停車位與費用訂房時確認', 'Confirm parking and its fee when booking'), status: 'c' },
        { t: T('1階に鷲田珈琲、屋上テラス、ブックストアあり', '一樓有鷲田咖啡、頂樓露台與書店', 'Café on the ground floor, rooftop terrace and a bookstore'), status: 'v' }
      ],
      photo: 'hotel-room'
    },

    days: [
      {
        id: 'd1', date: '2027-01-28', color: '#24395E',
        title: T('桃園から台南へ', '桃園 → 雲林 → 台南', 'Taoyuan to Tainan'),
        lead: T('高速道路を南へ。途中で大学キャンパスに寄り、夕方は林百貨、夜は提灯の灯る神農街へ。', '沿國道南下，途中參觀大學校園；傍晚林百貨，夜晚走進燈籠點亮的神農街。', 'South on the freeway, a campus stop on the way, Hayashi at dusk and lantern-lit Shennong Street at night.'),
        hero: 'day1-hero', thumbs: ['spot-yuntech', 'spot-hayashi', 'spot-shennong'],
        drive: T('走行 約300km・運転 約3時間40分', '行駛約300公里・開車約3小時40分', 'About 300 km, 3 h 40 min of driving'),
        items: [
          { time: '08:00', t: T('桃園を出発', '桃園出發', 'Leave Taoyuan'), n: T('国道1号で南へ。泰安SAまで約1時間10分。', '國道1號南下，到泰安約1小時10分。', ''), status: 'e', drive: true },
          { time: '09:10', t: T('泰安サービスエリア（南下側）', '泰安服務區（南下）', 'Tai\'an Service Area'), n: T('国道1号のちょうど中間点。トイレとコーヒーで30分休憩。', '國道1號中點，廁所、咖啡休息30分鐘。', ''), d: T('南下側は洋風ガーデンの「幸福驛站」。北上側は別の建物です。', '南站是歐式花園「幸福驛站」，與北上的北站是不同建築。', ''), status: 'v', map: '泰安服務區 南站', photo: 'spot-taian' },
          { time: '10:30', t: T('虎尾インターで高速を降りる', '虎尾交流道下', 'Exit at Huwei'), n: T('大学まで一般道で約20分。', '到雲科大約20分鐘。', ''), status: 'e', drive: true },
          { time: '10:50', t: T('雲林科技大学キャンパス', '國立雲林科技大學', 'YunTech campus'), n: T('冬休み中の静かなキャンパス。並木道とデザイン学部の建物を散策。', '寒假中安靜的校園，林蔭大道與設計學院建築。', ''), d: T('1月下旬は大学の冬休みとみられ、学内の食堂は営業していない可能性があります。見学できる場所は事前に確認します。', '1月下旬大學應已放寒假，校內餐廳可能未營業；可參觀區域出發前確認。', ''), status: 'c', map: '國立雲林科技大學', photo: 'spot-yuntech' },
          { time: '12:15', t: T('斗六市内でランチ', '斗六市區午餐', 'Lunch in Douliu'), n: T('お店は当日の気分で決めます。', '店家當天再決定。', ''), status: 'c', map: '斗六市 美食' },
          { time: '13:30', t: T('台南へ', '前往台南', 'Drive to Tainan'), n: T('約100km、1時間20分ほど。', '約100公里、1小時20分。', ''), status: 'e', drive: true },
          { time: '15:00', t: T('友愛街旅館にチェックイン', '友愛街旅館入住', 'Check in, U.I.J Hotel'), n: T('荷物を置いてひと休み。車はここで止めて、あとは歩きます。', '放行李休息，車停好之後都用走的。', ''), status: 'v', map: '友愛街旅館 U.I.J Hotel Tainan', photo: 'hotel-room' },
          { time: '16:00', t: T('林百貨', '林百貨', 'Hayashi Department Store'), n: T('1932年開業の百貨店。屋上の神社「末廣社」と、針で階数を示す古いエレベーター。', '1932年開幕的百貨公司，頂樓有末廣社，電梯是指針式樓層顯示。', ''), d: T('営業 11:00–21:00。屋上から夕暮れの台南を一望。', '營業 11:00–21:00，頂樓可眺望黃昏的台南。', ''), status: 'v', walk: true, map: '林百貨 台南', photo: 'spot-hayashi' },
          { time: '18:00', t: T('国華街で夕食', '國華街晚餐', 'Dinner on Guohua Street'), n: T('小皿の台湾料理を少しずつシェア。', '小吃點多樣、每樣分著吃。', ''), status: 'e', walk: true, map: '國華街 台南', photo: 'food-sharing' },
          { time: '19:30', t: T('海安路から神農街へ', '海安路 → 神農街', 'Hai\'an Road to Shennong Street'), n: T('提灯の灯る清代の路地をのんびり散歩。', '漫步掛滿燈籠的清代老街。', ''), status: 'e', walk: true, map: '神農街 台南', photo: 'spot-shennong' },
          { time: '21:00', t: T('ホテルへ', '回飯店', 'Back to the hotel'), n: T('', '', ''), status: 'e' }
        ]
      },
      {
        id: 'd2', date: '2027-01-29', color: '#C23F26',
        title: T('古都をめぐる一日', '府城古都＋安平', 'The old capital and Anping'),
        lead: T('午前は孔子廟から歩いて美術館と旧州庁へ。午後は車で安平、海に沈む夕日を見てから、夜の赤崁楼と夜市へ。', '上午從孔廟走到美術館與原州廳；下午開車去安平看夕陽，晚上赤崁樓夜間與夜市。', 'Morning on foot from the Confucius Temple; Anping and the sunset in the afternoon; Chihkan Tower and a night market after dark.'),
        hero: 'day2-hero', thumbs: ['spot-museum2', 'spot-zeelandia', 'spot-chihkan'],
        drive: T('車は安平の往復のみ（片道 約15分）', '只有安平往返開車（單程約15分鐘）', 'Only the Anping round trip by car'),
        items: [
          { time: '08:00', t: T('牛肉湯の朝ごはん', '牛肉湯早餐', 'Beef soup breakfast'), n: T('生の牛肉に熱いスープを注いで仕上げる台南名物。サバヒー（虱目魚）のお粥も定番。', '熱湯直接燙熟生牛肉的台南名物；虱目魚粥也是經典。', ''), status: 'e', walk: true, map: '台南 牛肉湯 中西區', photo: 'food-beefsoup' },
          { time: '09:00', t: T('台南孔子廟と府中街', '臺南孔廟＋府中街', 'Confucius Temple and Fuzhong Street'), n: T('「全台首学」と呼ばれる台湾最初の孔子廟。朱色の壁と古木の中庭。', '「全臺首學」，台灣第一座孔廟，紅牆與老樹。', ''), d: T('開館時間は出発前に確認します。', '開放時間出發前確認。', ''), status: 'c', walk: true, map: '臺南孔廟', photo: 'day2-hero' },
          { time: '10:00', t: T('台南市美術館2館', '臺南市美術館二館', 'Tainan Art Museum, Building 2'), n: T('日本人建築家・坂茂の設計。白い五角形の大屋根が木漏れ日のような影をつくります。', '日本建築師坂茂設計，五角形碎形屋頂灑下樹影般的光影。', ''), d: T('開館時間と休館日は情報源によって異なるため、出発前に確認します。', '開館時間與休館日各來源不一致，出發前確認。', ''), status: 'c', walk: true, map: '臺南市美術館2館', photo: 'spot-museum2' },
          { time: '10:45', t: T('国立台湾文学館（旧台南州庁）', '國立臺灣文學館（原臺南州廳）', 'Former Tainan Prefecture Hall'), n: T('1916年完成の旧台南州庁。ドームのある洋館は外観だけでも見ごたえあり。', '1916年完工的原臺南州廳，圓頂洋館光看外觀就值得。', ''), status: 'c', walk: true, map: '國立臺灣文學館', photo: 'spot-literature' },
          { time: '11:30', t: T('小吃でランチ', '小吃午餐', 'Street-food lunch'), n: T('擔仔麵、碗粿、えびの春巻きなどを少しずつ。', '擔仔麵、碗粿、蝦捲，每樣吃一點。', ''), status: 'e', walk: true, map: '台南 擔仔麵', photo: 'food-sharing' },
          { time: '13:00', t: T('車で安平へ', '開車到安平', 'Drive to Anping'), n: T('約15分。', '約15分鐘。', ''), status: 'e', drive: true },
          { time: '13:30', t: T('熱蘭遮堡（安平古堡）', '熱蘭遮堡（安平古堡）', 'Fort Zeelandia'), n: T('1624年にオランダが築いた城塞の跡。ガジュマルの根が這う赤レンガの城壁。', '1624年荷蘭人建造的城堡遺跡，榕樹根盤繞的紅磚城牆。', ''), d: T('全票70元（台南市営の古蹟は共通料金）。2022年に正式名称が「熱蘭遮堡」に統一されました。開館時間は要確認。', '全票70元（市營古蹟統一票價）。2022年正式統一名稱為「熱蘭遮堡」。開放時間待確認。', ''), status: 'v', map: '安平古堡', photo: 'spot-zeelandia' },
          { time: '14:45', t: T('安平樹屋', '安平樹屋', 'Anping Tree House'), n: T('ガジュマルに飲み込まれた、旧イギリス商社の倉庫。', '被榕樹包覆的原英商德記洋行倉庫。', ''), d: T('全票70元。', '全票70元。', ''), status: 'v', map: '安平樹屋', photo: 'spot-treehouse' },
          { time: '15:45', t: T('安平老街で豆花', '安平老街・豆花', 'Anping Old Street'), n: T('えびせん、魔除けの剣獅（けんし）、豆花でひと休み。', '蝦餅、劍獅、豆花歇歇腳。', ''), status: 'e', map: '安平老街' },
          { time: '17:00', t: T('海に沈む夕日', '看夕陽', 'Sunset over the strait'), n: T('1月の日の入りは17時40分ごろ（目安）。', '1月日落約17:40（估計）。', ''), status: 'e', map: '安平 觀夕平台', photo: 'spot-sunset' },
          { time: '18:15', t: T('ホテルに戻って駐車', '回飯店停車', 'Back to park the car'), n: T('', '', ''), status: 'e', drive: true },
          { time: '19:00', t: T('赤崁楼（夜間）', '赤崁樓夜間', 'Chihkan Tower at night'), n: T('ライトアップされた楼閣と、亀が背負う石碑。21:00まで。', '夜間點燈的樓閣與贔屭石碑，開放到21:00。', ''), d: T('全票70元。', '全票70元。', ''), status: 'v', walk: true, map: '赤崁樓', photo: 'spot-chihkan' },
          { time: '20:00', t: T('武聖夜市', '武聖夜市', 'Wusheng Night Market'), n: T('水・金・土曜に開く中西区の夜市。赤崁楼から徒歩約20分、またはタクシー。', '週三、五、六營業的中西區夜市，從赤崁樓步行約20分鐘或搭計程車。', ''), d: T('営業 17:00–24:00。', '營業 17:00–24:00。', ''), status: 'v', walk: true, map: '武聖夜市', photo: 'food-nightmarket' }
        ]
      },
      {
        id: 'd3', date: '2027-01-30', color: '#2F5D4A',
        title: T('麻豆の糖廠から桃園へ', '總爺藝文中心 → 桃園', 'Tsung-Yeh and home'),
        lead: T('最後の朝ごはんのあと、麻豆へ。明治製糖の旧工場跡を樟の並木の下で歩き、名物の碗粿を食べてから北へ帰ります。', '最後一頓台南早餐後前往麻豆，在明治製糖舊址的樟樹林下散步，吃碗粿再北上。', 'A last Tainan breakfast, a slow walk through the old Meiji Sugar works at Madou, a bowl of wa-kuei, then north.'),
        hero: 'day3-hero', thumbs: ['spot-tsungyeh', 'food-madou', 'spot-daitian'],
        drive: T('走行 約290km・運転 約3時間30分', '行駛約290公里・開車約3小時30分', 'About 290 km, 3 h 30 min of driving'),
        items: [
          { time: '08:30', t: T('菜粽と味噌湯の朝ごはん', '菜粽＋味噌湯早餐', 'Peanut zongzi and miso soup'), n: T('ピーナッツ入りのちまきに、なぜか味噌汁。台南の定番の組み合わせです。', '花生菜粽配味噌湯，台南經典早餐組合。', ''), status: 'e', walk: true, map: '台南 菜粽', photo: 'food-zongzi' },
          { time: '10:00', t: T('チェックアウト', '退房', 'Check out'), n: T('11:00まで。荷物を車に積んで麻豆へ（約40分）。', '11:00前退房，行李上車前往麻豆（約40分鐘）。', ''), status: 'v', drive: true },
          { time: '10:45', t: T('總爺藝文中心', '總爺藝文中心', 'Tsung-Yeh Arts and Cultural Center'), n: T('明治製糖の旧工場跡。赤レンガの紅楼、樟の並木、靴を脱いで上がる木造の招待所。', '明治製糖株式會社舊址：紅樓、樟樹綠廊、要脫鞋的木造招待所。', ''), d: T('開園 9:00–17:00、室内展示は月・火曜休館（土曜は開館）。入場無料・駐車場無料。', '開放 9:00–17:00，室內展館週一、二休（週六有開）。免門票、免費停車。', ''), status: 'v', map: '總爺藝文中心', photo: 'spot-tsungyeh' },
          { time: '12:30', t: T('麻豆でランチ', '麻豆午餐', 'Lunch in Madou'), n: T('名物の碗粿（ワーグイ）。冬は龍泉冰店の白玉ぜんざい「圓仔湯」も。', '名物碗粿；冬天還有龍泉冰店的圓仔湯。', ''), d: T('碗粿は「碗粿蘭」（店が広く駐車しやすい）か、地元で人気の「助仔碗粿」。', '碗粿可選「碗粿蘭」（店大好停車）或在地人愛的「助仔碗粿」。', ''), status: 'e', map: '麻豆 碗粿', photo: 'food-madou' },
          { time: '13:30', t: T('（寄り道）麻豆代天府', '（可加）麻豆代天府', 'Optional: Madou Daitian Temple'), n: T('巨大な龍の像がある大きな廟。15分ほど。', '有巨龍造景的大廟，約15分鐘。', ''), d: T('参拝 8:00–21:00。', '開放 8:00–21:00。', ''), status: 'v', map: '麻豆代天府', photo: 'spot-daitian' },
          { time: '14:00', t: T('麻豆インターから北へ', '麻豆交流道北上', 'North from Madou'), n: T('泰安SAまで約1時間40分。', '到泰安約1小時40分。', ''), status: 'e', drive: true },
          { time: '15:40', t: T('泰安サービスエリア（北上側）', '泰安服務區（北上）', 'Tai\'an Service Area northbound'), n: T('30分休憩。', '休息30分鐘。', ''), status: 'e', map: '泰安服務區 北站' },
          { time: '17:30', t: T('桃園に到着', '抵達桃園', 'Arrive in Taoyuan'), n: T('土曜の北上は混むことも。到着後に予定は入れないのがおすすめ。', '週六北上可能塞車，抵達後不要排固定行程。', ''), status: 'e' }
        ]
      }
    ],

    routes: [
      { day: 'd1', mode: 'driving', stops: [
          { ja: '桃園', zh: '桃園', q: '桃園' },
          { ja: '泰安SA', zh: '泰安服務區', q: '泰安服務區 南站' },
          { ja: '虎尾IC', zh: '虎尾交流道', q: '虎尾交流道' },
          { ja: '雲林科技大学', zh: '雲科大', q: '國立雲林科技大學' },
          { ja: '友愛街旅館', zh: '友愛街旅館', q: '友愛街旅館 U.I.J Hotel Tainan' }
        ], legs: ['約110km', '約76km', '約12km', '約100km'] },
      { day: 'd2', mode: 'driving', stops: [
          { ja: '友愛街旅館', zh: '友愛街旅館', q: '友愛街旅館 U.I.J Hotel Tainan' },
          { ja: '熱蘭遮堡', zh: '安平古堡', q: '安平古堡' },
          { ja: '安平樹屋', zh: '安平樹屋', q: '安平樹屋' },
          { ja: '観夕平台', zh: '觀夕平台', q: '安平 觀夕平台' },
          { ja: '友愛街旅館', zh: '友愛街旅館', q: '友愛街旅館 U.I.J Hotel Tainan' }
        ], legs: ['約6km', '約1km', '約2km', '約7km'] },
      { day: 'd3', mode: 'driving', stops: [
          { ja: '友愛街旅館', zh: '友愛街旅館', q: '友愛街旅館 U.I.J Hotel Tainan' },
          { ja: '總爺藝文中心', zh: '總爺藝文中心', q: '總爺藝文中心' },
          { ja: '泰安SA', zh: '泰安服務區', q: '泰安服務區 北站' },
          { ja: '桃園', zh: '桃園', q: '桃園' }
        ], legs: ['約30km', '約143km', '約110km'] }
    ],

    spots: [
      { photo: 'spot-hayashi', name: T('林百貨', '林百貨', 'Hayashi Department Store'), day: 1, desc: T('1932年12月開業。屋上に神社がある、台湾でただ一つの百貨店。', '1932年12月開幕，台灣唯一頂樓有神社的百貨公司。', ''), info: T('11:00–21:00', '11:00–21:00', ''), status: 'v', map: '林百貨 台南' },
      { photo: 'spot-shennong', name: T('神農街', '神農街', 'Shennong Street'), day: 1, desc: T('清代の港町の面影を残す路地。夜は提灯とカフェの灯り。', '保留清代港口街道風貌，夜晚燈籠與咖啡館燈光。', ''), info: T('夕方以降がおすすめ', '傍晚以後最好', ''), status: 'e', map: '神農街 台南' },
      { photo: 'spot-museum2', name: T('台南市美術館2館', '臺南市美術館二館', 'Tainan Art Museum 2'), day: 2, desc: T('坂茂と石昭永の共同設計。白い五角形の大屋根。', '坂茂與石昭永共同設計，白色五角形大屋頂。', ''), info: T('開館時間は要確認', '開館時間待確認', ''), status: 'c', map: '臺南市美術館2館' },
      { photo: 'spot-literature', name: T('国立台湾文学館', '國立臺灣文學館', 'Former Tainan Prefecture Hall'), day: 2, desc: T('1916年完成の旧台南州庁。', '1916年完工的原臺南州廳。', ''), info: T('開館時間は要確認', '開館時間待確認', ''), status: 'c', map: '國立臺灣文學館' },
      { photo: 'spot-zeelandia', name: T('熱蘭遮堡（安平古堡）', '熱蘭遮堡（安平古堡）', 'Fort Zeelandia'), day: 2, desc: T('1624年、オランダが築いた台湾最古の城塞。', '1624年荷蘭人所建，台灣最早的堡壘。', ''), info: T('全票 70元', '全票 70元', ''), status: 'v', map: '安平古堡' },
      { photo: 'spot-treehouse', name: T('安平樹屋', '安平樹屋', 'Anping Tree House'), day: 2, desc: T('ガジュマルが屋根になった旧倉庫。', '榕樹成為屋頂的舊倉庫。', ''), info: T('全票 70元', '全票 70元', ''), status: 'v', map: '安平樹屋' },
      { photo: 'spot-chihkan', name: T('赤崁楼', '赤崁樓', 'Chihkan Tower'), day: 2, desc: T('オランダ時代の城跡に建つ楼閣。夜のライトアップが美しい。', '荷蘭時期城址上的樓閣，夜間點燈很美。', ''), info: T('8:30–21:00・全票 70元', '8:30–21:00・全票 70元', ''), status: 'v', map: '赤崁樓' },
      { photo: 'spot-tsungyeh', name: T('總爺藝文中心', '總爺藝文中心', 'Tsung-Yeh Arts Center'), day: 3, desc: T('明治製糖の旧工場。紅楼、招待所、顔水龍紀念館。', '明治製糖舊址：紅樓、招待所、顏水龍紀念館。', ''), info: T('9:00–17:00・無料', '9:00–17:00・免費', ''), status: 'v', map: '總爺藝文中心' },
      { photo: 'spot-daitian', name: T('麻豆代天府', '麻豆代天府', 'Madou Daitian Temple'), day: 3, desc: T('巨大な龍がそびえる、麻豆を代表する廟。', '巨龍矗立，麻豆的代表廟宇。', ''), info: T('8:00–21:00', '8:00–21:00', ''), status: 'v', map: '麻豆代天府' }
    ],

    food: [
      { photo: 'food-beefsoup', name: T('牛肉湯', '牛肉湯', 'Fresh beef soup'), desc: T('朝に食べる台南名物。生姜と甘い醤油だれで。', '台南早餐名物，配薑絲與醬料。', '') },
      { photo: 'food-sharing', name: T('擔仔麵・碗粿・蝦捲', '擔仔麵・碗粿・蝦捲', 'Danzai noodles and more'), desc: T('小さな器で少しずつ。三人でシェアすると種類が楽しめます。', '小份量多樣，三人分著吃最划算。', '') },
      { photo: 'food-nightmarket', name: T('夜市', '夜市', 'Night market'), desc: T('台南の夜市は曜日ごとに場所が変わる「移動式」。', '台南夜市依星期輪流營業。', '') },
      { photo: 'food-madou', name: T('麻豆の碗粿と圓仔湯', '麻豆碗粿＋圓仔湯', 'Wa-kuei and rice-ball soup'), desc: T('器ごと蒸した米のプリン。冬は温かい白玉スープと。', '連碗蒸的米食；冬天配一碗熱圓仔湯。', '') },
      { photo: 'food-zongzi', name: T('菜粽と味噌湯', '菜粽＋味噌湯', 'Peanut zongzi and miso soup'), desc: T('台南の朝の定番。ピーナッツ粉をたっぷり。', '台南早餐經典，撒滿花生粉。', '') }
    ],

    transport: [
      { k: T('走行距離', '總里程', 'Distance'), v: T('約620km（3日間）', '約620公里（三天）', ''), status: 'e' },
      { k: T('高速料金のしくみ', '國道計程費率', 'Toll rule'), v: T('1日20kmまで無料、20–200kmは1kmあたり1.2元、200km超は0.9元（小型車）', '每日20公里內免費，20–200公里每公里1.2元，超過200公里每公里0.9元（小型車）', ''), status: 'v' },
      { k: T('往路・復路の料金', '去程・回程通行費', 'Tolls each way'), v: T('往路 約275元・復路 約263元', '去程約275元・回程約263元', ''), status: 'e' },
      { k: T('ガソリン', '油價', 'Fuel price'), v: T('95無鉛 32.7元/L（2026年11月）', '95無鉛 每公升32.7元（2026年11月）', ''), status: 'v' },
      { k: T('台南市内', '台南市區', 'In Tainan'), v: T('2日目は中西区を歩き、車は安平の往復だけ。', '第二天中西區步行，只有安平往返開車。', ''), status: 'e' },
      { k: T('總爺の駐車場', '總爺停車', 'Tsung-Yeh parking'), v: T('無料。駐車場から建物まで徒歩5分。', '免費，停車場走到館區約5分鐘。', ''), status: 'v' }
    ],

    tips: [
      { t: T('1月の台南は晴れの日が多い', '一月台南多晴天', ''), d: T('昼は暖かく、朝晩は涼しくなります（目安14–23℃）。桃園は寒い日もあるので重ね着で。', '白天溫暖、早晚涼（約14–23℃）；桃園可能較冷，洋蔥式穿搭。', ''), status: 'e', photo: 'gallery-outfit' },
      { t: T('旧正月の1週間前', '春節前一週', ''), d: T('2027年の春節連休は2月4日–10日（大晦日は2月5日）。街は年越しの買い物で少しにぎやかです。', '2027年春節連假2/4–2/10（除夕2/5），街上有辦年貨的熱鬧氣氛。', ''), status: 'v' },
      { t: T('夜市は曜日で場所が変わる', '夜市依星期輪流', ''), d: T('花園夜市 木・土・日／大東夜市 月・火・金／武聖夜市 水・金・土。', '花園 四六日／大東 一二五／武聖 三五六。', ''), status: 'v' },
      { t: T('小吃の店は現金で', '小吃多付現金', ''), d: T('屋台や老舗は現金のみの店が多めです。小銭を用意しておくと安心。', '路邊攤與老店多只收現金，準備零錢。', ''), status: 'e' },
      { t: T('廟では敷居を踏まない', '廟宇不踩門檻', ''), d: T('入口の敷居はまたいで。お参りしている人の正面での撮影は控えめに。', '跨過門檻，避免正對參拜者拍照。', ''), status: 'e' },
      { t: T('總爺の招待所は靴を脱いで', '總爺招待所要脫鞋', ''), d: T('京都風の木造2階建て。脱ぎやすい靴がおすすめ。', '京都式木造兩層樓，穿好脫的鞋。', ''), status: 'v' }
    ],

    checklist: [
      { g: T('旅行者', '旅客', 'Travellers'), items: [
        T('パスポート', '護照', ''), T('現金（台湾ドル）と小銭', '新台幣現金與零錢', ''), T('薄手のダウンかカーディガン', '薄羽絨或針織外套', ''), T('歩きやすい靴（脱ぎやすいもの）', '好走又好脫的鞋', ''), T('モバイルバッテリー', '行動電源', ''), T('常備薬', '常備藥', '')
      ] },
      { g: T('案内人', '帶路人', 'Guide'), items: [
        T('友愛街旅館を予約（ツイン＋ダブル）', '訂友愛街旅館（雙床＋一大床）', ''), T('ホテルの駐車場を確認', '確認飯店停車', ''), T('雲林科技大学の見学エリアを確認', '確認雲科大可參觀區域', ''), T('孔子廟・美術館2館・文学館の開館時間', '孔廟、南美館二館、文學館開放時間', ''), T('前日に天気と道路状況を確認', '前一天查天氣與路況', ''), T('ETCの残高', 'eTag 餘額', '')
      ] }
    ],

    phrases: [
      { ja: 'これください', zh: '我要這個', py: 'wǒ yào zhège' },
      { ja: 'いくらですか', zh: '多少錢？', py: 'duōshǎo qián?' },
      { ja: 'パクチー抜きで', zh: '不要香菜', py: 'bú yào xiāngcài' },
      { ja: 'おいしい！', zh: '好吃！', py: 'hǎo chī!' },
      { ja: 'トイレはどこですか', zh: '廁所在哪裡？', py: 'cèsuǒ zài nǎlǐ?' },
      { ja: 'ありがとう', zh: '謝謝', py: 'xièxie' }
    ],

    gallery: ['cover-day', 'day1-hero', 'spot-yuntech', 'spot-hayashi', 'spot-shennong', 'food-sharing', 'day2-hero', 'spot-museum2', 'spot-literature', 'spot-zeelandia', 'spot-treehouse', 'spot-sunset', 'spot-chihkan', 'food-nightmarket', 'food-beefsoup', 'day3-hero', 'spot-tsungyeh', 'food-madou', 'spot-daitian', 'food-zongzi', 'gallery-alley', 'spot-taian', 'hotel-room', 'gallery-outfit', 'cover-night'],

    photos: {
      'cover-day': { alt: '台南の古い通りと廟の屋根', w: 1536, h: 1024 },
      'cover-night': { alt: '夕暮れの台南の古い通り', w: 1536, h: 1024 },
      'day1-hero': { alt: '国道を南へ走る車内', w: 1024, h: 1536 },
      'day2-hero': { alt: '孔子廟の朱色の壁', w: 1024, h: 1536 },
      'day3-hero': { alt: '總爺の樟の並木', w: 1024, h: 1536 },
      'spot-yuntech': { alt: '大学キャンパスの並木道', w: 1536, h: 1024 },
      'spot-hayashi': { alt: '林百貨の外観', w: 1536, h: 1024 },
      'spot-shennong': { alt: '提灯の灯る神農街', w: 1536, h: 1024 },
      'spot-museum2': { alt: '台南市美術館2館の白い屋根', w: 1536, h: 1024 },
      'spot-zeelandia': { alt: '熱蘭遮堡の城壁', w: 1536, h: 1024 },
      'spot-treehouse': { alt: '安平樹屋', w: 1536, h: 1024 },
      'spot-sunset': { alt: '安平の夕日', w: 1536, h: 1024 },
      'spot-chihkan': { alt: '夜の赤崁楼', w: 1536, h: 1024 },
      'spot-tsungyeh': { alt: '總爺の日本式招待所', w: 1536, h: 1024 },
      'hotel-room': { alt: 'ツインルーム（イメージ）', w: 1536, h: 1024 },
      'food-beefsoup': { alt: '牛肉湯', w: 1536, h: 1024 },
      'food-sharing': { alt: '台南の小吃', w: 1536, h: 1024 },
      'food-nightmarket': { alt: '夜市', w: 1536, h: 1024 },
      'food-madou': { alt: '碗粿と圓仔湯', w: 1536, h: 1024 },
      'spot-taian': { alt: '泰安サービスエリア', w: 1536, h: 1024 },
      'food-zongzi': { alt: '菜粽と味噌湯', w: 1536, h: 1024 },
      'spot-literature': { alt: '旧台南州庁', w: 1536, h: 1024 },
      'gallery-alley': { alt: '路地を歩く二人', w: 1024, h: 1536 },
      'gallery-outfit': { alt: '1月の台南の服装', w: 1536, h: 1024 },
      'spot-daitian': { alt: '麻豆代天府', w: 1536, h: 1024 }
    },

    sources: [
      { t: '友愛街旅館（Trip.com：房型・入住退房）', u: 'https://hk.trip.com/w/Xhs5SiZeXV2' },
      { t: '友愛街旅館（楽天トラベル：住所・電話）', u: 'https://hotel.travel.rakuten.co.jp/hinfo/165458/' },
      { t: '台南林百貨 營業時間', u: 'https://travel.yam.com/place/3533' },
      { t: '赤崁樓 門票與開放時間', u: 'https://bunnyann.tw/sajk12/' },
      { t: '台南古蹟 統一票價（赤崁樓、安平古堡、樹屋）', u: 'https://uptogo.com.tw/旅遊/赤崁樓要門票嗎？/' },
      { t: '總爺藝文中心 開放時間與停車', u: 'https://bunnyann.tw/master/' },
      { t: '台南夜市營業時間表（食尚玩家）', u: 'https://supertaste.tvbs.com.tw/pack/350443' },
      { t: '2027年行事曆：春節連假（聯合新聞網）', u: 'https://udn.com/news/story/7266/9518211' },
      { t: '國道計程收費費率（行政院公報 2026-10-02）', u: 'https://www.rootlaw.com.tw/Attach/S-Doc/02011510020001-001.pdf' },
      { t: '中油油價 2026年11月', u: 'https://www.kingautos.net/371380' },
      { t: '臺南市美術館二館 介紹', u: 'https://bunnyann.tw/?p=27908' },
      { t: '安平古堡更名熱蘭遮堡', u: 'https://city.gvm.com.tw/article/95077' },
      { t: '泰安服務區 南北站', u: 'https://city.gvm.com.tw/article/123689' },
      { t: '麻豆碗粿與市場美食（微笑台灣）', u: 'https://smiletaiwan.cw.com.tw/article/559' },
      { t: '麻豆代天府 開放時間', u: 'https://travel.yam.com/place/25760' },
      { t: '115學年度寒假日期（TVBS）', u: 'https://news.tvbs.com.tw/life/4011852' }
    ]
  };
})();
