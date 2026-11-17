/* ============ LOCAL HOTEL — общий скрипт ============ */

/* ---------- НАСТРОЙКИ: фото, цены, контакты ---------- */
const PHONE = '+998935419000';
const PHONE_VIEW = '+998 93 541 90 00';
const YMAP = 'https://yandex.com/maps/org/local_hotel/100966544345/';
const U = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;
const ROOMS = [
  {id:'std',    price:450000,  max:2, kids:true,  pets:false, view:false, img:U('1611892440504-42a792e24d32')},
  {id:'loft',   price:750000,  max:3, kids:true,  pets:true,  view:true,  img:U('1590490360182-c33d57733427')},
  {id:'pano',   price:950000,  max:2, kids:false, pets:false, view:true,  img:U('1631049307264-da0ec9d70304')},
  {id:'family', price:1100000, max:5, kids:true,  pets:true,  view:true,  img:U('1618773928121-c32242e63f39')}
];
const EXTRA = {breakfast:60000, pet:80000, transfer:150000};
const IMG = {
  about:U('1566665797739-1674de7a421a'), kids:U('1511895426328-dc8714191300'),
  cat:U('1514888286974-6c03e2ca1dba'), dogs:U('1548199973-03cce0bbc87b'), dog:U('1587300003388-59208cc962cb'),
  r1:U('1582719478250-c89cae4dc85b')
};

