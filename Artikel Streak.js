const RAW =
  "der|Tisch|طاولة,der|Hund|كلب,der|Apfel|تفاحة,der|Bahnhof|محطة,der|Mantel|معطف,der|Mond|قمر,der|Schlüssel|مفتاح,der|Zug|قطار,der|Käse|جبن,der|Regen|مطر,der|Stuhl|كرسي,der|Vogel|طائر,der|Frühling|ربيع,der|Himmel|سماء,der|Lehrer|معلم,der|Kuchen|كعكة,der|Fisch|سمكة,der|Garten|حديقة,der|Computer|حاسوب,der|Flughafen|مطار,die|Lampe|مصباح,die|Katze|قطة,die|Zeitung|جريدة,die|Sonne|شمس,die|Tür|باب,die|Uhr|ساعة,die|Wohnung|شقة,die|Freiheit|حرية,die|Straße|شارع,die|Schule|مدرسة,die|Blume|وردة,die|Brücke|جسر,die|Zeit|وقت,die|Küche|مطبخ,die|Tasche|حقيبة,die|Übung|تمرين,die|Gesundheit|صحة,die|Freundschaft|صداقة,die|Information|معلومة,die|Universität|جامعة,das|Haus|بيت,das|Buch|كتاب,das|Auto|سيارة,das|Wasser|ماء,das|Mädchen|بنت,das|Fenster|شباك,das|Brot|خبز,das|Kind|طفل,das|Handy|موبايل,das|Fahrrad|دراجة,das|Bett|سرير,das|Geld|فلوس,das|Gebäude|مبنى,das|Ei|بيضة,das|Meer|بحر,das|Jahr|سنة,das|Restaurant|مطعم,das|Ergebnis|نتيجة,das|Spiel|لعبة,das|Zimmer|غرفة";
const MORE =
  "der|Baum|شجرة|🌳,der|Berg|جبل|⛰️,der|Bleistift|قلم رصاص|✏️,der|Brief|خطاب|✉️,der|Bus|أتوبيس|🚌,der|Elefant|فيل|🐘,der|Fernseher|تلفزيون|📺,der|Finger|إصبع|☝️,der|Fuß|قدم|🦶,der|Hut|قبعة|🎩,der|Kaffee|قهوة|☕,der|Koffer|شنطة سفر|🧳,der|Löffel|معلقة|🥄,der|Löwe|أسد|🦁,der|Mund|فم|👄,der|Mann|رجل|👨,der|Pilz|مشروم|🍄,der|Regenschirm|شمسية|☂️,der|Schnee|ثلج|❄️,der|Strand|شاطئ|🏖️,der|Tee|شاي|🍵,der|Wald|غابة|🌲,der|Wind|رياح|💨,der|Winter|شتاء|⛄,der|Tiger|نمر|🐅,der|Spiegel|مرآة|🪞,der|Kühlschrank|ثلاجة|🧊,der|Rucksack|شنطة ظهر|🎒,der|Ball|كرة|⚽,der|Honig|عسل|🍯,der|Salat|سلطة|🥗,der|Tag|يوم|🌤️,die|Banane|موزة|🍌,die|Biene|نحلة|🐝,die|Birne|كمثرى|🍐,die|Brille|نظارة|👓,die|Butter|زبدة|🧈,die|Dusche|دش|🚿,die|Ente|بطة|🦆,die|Erde|أرض|🌍,die|Familie|عائلة|👨‍👩‍👧,die|Flasche|زجاجة|🍾,die|Gabel|شوكة|🍴,die|Gitarre|جيتار|🎸,die|Hose|بنطلون|👖,die|Kerze|شمعة|🕯️,die|Kirche|كنيسة|⛪,die|Kuh|بقرة|🐄,die|Maus|فأر|🐁,die|Musik|موسيقى|🎵,die|Nase|أنف|👃,die|Nacht|ليل|🌃,die|Pizza|بيتزا|🍕,die|Schere|مقص|✂️,die|Tomate|طماطم|🍅,die|Treppe|سلم|🪜,die|Wolke|سحابة|☁️,die|Zitrone|ليمون|🍋,die|Erdbeere|فراولة|🍓,die|Karte|خريطة|🗺️,die|Kamera|كاميرا|📷,die|Medizin|دواء|💊,die|Sprache|لغة|💬,die|Stadt|مدينة|🏙️,die|Welt|عالم|🌐,die|Woche|أسبوع|🗓️,die|Zahl|رقم|🔢,die|Lösung|حل|✅,das|Bild|صورة|🖼️,das|Boot|قارب|⛵,das|Eis|آيس كريم|🍦,das|Feuer|نار|🔥,das|Flugzeug|طيارة|✈️,das|Gesicht|وجه|🙂,das|Glas|كوباية|🥛,das|Gras|عشب|🌱,das|Hemd|قميص|👔,das|Herz|قلب|❤️,das|Huhn|فرخة|🐔,das|Kamel|جمل|🐪,das|Kleid|فستان|👗,das|Klavier|بيانو|🎹,das|Krankenhaus|مستشفى|🏥,das|Lied|أغنية|🎶,das|Licht|ضوء|🔆,das|Messer|سكينة|🔪,das|Obst|فاكهة|🍇,das|Ohr|أذن|👂,das|Pferd|حصان|🐎,das|Salz|ملح|🧂,das|Schaf|خروف|🐑,das|Schiff|سفينة|🚢,das|Telefon|تليفون|☎️,das|Theater|مسرح|🎭,das|Tier|حيوان|🐾,das|Wetter|طقس|⛅,das|Wörterbuch|قاموس|📚,das|Ziel|هدف|🎯,das|Mittagessen|غداء|🍲,das|Gemüse|خضار|🥦,das|Dorf|قرية|🏘️,das|Land|بلد|🏞️,das|Bein|رجل|🦵,das|Auge|عين|👁️,das|Fieber|حمى|🌡️";
