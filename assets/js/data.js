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
      michelin: 'https://guide.michelin.com/th/en/hotels-stays/Tainan-City/uij-hotel-hostel-15830',
      story: [
        T('台南の古い市場「友愛市場」のすぐ隣。朝は市場のざわめき、夜は路地の灯り。この街の暮らしのまん中に、友愛街旅館はあります。', '緊鄰台南老市場「友愛市場」。早晨是市場的喧鬧，夜裡是巷弄的燈光——友愛街旅館就在這座城市生活的正中央。', 'Right next to Tainan\'s old You\'ai Market: the bustle of the market in the morning, lane lights at night. U.I.J Hotel sits in the middle of everyday life in this city.'),
        T('テーマは大正時代の華やかさ。といっても懐古趣味ではなく、赤レンガ、テラゾー（磨石子）、真鍮、ガラス、黒鉄といった素材そのものが主役です。台南の古い家のように、年月とともに味わいが深まる宿をめざしてつくられました。', '風格定調大正時期的輝煌，卻不一味懷舊，而是從材料下手：紅磚、磨石子、銅條、玻璃與黑鐵，希望像台南老宅一樣越住越有韻味。', 'The theme is the elegance of Japan\'s Taisho era, but not as nostalgia. The materials themselves take the lead: red brick, terrazzo, brass, glass and black iron. It was built to gain character with age, like Tainan\'s old houses.'),
        T('チェックインで手渡されるのは、台南を紹介する一冊の本。ロビーには食の本とレコードが並ぶ24時間のライブラリー「粅粅書 BBBooks」。室内履きは台南の革靴ブランド「林果良品」とのコラボです。', '入住時會拿到一本介紹台南的書；大廳是24小時開放、以飲食書與黑膠為主的「粅粅書 BBBooks」；室內拖鞋則與台南品牌「林果良品」合作。', 'At check-in you are handed a book about Tainan. The lobby is BBBooks, a 24-hour library of food books and records, and the slippers are made with the Tainan leather-shoe brand 林果良品.'),
        T('西向きの屋上テラスからは、旧市街の屋根の向こうに沈む夕日が見えます。よく歩いた一日の終わりに、ぜひ。', '朝西的頂樓露台，可以看夕陽沉入老城屋頂的另一端——走了一天之後，最適合在這裡收尾。', 'From the west-facing rooftop terrace, the sun sets beyond the old-town roofs. A good way to end a day of walking.')
      ],
      scores: [
        { site: 'Hotels.com', score: '9.6', note: T('清潔さ 9.8', '清潔度 9.8', 'Cleanliness 9.8'), u: 'https://ph.hotels.com/ho679817152/u-i-j-hotel-hostel-tainan-taiwan/' },
        { site: 'Trip.com', score: '9.5', note: T('口コミ 387件', '387 則評價', '387 reviews'), u: 'https://hk.trip.com/w/Xhs5SiZeXV2' },
        { site: 'KAYAK', score: '9.3', note: T('評価 3,825件', '3,825 則評分', '3,825 ratings'), u: 'https://www.nz.kayak.com/Tainan-Hotels-U-I-J-Hotel-Hostel.3592063.ksp' }
      ],
      quotes: [
        { q: '洗練されたデザインの中にどこか居心地の良さを感じる', lang: 'ja', tr: T('', '在洗練的設計裡，感受到一種說不出的自在。', 'Within the refined design, a quiet sense of being at home.'), who: T('aumo（日本の旅行メディア・宿泊レポート）', 'aumo（日本旅遊媒體・住宿心得）', 'aumo, a Japanese travel site (stay report)'), u: 'https://aumo.jp/articles/35448' },
        { q: 'Beautifully designed hotel situated right in the middle of 台南.', lang: 'en', tr: T('台南のまん中にある、美しくデザインされたホテル。', '位在台南正中心、設計很美的旅館。', 'A beautifully designed hotel right in the middle of Tainan.'), who: T('Hotels.com の宿泊者（4泊）', 'Hotels.com 住客（住4晚）', 'Hotels.com guest (4 nights)'), u: 'https://ph.hotels.com/ho679817152/u-i-j-hotel-hostel-tainan-taiwan/' },
        { q: '房間設計充滿文青質感且乾淨舒適', lang: 'zh-Hant', tr: T('客室は文学的な雰囲気のデザインで、清潔で快適。', '', 'Rooms with a literary, artsy design, clean and comfortable.'), who: T('Trip.com の宿泊者（2026年6月）', 'Trip.com 住客（2026年6月）', 'Trip.com guest (June 2026)'), u: 'https://hk.trip.com/w/Xhs5SiZeXV2' }
      ],
      praise: [
        { k: T('立地', '地點', 'Location'), d: T('友愛市場のすぐ隣で、国華街まで歩いて約4分。食べ歩きにも観光にも便利という声が多数。', '就在友愛市場旁，走到國華街約4分鐘，吃和逛都方便。', 'Right next to You\'ai Market and about 4 minutes on foot from Guohua Street; many guests say it is handy for food and sightseeing.'), u: 'https://ph.hotels.com/ho679817152/u-i-j-hotel-hostel-tainan-taiwan/' },
        { k: T('清潔さ', '乾淨', 'Cleanliness'), d: T('客室もバスルームもとても清潔、という感想がくり返し寄せられています。', '房間與浴室都很乾淨，是住客反覆提到的優點。', 'Guests repeatedly describe the rooms and bathrooms as very clean.'), u: 'https://www.agoda.com/u-i-j-hotel-hostel/hotel/tainan-tw.html' },
        { k: T('屋上テラス', '頂樓露台', 'Rooftop terrace'), d: T('夕方、屋上でビールを飲みながら過ごした時間がよかったという旅行者も。', '有旅客說傍晚在頂樓喝啤酒的時光特別難忘。', 'One traveller\'s highlight was a beer on the rooftop in the evening.'), u: 'https://ph.hotels.com/ho679817152/u-i-j-hotel-hostel-tainan-taiwan/' },
        { k: T('細部へのこだわり', '細節用心', 'Attention to detail'), d: T('上質なアメニティ、炭酸水と普通の水が選べる心づかいなど、細かな部分を褒める声も。', '備品講究、氣泡水與一般水都有，細節讓人印象深刻。', 'Guests also praise the small touches, such as quality toiletries and a choice of sparkling or still water.'), u: 'https://vocus.cc/article/63070323fd8978000128ec13' }
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
          { time: '08:00', t: T('桃園を出発', '桃園出發', 'Leave Taoyuan'), n: T('国道1号で南へ。泰安SAまで約1時間10分。', '國道1號南下，到泰安約1小時10分。', 'South on National Freeway 1; about 1 h 10 min to Tai\'an.'), status: 'e', drive: true },
          { time: '09:10', t: T('泰安サービスエリア（南下側）', '泰安服務區（南下）', 'Tai\'an Service Area'), n: T('国道1号のちょうど中間点。トイレとコーヒーで30分休憩。', '國道1號中點，廁所、咖啡休息30分鐘。', 'The halfway point of Freeway 1: a 30-minute break for the restroom and coffee.'), d: T('南下側は洋風ガーデンの「幸福驛站」。北上側は別の建物です。', '南站是歐式花園「幸福驛站」，與北上的北站是不同建築。', 'The southbound side is a European-style garden called 幸福驛站; the northbound side is a separate building.'), status: 'v', map: '泰安服務區 南站', photo: 'spot-taian' },
          { time: '10:30', t: T('虎尾インターで高速を降りる', '虎尾交流道下', 'Exit at Huwei'), n: T('大学まで一般道で約20分。', '到雲科大約20分鐘。', 'About 20 minutes to campus on local roads.'), status: 'e', drive: true },
          { time: '10:50', t: T('雲林科技大学キャンパス', '國立雲林科技大學', 'YunTech campus'), n: T('冬休み中の静かなキャンパス。並木道とデザイン学部の建物を散策。', '寒假中安靜的校園，林蔭大道與設計學院建築。', 'A quiet campus during winter break: tree-lined avenues and the design school buildings.'), d: T('1月下旬は大学の冬休みとみられ、学内の食堂は営業していない可能性があります。見学できる場所は事前に確認します。', '1月下旬大學應已放寒假，校內餐廳可能未營業；可參觀區域出發前確認。', 'Late January is likely the university\'s winter break, so campus cafeterias may be closed. Which areas visitors can enter will be checked in advance.'), status: 'c', map: '國立雲林科技大學', photo: 'spot-yuntech' },
          { time: '12:15', t: T('斗六市内でランチ', '斗六市區午餐', 'Lunch in Douliu'), n: T('お店は当日の気分で決めます。', '店家當天再決定。', 'We\'ll pick a place on the day.'), status: 'c', map: '斗六市 美食' },
          { time: '13:30', t: T('台南へ', '前往台南', 'Drive to Tainan'), n: T('約100km、1時間20分ほど。', '約100公里、1小時20分。', 'About 100 km, roughly 1 h 20 min.'), status: 'e', drive: true },
          { time: '15:00', t: T('友愛街旅館にチェックイン', '友愛街旅館入住', 'Check in, U.I.J Hotel'), n: T('荷物を置いてひと休み。車はここで止めて、あとは歩きます。', '放行李休息，車停好之後都用走的。', 'Drop the bags and rest. The car stays here; from now on we walk.'), status: 'v', map: '友愛街旅館 U.I.J Hotel Tainan', photo: 'hotel-room' },
          { time: '16:00', t: T('林百貨', '林百貨', 'Hayashi Department Store'), n: T('1932年開業の百貨店。屋上の神社「末廣社」と、針で階数を示す古いエレベーター。', '1932年開幕的百貨公司，頂樓有末廣社，電梯是指針式樓層顯示。', 'A department store opened in 1932, with a rooftop shrine (末廣社) and an old elevator whose dial shows the floor.'), d: T('営業 11:00–21:00。屋上から夕暮れの台南を一望。', '營業 11:00–21:00，頂樓可眺望黃昏的台南。', 'Open 11:00–21:00. The rooftop looks out over Tainan at dusk.'), status: 'v', walk: true, map: '林百貨 台南', photo: 'spot-hayashi' },
          { time: '18:00', t: T('国華街で夕食', '國華街晚餐', 'Dinner on Guohua Street'), n: T('小皿の台湾料理を少しずつシェア。', '小吃點多樣、每樣分著吃。', 'Small plates of Taiwanese food, shared a little at a time.'), status: 'e', walk: true, map: '國華街 台南', photo: 'food-sharing' },
          { time: '19:30', t: T('海安路から神農街へ', '海安路 → 神農街', 'Hai\'an Road to Shennong Street'), n: T('提灯の灯る清代の路地をのんびり散歩。', '漫步掛滿燈籠的清代老街。', 'An easy stroll down Qing-era lanes lit by lanterns.'), status: 'e', walk: true, map: '神農街 台南', photo: 'spot-shennong' },
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
          { time: '08:00', t: T('牛肉湯の朝ごはん', '牛肉湯早餐', 'Beef soup breakfast'), n: T('生の牛肉に熱いスープを注いで仕上げる台南名物。サバヒー（虱目魚）のお粥も定番。', '熱湯直接燙熟生牛肉的台南名物；虱目魚粥也是經典。', 'A Tainan specialty: raw beef cooked by pouring hot broth over it. Milkfish congee is another classic.'), status: 'e', walk: true, map: '台南 牛肉湯 中西區', photo: 'food-beefsoup' },
          { time: '09:00', t: T('台南孔子廟と府中街', '臺南孔廟＋府中街', 'Confucius Temple and Fuzhong Street'), n: T('「全台首学」と呼ばれる台湾最初の孔子廟。朱色の壁と古木の中庭。', '「全臺首學」，台灣第一座孔廟，紅牆與老樹。', 'Taiwan\'s first Confucius Temple, known as "the first school of Taiwan": vermilion walls and a courtyard of old trees.'), d: T('開館時間は出発前に確認します。', '開放時間出發前確認。', 'Opening hours to be checked before the trip.'), status: 'c', walk: true, map: '臺南孔廟', photo: 'day2-hero' },
          { time: '10:00', t: T('台南市美術館2館', '臺南市美術館二館', 'Tainan Art Museum, Building 2'), n: T('日本人建築家・坂茂の設計。白い五角形の大屋根が木漏れ日のような影をつくります。', '日本建築師坂茂設計，五角形碎形屋頂灑下樹影般的光影。', 'Designed by Japanese architect Shigeru Ban. A huge white pentagonal roof casts shade like sunlight through leaves.'), d: T('開館時間と休館日は情報源によって異なるため、出発前に確認します。', '開館時間與休館日各來源不一致，出發前確認。', 'Sources disagree on opening hours and closing days, so these will be checked before the trip.'), status: 'c', walk: true, map: '臺南市美術館2館', photo: 'spot-museum2' },
          { time: '10:45', t: T('国立台湾文学館（旧台南州庁）', '國立臺灣文學館（原臺南州廳）', 'Former Tainan Prefecture Hall'), n: T('1916年完成の旧台南州庁。ドームのある洋館は外観だけでも見ごたえあり。', '1916年完工的原臺南州廳，圓頂洋館光看外觀就值得。', 'The former Tainan Prefecture Hall, completed in 1916. The domed building is worth seeing from the outside alone.'), status: 'c', walk: true, map: '國立臺灣文學館', photo: 'spot-literature' },
          { time: '11:30', t: T('小吃でランチ', '小吃午餐', 'Street-food lunch'), n: T('擔仔麵、碗粿、えびの春巻きなどを少しずつ。', '擔仔麵、碗粿、蝦捲，每樣吃一點。', 'A little of each: danzai noodles, wa-kuei rice pudding, shrimp rolls.'), status: 'e', walk: true, map: '台南 擔仔麵', photo: 'food-sharing' },
          { time: '13:00', t: T('車で安平へ', '開車到安平', 'Drive to Anping'), n: T('約15分。', '約15分鐘。', 'About 15 minutes.'), status: 'e', drive: true },
          { time: '13:30', t: T('熱蘭遮堡（安平古堡）', '熱蘭遮堡（安平古堡）', 'Fort Zeelandia'), n: T('1624年にオランダが築いた城塞の跡。ガジュマルの根が這う赤レンガの城壁。', '1624年荷蘭人建造的城堡遺跡，榕樹根盤繞的紅磚城牆。', 'Remains of the fort the Dutch built in 1624: red-brick walls overgrown with banyan roots.'), d: T('全票70元（台南市営の古蹟は共通料金）。2022年に正式名称が「熱蘭遮堡」に統一されました。開館時間は要確認。', '全票70元（市營古蹟統一票價）。2022年正式統一名稱為「熱蘭遮堡」。開放時間待確認。', 'Adult ticket NT$70 (same price at all city-run historic sites). Its official name became 熱蘭遮堡 (Fort Zeelandia) in 2022. Opening hours to be checked.'), status: 'v', map: '安平古堡', photo: 'spot-zeelandia' },
          { time: '14:45', t: T('安平樹屋', '安平樹屋', 'Anping Tree House'), n: T('ガジュマルに飲み込まれた、旧イギリス商社の倉庫。', '被榕樹包覆的原英商德記洋行倉庫。', 'An old British trading-company warehouse swallowed by a banyan tree.'), d: T('全票70元。', '全票70元。', 'Adult ticket NT$70.'), status: 'v', map: '安平樹屋', photo: 'spot-treehouse' },
          { time: '15:45', t: T('安平老街で豆花', '安平老街・豆花', 'Anping Old Street'), n: T('えびせん、魔除けの剣獅（けんし）、豆花でひと休み。', '蝦餅、劍獅、豆花歇歇腳。', 'Shrimp crackers, sword-lion charms and a break with douhua (tofu pudding).'), status: 'e', map: '安平老街' },
          { time: '17:00', t: T('海に沈む夕日', '看夕陽', 'Sunset over the strait'), n: T('1月の日の入りは17時40分ごろ（目安）。', '1月日落約17:40（估計）。', 'Sunset in January is around 17:40 (estimate).'), status: 'e', map: '安平 觀夕平台', photo: 'spot-sunset' },
          { time: '18:15', t: T('ホテルに戻って駐車', '回飯店停車', 'Back to park the car'), n: T('', '', ''), status: 'e', drive: true },
          { time: '19:00', t: T('赤崁楼（夜間）', '赤崁樓夜間', 'Chihkan Tower at night'), n: T('ライトアップされた楼閣と、亀が背負う石碑。21:00まで。', '夜間點燈的樓閣與贔屭石碑，開放到21:00。', 'Illuminated pavilions and stone tablets carried on tortoises\' backs. Open until 21:00.'), d: T('全票70元。', '全票70元。', 'Adult ticket NT$70.'), status: 'v', walk: true, map: '赤崁樓', photo: 'spot-chihkan' },
          { time: '20:00', t: T('武聖夜市', '武聖夜市', 'Wusheng Night Market'), n: T('水・金・土曜に開く中西区の夜市。赤崁楼から徒歩約20分、またはタクシー。', '週三、五、六營業的中西區夜市，從赤崁樓步行約20分鐘或搭計程車。', 'A West Central District night market open on Wednesdays, Fridays and Saturdays. About 20 minutes on foot from Chihkan Tower, or take a taxi.'), d: T('営業 17:00–24:00。', '營業 17:00–24:00。', 'Open 17:00–24:00.'), status: 'v', walk: true, map: '武聖夜市', photo: 'food-nightmarket' }
        ]
      },
      {
        id: 'd3', date: '2027-01-30', color: '#2F5D4A',
        title: T('麻豆の糖廠から桃園へ', '總爺藝文中心 → 桃園', 'Tsung-Yeh and home'),
        lead: T('最後の朝ごはんのあと、麻豆へ。明治製糖の旧工場跡を樟の並木の下で歩き、名物の碗粿を食べてから北へ帰ります。', '最後一頓台南早餐後前往麻豆，在明治製糖舊址的樟樹林下散步，吃碗粿再北上。', 'A last Tainan breakfast, a slow walk through the old Meiji Sugar works at Madou, a bowl of wa-kuei, then north.'),
        hero: 'day3-hero', thumbs: ['spot-tsungyeh', 'food-madou', 'spot-daitian'],
        drive: T('走行 約290km・運転 約3時間30分', '行駛約290公里・開車約3小時30分', 'About 290 km, 3 h 30 min of driving'),
        items: [
          { time: '08:30', t: T('菜粽と味噌湯の朝ごはん', '菜粽＋味噌湯早餐', 'Peanut zongzi and miso soup'), n: T('ピーナッツ入りのちまきに、なぜか味噌汁。台南の定番の組み合わせです。', '花生菜粽配味噌湯，台南經典早餐組合。', 'Peanut rice dumplings with, of all things, miso soup: a classic Tainan pairing.'), status: 'e', walk: true, map: '台南 菜粽', photo: 'food-zongzi' },
          { time: '10:00', t: T('チェックアウト', '退房', 'Check out'), n: T('11:00まで。荷物を車に積んで麻豆へ（約40分）。', '11:00前退房，行李上車前往麻豆（約40分鐘）。', 'By 11:00. Load the car and head to Madou (about 40 min).'), status: 'v', drive: true },
          { time: '10:45', t: T('總爺藝文中心', '總爺藝文中心', 'Tsung-Yeh Arts and Cultural Center'), n: T('明治製糖の旧工場跡。赤レンガの紅楼、樟の並木、靴を脱いで上がる木造の招待所。', '明治製糖株式會社舊址：紅樓、樟樹綠廊、要脫鞋的木造招待所。', 'The former Meiji Sugar factory: the red-brick Red House, an avenue of camphor trees, and a wooden guesthouse where you take off your shoes.'), d: T('開園 9:00–17:00、室内展示は月・火曜休館（土曜は開館）。入場無料・駐車場無料。', '開放 9:00–17:00，室內展館週一、二休（週六有開）。免門票、免費停車。', 'Open 9:00–17:00; indoor exhibitions closed on Mondays and Tuesdays (open on Saturdays). Free entry and free parking.'), status: 'v', map: '總爺藝文中心', photo: 'spot-tsungyeh' },
          { time: '12:30', t: T('麻豆でランチ', '麻豆午餐', 'Lunch in Madou'), n: T('名物の碗粿（ワーグイ）。冬は龍泉冰店の白玉ぜんざい「圓仔湯」も。', '名物碗粿；冬天還有龍泉冰店的圓仔湯。', 'Madou\'s famous wa-kuei (steamed rice pudding). In winter, also warm rice-ball soup at 龍泉冰店.'), d: T('碗粿は「碗粿蘭」（店が広く駐車しやすい）か、地元で人気の「助仔碗粿」。', '碗粿可選「碗粿蘭」（店大好停車）或在地人愛的「助仔碗粿」。', 'For wa-kuei, try 碗粿蘭 (big shop, easy parking) or the local favourite 助仔碗粿.'), status: 'e', map: '麻豆 碗粿', photo: 'food-madou' },
          { time: '13:30', t: T('（寄り道）麻豆代天府', '（可加）麻豆代天府', 'Optional: Madou Daitian Temple'), n: T('巨大な龍の像がある大きな廟。15分ほど。', '有巨龍造景的大廟，約15分鐘。', 'A large temple with a giant dragon statue. About 15 minutes.'), d: T('参拝 8:00–21:00。', '開放 8:00–21:00。', 'Open for worship 8:00–21:00.'), status: 'v', map: '麻豆代天府', photo: 'spot-daitian' },
          { time: '14:00', t: T('麻豆インターから北へ', '麻豆交流道北上', 'North from Madou'), n: T('泰安SAまで約1時間40分。', '到泰安約1小時40分。', 'About 1 h 40 min to Tai\'an.'), status: 'e', drive: true },
          { time: '15:40', t: T('泰安サービスエリア（北上側）', '泰安服務區（北上）', 'Tai\'an Service Area northbound'), n: T('30分休憩。', '休息30分鐘。', 'A 30-minute break.'), status: 'e', map: '泰安服務區 北站' },
          { time: '17:30', t: T('桃園に到着', '抵達桃園', 'Arrive in Taoyuan'), n: T('土曜の北上は混むことも。到着後に予定は入れないのがおすすめ。', '週六北上可能塞車，抵達後不要排固定行程。', 'Northbound traffic can be heavy on Saturdays. Best not to plan anything right after arriving.'), status: 'e' }
        ]
      }
    ],

    routes: [
      { day: 'd1', mode: 'driving', stops: [
          { ja: '桃園', zh: '桃園', en: 'Taoyuan', q: '桃園' },
          { ja: '泰安SA', zh: '泰安服務區', en: 'Tai\'an SA', q: '泰安服務區 南站' },
          { ja: '虎尾IC', zh: '虎尾交流道', en: 'Huwei IC', q: '虎尾交流道' },
          { ja: '雲林科技大学', zh: '雲科大', en: 'YunTech', q: '國立雲林科技大學' },
          { ja: '友愛街旅館', zh: '友愛街旅館', en: 'U.I.J Hotel', q: '友愛街旅館 U.I.J Hotel Tainan' }
        ], legs: ['約110km', '約76km', '約12km', '約100km'] },
      { day: 'd2', mode: 'driving', stops: [
          { ja: '友愛街旅館', zh: '友愛街旅館', en: 'U.I.J Hotel', q: '友愛街旅館 U.I.J Hotel Tainan' },
          { ja: '熱蘭遮堡', zh: '安平古堡', en: 'Fort Zeelandia', q: '安平古堡' },
          { ja: '安平樹屋', zh: '安平樹屋', en: 'Anping Tree House', q: '安平樹屋' },
          { ja: '観夕平台', zh: '觀夕平台', en: 'Sunset Platform', q: '安平 觀夕平台' },
          { ja: '友愛街旅館', zh: '友愛街旅館', en: 'U.I.J Hotel', q: '友愛街旅館 U.I.J Hotel Tainan' }
        ], legs: ['約6km', '約1km', '約2km', '約7km'] },
      { day: 'd3', mode: 'driving', stops: [
          { ja: '友愛街旅館', zh: '友愛街旅館', en: 'U.I.J Hotel', q: '友愛街旅館 U.I.J Hotel Tainan' },
          { ja: '總爺藝文中心', zh: '總爺藝文中心', en: 'Tsung-Yeh Arts Center', q: '總爺藝文中心' },
          { ja: '泰安SA', zh: '泰安服務區', en: 'Tai\'an SA', q: '泰安服務區 北站' },
          { ja: '桃園', zh: '桃園', en: 'Taoyuan', q: '桃園' }
        ], legs: ['約30km', '約143km', '約110km'] }
    ],

    spots: [
      { photo: 'spot-hayashi', name: T('林百貨', '林百貨', 'Hayashi Department Store'), day: 1, desc: T('1932年12月開業。屋上に神社がある、台湾でただ一つの百貨店。', '1932年12月開幕，台灣唯一頂樓有神社的百貨公司。', 'Opened in December 1932; the only department store in Taiwan with a shrine on its roof.'), info: T('11:00–21:00', '11:00–21:00', '11:00–21:00'), status: 'v', map: '林百貨 台南' },
      { photo: 'spot-shennong', name: T('神農街', '神農街', 'Shennong Street'), day: 1, desc: T('清代の港町の面影を残す路地。夜は提灯とカフェの灯り。', '保留清代港口街道風貌，夜晚燈籠與咖啡館燈光。', 'A lane that keeps the feel of the Qing-era port town. Lanterns and café lights at night.'), info: T('夕方以降がおすすめ', '傍晚以後最好', 'Best after dusk'), status: 'e', map: '神農街 台南' },
      { photo: 'spot-museum2', name: T('台南市美術館2館', '臺南市美術館二館', 'Tainan Art Museum 2'), day: 2, desc: T('坂茂と石昭永の共同設計。白い五角形の大屋根。', '坂茂與石昭永共同設計，白色五角形大屋頂。', 'Designed by Shigeru Ban with Taiwanese architect 石昭永. A huge white pentagonal roof.'), info: T('開館時間は要確認', '開館時間待確認', 'Opening hours to be checked'), status: 'c', map: '臺南市美術館2館' },
      { photo: 'spot-literature', name: T('国立台湾文学館', '國立臺灣文學館', 'National Museum of Taiwan Literature'), day: 2, desc: T('1916年完成の旧台南州庁。', '1916年完工的原臺南州廳。', 'The former Tainan Prefecture Hall, completed in 1916.'), info: T('開館時間は要確認', '開館時間待確認', 'Opening hours to be checked'), status: 'c', map: '國立臺灣文學館' },
      { photo: 'spot-zeelandia', name: T('熱蘭遮堡（安平古堡）', '熱蘭遮堡（安平古堡）', 'Fort Zeelandia'), day: 2, desc: T('1624年、オランダが築いた台湾最古の城塞。', '1624年荷蘭人所建，台灣最早的堡壘。', 'Built by the Dutch in 1624; the oldest fort in Taiwan.'), info: T('全票 70元', '全票 70元', 'Adult NT$70'), status: 'v', map: '安平古堡' },
      { photo: 'spot-treehouse', name: T('安平樹屋', '安平樹屋', 'Anping Tree House'), day: 2, desc: T('ガジュマルが屋根になった旧倉庫。', '榕樹成為屋頂的舊倉庫。', 'An old warehouse whose roof is now a banyan tree.'), info: T('全票 70元', '全票 70元', 'Adult NT$70'), status: 'v', map: '安平樹屋' },
      { photo: 'spot-chihkan', name: T('赤崁楼', '赤崁樓', 'Chihkan Tower'), day: 2, desc: T('オランダ時代の城跡に建つ楼閣。夜のライトアップが美しい。', '荷蘭時期城址上的樓閣，夜間點燈很美。', 'A pavilion on the site of a Dutch-era fort. Beautiful when lit at night.'), info: T('8:30–21:00・全票 70元', '8:30–21:00・全票 70元', '8:30–21:00 · Adult NT$70'), status: 'v', map: '赤崁樓' },
      { photo: 'spot-tsungyeh', name: T('總爺藝文中心', '總爺藝文中心', 'Tsung-Yeh Arts Center'), day: 3, desc: T('明治製糖の旧工場。紅楼、招待所、顔水龍紀念館。', '明治製糖舊址：紅樓、招待所、顏水龍紀念館。', 'The former Meiji Sugar factory: the Red House, the guesthouse and the Yen Shui-long Memorial Hall.'), info: T('9:00–17:00・無料', '9:00–17:00・免費', '9:00–17:00 · Free'), status: 'v', map: '總爺藝文中心' },
      { photo: 'spot-daitian', name: T('麻豆代天府', '麻豆代天府', 'Madou Daitian Temple'), day: 3, desc: T('巨大な龍がそびえる、麻豆を代表する廟。', '巨龍矗立，麻豆的代表廟宇。', 'Madou\'s best-known temple, crowned by a giant dragon.'), info: T('8:00–21:00', '8:00–21:00', '8:00–21:00'), status: 'v', map: '麻豆代天府' }
    ],

    food: [
      { photo: 'food-beefsoup', name: T('牛肉湯', '牛肉湯', 'Fresh beef soup'), desc: T('朝に食べる台南名物。生姜と甘い醤油だれで。', '台南早餐名物，配薑絲與醬料。', 'A Tainan breakfast specialty, eaten with ginger and a sweet soy dip.') },
      { photo: 'food-sharing', name: T('擔仔麵・碗粿・蝦捲', '擔仔麵・碗粿・蝦捲', 'Danzai noodles and more'), desc: T('小さな器で少しずつ。三人でシェアすると種類が楽しめます。', '小份量多樣，三人分著吃最划算。', 'Small bowls, a little of each. Sharing among three lets you try more.') },
      { photo: 'food-nightmarket', name: T('夜市', '夜市', 'Night market'), desc: T('台南の夜市は曜日ごとに場所が変わる「移動式」。', '台南夜市依星期輪流營業。', 'Tainan\'s night markets move around: each one opens on different days of the week.') },
      { photo: 'food-madou', name: T('麻豆の碗粿と圓仔湯', '麻豆碗粿＋圓仔湯', 'Wa-kuei and rice-ball soup'), desc: T('器ごと蒸した米のプリン。冬は温かい白玉スープと。', '連碗蒸的米食；冬天配一碗熱圓仔湯。', 'Rice pudding steamed in its own bowl. In winter, with warm rice-ball soup.') },
      { photo: 'food-zongzi', name: T('菜粽と味噌湯', '菜粽＋味噌湯', 'Peanut zongzi and miso soup'), desc: T('台南の朝の定番。ピーナッツ粉をたっぷり。', '台南早餐經典，撒滿花生粉。', 'A Tainan breakfast classic, heaped with peanut powder.') }
    ],

    transport: [
      { k: T('走行距離', '總里程', 'Distance'), v: T('約620km（3日間）', '約620公里（三天）', 'About 620 km (3 days)'), status: 'e' },
      { k: T('高速料金のしくみ', '國道計程費率', 'Toll rule'), v: T('1日20kmまで無料、20–200kmは1kmあたり1.2元、200km超は0.9元（小型車）', '每日20公里內免費，20–200公里每公里1.2元，超過200公里每公里0.9元（小型車）', 'First 20 km per day free; 20–200 km at NT$1.2/km; beyond 200 km at NT$0.9/km (cars)'), status: 'v' },
      { k: T('往路・復路の料金', '去程・回程通行費', 'Tolls each way'), v: T('往路 約275元・復路 約263元', '去程約275元・回程約263元', 'About NT$275 going, NT$263 returning'), status: 'e' },
      { k: T('ガソリン', '油價', 'Fuel price'), v: T('95無鉛 32.7元/L（2026年11月）', '95無鉛 每公升32.7元（2026年11月）', '95 unleaded NT$32.7/L (Nov 2026)'), status: 'v' },
      { k: T('台南市内', '台南市區', 'In Tainan'), v: T('2日目は中西区を歩き、車は安平の往復だけ。', '第二天中西區步行，只有安平往返開車。', 'Day 2 is on foot in the West Central District; the car is used only for the Anping round trip.'), status: 'e' },
      { k: T('總爺の駐車場', '總爺停車', 'Tsung-Yeh parking'), v: T('無料。駐車場から建物まで徒歩5分。', '免費，停車場走到館區約5分鐘。', 'Free. About 5 minutes\' walk from the car park to the buildings.'), status: 'v' }
    ],

    tips: [
      { t: T('1月の台南は晴れの日が多い', '一月台南多晴天', 'January in Tainan is mostly sunny'), d: T('昼は暖かく、朝晩は涼しくなります（目安14–23℃）。桃園は寒い日もあるので重ね着で。', '白天溫暖、早晚涼（約14–23℃）；桃園可能較冷，洋蔥式穿搭。', 'Warm by day, cool in the morning and evening (about 14–23 °C). Taoyuan can be cold, so dress in layers.'), status: 'e', photo: 'gallery-outfit' },
      { t: T('旧正月の1週間前', '春節前一週', 'One week before Lunar New Year'), d: T('2027年の春節連休は2月4日–10日（大晦日は2月5日）。街は年越しの買い物で少しにぎやかです。', '2027年春節連假2/4–2/10（除夕2/5），街上有辦年貨的熱鬧氣氛。', 'The 2027 Lunar New Year holiday runs February 4–10 (New Year\'s Eve is February 5). Streets are a little busier with New Year shopping.'), status: 'v' },
      { t: T('夜市は曜日で場所が変わる', '夜市依星期輪流', 'Night markets change by weekday'), d: T('花園夜市 木・土・日／大東夜市 月・火・金／武聖夜市 水・金・土。', '花園 四六日／大東 一二五／武聖 三五六。', 'Garden: Thu, Sat, Sun / Dadong: Mon, Tue, Fri / Wusheng: Wed, Fri, Sat.'), status: 'v' },
      { t: T('小吃の店は現金で', '小吃多付現金', 'Bring cash for street food'), d: T('屋台や老舗は現金のみの店が多めです。小銭を用意しておくと安心。', '路邊攤與老店多只收現金，準備零錢。', 'Many stalls and old shops take cash only. Small change helps.'), status: 'e' },
      { t: T('廟では敷居を踏まない', '廟宇不踩門檻', 'Don\'t step on temple thresholds'), d: T('入口の敷居はまたいで。お参りしている人の正面での撮影は控えめに。', '跨過門檻，避免正對參拜者拍照。', 'Step over the threshold at the entrance, and avoid photographing worshippers head-on.'), status: 'e' },
      { t: T('總爺の招待所は靴を脱いで', '總爺招待所要脫鞋', 'Shoes off at the Tsung-Yeh guesthouse'), d: T('京都風の木造2階建て。脱ぎやすい靴がおすすめ。', '京都式木造兩層樓，穿好脫的鞋。', 'A two-storey wooden house in Kyoto style. Wear shoes that slip off easily.'), status: 'v' }
    ],

    checklist: [
      { g: T('旅行者', '旅客', 'Travellers'), items: [
        T('パスポート', '護照', 'Passport'), T('現金（台湾ドル）と小銭', '新台幣現金與零錢', 'Cash (New Taiwan dollars) and coins'), T('薄手のダウンかカーディガン', '薄羽絨或針織外套', 'Light down jacket or cardigan'), T('歩きやすい靴（脱ぎやすいもの）', '好走又好脫的鞋', 'Comfortable shoes that slip off easily'), T('モバイルバッテリー', '行動電源', 'Power bank'), T('常備薬', '常備藥', 'Personal medicine')
      ] },
      { g: T('案内人', '帶路人', 'Guide'), items: [
        T('友愛街旅館を予約（ツイン＋ダブル）', '訂友愛街旅館（雙床＋一大床）', 'Book U.I.J Hotel (twin + double)'), T('ホテルの駐車場を確認', '確認飯店停車', 'Check hotel parking'), T('雲林科技大学の見学エリアを確認', '確認雲科大可參觀區域', 'Check which YunTech areas are open to visitors'), T('孔子廟・美術館2館・文学館の開館時間', '孔廟、南美館二館、文學館開放時間', 'Opening hours: Confucius Temple, Art Museum 2, Literature Museum'), T('前日に天気と道路状況を確認', '前一天查天氣與路況', 'Check weather and road conditions the day before'), T('ETCの残高', 'eTag 餘額', 'ETC (eTag) balance')
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
      { t: '友愛街旅館：客室タイプとチェックイン・アウト（Trip.com）', en: 'U.I.J Hotel: rooms and check-in times (Trip.com)', u: 'https://hk.trip.com/w/Xhs5SiZeXV2' },
      { t: '友愛街旅館：住所・電話（楽天トラベル）', en: 'U.I.J Hotel: address and phone (Rakuten Travel)', u: 'https://hotel.travel.rakuten.co.jp/hinfo/165458/' },
      { t: 'U.I.J Hotel & Hostel（MICHELIN Guide）', en: 'Hotel listing (MICHELIN Guide)', u: 'https://guide.michelin.com/th/en/hotels-stays/Tainan-City/uij-hotel-hostel-15830' },
      { t: '友愛街旅館：ホステルとデザインホテルをひとつに（微笑台灣）', en: 'Design concept: a hostel and a design hotel in one (Smile Taiwan)', u: 'https://smiletaiwan.cw.com.tw/article/2676' },
      { t: '友愛街旅館：空間デザインと林果良品のスリッパ（Marie Claire）', en: 'Interior design and the leather slippers (Marie Claire)', u: 'https://www.marieclaire.com.tw/lifestyle/travel/68761' },
      { t: '粅粅書 BBBooks とチェックイン時の本（Marie Claire）', en: 'The BBBooks library and the welcome book (Marie Claire)', u: 'https://www.marieclaire.com.tw/lifestyle/travel/36068' },
      { t: '屋上テラスと夕日（LINE TODAY）', en: 'Rooftop terrace and sunset (LINE TODAY)', u: 'https://today.line.me/tw/v2/article/ZZpxqN' },
      { t: 'U.I.J Hotel & Hostel 口コミ・評価（Hotels.com）', en: 'Guest reviews and scores (Hotels.com)', u: 'https://ph.hotels.com/ho679817152/u-i-j-hotel-hostel-tainan-taiwan/' },
      { t: 'U.I.J Hotel & Hostel 評価（KAYAK）', en: 'Guest scores (KAYAK)', u: 'https://www.nz.kayak.com/Tainan-Hotels-U-I-J-Hotel-Hostel.3592063.ksp' },
      { t: 'U.I.J Hotel & Hostel 口コミのまとめ（Agoda）', en: 'Review summary (Agoda)', u: 'https://www.agoda.com/u-i-j-hotel-hostel/hotel/tainan-tw.html' },
      { t: '台南に泊まるならここ！（aumo 宿泊レポート）', en: 'Stay report (aumo)', u: 'https://aumo.jp/articles/35448' },
      { t: '友愛街旅館の宿泊記（vocus）', en: 'A guest\'s stay report (vocus)', u: 'https://vocus.cc/article/63070323fd8978000128ec13' },
      { t: '林百貨の営業時間', en: 'Hayashi Department Store opening hours', u: 'https://travel.yam.com/place/3533' },
      { t: '赤崁楼の入場料と開館時間', en: 'Chihkan Tower tickets and hours', u: 'https://bunnyann.tw/sajk12/' },
      { t: '台南市営古蹟の共通料金（赤崁楼・熱蘭遮堡・安平樹屋）', en: 'Standard ticket price at Tainan\'s city-run historic sites', u: 'https://uptogo.com.tw/旅遊/赤崁樓要門票嗎？/' },
      { t: '總爺藝文中心の開館時間と駐車場', en: 'Tsung-Yeh Arts Center hours and parking', u: 'https://bunnyann.tw/master/' },
      { t: '台南の夜市の営業日一覧（食尚玩家）', en: 'Tainan night market days (Supertaste)', u: 'https://supertaste.tvbs.com.tw/pack/350443' },
      { t: '2027年のカレンダー：春節連休（聯合新聞網）', en: '2027 calendar: Lunar New Year holiday (UDN)', u: 'https://udn.com/news/story/7266/9518211' },
      { t: '国道の距離制料金（行政院公報 2026-10-02）', en: 'Freeway distance-based toll rates (Executive Yuan Gazette, 2 Oct 2026)', u: 'https://www.rootlaw.com.tw/Attach/S-Doc/02011510020001-001.pdf' },
      { t: '台湾中油のガソリン価格（2026年11月）', en: 'CPC fuel prices, November 2026', u: 'https://www.kingautos.net/371380' },
      { t: '台南市美術館2館の紹介', en: 'About Tainan Art Museum 2', u: 'https://bunnyann.tw/?p=27908' },
      { t: '安平古堡が「熱蘭遮堡」に改称', en: 'Anping Fort renamed Fort Zeelandia', u: 'https://city.gvm.com.tw/article/95077' },
      { t: '泰安サービスエリアの南站・北站', en: 'Tai\'an Service Area: southbound and northbound sides', u: 'https://city.gvm.com.tw/article/123689' },
      { t: '麻豆の碗粿と市場グルメ（微笑台灣）', en: 'Madou wa-kuei and market food (Smile Taiwan)', u: 'https://smiletaiwan.cw.com.tw/article/559' },
      { t: '麻豆代天府の参拝時間', en: 'Madou Daitian Temple opening hours', u: 'https://travel.yam.com/place/25760' },
      { t: '大学の冬休み日程・115学年度（TVBS）', en: 'University winter break dates, 2026–27 (TVBS)', u: 'https://news.tvbs.com.tw/life/4011852' }
    ]
  };
})();