/* ---------- ПЕРЕВОДЫ ---------- */
const T = {
ru:{
nav_home:'Главная',nav_rooms:'Номера',nav_about:'Об отеле',nav_book:'Бронирование',nav_contacts:'Контакты',book:'Забронировать',all_rooms:'Все номера',more:'Подробнее',
eyebrow:'Ташкент · Себзор · рядом Tashkent City',h1:'Город<br><em>под вашим окном</em>',
hero_sub:'Двухуровневые апартаменты с эксклюзивными интерьерами и панорамным видом на весь Ташкент. Можно с детьми и с питомцем.',
chip:'79 оценок гостей<br>на Яндекс Картах',f_in:'Заезд',f_out:'Выезд',f_guests:'Гости',f_room:'Номер',check:'Найти',
mq:['Панорамный вид','Можно с питомцем','Двухэтажные номера','Для всей семьи','Tashkent City рядом','Ресепшн 24/7','Рейтинг 5.0'],
about_k:'Об отеле',about_h:'Не просто <em>переночевать</em>',about_p:'Local — небольшой отель, где каждый номер продуман до мелочей. Нам важно, чтобы вы отдохнули, выспались и захотели вернуться.',
a1:'Двухэтажные номера-лофты с эксклюзивными интерьерами',a2:'Панорамные окна — весь Ташкент как на ладони',a3:'Рады детям и питомцам',a4:'Ресепшн 24/7 и забота, которую замечают гости',badge:'с любовью к деталям',
s1:'рейтинг на Яндекс Картах',s2:'оценок от гостей',s3:'ресепшн без выходных',s4:'комиссии при прямой брони',
rooms_k:'Номера',rooms_h:'Выберите свой <em>вид</em>',rooms_p:'Каждый номер — со своим характером. Бронируйте напрямую: лучшая цена и никаких посредников.',
r_std:'Стандарт',r_loft:'Двухуровневый лофт',r_pano:'Панорамные апартаменты',r_family:'Семейный люкс',
d_std:'Уютный номер для отдыха после дня в городе.',d_loft:'Два этажа, спальня наверху и гостиная с видом внизу.',d_pano:'Окна в пол и весь вечерний Ташкент перед вами.',d_family:'Просторно для всей семьи — и для питомца тоже.',
t_std:'Уютный',t_loft:'Хит',t_pano:'Лучший вид',t_family:'Для семьи',
ft_std:['King-size','Wi-Fi','Кондиционер'],ft_loft:['2 этажа','Эксклюзивный интерьер','Wi-Fi'],ft_pano:['Окна в пол','Вид на город','Ванна'],ft_family:['2 спальни','Кухня','Детская кроватка'],
cap:'до {n} гостей',from:'за ночь',per:'сум',choose:'Выбрать',
fam_k:'Для всей семьи',fam_h:'Приезжайте <em>всей семьёй</em>',fam_p:'Дети, хвостатые друзья или романтический уикенд вдвоём — у нас есть номер под каждый случай.',
fam1_h:'С детьми',fam1_p:'Детская кроватка бесплатно, семейный люкс с двумя спальнями.',fam2_h:'С питомцем',fam2_p:'Кошки и собаки — желанные гости в лофте и семейном люксе.',fam3_h:'Вдвоём',fam3_p:'Панорамные апартаменты для особого вечера над городом.',
view_k:'Вид из окна',view_h:'Ташкент — <em>днём и ночью</em>',day:'День',night:'Ночь',
rev_k:'Отзывы гостей',rev_h:'Говорят <em>гости</em>',ya:'Яндекс Карты',guest_n:'Гость',rev_all:'Все отзывы —',
r1:'Тот редкий случай, когда ожидания не просто оправдались, а были разорваны в клочья — в хорошем смысле.',
r2:'Local — это не просто переночевать. Это комфорт, спокойствие и нормальное человеческое отношение.',
r3:'Чистые номера, апартаменты с эксклюзивным интерьером, двухэтажные — и панорамный вид на город.',
cta_k:'Прямое бронирование',cta_h:'Ваш вид на Ташкент<br><em>уже ждёт</em>',
demo:'Демо-версия сайта · фото, цены и условия можно заменить',foot_about:'Небольшой отель с панорамным видом на Ташкент. Рядом Tashkent City.',foot_nav:'Навигация',foot_c:'Контакты',foot_soc:'На связи',
meow:'Мяу! С питомцами можно 🐾',
rp_h:'Номера <em>и апартаменты</em>',rp_p:'Четыре типа номеров — от уютного стандарта до семейного люкса с двумя спальнями.',flt_all:'Все',flt_kids:'👶 С детьми',flt_pets:'🐾 С питомцем',flt_view:'🌆 С видом',
ap_h:'Об <em>отеле</em>',ap_p:'Небольшой, тихий и очень внимательный к гостям отель в новом центре Ташкента.',
story_k:'Наша история',story_h:'Маленький отель <em>с большим видом</em>',story_p1:'Мы сделали Local для тех, кто приезжает в Ташкент за впечатлениями, а не за типовым номером. Каждый интерьер — свой, каждое окно — на город.',story_p2:'У нас нет сотен номеров, поэтому каждого гостя мы знаем по имени.',
gal_k:'Галерея',gal_h:'Загляните <em>внутрь</em>',faq_k:'Вопросы',faq_h:'Частые <em>вопросы</em>',
q1:'Можно ли с детьми?',aq1:'Конечно. Детская кроватка — бесплатно, а для семей есть Семейный люкс с двумя спальнями и кухней.',
q2:'Можно ли с питомцем?',aq2:'Да, кошки и собаки — в Двухуровневом лофте и Семейном люксе. Доплата 80 000 сум за ночь.',
q3:'Во сколько заезд и выезд?',aq3:'Заезд с 14:00, выезд до 12:00. Ресепшн работает круглосуточно — заселим и ночью.',
q4:'Нужна ли предоплата?',aq4:'Нет. Оплата при заселении — наличными или картой.',
q5:'Есть ли трансфер из аэропорта?',aq5:'Да, встретим с табличкой. Стоимость — 150 000 сум.',
bp_h:'Бронирование',bp_p:'Без комиссии и предоплаты. Заявка сразу приходит администратору.',
st_dates:'Даты',st_guests:'Гости',st_pet:'Питомец',st_room:'Номер',st_extra:'Дополнительно',st_contact:'Контакты',
adults:'Взрослые',adults_s:'от 12 лет',kids:'Дети',kids_s:'до 12 лет',
pet_q:'Еду с питомцем',pet_s:'+80 000 сум за ночь',cat:'Кошка',dog:'Собака',other:'Другой',
ex_bf:'Завтрак',ex_bf_s:'60 000 сум / гость / ночь',ex_tr:'Трансфер из аэропорта',ex_tr_s:'150 000 сум',ex_crib:'Детская кроватка',free:'бесплатно',
name:'Имя',phone:'Телефон или Telegram',comment:'Пожелания',comment_ph:'Например: поздний заезд, этаж повыше…',
your:'Ваша бронь',nights:'Ночей',n_room:'Проживание',n_bf:'Завтрак',n_pet:'Питомец',n_tr:'Трансфер',n_guests:'Гости',total:'Итого',
send:'Отправить заявку',hint:'Без комиссии и предоплаты. Администратор ответит в Telegram.',
err_name:'Укажите имя и телефон',err_dates:'Проверьте даты',ok:'Заявка скопирована — отправьте её в Telegram отеля 🎉',msg:'Заявка на бронирование · Local Hotel',
no_fit:'не подходит',pet_word:{cat:'кошка',dog:'собака',other:'питомец'},
cp_h:'Как нас <em>найти</em>',cp_p:'Мы в новом центре Ташкента, рядом с Tashkent City. Ресепшн 24/7.',
c_phone:'Телефон',c_tg:'Telegram',c_addr:'Адрес',addr:'Алмазарский р-н, массив Себзор, 4Б',
how_k:'Как добраться',how1_h:'Из аэропорта',how1_p:'Такси или наш трансфер — встретим с табличкой.',how2_h:'Tashkent City',how2_p:'Рядом с отелем: парк, ТРЦ, рестораны.',how3_h:'Заселение 24/7',how3_p:'Ресепшн работает круглосуточно — приезжайте в любое время.',
route:'Построить маршрут',write:'Написать в Telegram'},

uz:{
nav_home:'Bosh sahifa',nav_rooms:'Xonalar',nav_about:'Mehmonxona',nav_book:'Bron qilish',nav_contacts:'Aloqa',book:'Bron qilish',all_rooms:'Barcha xonalar',more:'Batafsil',
eyebrow:'Toshkent · Sebzor · Tashkent City yonida',h1:'Shahar<br><em>derazangiz ostida</em>',
hero_sub:'Eksklyuziv interyerli, butun Toshkentga panorama ko\'rinishli ikki qavatli apartamentlar. Bolalar va uy hayvonlari bilan ham mumkin.',
chip:'Yandex Kartada<br>79 ta baho',f_in:'Kelish',f_out:'Ketish',f_guests:'Mehmonlar',f_room:'Xona',check:'Topish',
mq:['Panorama manzara','Uy hayvoni bilan mumkin','Ikki qavatli xonalar','Butun oila uchun','Tashkent City yonida','Resepshn 24/7','Reyting 5.0'],
about_k:'Mehmonxona haqida',about_h:'Shunchaki <em>tunash emas</em>',about_p:'Local — har bir xonasi mayda detallarigacha o\'ylangan kichik mehmonxona. Biz uchun muhimi — siz yaxshi dam olib, yana qaytib kelishingiz.',
a1:'Eksklyuziv interyerli ikki qavatli loft-xonalar',a2:'Panorama derazalar — butun Toshkent kaftingizda',a3:'Bolalar va uy hayvonlariga xursandmiz',a4:'24/7 resepshn va mehmonlar sezadigan g\'amxo\'rlik',badge:'detallarga muhabbat bilan',
s1:'Yandex Kartadagi reyting',s2:'mehmonlar bahosi',s3:'dam olishsiz resepshn',s4:'to\'g\'ridan-to\'g\'ri bronda komissiya',
rooms_k:'Xonalar',rooms_h:'O\'z <em>manzarangizni</em> tanlang',rooms_p:'Har bir xonaning o\'z xarakteri bor. To\'g\'ridan-to\'g\'ri bron qiling: eng yaxshi narx, vositachilarsiz.',
r_std:'Standart',r_loft:'Ikki qavatli loft',r_pano:'Panorama apartament',r_family:'Oilaviy lyuks',
d_std:'Shahar kunidan keyin dam olish uchun shinam xona.',d_loft:'Ikki qavat: tepada yotoqxona, pastda manzarali mehmonxona.',d_pano:'Poldan shiftgacha derazalar va kechki Toshkent.',d_family:'Butun oila — va uy hayvoni uchun ham keng.',
t_std:'Shinam',t_loft:'Xit',t_pano:'Eng yaxshi manzara',t_family:'Oila uchun',
ft_std:['King-size','Wi-Fi','Konditsioner'],ft_loft:['2 qavat','Eksklyuziv interyer','Wi-Fi'],ft_pano:['Katta derazalar','Shahar manzarasi','Vanna'],ft_family:['2 yotoqxona','Oshxona','Bolalar karavoti'],
cap:'{n} mehmongacha',from:'bir kecha',per:'so\'m',choose:'Tanlash',
fam_k:'Butun oila uchun',fam_h:'<em>Butun oila</em> bilan keling',fam_p:'Bolalar, to\'rt oyoqli do\'stlar yoki ikki kishilik romantik dam olish — har biriga mos xona bor.',
fam1_h:'Bolalar bilan',fam1_p:'Bolalar karavoti bepul, ikki yotoqxonali oilaviy lyuks.',fam2_h:'Uy hayvoni bilan',fam2_p:'Mushuk va itlar loft va oilaviy lyuksda kutib olinadi.',fam3_h:'Ikki kishi',fam3_p:'Shahar ustida maxsus oqshom uchun panorama apartament.',
view_k:'Derazadan manzara',view_h:'Toshkent — <em>kunduz va tunda</em>',day:'Kunduz',night:'Tun',
rev_k:'Mehmonlar fikri',rev_h:'Mehmonlar <em>aytadi</em>',ya:'Yandex Kartalar',guest_n:'Mehmon',rev_all:'Barcha fikrlar —',
r1:'Kutganlarim nafaqat oqlandi — yaxshi ma\'noda hayratda qoldim. Bu kamdan-kam holat.',
r2:'Local — bu shunchaki tunash emas. Bu qulaylik, sokinlik va oddiy insoniy munosabat.',
r3:'Toza xonalar, eksklyuziv interyerli ikki qavatli apartamentlar va shaharga panorama manzara.',
cta_k:'To\'g\'ridan-to\'g\'ri bron',cta_h:'Toshkentga manzarangiz<br><em>sizni kutmoqda</em>',
demo:'Saytning demo versiyasi · rasmlar, narxlar va shartlar almashtiriladi',foot_about:'Toshkentga panorama manzarali kichik mehmonxona. Tashkent City yonida.',foot_nav:'Bo\'limlar',foot_c:'Aloqa',foot_soc:'Aloqada',
meow:'Miyov! Uy hayvonlari bilan mumkin 🐾',
rp_h:'Xonalar <em>va apartamentlar</em>',rp_p:'To\'rt turdagi xona — shinam standartdan ikki yotoqxonali oilaviy lyuksgacha.',flt_all:'Barchasi',flt_kids:'👶 Bolalar bilan',flt_pets:'🐾 Uy hayvoni bilan',flt_view:'🌆 Manzarali',
ap_h:'Mehmonxona <em>haqida</em>',ap_p:'Toshkentning yangi markazida kichik, sokin va mehmonlarga juda e\'tiborli mehmonxona.',
story_k:'Bizning tarix',story_h:'Kichik mehmonxona <em>katta manzara bilan</em>',story_p1:'Local\'ni Toshkentga taassurot uchun keladiganlar uchun yaratdik. Har bir interyer — o\'ziga xos, har bir deraza — shaharga.',story_p2:'Bizda yuzlab xona yo\'q, shuning uchun har bir mehmonni ismi bilan bilamiz.',
gal_k:'Galereya',gal_h:'<em>Ichkariga</em> qarang',faq_k:'Savollar',faq_h:'Ko\'p beriladigan <em>savollar</em>',
q1:'Bolalar bilan mumkinmi?',aq1:'Albatta. Bolalar karavoti bepul, oilalar uchun ikki yotoqxona va oshxonali Oilaviy lyuks bor.',
q2:'Uy hayvoni bilan mumkinmi?',aq2:'Ha, mushuk va itlar — Ikki qavatli loft va Oilaviy lyuksda. Qo\'shimcha to\'lov — kechasiga 80 000 so\'m.',
q3:'Kelish va ketish vaqti?',aq3:'Kelish 14:00 dan, ketish 12:00 gacha. Resepshn kecha-kunduz ishlaydi.',
q4:'Oldindan to\'lov kerakmi?',aq4:'Yo\'q. To\'lov joylashganda — naqd yoki karta orqali.',
q5:'Aeroportdan transfer bormi?',aq5:'Ha, lavha bilan kutib olamiz. Narxi — 150 000 so\'m.',
bp_h:'Bron qilish',bp_p:'Komissiya va oldindan to\'lovsiz. Ariza darhol administratorga boradi.',
st_dates:'Sanalar',st_guests:'Mehmonlar',st_pet:'Uy hayvoni',st_room:'Xona',st_extra:'Qo\'shimcha',st_contact:'Aloqa',
adults:'Kattalar',adults_s:'12 yoshdan',kids:'Bolalar',kids_s:'12 yoshgacha',
pet_q:'Uy hayvonim bilan',pet_s:'kechasiga +80 000 so\'m',cat:'Mushuk',dog:'It',other:'Boshqa',
ex_bf:'Nonushta',ex_bf_s:'60 000 so\'m / mehmon / kecha',ex_tr:'Aeroportdan transfer',ex_tr_s:'150 000 so\'m',ex_crib:'Bolalar karavoti',free:'bepul',
name:'Ism',phone:'Telefon yoki Telegram',comment:'Istaklar',comment_ph:'Masalan: kech kelish, yuqori qavat…',
your:'Sizning broningiz',nights:'Kechalar',n_room:'Yashash',n_bf:'Nonushta',n_pet:'Uy hayvoni',n_tr:'Transfer',n_guests:'Mehmonlar',total:'Jami',
send:'Ariza yuborish',hint:'Komissiya va oldindan to\'lovsiz. Administrator Telegram\'da javob beradi.',
err_name:'Ism va telefonni kiriting',err_dates:'Sanalarni tekshiring',ok:'Ariza nusxalandi — mehmonxona Telegramiga yuboring 🎉',msg:'Bron arizasi · Local Hotel',
no_fit:'mos emas',pet_word:{cat:'mushuk',dog:'it',other:'uy hayvoni'},
cp_h:'Bizni qanday <em>topish</em> mumkin',cp_p:'Toshkentning yangi markazida, Tashkent City yonidamiz. Resepshn 24/7.',
c_phone:'Telefon',c_tg:'Telegram',c_addr:'Manzil',addr:'Olmazor tumani, Sebzor massivi, 4B',
how_k:'Qanday yetib kelish',how1_h:'Aeroportdan',how1_p:'Taksi yoki bizning transfer — lavha bilan kutib olamiz.',how2_h:'Tashkent City',how2_p:'Mehmonxona yonida: park, savdo markazi, restoranlar.',how3_h:'24/7 joylashish',how3_p:'Resepshn kecha-kunduz ishlaydi — istalgan vaqtda keling.',
route:'Yo\'nalish',write:'Telegram\'ga yozish'},

en:{
nav_home:'Home',nav_rooms:'Rooms',nav_about:'About',nav_book:'Booking',nav_contacts:'Contacts',book:'Book now',all_rooms:'All rooms',more:'Details',
eyebrow:'Tashkent · Sebzor · next to Tashkent City',h1:'The city<br><em>beneath your window</em>',
hero_sub:'Two-level apartments with exclusive interiors and a panoramic view over all of Tashkent. Kids and pets welcome.',
chip:'79 guest ratings<br>on Yandex Maps',f_in:'Check-in',f_out:'Check-out',f_guests:'Guests',f_room:'Room',check:'Search',
mq:['Panoramic view','Pet friendly','Two-level rooms','For the whole family','Next to Tashkent City','24/7 reception','Rated 5.0'],
about_k:'About',about_h:'More than <em>a place to sleep</em>',about_p:'Local is a small hotel where every room is thought through. We want you to rest well and come back.',
a1:'Two-storey loft rooms with exclusive interiors',a2:'Panoramic windows — all of Tashkent at a glance',a3:'Kids and pets are welcome',a4:'24/7 reception and care guests notice',badge:'with love for details',
s1:'rating on Yandex Maps',s2:'guest ratings',s3:'reception, every day',s4:'commission on direct booking',
rooms_k:'Rooms',rooms_h:'Choose your <em>view</em>',rooms_p:'Every room has its own character. Book direct: best price, no middlemen.',
r_std:'Standard',r_loft:'Two-level Loft',r_pano:'Panorama Apartment',r_family:'Family Suite',
d_std:'A cosy room to unwind after a day in the city.',d_loft:'Two floors: bedroom upstairs, lounge with a view below.',d_pano:'Floor-to-ceiling windows and evening Tashkent before you.',d_family:'Room for the whole family — and the pet too.',
t_std:'Cosy',t_loft:'Bestseller',t_pano:'Best view',t_family:'Family',
ft_std:['King-size','Wi-Fi','Air con'],ft_loft:['2 floors','Exclusive interior','Wi-Fi'],ft_pano:['Floor-to-ceiling windows','City view','Bathtub'],ft_family:['2 bedrooms','Kitchen','Baby cot'],
cap:'up to {n} guests',from:'per night',per:'UZS',choose:'Select',
fam_k:'For the whole family',fam_h:'Come with <em>the whole family</em>',fam_p:'Kids, furry friends or a romantic weekend for two — we have a room for every occasion.',
fam1_h:'With kids',fam1_p:'Free baby cot and a two-bedroom family suite.',fam2_h:'With pets',fam2_p:'Cats and dogs are welcome in the Loft and the Family Suite.',fam3_h:'For two',fam3_p:'Panorama apartment for a special evening above the city.',
view_k:'The view',view_h:'Tashkent — <em>day and night</em>',day:'Day',night:'Night',
rev_k:'Guest reviews',rev_h:'In our <em>guests\' words</em>',ya:'Yandex Maps',guest_n:'Guest',rev_all:'All reviews —',
r1:'That rare case when expectations were not just met but torn to shreds — in the best way.',
r2:'Local is not just about spending the night. It\'s comfort, calm and a normal human attitude.',
r3:'Clean rooms, two-storey apartments with exclusive interiors — and a panoramic view of the city.',
cta_k:'Direct booking',cta_h:'Your view of Tashkent<br><em>is waiting</em>',
demo:'Demo version · photos, prices and terms are placeholders',foot_about:'A small hotel with a panoramic view of Tashkent. Next to Tashkent City.',foot_nav:'Navigation',foot_c:'Contacts',foot_soc:'Get in touch',
meow:'Meow! Pets are welcome 🐾',
rp_h:'Rooms <em>& apartments</em>',rp_p:'Four room types — from a cosy standard to a two-bedroom family suite.',flt_all:'All',flt_kids:'👶 With kids',flt_pets:'🐾 Pet friendly',flt_view:'🌆 With a view',
ap_h:'About <em>the hotel</em>',ap_p:'A small, quiet and truly attentive hotel in Tashkent\'s new centre.',
story_k:'Our story',story_h:'A small hotel <em>with a big view</em>',story_p1:'We built Local for people who come to Tashkent for impressions, not a standard room. Every interior is unique, every window faces the city.',story_p2:'We don\'t have hundreds of rooms — so we know every guest by name.',
gal_k:'Gallery',gal_h:'Take a look <em>inside</em>',faq_k:'Questions',faq_h:'Frequently asked <em>questions</em>',
q1:'Can I come with kids?',aq1:'Of course. A baby cot is free, and families can stay in the Family Suite with two bedrooms and a kitchen.',
q2:'Can I bring my pet?',aq2:'Yes — cats and dogs are welcome in the Two-level Loft and the Family Suite. Surcharge 80,000 UZS per night.',
q3:'Check-in and check-out times?',aq3:'Check-in from 14:00, check-out until 12:00. Reception is open 24/7.',
q4:'Is prepayment required?',aq4:'No. Pay at check-in — cash or card.',
q5:'Is there an airport transfer?',aq5:'Yes, we\'ll meet you with a sign. Price — 150,000 UZS.',
bp_h:'Booking',bp_p:'No commission, no prepayment. Your request goes straight to the admin.',
st_dates:'Dates',st_guests:'Guests',st_pet:'Pet',st_room:'Room',st_extra:'Extras',st_contact:'Contacts',
adults:'Adults',adults_s:'12+ years',kids:'Children',kids_s:'under 12',
pet_q:'Travelling with a pet',pet_s:'+80,000 UZS per night',cat:'Cat',dog:'Dog',other:'Other',
ex_bf:'Breakfast',ex_bf_s:'60,000 UZS / guest / night',ex_tr:'Airport transfer',ex_tr_s:'150,000 UZS',ex_crib:'Baby cot',free:'free',
name:'Name',phone:'Phone or Telegram',comment:'Requests',comment_ph:'E.g. late check-in, higher floor…',
your:'Your booking',nights:'Nights',n_room:'Stay',n_bf:'Breakfast',n_pet:'Pet',n_tr:'Transfer',n_guests:'Guests',total:'Total',
send:'Send request',hint:'No commission, no prepayment. The admin will reply in Telegram.',
err_name:'Please enter your name and phone',err_dates:'Please check the dates',ok:'Request copied — send it to the hotel in Telegram 🎉',msg:'Booking request · Local Hotel',
no_fit:'not suitable',pet_word:{cat:'cat',dog:'dog',other:'pet'},
cp_h:'How to <em>find us</em>',cp_p:'We\'re in Tashkent\'s new centre, next to Tashkent City. Reception 24/7.',
c_phone:'Phone',c_tg:'Telegram',c_addr:'Address',addr:'Almazar district, Sebzor, 4B',
how_k:'Getting here',how1_h:'From the airport',how1_p:'Taxi or our transfer — we\'ll meet you with a sign.',how2_h:'Tashkent City',how2_p:'Next to the hotel: park, mall, restaurants.',how3_h:'24/7 check-in',how3_p:'Reception is open round the clock — arrive any time.',
route:'Get directions',write:'Message on Telegram'}
};