const EMO = {
  Tisch: "🍽️",
  Hund: "🐕",
  Apfel: "🍎",
  Bahnhof: "🚉",
  Mantel: "🧥",
  Mond: "🌙",
  Schlüssel: "🔑",
  Zug: "🚆",
  Käse: "🧀",
  Regen: "🌧️",
  Stuhl: "🪑",
  Vogel: "🐦",
  Frühling: "🌸",
  Himmel: "🌌",
  Lehrer: "👩‍🏫",
  Kuchen: "🍰",
  Fisch: "🐟",
  Garten: "🌻",
  Computer: "💻",
  Flughafen: "🛫",
  Lampe: "💡",
  Katze: "🐈",
  Zeitung: "📰",
  Sonne: "☀️",
  Tür: "🚪",
  Uhr: "⏰",
  Wohnung: "🏢",
  Freiheit: "🕊️",
  Straße: "🛣️",
  Schule: "🏫",
  Blume: "🌷",
  Brücke: "🌉",
  Zeit: "⏳",
  Küche: "🍳",
  Tasche: "👜",
  Übung: "🏋️",
  Gesundheit: "🩺",
  Freundschaft: "🤝",
  Information: "ℹ️",
  Universität: "🎓",
  Haus: "🏠",
  Buch: "📖",
  Auto: "🚗",
  Wasser: "💧",
  Mädchen: "👧",
  Fenster: "🪟",
  Brot: "🍞",
  Kind: "🧒",
  Handy: "📱",
  Fahrrad: "🚲",
  Bett: "🛏️",
  Geld: "💰",
  Gebäude: "🏛️",
  Ei: "🥚",
  Meer: "🌊",
  Jahr: "📅",
  Restaurant: "👨‍🍳",
  Ergebnis: "📊",
  Spiel: "🎮",
  Zimmer: "🛋️",
};
const WORDS = (RAW + "," + MORE).split(",").map((s) => {
  const [a, w, ar, e] = s.split("|");
  return { a, w, ar, e: e || EMO[w] || "📘" };
});
const A1 = `🙏|What does 'Danke' mean?|شكراً|من فضلك|عفواً|مع السلامة
👋|What does 'Tschüss' mean?|مع السلامة|صباح الخير|شكراً|مرحباً
🌅|What does 'Guten Morgen' mean?|صباح الخير|مساء الخير|تصبح على خير|مع السلامة
🌙|What does 'Gute Nacht' mean?|تصبح على خير|صباح الخير|مساء الخير|شكراً
🙇|What does 'Entschuldigung' mean?|آسف / عفواً|شكراً|مرحباً|مبروك
💬|What does 'Wie geht's?' mean?|كيف حالك؟|ما اسمك؟|من أين أنت؟|كم عمرك؟
🕐|What does 'Wie spät ist es?' mean?|كم الساعة؟|كم عمرك؟|أين تسكن؟|ما اسمك؟
📅|What does 'Montag' mean?|الإثنين|الثلاثاء|الأحد|السبت
📅|What does 'Freitag' mean?|الجمعة|الخميس|السبت|الأربعاء
🔴|What does 'rot' mean?|أحمر|أزرق|أخضر|أصفر
🔵|What does 'blau' mean?|أزرق|أحمر|أسود|أبيض
🟡|What does 'gelb' mean?|أصفر|أخضر|بني|رمادي
👩|What does 'Mutter' mean?|أم|أب|أخت|جدة
👨|What does 'Vater' mean?|أب|أخ|عم|جد
👧|What does 'Schwester' mean?|أخت|أخ|ابنة|عمة
🥛|What does 'Milch' mean?|لبن|عصير|ماء|شاي
🍚|What does 'Reis' mean?|أرز|خبز|لحم|سمك
❓|What does 'Warum' mean?|لماذا|متى|كيف|أين
❓|What does 'Wann' mean?|متى|أين|من|لماذا
❓|What does 'Wo' mean?|أين|متى|من|كيف
🔢|What is 'sieben' in digits?|7|6|8|9
🔢|What is 'zwölf' in digits?|12|2|20|22
🔢|What is 'dreißig' in digits?|30|13|3|33
🙂|Ich ___ Peter.|bin|bist|ist|sind|أنا بيتر
🌍|Du ___ aus Ägypten.|kommst|komme|kommt|kommen|أنت من مصر
👨‍🏫|Er ___ Lehrer.|ist|bin|bist|sind|هو معلم
🤝|Wir ___ Freunde.|sind|ist|bin|seid|نحن أصدقاء
💧|Ich ___ Wasser.|trinke|trinkst|trinkt|trinken|أنا أشرب ماء
📖|Anna ___ Deutsch.|lernt|lerne|lernst|lernen|آنا تتعلم ألماني
🍕|Du ___ gern Pizza.|isst|esse|esst|essen|أنت بتحب البيتزا
🐕|Ich habe ___ Hund.|einen|ein|eine|einem|عندي كلب
🐈|Ich habe ___ Katze.|eine|einen|ein|einem|عندي قطة
📘|Das ist ___ Buch.|ein|eine|einen|einem|ده كتاب
🏠|Wo ___ du?|wohnst|wohne|wohnt|wohnen|أنت بتسكن فين؟
🗣️|Ich ___ Deutsch sprechen.|kann|kannst|können|könnt|أنا أقدر أتكلم ألماني
🌍|Ich komme ___ Ägypten.|aus|in|nach|zu|أنا من مصر
🏙️|Ich wohne ___ Kairo.|in|aus|nach|zu|أنا أسكن في القاهرة
🚆|Ich fahre ___ Berlin.|nach|aus|von|bei|أنا مسافر إلى برلين
☕|Ich trinke Kaffee ___ Milch.|mit|ohne|für|bei|قهوة بلبن
👩|Das ist ___ Mutter. (my)|meine|mein|meinen|meiner|دي أمي
👨|Das ist ___ Vater. (my)|mein|meine|meinen|meiner|ده أبويا
⏳|Ich habe ___ Zeit.|keine|kein|nicht|nein|معنديش وقت
✍️|Choose the correct sentence.|Ich lerne heute Deutsch.|Ich Deutsch heute lerne.|Heute ich lerne Deutsch.|Deutsch ich lerne heute.|أنا أتعلم ألماني النهارده
📚|Plural of 'das Buch'?|die Bücher|die Buchs|die Buche|die Büchen|
🧒|Plural of 'das Kind'?|die Kinder|die Kinds|die Kinden|die Kindes|
❓|___ heißt du?|Wie|Wo|Was|Wer|اسمك إيه؟
❓|___ kommst du?|Woher|Wohin|Wann|Warum|أنت جاي منين؟
❓|___ alt bist du?|Wie|Was|Wo|Wer|عمرك كام؟`
  .trim()
  .split("\n")
  .map((s) => {
    const [e, w, a, x, y, z, ar] = s.split("|");
    return { e, w, a, o: [a, x, y, z], ar: ar || "" };
  });
const A1N = `🍎|Was ist das?|der Apfel|die Birne|das Brot|der Käse|تفاحة
🏠|Was ist das?|das Haus|die Schule|das Fenster|die Tür|بيت
🐕|Was ist das?|der Hund|die Katze|das Pferd|der Vogel|كلب
🚗|Was ist das?|das Auto|der Bus|das Fahrrad|der Zug|سيارة
📖|Was ist das?|das Buch|die Zeitung|der Brief|das Heft|كتاب
🚪|Was ist das?|die Tür|das Fenster|der Stuhl|die Lampe|باب
⏰|Was ist das?|die Uhr|die Lampe|das Handy|der Spiegel|ساعة
🧀|Was ist das?|der Käse|das Brot|der Fisch|das Ei|جبنة
🍞|Was ist das?|das Brot|der Kuchen|das Ei|der Käse|عيش
🎒|Was ist das?|der Rucksack|die Tasche|der Koffer|der Hut|شنطة ظهر
🌞|Was ist das?|die Sonne|der Mond|die Wolke|der Regen|شمس
🚲|Was ist das?|das Fahrrad|das Auto|der Zug|das Boot|عجلة
💬|Wie geht's?|Gut, danke!|Ich heiße Anna.|Um acht Uhr.|Ja, bitte.|كيف حالك؟
🌍|Woher kommst du?|Ich komme aus Ägypten.|Ich bin zwanzig.|Ich heiße Lara.|Mir geht's gut.|أنت من فين؟
🎂|Wie alt bist du?|Ich bin zwanzig Jahre alt.|Ich komme aus Spanien.|Ich heiße Tom.|Ich wohne in Berlin.|عمرك كام؟
🏠|Wo wohnst du?|Ich wohne in Hamburg.|Ich bin Student.|Ich trinke Tee.|Ich bin zwanzig.|أنت ساكن فين؟
💼|Was bist du von Beruf?|Ich bin Lehrer.|Ich bin müde.|Ich habe Hunger.|Ich komme aus Rom.|شغلك إيه؟
🕒|Wie spät ist es?|Es ist drei Uhr.|Es ist Montag.|Es ist kalt.|Es ist rot.|الساعة كام؟
💶|Was kostet das?|Das kostet fünf Euro.|Das ist mein Bruder.|Ich habe Hunger.|Es ist Montag.|بكام ده؟
☕|Möchtest du Kaffee oder Tee?|Tee, bitte.|Ja, ich bin da.|Ich wohne hier.|Gute Nacht.|تحب قهوة ولا شاي؟
👤|Wie heißt du?|Ich heiße Sara.|Ich bin zu Hause.|Ich habe zwei Brüder.|Es geht mir gut.|اسمك إيه؟
📞|Wie ist deine Telefonnummer?|Meine Nummer ist null eins eins.|Ich bin Lehrer.|Das ist mein Haus.|Ich wohne in Wien.|رقم تليفونك إيه؟
🌅|Du triffst deine Lehrerin am Morgen. Was sagst du?|Guten Morgen!|Gute Nacht!|Guten Appetit!|Gute Reise!|بتقابل مدرستك الصبح
🍽️|Das Essen kommt. Was sagt man?|Guten Appetit!|Gute Besserung!|Alles Gute!|Viel Glück!|الأكل جهز
🎂|Dein Freund hat Geburtstag. Was sagst du?|Alles Gute zum Geburtstag!|Gute Besserung!|Guten Appetit!|Schönen Feierabend!|صديقك عيد ميلاده
😷|Dein Freund ist krank. Was sagst du?|Gute Besserung!|Herzlichen Glückwunsch!|Guten Appetit!|Viel Spaß!|صديقك تعبان
👋|Du gehst nach Hause. Was sagst du?|Tschüss, bis morgen!|Guten Morgen!|Wie geht's?|Willkommen!|رايح البيت
🙇|Du bist zu spät. Was sagst du?|Entschuldigung, ich bin zu spät.|Danke schön.|Gern geschehen.|Guten Appetit.|متأخر
🙏|Jemand sagt 'Danke'. Was antwortest du?|Bitte schön!|Gute Nacht!|Wie bitte?|Entschuldigung!|حد قالك شكرا
🎧|Du verstehst nicht. Was sagst du?|Wie bitte? Noch einmal, bitte.|Gern geschehen.|Alles klar.|Bis später.|مش فاهم
🧩|Welches Wort passt nicht? Apfel, Banane, Tisch, Birne|Tisch|Apfel|Banane|Birne|
🧩|Welches Wort passt nicht? Montag, Freitag, rot, Sonntag|rot|Montag|Freitag|Sonntag|
🧩|Welches Wort passt nicht? Mutter, Vater, Lampe, Bruder|Lampe|Mutter|Vater|Bruder|
🧩|Welches Wort passt nicht? blau, grün, Hund, gelb|Hund|blau|grün|gelb|
🧩|Welches Wort passt nicht? Haus, Wohnung, Zimmer, Kuchen|Kuchen|Haus|Wohnung|Zimmer|
🔢|Was kommt nach 'neun'?|zehn|acht|elf|zwölf|
🔢|drei plus vier ist ...|sieben|sechs|acht|fünf|
🔢|zwanzig minus fünf ist ...|fünfzehn|fünfundzwanzig|zehn|fünf|
📅|Heute ist Montag. Morgen ist ...|Dienstag|Sonntag|Mittwoch|Freitag|
📅|Nach Freitag kommt ...|Samstag|Donnerstag|Montag|Sonntag|
↔️|Das Gegenteil von 'groß' ist ...|klein|schön|alt|neu|
↔️|Das Gegenteil von 'heiß' ist ...|kalt|nass|laut|schwer|
↔️|Das Gegenteil von 'gut' ist ...|schlecht|schnell|klein|jung|
🚗|Ich habe ___ Auto.|kein|keine|nicht|nie|معنديش عربية
☕|Du ___ gern Kaffee.|trinkst|trinke|trinkt|trinken|أنت بتحب القهوة
🏃|Mia und Tom ___ im Park.|laufen|läuft|laufe|läufst|ميا وتوم بيجروا في الحديقة
📚|Wir ___ Deutsch.|lernen|lernt|lernst|lerne|إحنا بنتعلم ألماني
🧑‍🎓|Ich ___ Student.|bin|bist|ist|sind|أنا طالب
🕰️|Sie ___ heute zu Hause. (she)|ist|bin|bist|sind|هي في البيت النهارده
✍️|Wähle den richtigen Satz.|Ich esse gern Pizza.|Ich gern esse Pizza.|Gern ich esse Pizza.|Pizza esse gern ich.|أنا بحب أكل بيتزا
✍️|Wähle den richtigen Satz.|Heute gehe ich ins Kino.|Heute ich gehe ins Kino.|Ich heute ins Kino gehe.|Gehe heute ich ins Kino.|النهارده هروح السينما
🚉|Ich fahre ___ Bahnhof.|zum|zur|nach|im|أنا رايح المحطة
🏫|Sie geht ___ Schule.|zur|zum|nach|im|هي رايحة المدرسة
👨‍👦|Das ist ___ Bruder. (my)|mein|meine|meinen|meiner|ده أخوي
👞|Das sind ___ Schuhe. (my)|meine|mein|meinen|meiner|دول جزمتي
⏰|Ich stehe ___ sieben Uhr auf.|um|in|an|auf|بصحى الساعة سبعة
🗓️|Der Kurs ist ___ Montag.|am|um|im|an|الكورس يوم الإثنين
🐱|Plural von 'die Katze'?|die Katzen|die Katze|die Katzes|die Kätzer|
🚪|Plural von 'die Tür'?|die Türen|die Türs|die Tür|die Türer|
🚗|Plural von 'das Auto'?|die Autos|die Auten|die Auter|die Autoe|`
  .trim()
  .split("\n")
  .map((s) => {
    const [e, w, a, x, y, z, ar] = s.split("|");
    return { e, w, a, o: [a, x, y, z], ar: ar || "" };
  });