/* ---------- утилиты ---------- */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const fmt=n=>Math.round(n).toLocaleString('ru-RU').replace(/,/g,' ');
const store={get(k,d){try{return localStorage.getItem(k)||d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
let L=store.get('lh_lang','ru');
const t=k=>T[L][k];
const PAGE=document.body.dataset.page;

/* ---------- шапка, меню, подвал ---------- */
const NAV=[['index.html','nav_home'],['rooms.html','nav_rooms'],['about.html','nav_about'],['booking.html','nav_book'],['contacts.html','nav_contacts']];
const CUR={home:'index.html',rooms:'rooms.html',about:'about.html',booking:'booking.html',contacts:'contacts.html'}[PAGE];
function shell(){
  document.body.insertAdjacentHTML('afterbegin',`
  <div class="curtain" id="curtain"><div class="cw">${'LOCAL'.split('').map((c,i)=>`<span style="animation-delay:${i*.05}s">${c}</span>`).join('')}</div></div>
  <div class="progress" id="progress"></div>
  <header class="nav" id="nav">
    <a href="index.html" class="logo"><i></i>LOCAL</a>
    <nav class="nav-links">${NAV.map(([h,k])=>`<a href="${h}" class="${h===CUR?'active':''}" data-i18n="${k}"></a>`).join('')}</nav>
    <div class="nav-right">
      <button class="icon-btn" id="themeBtn" aria-label="theme">
        <svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
        <svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
      </button>
      <div class="lang" id="lang"><button data-l="ru">RU</button><button data-l="uz">UZ</button><button data-l="en">EN</button></div>
      <a href="booking.html" class="btn btn-gold magnetic"><span data-i18n="book"></span></a>
      <button class="icon-btn burger" id="burger" aria-label="menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8h16M4 16h16"/></svg></button>
    </div>
  </header>
  <nav class="mnav" id="mnav">${NAV.map(([h,k])=>`<a href="${h}" class="${h===CUR?'active':''}" data-i18n="${k}"></a>`).join('')}</nav>`);
  document.body.insertAdjacentHTML('beforeend',`
  <footer class="foot">
    <div class="foot-grid">
      <div><a href="index.html" class="logo" style="font-size:22px;margin-bottom:16px"><i></i>LOCAL</a><p data-i18n="foot_about"></p></div>
      <div><h5 data-i18n="foot_nav"></h5>${NAV.map(([h,k])=>`<a href="${h}" data-i18n="${k}"></a>`).join('')}</div>
      <div><h5 data-i18n="foot_c"></h5><a href="tel:${PHONE}">${PHONE_VIEW}</a><p data-i18n="addr"></p><p>24/7</p></div>
      <div><h5 data-i18n="foot_soc"></h5><a href="https://t.me/${PHONE}" target="_blank" rel="noopener">Telegram ↗</a><a href="${YMAP}" target="_blank" rel="noopener">Яндекс Карты ↗</a></div>
    </div>
    <div class="foot-bottom"><span>© 2026 Local Hotel · Tashkent</span><span data-i18n="demo"></span></div>
  </footer>
  <div class="toast" id="toast"></div>`);
}
shell();

/* ---------- перевод ---------- */
function applyLang(l){
  L=l; store.set('lh_lang',l); document.documentElement.lang=l;
  $$('#lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
  $$('[data-i18n]').forEach(el=>{const v=T[l][el.dataset.i18n]; if(typeof v==='string') el.innerHTML=v});
  $$('[data-i18n-ph]').forEach(el=>el.placeholder=T[l][el.dataset.i18nPh]);
  $$('.split').forEach(splitWords);
  document.dispatchEvent(new CustomEvent('lang'));
  observe();
}
$$('#lang button').forEach(b=>b.onclick=()=>applyLang(b.dataset.l));

/* разбивка заголовка на слова для анимации */
function splitWords(el){
  const wasIn=el.classList.contains('in');
  if(el.dataset.src==null) el.dataset.src=el.innerHTML;
  const key=el.dataset.i18n; const src=key?T[L][key]:el.dataset.src;
  const tmp=document.createElement('div'); tmp.innerHTML=src; let i=0;
  (function walk(node){
    [...node.childNodes].forEach(n=>{
      if(n.nodeType===3){
        const frag=document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(p=>{
          if(!p) return;
          if(/^\s+$/.test(p)){frag.appendChild(document.createTextNode(' '));return}
          const w=document.createElement('span');w.className='w';
          const s=document.createElement('span');s.textContent=p;s.style.setProperty('--i',i++);
          w.appendChild(s);frag.appendChild(w);
        });
        n.replaceWith(frag);
      } else if(n.nodeType===1 && n.tagName!=='BR') walk(n);
    });
  })(tmp);
  el.innerHTML=tmp.innerHTML;
  if(wasIn) el.classList.add('in');
}

/* ---------- тема ---------- */
function setTheme(th){
  document.documentElement.dataset.theme=th; store.set('lh_theme',th);
  document.dispatchEvent(new CustomEvent('theme',{detail:th}));
}
document.documentElement.dataset.theme=store.get('lh_theme','light');
$('#themeBtn').onclick=e=>{
  const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
  if(document.startViewTransition){
    const x=e.clientX,y=e.clientY,r=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
    const vt=document.startViewTransition(()=>setTheme(next));
    vt.ready.then(()=>document.documentElement.animate({clipPath:[`circle(0 at ${x}px ${y}px)`,`circle(${r}px at ${x}px ${y}px)`]},{duration:800,easing:'cubic-bezier(.2,.8,.2,1)',pseudoElement:'::view-transition-new(root)'}));
  } else setTheme(next);
};

/* ---------- меню на телефоне ---------- */
$('#burger').onclick=()=>$('#mnav').classList.toggle('open');

/* ---------- переходы между страницами ---------- */
const curtain=$('#curtain');
function openPage(){curtain.classList.add('out');document.body.classList.add('ready')}
addEventListener('load',()=>setTimeout(openPage,350));
setTimeout(openPage,2500);
addEventListener('pageshow',e=>{if(e.persisted){curtain.className='curtain out'}});
document.addEventListener('click',e=>{
  const a=e.target.closest('a'); if(!a) return;
  const h=a.getAttribute('href')||'';
  if(!/\.html/.test(h)||a.target==='_blank'||e.metaKey||e.ctrlKey) return;
  e.preventDefault();
  curtain.className='curtain below'; void curtain.offsetWidth; curtain.className='curtain in';
  setTimeout(()=>location.href=h,650);
});

/* ---------- магнитные кнопки ---------- */
function magnetic(){
  if(matchMedia('(hover:none)').matches) return;
  $$('.magnetic,.btn').forEach(b=>{
    if(b._mag) return; b._mag=1;
    b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});
    b.addEventListener('mouseleave',()=>{b.style.transform='';b.style.transition='transform .6s cubic-bezier(.2,.8,.2,1)';setTimeout(()=>b.style.transition='',600)});
  });
}

/* ---------- скролл: шапка, прогресс ---------- */
let lastY=0;
addEventListener('scroll',()=>{
  const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
  $('#nav').classList.toggle('scrolled',y>40);
  $('#nav').classList.toggle('hide',y>lastY&&y>400&&!$('#mnav').classList.contains('open'));
  lastY=y;
  $('#progress').style.transform=`scaleX(${h>0?y/h:0})`;
},{passive:true});

/* ---------- появление при скролле, счётчики ---------- */
let io;
function observe(){
  io=io||new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return;
    e.target.classList.add('in');
    $$('[data-count]',e.target).forEach(countUp);
    io.unobserve(e.target);
  }),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  $$('.reveal:not(.in),.split:not(.in)').forEach(x=>io.observe(x));
  magnetic(); tilt();
}
function countUp(b){
  if(b.dataset.done) return; b.dataset.done=1;
  const end=parseFloat(b.dataset.count),dec=b.dataset.count.includes('.')?1:0,t0=performance.now();
  (function f(n){const p=Math.min((n-t0)/1600,1);b.textContent=(end*(1-Math.pow(1-p,4))).toFixed(dec);if(p<1)requestAnimationFrame(f)})(t0);
}
function tilt(){
  if(matchMedia('(hover:none)').matches) return;
  $$('[data-tilt]').forEach(c=>{
    if(c._tilt) return; c._tilt=1;
    c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      c.style.transform=`perspective(900px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-6px)`});
    c.addEventListener('mouseleave',()=>c.style.transform='');
  });
}

/* ---------- город (SVG) ---------- */
const NS='http://www.w3.org/2000/svg';
function el(tag,a,p){const e=document.createElementNS(NS,tag);for(const k in a)e.setAttribute(k,a[k]);p&&p.appendChild(e);return e}
const rnd=(a,b)=>a+Math.random()*(b-a);
function city(svg,H,o){
  const W=1600,back=el('g',{},svg),mid=el('g',{},svg),front=el('g',{},svg);
  for(let x=-20;x<W;){const w=rnd(40,90),h=rnd(H*.18,H*.38);el('rect',{x,y:H-h,width:w,height:h,class:'bld',fill:o.c1},back);x+=w+rnd(0,8)}
  const tx=1460,tg=el('g',{},mid);
  el('path',{d:`M${tx-14} ${H} L${tx-3} ${H*.12} L${tx+3} ${H*.12} L${tx+14} ${H}Z`,class:'bld',fill:o.c2},tg);
  el('rect',{x:tx-22,y:H*.33,width:44,height:20,rx:8,class:'bld',fill:o.c2},tg);
  el('rect',{x:tx-16,y:H*.44,width:32,height:12,rx:5,class:'bld',fill:o.c2},tg);
  el('rect',{x:tx-1.5,y:H*.02,width:3,height:H*.1,class:'bld',fill:o.c2},tg);
  el('circle',{cx:tx,cy:H*.02,r:4,fill:'#ff5a4e',class:'beacon win'},tg);
  for(let i=0;i<6;i++) el('rect',{x:tx-18+i*7,y:H*.335+6,width:4,height:6,fill:o.lit,class:'win',opacity:.9},tg);
  for(let x=-10;x<W;){
    const w=rnd(55,110),h=x<820?rnd(H*.18,H*.32):rnd(H*.25,H*.5);
    if(x>880&&x<1290){x=1300;continue}
    bld(mid,x,h,w,H,o,false); x+=w+rnd(4,14);
  }
  [[1000,.86,70],[1080,.96,58],[1150,.8,64],[1225,.68,52],[920,.62,60]].forEach(([x,k,w])=>bld(mid,x,H*k,w,H,o,true));
  for(let x=-30;x<W;){const w=rnd(80,160),h=rnd(H*.1,H*.24);bld(front,x,h,w,H,{...o,c2:o.c3},false);x+=w+rnd(0,6)}
}
function bld(g,x,h,w,H,o,tower){
  const y=H-h;
  if(tower) el('path',{d:`M${x} ${H} L${x} ${y+16} L${x+w*.5} ${y} L${x+w} ${y+16} L${x+w} ${H}Z`,class:'bld',fill:o.c2},g);
  else el('rect',{x,y,width:w,height:h,class:'bld',fill:o.c2},g);
  const cw=tower?6:7,ch=tower?9:10,gx=tower?12:14,gy=tower?16:18;
  for(let wy=y+(tower?28:14);wy<H-12;wy+=gy) for(let wx=x+8;wx<x+w-10;wx+=gx){
    if(Math.random()<(tower?.55:.38)){
      const r=el('rect',{x:wx,y:wy,width:cw,height:ch,fill:Math.random()<.85?o.lit:'#9fd3ff',class:'win'+(Math.random()<.05?' flick':''),opacity:rnd(.55,1).toFixed(2)},g);
      if(Math.random()<.05) r.style.animationDelay=rnd(0,4)+'s';
    }
  }
  if(tower) el('circle',{cx:x+w*.5,cy:y-2,r:3,fill:'#ff5a4e',class:'beacon win'},g);
}
$$('svg[data-city]').forEach(s=>city(s,+s.dataset.city,{c1:'var(--h1)',c2:'var(--h2)',c3:'var(--h3)',lit:'#ffd890'}));