A1.push(...A1N);
const RULES = [
  ["ung", "die"],
  ["heit", "die"],
  ["keit", "die"],
  ["schaft", "die"],
  ["tion", "die"],
  ["ität", "die"],
  ["chen", "das"],
  ["lein", "das"],
  ["ling", "der"],
];
const $ = (id) => document.getElementById(id);
const S = {
  lives: 3,
  streak: 0,
  maxStreak: 0,
  right: 0,
  total: 0,
  limit: 8,
  locked: true,
  cur: null,
  queue: [],
  raf: 0,
  deadline: 0,
  missed: [],
};
let best = 0;
let mode = "art";
function loadBest() {
  best = 0;
  try {
    best =
      +localStorage.getItem("artikel-flags" + (mode === "a1" ? "-a1" : "")) ||
      0;
  } catch (e) {}
  $("best").textContent = best;
}
loadBest();
function renderOpts() {
  const box = $("opts");
  box.innerHTML = "";
  box.classList.toggle(
    "wide",
    S.cur.o.some((t) => t.length > 16),
  );
  shuffle(S.cur.o.slice()).forEach((t) => {
    const b = document.createElement("button");
    b.className = "o";
    b.textContent = t;
    b.dir = "auto";
    b.onclick = () => answer(t);
    box.appendChild(b);
  });
}

let AC,
  snd = true;
function sfx(ok) {
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === "suspended") AC.resume();
    const n = AC.currentTime;
    const seq = ok
      ? [
          [659.25, 0],
          [783.99, 0.09],
          [1046.5, 0.18],
        ]
      : [
          [329.63, 0],
          [261.63, 0.12],
        ];
    seq.forEach(([f, t]) => {
      const o = AC.createOscillator(),
        g = AC.createGain();
      o.type = ok ? "sine" : "triangle";
      o.frequency.value = f;
      g.gain.setValueAtTime(0, n + t);
      g.gain.linearRampToValueAtTime(ok ? 0.2 : 0.07, n + t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, n + t + (ok ? 0.4 : 0.45));
      o.connect(g);
      g.connect(AC.destination);
      o.start(n + t);
      o.stop(n + t + 0.5);
    });
    if (navigator.vibrate) navigator.vibrate(ok ? 20 : 40);
  } catch (e) {}
}
function verdict(t, ok) {
  const v = $("verdict");
  v.textContent = t;
  v.className = "verdict " + (ok ? "ok" : "bad");
  if (snd) sfx(ok);
}
function show(id) {
  ["menu", "play", "over"].forEach((x) =>
    $(x).classList.toggle("on", x === id),
  );
}
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function renderLives() {
  [...$("lives").children].forEach((el, i) =>
    el.classList.toggle("lost", i >= S.lives),
  );
}
function drawFlag() {
  const n = S.full ? 3 : S.prog;
  [...$("flag").children].forEach((s, i) => {
    s.firstChild.style.transform = "scaleX(" + (i < n ? 1 : 0) + ")";
  });
  $("flag").classList.toggle("done", !!S.full);
  $("flags").textContent = S.flags;
}
function setStreak() {
  drawFlag();
  const el = $("streak");
  el.textContent = S.streak;
  el.classList.remove("pop");
  void el.offsetWidth;
  el.classList.add("pop");
}