/* ---------- карточки номеров ---------- */
function roomCard(r,i){
  return `<article class="room reveal d${i%4}" data-tilt data-id="${r.id}">
    <div class="ph"><img src="${r.img}" alt="" loading="lazy" onerror="this.remove()"><span class="tag">${t('t_'+r.id)}</span>
      <div class="icons">${r.kids?'<span title="kids">👶</span>':''}${r.pets?'<span title="pets">🐾</span>':''}${r.view?'<span title="view">🌆</span>':''}</div></div>
    <div class="room-body">
      <h3>${t('r_'+r.id)}</h3><p class="desc">${t('d_'+r.id)}</p>
      <div class="feat"><span>${t('cap').replace('{n}',r.max)}</span>${t('ft_'+r.id).map(f=>`<span>${f}</span>`).join('')}</div>
      <div class="room-foot">
        <div class="price"><small>${t('from')}</small><b>${fmt(r.price)}<sub>${t('per')}</sub></b></div>
        <a class="btn btn-ghost" href="booking.html?room=${r.id}"><span>${t('choose')}</span></a>
      </div>
    </div></article>`;
}

/* ---------- тост и конфетти ---------- */
function toast(m){const x=$('#toast');x.textContent=m;x.classList.add('show');clearTimeout(x._t);x._t=setTimeout(()=>x.classList.remove('show'),3400)}
function confetti(){
  const c=document.createElement('div');c.className='confetti';document.body.appendChild(c);
  const cols=['#e9c27c','#f6dfae','#8a5a12','#9fcbeb','#ff8a7a','#ffffff'];
  for(let i=0;i<120;i++){const p=document.createElement('i');p.style.left=rnd(0,100)+'vw';p.style.background=cols[i%cols.length];p.style.animationDuration=rnd(1.8,3.4)+'s';p.style.animationDelay=rnd(0,.6)+'s';p.style.transform=`rotate(${rnd(0,360)}deg)`;c.appendChild(p)}
  setTimeout(()=>c.remove(),4200);
}