function start() {
  Object.assign(S, {
    prog: 0,
    flags: 0,
    full: false,
    lives: 3,
    streak: 0,
    maxStreak: 0,
    right: 0,
    total: 0,
    limit: 8,
    queue: [],
    missed: [],
  });
  setStreak();
  renderLives();
  $("play").classList.toggle("a1", mode === "a1");
  syncSeg();
  show("play");
  next();
}
function next() {
  if (!S.queue.length) S.queue = shuffle((mode === "a1" ? A1 : WORDS).slice());
  S.cur = S.queue.pop();
  S.locked = false;
  $("word").textContent = S.cur.w;
  $("pic").textContent = S.cur.e;
  $("verdict").textContent = "";
  $("verdict").className = "verdict";
  $("art").removeAttribute("data-k");
  $("hint").hidden = !(mode === "a1" && S.cur.ar);
  const pc = $("pic");
  pc.classList.remove("in");
  void pc.offsetWidth;
  pc.classList.add("in");
  $("art").textContent = "";
  $("ar").textContent = mode === "a1" ? "" : S.cur.ar;
  $("fb").innerHTML = "";
  $("card").className = "card";
  document.querySelectorAll(".btn").forEach((b) => {
    b.disabled = false;
    b.classList.remove("dim", "right");
  });
  if (mode === "a1") renderOpts();
}
function tick() {
  const left = S.deadline - performance.now(),
    f = Math.max(0, left / (S.limit * 1000));
  $("bar").style.transform = "scaleX(" + f + ")";
  $("bar").classList.toggle("low", f < 0.3);
  if (left <= 0) {
    answer(null);
    return;
  }
  S.raf = requestAnimationFrame(tick);
}
function hint(w) {
  for (const [suf, art] of RULES) {
    if (w.toLowerCase().endsWith(suf))
      return (
        "Words ending in <strong>-" +
        suf +
        "</strong> are almost always <strong>" +
        art +
        "</strong>."
      );
  }
  return "";
}
function answer(a) {
  if (S.locked) return;
  S.locked = true;
  cancelAnimationFrame(S.raf);
  const c = S.cur,
    ok = a === c.a;
  S.total++;
  const card = $("card");
  document.querySelectorAll(".btn").forEach((b) => {
    b.disabled = true;
    if (b.dataset.a === c.a) b.classList.add("right");
    else b.classList.add("dim");
  });
  if (mode === "a1") {
    $("ar").textContent = c.ar;
    $("hint").hidden = true;
    [...$("opts").children].forEach((b) => {
      b.disabled = true;
      b.classList.add(
        b.textContent === c.a ? "right" : b.textContent === a ? "wrong" : "dim",
      );
    });
  } else {
    $("art").textContent = c.a;
    $("art").dataset.k = c.a;
  }
  const h = mode === "a1" ? "" : hint(c.w);
  if (ok) {
    S.right++;
    S.streak++;
    S.prog++;
    if (S.prog === 3) {
      S.flags++;
      S.prog = 0;
      S.full = true;
      clearTimeout(S.ft);
      S.ft = setTimeout(() => {
        S.full = false;
        drawFlag();
      }, 1400);
    }
    S.maxStreak = Math.max(S.maxStreak, S.streak);
    S.limit = Math.max(3.5, S.limit - 0.15);
    card.classList.add("ok");
    setStreak();
    verdict("Richtig!", 1);
    burst(S.full ? 60 : S.streak % 5 === 0 ? 30 : 8);
    $("fb").innerHTML = S.full ? "<strong>Flagge komplett! 🇩🇪</strong>" : h;
    setTimeout(next, S.full || h ? 1500 : 850);
  } else {
    S.lives--;
    S.streak = 0;
    S.prog = 0;
    S.full = false;
    S.missed.push(
      mode === "a1" ? c.e + " " + c.a : c.e + " " + c.a + " " + c.w,
    );
    card.classList.add("bad");
    renderLives();
    setStreak();
    verdict("Falsch!", 0);
    $("fb").innerHTML =
      mode === "a1"
        ? "Richtig wäre: <strong>" + c.a + "</strong>"
        : "Es heißt <strong>" + c.a + " " + c.w + "</strong>. " + h;
    setTimeout(S.lives > 0 ? next : end, 1900);
  }
}
function end() {
  const rec = S.flags > best;
  if (rec) {
    best = S.flags;
    $("best").textContent = best;
    try {
      localStorage.setItem(
        "artikel-flags" + (mode === "a1" ? "-a1" : ""),
        best,
      );
    } catch (e) {}
  }
  $("rec").hidden = !rec;
  $("ovTitle").textContent = [
    [20, "Meister"],
    [10, "Profi"],
    [5, "Entdecker"],
    [0, "Anfänger"],
  ].find((r) => S.maxStreak >= r[0])[1];
  $("sStreak").textContent = S.maxStreak;
  $("sFlags").textContent = S.flags;
  $("sRight").textContent = S.right;
  $("sAcc").textContent = S.total
    ? Math.round((S.right / S.total) * 100) + "%"
    : "0%";
  const m = [...new Set(S.missed)].slice(0, 5);
  $("miss").innerHTML = m.length
    ? "Review: <b>" + m.join("</b>, <b>") + "</b>"
    : "";
  show("over");
  $("again").focus();
}
$("start").onclick = start;
$("again").onclick = start;
$("menuBtn").onclick = () => show("menu");
function syncSeg() {
  document.querySelectorAll(".seg button").forEach((b) => {
    const on = b.dataset.m === mode;
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on);
  });
}
document.querySelectorAll(".seg button").forEach(
  (b) =>
    (b.onclick = () => {
      if (b.dataset.m === mode) return;
      mode = b.dataset.m;
      S.queue = [];
      loadBest();
      syncSeg();
      document.querySelectorAll(".mode").forEach((x) => {
        x.classList.toggle("on", x.dataset.m === mode);
        x.setAttribute("aria-checked", x.dataset.m === mode);
      });
      $("play").classList.toggle("a1", mode === "a1");
      if (!S.locked) {
        cancelAnimationFrame(S.raf);
        next();
      }
    }),
);
$("hint").onclick = () => {
  $("ar").textContent = S.cur.ar;
  $("hint").hidden = true;
};
function burst(n) {
  const r = $("card").getBoundingClientRect(),
    cx = r.left + r.width / 2,
    cy = r.top + r.height * 0.35,
    cols = ["--der", "--die", "--das", "--ok"];
  for (let i = 0; i < n; i++) {
    const p = document.createElement("i"),
      a = Math.random() * 6.283,
      d = 60 + Math.random() * (n > 15 ? 190 : 100);
    p.className = "fx";
    p.style.cssText =
      "--x:" +
      cx +
      "px;--y:" +
      cy +
      "px;--dx:" +
      Math.cos(a) * d +
      "px;--dy:" +
      (Math.sin(a) * d - 60) +
      "px;--r:" +
      Math.random() * 540 +
      "deg;background:var(" +
      cols[i % 4] +
      ")";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 950);
  }
}
const cd = $("card");
cd.addEventListener("pointermove", (e) => {
  if (e.pointerType === "touch") return;
  const r = cd.getBoundingClientRect();
  cd.style.setProperty(
    "--rx",
    ((e.clientY - r.top) / r.height - 0.5) * -7 + "deg",
  );
  cd.style.setProperty(
    "--ry",
    ((e.clientX - r.left) / r.width - 0.5) * 7 + "deg",
  );
});
cd.addEventListener("pointerleave", () => {
  cd.style.setProperty("--rx", "0deg");
  cd.style.setProperty("--ry", "0deg");
});
document.querySelectorAll(".mode").forEach(
  (b) =>
    (b.onclick = () => {
      mode = b.dataset.m;
      document.querySelectorAll(".mode").forEach((x) => {
        x.classList.toggle("on", x === b);
        x.setAttribute("aria-checked", x === b);
      });
      loadBest();
    }),
);
$("mute").onclick = () => {
  snd = !snd;
  $("mute").textContent = snd ? "🔊" : "🔇";
};
document
  .querySelectorAll(".btn")
  .forEach((b) => (b.onclick = () => answer(b.dataset.a)));
addEventListener("keydown", (e) => {
  const play = $("play").classList.contains("on");
  if (play && mode === "a1") {
    const o = $("opts").children[+e.key - 1];
    if (o && !S.locked) {
      e.preventDefault();
      o.click();
    }
    return;
  }
  const map = {
    ArrowLeft: "der",
    1: "der",
    ArrowDown: "die",
    2: "die",
    ArrowRight: "das",
    3: "das",
  };
  if (play && map[e.key]) {
    e.preventDefault();
    answer(map[e.key]);
  } else if (
    e.key === "Enter" &&
    !$("menu").classList.contains("on") &&
    !play
  ) {
    start();
  } else if (e.key === "Enter" && $("menu").classList.contains("on")) {
    start();
  }
});