/* ---------- кот на бегущей строке ---------- */
function cat(container){
  if(!container) return;
  container.insertAdjacentHTML('beforeend',`<div class="cat-walk" id="cat"><span class="meow" data-i18n="meow"></span>
  <svg viewBox="0 0 64 36"><path class="tail" d="M12 20 C4 18 3 9 8 5" fill="none" stroke-width="3.2" stroke-linecap="round"/>
  <g class="leg l1"><rect x="14" y="22" width="4" height="12" rx="2"/></g><g class="leg l2"><rect x="35" y="22" width="4" height="12" rx="2"/></g>
  <ellipse cx="27" cy="20" rx="16" ry="7.5"/>
  <g class="leg l3"><rect x="19" y="22" width="4" height="12" rx="2"/></g><g class="leg l4"><rect x="39" y="22" width="4" height="12" rx="2"/></g>
  <g class="head"><circle cx="45" cy="13" r="7.5"/><path d="M39.5 8 L41 0.5 L45 6.5Z M46 6.5 L50.5 0.5 L51.5 9Z"/><circle cx="48" cy="12" r="1.4" fill="#e9c27c"/></g></svg></div>`);
  $('#cat').onclick=()=>{toast(t('meow'));$('#cat').classList.add('talk');setTimeout(()=>$('#cat').classList.remove('talk'),2500)};
}

/* ---------- FAQ, галерея ---------- */
function faq(){$$('.qa button').forEach(b=>b.onclick=()=>{const q=b.parentElement,o=q.classList.contains('open');$$('.qa').forEach(x=>x.classList.remove('open'));if(!o)q.classList.add('open')})}
function lightbox(){
  const lb=document.createElement('div');lb.className='lightbox';lb.innerHTML='<img alt="">';document.body.appendChild(lb);
  $$('.gallery .ph').forEach(p=>p.onclick=()=>{const i=$('img',p);if(!i)return;$('img',lb).src=i.src;lb.classList.add('open')});
  lb.onclick=()=>lb.classList.remove('open');
}

/* ---------- старт ---------- */
window.LH={ROOMS,EXTRA,IMG,PHONE,YMAP,T,t,fmt,$,$$,roomCard,observe,toast,confetti,cat,faq,lightbox,rnd,el,city,
  init(){applyLang(L)}};
