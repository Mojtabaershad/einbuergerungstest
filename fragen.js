/* =====================================================================
   FRAGENKATALOG – Einbürgerungstest / „Leben in Deutschland“
   Quelle: BAMF-Gesamtfragenkatalog, Stand 07.05.2025
   ---------------------------------------------------------------------
   Diese Datei enthält NUR Daten. Die App (index.html) lädt sie per
   <script src="fragen.js">. Das funktioniert auch beim Öffnen per
   Doppelklick (file://) – anders als eine .json-Datei, die der Browser
   dort aus Sicherheitsgründen nicht per fetch() laden darf.

   AUFBAU EINER FRAGE
   {
     id:            Pflicht. Eindeutig & dauerhaft (Fortschritt hängt daran).
                    Allgemein: "g" + Aufgaben-Nr. dreistellig   -> "g001" … "g300"
                    Bundesland: Kürzel + "-" + Nr. zweistellig  -> "by-01" … "by-10"
     nummer:        optional. Offizielle Aufgaben-Nr. aus dem Katalog (wird angezeigt)
     frage:         Pflicht. Fragetext (Deutsch)
     antworten:     Pflicht. Genau 4 Antworttexte (bei Bildantworten "Bild 1" … "Bild 4")
     richtig:       Pflicht. Index 0–3 der richtigen Antwort
     bild:          optional. EIN Bild zur Frage (z. B. Landkarte), Pfad relativ
                    zu index.html, z. B. "bilder/by-08.png". Leer "" = kein Bild.
     bildQuelle:    optional. Bildnachweis/Copyright, wird klein unter dem Bild angezeigt,
                    z. B. "© Deutscher Bundestag/Achim Melde"
     antwortBilder: optional. 4 Bilder, je eines pro Antwort (z. B. Wappen-Fragen),
                    gleiche Reihenfolge wie "antworten". Leer/weglassen = keine.
     fa:            optional. Farsi-Hilfe { frage, antwort, erklaerung }.
                    Fehlt sie, zeigt die App einen Hinweis statt der Übersetzung.
   }

   KÜRZEL DER BUNDESLÄNDER (für IDs und Bild-Dateinamen)
   bw Baden-Württemberg   by Bayern              be Berlin          bb Brandenburg
   hb Bremen              hh Hamburg             he Hessen          mv Mecklenburg-Vorpommern
   ni Niedersachsen       nw Nordrhein-Westfalen rp Rheinland-Pfalz sl Saarland
   sn Sachsen             st Sachsen-Anhalt      sh Schleswig-Holstein th Thüringen

   BILD-DATEINAMEN (Ordner "bilder/")
   Fragebild:   <id>.png / .jpg -> bilder/by-08.png, bilder/g055.jpg (Fotos als .jpg)
   Antwortbild: <id>-<1..4>.png -> bilder/g021-1.png … bilder/g021-4.png
   ===================================================================== */

window.FRAGEN_DATEN = {
  quelle: "BAMF Gesamtfragenkatalog",
  stand: "2025-05-07",

  /* -------------------------------------------------------------------
     TEIL I – ALLGEMEINE FRAGEN (Ziel: 300)
     ------------------------------------------------------------------- */
  allgemeineFragen: [
    {
      "id": "g001",
      "nummer": 1,
      "frage": "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …",
      "antworten": [
        "hier Religionsfreiheit gilt.",
        "die Menschen Steuern zahlen.",
        "die Menschen das Wahlrecht haben.",
        "hier Meinungsfreiheit gilt."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در آلمان مردم می‌توانند آشکارا علیه دولت حرف بزنند، چون …",
        "antwort": "در اینجا آزادی بیان برقرار است.",
        "erklaerung": "آزادی بیان یکی از حقوق بنیادی در قانون اساسی آلمان است. هر کس می‌تواند نظرش را بگوید، حتی اگر از دولت انتقاد کند."
      }
    },
    {
      "id": "g002",
      "nummer": 2,
      "frage": "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am …",
      "antworten": [
        "Geschichtsunterricht teilnimmt.",
        "Religionsunterricht teilnimmt.",
        "Politikunterricht teilnimmt.",
        "Sprachunterricht teilnimmt."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان والدین تا ۱۴ سالگی فرزندشان می‌توانند تصمیم بگیرند که آیا او در مدرسه در … شرکت کند یا نه.",
        "antwort": "درس دینی",
        "erklaerung": "در آلمان آزادی دین وجود دارد. تا ۱۴ سالگی والدین و پس از آن خود کودک تصمیم می‌گیرد که در درس دینی شرکت کند یا نه."
      }
    },
    {
      "id": "g003",
      "nummer": 3,
      "frage": "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
      "antworten": [
        "Alle Einwohnerinnen/Einwohner und der Staat müssen sich an die Gesetze halten.",
        "Der Staat muss sich nicht an die Gesetze halten.",
        "Nur Deutsche müssen die Gesetze befolgen.",
        "Die Gerichte machen die Gesetze."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "آلمان یک دولت قانون‌مدار است. منظور از این چیست؟",
        "antwort": "همهٔ ساکنان و خود دولت باید از قوانین پیروی کنند.",
        "erklaerung": "در دولت قانون‌مدار هیچ‌کس بالاتر از قانون نیست؛ نه شهروندان و نه دولت."
      }
    },
    {
      "id": "g004",
      "nummer": 4,
      "frage": "Welches Recht gehört zu den Grundrechten in Deutschland?",
      "antworten": [
        "Waffenbesitz",
        "Faustrecht",
        "Meinungsfreiheit",
        "Selbstjustiz"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "کدام حق جزو حقوق بنیادی در آلمان است؟",
        "antwort": "آزادی بیان",
        "erklaerung": "آزادی بیان در قانون اساسی تضمین شده است. داشتن سلاح، قانون زور و اجرای عدالت به دست خود جزو حقوق بنیادی نیستند."
      }
    },
    {
      "id": "g005",
      "nummer": 5,
      "frage": "Wahlen in Deutschland sind frei. Was bedeutet das?",
      "antworten": [
        "Man darf Geld annehmen, wenn man dafür eine bestimmte Kandidatin/einen bestimmten Kandidaten wählt.",
        "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.",
        "Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.",
        "Alle wahlberechtigten Personen müssen wählen."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "انتخابات در آلمان آزاد است. این یعنی چه؟",
        "antwort": "نباید بر رأی‌دهنده فشار آورد یا او را به رأی خاصی مجبور کرد و او نباید به خاطر رأی‌اش ضرر ببیند.",
        "erklaerung": "هر کس خودش و بدون ترس تصمیم می‌گیرد به چه کسی رأی بدهد. در آلمان رأی دادن اجباری نیست."
      }
    },
    {
      "id": "g006",
      "nummer": 6,
      "frage": "Wie heißt die deutsche Verfassung?",
      "antworten": [
        "Volksgesetz",
        "Bundesgesetz",
        "Deutsches Gesetz",
        "Grundgesetz"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "قانون اساسی آلمان چه نام دارد؟",
        "antwort": "گروندگزتس (Grundgesetz – قانون پایه)",
        "erklaerung": "قانون اساسی آلمان از سال ۱۹۴۹ «گروندگزتس» نام دارد و مهم‌ترین قانون کشور است."
      }
    },
    {
      "id": "g007",
      "nummer": 7,
      "frage": "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf …",
      "antworten": [
        "Glaubens- und Gewissensfreiheit",
        "Unterhaltung",
        "Arbeit",
        "Wohnung"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "کدام حق جزو حقوق بنیادی است که قانون اساسی آلمان تضمین می‌کند؟ حقِ …",
        "antwort": "آزادی عقیده و وجدان",
        "erklaerung": "هر کس آزاد است به هر دینی باور داشته باشد یا اصلاً دینی نداشته باشد. حق کار یا مسکن به این شکل در قانون اساسی تضمین نشده است."
      }
    },
    {
      "id": "g008",
      "nummer": 8,
      "frage": "Was steht nicht im Grundgesetz von Deutschland?",
      "antworten": [
        "Die Würde des Menschen ist unantastbar.",
        "Alle sollen gleich viel Geld haben.",
        "Jeder Mensch darf seine Meinung sagen.",
        "Alle sind vor dem Gesetz gleich."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "چه چیزی در قانون اساسی آلمان نیامده است؟",
        "antwort": "همه باید به یک اندازه پول داشته باشند.",
        "erklaerung": "قانون اساسی کرامت انسان، آزادی بیان و برابری در برابر قانون را تضمین می‌کند، اما برابری ثروت را نه."
      }
    },
    {
      "id": "g009",
      "nummer": 9,
      "frage": "Welches Grundrecht gilt in Deutschland nur für Ausländerinnen/Ausländer? Das Grundrecht auf …",
      "antworten": [
        "Schutz der Familie",
        "Menschenwürde",
        "Asyl",
        "Meinungsfreiheit"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "کدام حق بنیادی در آلمان فقط برای خارجی‌ها اعتبار دارد؟ حقِ …",
        "antwort": "پناهندگی",
        "erklaerung": "شهروندان آلمانی نیازی به پناهندگی در آلمان ندارند؛ پس این حق فقط برای خارجی‌هایی است که تحت تعقیب سیاسی هستند."
      }
    },
    {
      "id": "g010",
      "nummer": 10,
      "frage": "Was ist mit dem deutschen Grundgesetz vereinbar?",
      "antworten": [
        "die Prügelstrafe",
        "die Folter",
        "die Todesstrafe",
        "die Geldstrafe"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "چه چیزی با قانون اساسی آلمان سازگار است؟",
        "antwort": "جریمهٔ نقدی",
        "erklaerung": "مجازات بدنی، شکنجه و اعدام در آلمان ممنوع است. جریمهٔ نقدی یک مجازات قانونی است."
      }
    },
    {
      "id": "g011",
      "nummer": 11,
      "frage": "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?",
      "antworten": [
        "Grundgesetz",
        "Bundesverfassung",
        "Gesetzbuch",
        "Verfassungsvertrag"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "قانون اساسی جمهوری فدرال آلمان چه نامیده می‌شود؟",
        "antwort": "گروندگزتس (Grundgesetz – قانون پایه)",
        "erklaerung": "قانون اساسی آلمان «گروندگزتس» نام دارد و از ۱۹۴۹ معتبر است."
      }
    },
    {
      "id": "g012",
      "nummer": 12,
      "frage": "Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?",
      "antworten": [
        "Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.",
        "Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.",
        "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.",
        "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "یک حزب در بوندستاگ (مجلس فدرال) می‌خواهد آزادی مطبوعات را لغو کند. آیا این ممکن است؟",
        "antwort": "نه، چون آزادی مطبوعات یک حق بنیادی است و نمی‌توان آن را لغو کرد.",
        "erklaerung": "حقوق بنیادی در هستهٔ خود حتی با اکثریت بالا هم قابل لغو نیستند."
      }
    },
    {
      "id": "g013",
      "nummer": 13,
      "frage": "Im Parlament steht der Begriff \"Opposition\" für …",
      "antworten": [
        "die regierenden Parteien.",
        "die Fraktion mit den meisten Abgeordneten.",
        "alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.",
        "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در پارلمان، واژهٔ «اپوزیسیون» به … گفته می‌شود.",
        "antwort": "همهٔ نمایندگانی که عضو حزب یا احزاب حاکم نیستند.",
        "erklaerung": "اپوزیسیون احزابی هستند که در دولت نیستند. وظیفهٔ آن‌ها نظارت و انتقاد از دولت است."
      }
    },
    {
      "id": "g014",
      "nummer": 14,
      "frage": "Meinungsfreiheit in Deutschland heißt, dass ich …",
      "antworten": [
        "Passanten auf der Straße beschimpfen darf.",
        "meine Meinung im Internet äußern kann.",
        "Nazi-, Hamas- oder Islamischer Staat-Symbole öffentlich tragen darf.",
        "meine Meinung nur dann äußern darf, solange ich der Regierung nicht widerspreche."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "آزادی بیان در آلمان یعنی من …",
        "antwort": "می‌توانم نظرم را در اینترنت بیان کنم.",
        "erklaerung": "هر کس می‌تواند نظرش را آزادانه بگوید، اما توهین به دیگران و استفاده از نمادهای گروه‌های ممنوعه مجاز نیست."
      }
    },
    {
      "id": "g015",
      "nummer": 15,
      "frage": "Was verbietet das deutsche Grundgesetz?",
      "antworten": [
        "Militärdienst",
        "Zwangsarbeit",
        "freie Berufswahl",
        "Arbeit im Ausland"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "قانون اساسی آلمان چه چیزی را ممنوع می‌کند؟",
        "antwort": "کار اجباری",
        "erklaerung": "هیچ‌کس را نمی‌توان مجبور به کار کرد. انتخاب آزاد شغل یک حق بنیادی است."
      }
    },
    {
      "id": "g016",
      "nummer": 16,
      "frage": "Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?",
      "antworten": [
        "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen",
        "bei Meinungsäußerungen über die Bundesregierung",
        "bei Diskussionen über Religionen",
        "bei Kritik am Staat"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "آزادی بیان در آلمان چه زمانی محدود می‌شود؟",
        "antwort": "هنگام پخش علنی ادعاهای نادرست دربارهٔ افراد",
        "erklaerung": "انتقاد از دولت یا دین مجاز است، اما پخش دروغ دربارهٔ دیگران و آسیب زدن به آبرویشان ممنوع است."
      }
    },
    {
      "id": "g017",
      "nummer": 17,
      "frage": "Die deutschen Gesetze verbieten …",
      "antworten": [
        "Meinungsfreiheit der Einwohnerinnen und Einwohner.",
        "Petitionen der Bürgerinnen und Bürger.",
        "Versammlungsfreiheit der Einwohnerinnen und Einwohner.",
        "Ungleichbehandlung der Bürgerinnen und Bürger durch den Staat."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "قوانین آلمان … را ممنوع می‌کنند.",
        "antwort": "رفتار نابرابر دولت با شهروندان",
        "erklaerung": "همه در برابر قانون برابرند و دولت نباید با کسی رفتار نابرابر داشته باشد."
      }
    },
    {
      "id": "g018",
      "nummer": 18,
      "frage": "Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?",
      "antworten": [
        "die Unantastbarkeit der Menschenwürde",
        "das Recht auf Leben",
        "Religionsfreiheit",
        "Meinungsfreiheit"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "کدام حق بنیادی در اصل ۱ قانون اساسی جمهوری فدرال آلمان تضمین شده است؟",
        "antwort": "خدشه‌ناپذیری کرامت انسان",
        "erklaerung": "اصل ۱ قانون اساسی می‌گوید: «کرامت انسان خدشه‌ناپذیر است.» این مهم‌ترین اصل قانون اساسی است."
      }
    },
    {
      "id": "g019",
      "nummer": 19,
      "frage": "Was versteht man unter dem Recht der \"Freizügigkeit\" in Deutschland?",
      "antworten": [
        "Man darf sich seinen Wohnort selbst aussuchen.",
        "Man kann seinen Beruf wechseln.",
        "Man darf sich für eine andere Religion entscheiden.",
        "Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "منظور از حق «آزادی جابه‌جایی و اقامت» (Freizügigkeit) در آلمان چیست؟",
        "antwort": "هر کس می‌تواند محل زندگی‌اش را خودش انتخاب کند.",
        "erklaerung": "هر شهروند آلمانی می‌تواند در هر جای آلمان زندگی کند و آزادانه جابه‌جا شود."
      }
    },
    {
      "id": "g020",
      "nummer": 20,
      "frage": "Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann …",
      "antworten": [
        "tolerant.",
        "rechtsstaatlich orientiert.",
        "gesetzestreu.",
        "verfassungswidrig."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "یک حزب در آلمان هدفش برپایی دیکتاتوری است. این حزب در این صورت …",
        "antwort": "مغایر با قانون اساسی است.",
        "erklaerung": "دیکتاتوری با دموکراسی و قانون اساسی آلمان در تضاد است. چنین حزبی می‌تواند ممنوع شود."
      }
    },
    {
      "id": "g021",
      "nummer": 21,
      "frage": "Welches ist das Wappen der Bundesrepublik Deutschland?",
      "antworten": [
        "Bild 1",
        "Bild 2",
        "Bild 3",
        "Bild 4"
      ],
      "richtig": 0,
      "bild": "",
      "antwortBilder": [
        "bilder/g021-1.png",
        "bilder/g021-2.png",
        "bilder/g021-3.png",
        "bilder/g021-4.png"
      ],
      "fa": {
        "frage": "کدام تصویر نشان رسمی جمهوری فدرال آلمان است؟",
        "antwort": "تصویر ۱ (عقاب سیاه روی زمینهٔ زرد)",
        "erklaerung": "نشان آلمان «عقاب فدرال» است. تصویر ۳ نماد ارتش آلمان و تصویر ۴ نشان آلمان شرقی سابق (DDR) است."
      }
    },
    {
      "id": "g022",
      "nummer": 22,
      "frage": "Was für eine Staatsform hat Deutschland?",
      "antworten": [
        "Monarchie",
        "Diktatur",
        "Republik",
        "Fürstentum"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "آلمان چه نوع نظام حکومتی دارد؟",
        "antwort": "جمهوری",
        "erklaerung": "آلمان یک جمهوری فدرال است؛ پادشاه ندارد و رئیس‌جمهور برای مدت محدود انتخاب می‌شود."
      }
    },
    {
      "id": "g023",
      "nummer": 23,
      "frage": "In Deutschland sind die meisten Erwerbstätigen …",
      "antworten": [
        "in kleinen Familienunternehmen beschäftigt.",
        "ehrenamtlich für ein Bundesland tätig.",
        "selbstständig mit einer eigenen Firma tätig.",
        "bei einer Firma oder Behörde beschäftigt."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در آلمان بیشتر شاغلان …",
        "antwort": "در یک شرکت یا ادارهٔ دولتی کار می‌کنند.",
        "erklaerung": "بیشتر مردم در آلمان کارمند یا کارگر هستند و برای یک کارفرما کار می‌کنند، نه به‌صورت مستقل."
      }
    },
    {
      "id": "g024",
      "nummer": 24,
      "frage": "Wie viele Bundesländer hat die Bundesrepublik Deutschland?",
      "antworten": [
        "14",
        "15",
        "16",
        "17"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "جمهوری فدرال آلمان چند ایالت دارد؟",
        "antwort": "۱۶ ایالت",
        "erklaerung": "آلمان از ۱۶ ایالت (بوندس‌لند) تشکیل شده است، مثلاً بایرن، برلین و هامبورگ."
      }
    },
    {
      "id": "g025",
      "nummer": 25,
      "frage": "Was ist kein Bundesland der Bundesrepublik Deutschland?",
      "antworten": [
        "Elsass-Lothringen",
        "Nordrhein-Westfalen",
        "Mecklenburg-Vorpommern",
        "Sachsen-Anhalt"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "کدام یک ایالتی از جمهوری فدرال آلمان نیست؟",
        "antwort": "آلزاس-لورن (Elsass-Lothringen)",
        "erklaerung": "آلزاس-لورن منطقه‌ای در فرانسه است. سه گزینهٔ دیگر ایالت‌های آلمان هستند."
      }
    },
    {
      "id": "g026",
      "nummer": 26,
      "frage": "Deutschland ist …",
      "antworten": [
        "eine kommunistische Republik.",
        "ein demokratischer und sozialer Bundesstaat.",
        "eine kapitalistische und soziale Monarchie.",
        "ein sozialer und sozialistischer Bundesstaat."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "آلمان … است.",
        "antwort": "یک دولت فدرال دموکراتیک و اجتماعی",
        "erklaerung": "قانون اساسی (اصل ۲۰) آلمان را دولتی فدرال، دموکراتیک و اجتماعی می‌نامد."
      }
    },
    {
      "id": "g027",
      "nummer": 27,
      "frage": "Deutschland ist …",
      "antworten": [
        "ein sozialistischer Staat.",
        "ein Bundesstaat.",
        "eine Diktatur.",
        "eine Monarchie."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "آلمان … است.",
        "antwort": "یک دولت فدرال (کشوری متشکل از ایالت‌ها)",
        "erklaerung": "آلمان از ۱۶ ایالت تشکیل شده است که هر کدام دولت خود را دارند؛ به این ساختار «دولت فدرال» می‌گویند."
      }
    },
    {
      "id": "g028",
      "nummer": 28,
      "frage": "Wer wählt in Deutschland die Abgeordneten zum Bundestag?",
      "antworten": [
        "das Militär",
        "die Wirtschaft",
        "das wahlberechtigte Volk",
        "die Verwaltung"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه کسی نمایندگان بوندستاگ (مجلس فدرال) را انتخاب می‌کند؟",
        "antwort": "مردمِ دارای حق رأی",
        "erklaerung": "شهروندان آلمانی از ۱۸ سالگی هر چهار سال یک‌بار نمایندگان بوندستاگ را انتخاب می‌کنند."
      }
    },
    {
      "id": "g029",
      "nummer": 29,
      "frage": "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?",
      "antworten": [
        "Löwe",
        "Adler",
        "Bär",
        "Pferd"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "حیوانِ نشانِ رسمی جمهوری فدرال آلمان کدام است؟",
        "antwort": "عقاب",
        "erklaerung": "نشان آلمان یک عقاب سیاه روی زمینهٔ زرد است که «عقاب فدرال» نام دارد."
      }
    },
    {
      "id": "g030",
      "nummer": 30,
      "frage": "Was ist kein Merkmal unserer Demokratie?",
      "antworten": [
        "regelmäßige Wahlen",
        "Pressezensur",
        "Meinungsfreiheit",
        "verschiedene Parteien"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "کدام یک از ویژگی‌های دموکراسی ما نیست؟",
        "antwort": "سانسور مطبوعات",
        "erklaerung": "در دموکراسی مطبوعات آزادند. سانسور نشانهٔ دیکتاتوری است، نه دموکراسی."
      }
    },
    {
      "id": "g031",
      "nummer": 31,
      "frage": "Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland …",
      "antworten": [
        "Einheit.",
        "Koalition.",
        "Ministerium.",
        "Fraktion."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "به همکاری احزاب برای تشکیل دولت در آلمان … می‌گویند.",
        "antwort": "ائتلاف (Koalition)",
        "erklaerung": "وقتی یک حزب به‌تنهایی اکثریت ندارد، چند حزب با هم ائتلاف می‌کنند و دولت را تشکیل می‌دهند."
      }
    },
    {
      "id": "g032",
      "nummer": 32,
      "frage": "Was ist keine staatliche Gewalt in Deutschland?",
      "antworten": [
        "Gesetzgebung",
        "Regierung",
        "Presse",
        "Rechtsprechung"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "کدام یک قوهٔ حکومتی در آلمان نیست؟",
        "antwort": "مطبوعات",
        "erklaerung": "سه قوهٔ حکومت عبارت‌اند از قانون‌گذاری، اجرایی (دولت) و قضایی. مطبوعات مستقل‌اند و جزو قوای حکومتی نیستند."
      }
    },
    {
      "id": "g033",
      "nummer": 33,
      "frage": "Welche Aussage ist richtig? In Deutschland …",
      "antworten": [
        "sind Staat und Religionsgemeinschaften voneinander getrennt.",
        "bilden die Religionsgemeinschaften den Staat.",
        "ist der Staat abhängig von den Religionsgemeinschaften.",
        "bilden Staat und Religionsgemeinschaften eine Einheit."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "کدام جمله درست است؟ در آلمان …",
        "antwort": "دولت و جوامع دینی از هم جدا هستند.",
        "erklaerung": "در آلمان دین رسمی دولتی وجود ندارد و دولت نسبت به همهٔ ادیان بی‌طرف است."
      }
    },
    {
      "id": "g034",
      "nummer": 34,
      "frage": "Was ist Deutschland nicht?",
      "antworten": [
        "eine Demokratie",
        "ein Rechtsstaat",
        "eine Monarchie",
        "ein Sozialstaat"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "آلمان چه چیزی نیست؟",
        "antwort": "یک پادشاهی",
        "erklaerung": "آلمان یک دموکراسی، دولت قانون‌مدار و دولت اجتماعی است، اما پادشاه ندارد."
      }
    },
    {
      "id": "g035",
      "nummer": 35,
      "frage": "Womit finanziert der deutsche Staat die Sozialversicherung?",
      "antworten": [
        "Kirchensteuer",
        "Sozialabgaben",
        "Spendengeldern",
        "Vereinsbeiträgen"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "دولت آلمان بیمه‌های اجتماعی را با چه چیزی تأمین مالی می‌کند؟",
        "antwort": "حق بیمه‌های اجتماعی (Sozialabgaben)",
        "erklaerung": "کارمندان و کارفرمایان هر ماه بخشی از حقوق را به‌عنوان حق بیمهٔ اجتماعی پرداخت می‌کنند."
      }
    },
    {
      "id": "g036",
      "nummer": 36,
      "frage": "Welche Maßnahme schafft in Deutschland soziale Sicherheit?",
      "antworten": [
        "die Krankenversicherung",
        "die Autoversicherung",
        "die Gebäudeversicherung",
        "die Haftpflichtversicherung"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "کدام اقدام در آلمان امنیت اجتماعی ایجاد می‌کند؟",
        "antwort": "بیمهٔ درمانی",
        "erklaerung": "بیمهٔ درمانی بخشی از بیمه‌های اجتماعی است و از مردم در زمان بیماری حمایت می‌کند."
      }
    },
    {
      "id": "g037",
      "nummer": 37,
      "frage": "Wie werden die Regierungschefinnen/Regierungschefs der meisten Bundesländer in Deutschland genannt?",
      "antworten": [
        "Erste Ministerin/Erster Minister",
        "Premierministerin/Premierminister",
        "Senatorin/Senator",
        "Ministerpräsidentin/Ministerpräsident"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "رؤسای دولت بیشتر ایالت‌های آلمان چه نامیده می‌شوند؟",
        "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
        "erklaerung": "رئیس دولت بیشتر ایالت‌ها «مینیستِرپرِزیدِنت» نام دارد. در برلین، هامبورگ و برمن نام دیگری دارد."
      }
    },
    {
      "id": "g038",
      "nummer": 38,
      "frage": "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer …",
      "antworten": [
        "Staatenverbund.",
        "Bundesstaat.",
        "Staatenbund.",
        "Zentralstaat."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "جمهوری فدرال آلمان یک … دموکراتیک و اجتماعی است.",
        "antwort": "دولت فدرال (Bundesstaat)",
        "erklaerung": "این جمله در اصل ۲۰ قانون اساسی آمده است: آلمان یک دولت فدرال دموکراتیک و اجتماعی است."
      }
    },
    {
      "id": "g039",
      "nummer": 39,
      "frage": "Was hat jedes deutsche Bundesland?",
      "antworten": [
        "eine eigene Außenministerin/einen eigenen Außenminister",
        "eine eigene Währung",
        "eine eigene Armee",
        "eine eigene Regierung"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "هر ایالت آلمان چه چیزی دارد؟",
        "antwort": "یک دولت مخصوص به خود",
        "erklaerung": "هر ایالت دولت و پارلمان خودش را دارد. اما ارتش، پول و سیاست خارجی مربوط به کل کشور است."
      }
    },
    {
      "id": "g040",
      "nummer": 40,
      "frage": "Mit welchen Worten beginnt die deutsche Nationalhymne?",
      "antworten": [
        "Völker, hört die Signale …",
        "Einigkeit und Recht und Freiheit …",
        "Freude schöner Götterfunken …",
        "Deutschland einig Vaterland …"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "سرود ملی آلمان با چه کلماتی شروع می‌شود؟",
        "antwort": "«اتحاد و حق و آزادی …» (Einigkeit und Recht und Freiheit)",
        "erklaerung": "سرود ملی آلمان بند سوم «سرود آلمانی‌ها» است و با این کلمات شروع می‌شود."
      }
    },
    {
      "id": "g041",
      "nummer": 41,
      "frage": "Warum gibt es in einer Demokratie mehr als eine Partei?",
      "antworten": [
        "weil dadurch die unterschiedlichen Meinungen der Bürgerinnen und Bürger vertreten werden",
        "damit Bestechung in der Politik begrenzt wird",
        "um politische Demonstrationen zu verhindern",
        "um wirtschaftlichen Wettbewerb anzuregen"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "چرا در دموکراسی بیش از یک حزب وجود دارد؟",
        "antwort": "چون به این ترتیب نظرهای مختلف شهروندان نمایندگی می‌شود.",
        "erklaerung": "مردم نظرهای متفاوتی دارند و احزاب مختلف به این نظرها در سیاست صدا می‌دهند."
      }
    },
    {
      "id": "g042",
      "nummer": 42,
      "frage": "Wer beschließt in Deutschland ein neues Gesetz?",
      "antworten": [
        "die Regierung",
        "das Parlament",
        "die Gerichte",
        "die Polizei"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه کسی قانون جدید را تصویب می‌کند؟",
        "antwort": "پارلمان",
        "erklaerung": "قانون‌گذاری وظیفهٔ پارلمان است؛ در سطح فدرال بوندستاگ با مشارکت بوندس‌رات."
      }
    },
    {
      "id": "g043",
      "nummer": 43,
      "frage": "Wann kann in Deutschland eine Partei verboten werden?",
      "antworten": [
        "wenn ihr Wahlkampf zu teuer ist",
        "wenn sie gegen die Verfassung kämpft",
        "wenn sie Kritik am Staatsoberhaupt äußert",
        "wenn ihr Programm eine neue Richtung vorschlägt"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان یک حزب چه زمانی می‌تواند ممنوع شود؟",
        "antwort": "وقتی علیه قانون اساسی مبارزه کند.",
        "erklaerung": "فقط دادگاه قانون اساسی فدرال می‌تواند حزبی را که علیه نظم دموکراتیک کار می‌کند ممنوع کند."
      }
    },
    {
      "id": "g044",
      "nummer": 44,
      "frage": "Wen kann man als Bürgerin/Bürger in Deutschland nicht direkt wählen?",
      "antworten": [
        "Abgeordnete des EU-Parlaments",
        "Die Bundespräsidentin/den Bundespräsidenten",
        "Landtagsabgeordnete",
        "Bundestagsabgeordnete"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "شهروندان در آلمان چه کسی را نمی‌توانند مستقیماً انتخاب کنند؟",
        "antwort": "رئیس‌جمهور فدرال",
        "erklaerung": "رئیس‌جمهور فدرال را «مجمع فدرال» (Bundesversammlung) انتخاب می‌کند، نه مردم به‌طور مستقیم."
      }
    },
    {
      "id": "g045",
      "nummer": 45,
      "frage": "Zu welcher Versicherung gehört die Pflegeversicherung?",
      "antworten": [
        "Sozialversicherung",
        "Unfallversicherung",
        "Hausratsversicherung",
        "Haftpflicht- und Feuerversicherung"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "بیمهٔ مراقبت (پرستاری) جزو کدام بیمه است؟",
        "antwort": "بیمهٔ اجتماعی",
        "erklaerung": "بیمهٔ مراقبت، مانند بیمهٔ درمانی و بازنشستگی، بخشی از بیمه‌های اجتماعی و برای بیشتر مردم اجباری است."
      }
    },
    {
      "id": "g046",
      "nummer": 46,
      "frage": "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört dazu?",
      "antworten": [
        "Er baut Straßen und Schulen.",
        "Er verkauft Lebensmittel und Kleidung.",
        "Er versorgt alle Einwohnerinnen und Einwohner kostenlos mit Zeitungen.",
        "Er produziert Autos und Busse."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "دولت آلمان وظایف زیادی دارد. کدام وظیفه جزو آن‌هاست؟",
        "antwort": "دولت جاده و مدرسه می‌سازد.",
        "erklaerung": "ساختن زیرساخت‌هایی مانند جاده و مدرسه از وظایف دولت است. فروش غذا یا تولید خودرو کار شرکت‌های خصوصی است."
      }
    },
    {
      "id": "g047",
      "nummer": 47,
      "frage": "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?",
      "antworten": [
        "Er bezahlt für alle Staatsangehörigen Urlaubsreisen.",
        "Er zahlt Kindergeld.",
        "Er unterstützt Museen.",
        "Er fördert Sportlerinnen und Sportler."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "دولت آلمان وظایف زیادی دارد. کدام وظیفه جزو آن‌ها نیست؟",
        "antwort": "دولت هزینهٔ سفرهای تفریحی همهٔ شهروندان را می‌پردازد.",
        "erklaerung": "دولت کمک‌هزینهٔ فرزند می‌دهد و از موزه‌ها و ورزش حمایت می‌کند، اما هزینهٔ تعطیلات مردم را نمی‌پردازد."
      }
    },
    {
      "id": "g048",
      "nummer": 48,
      "frage": "Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?",
      "antworten": [
        "der Bundesrat",
        "die Bundespräsidentin/der Bundespräsident",
        "die Bürgerversammlung",
        "die Regierung"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "کدام نهاد جزو نهادهای قانون اساسی آلمان نیست؟",
        "antwort": "مجمع شهروندان (Bürgerversammlung)",
        "erklaerung": "نهادهای قانون اساسی از جمله بوندستاگ، بوندس‌رات، رئیس‌جمهور فدرال و دولت فدرال هستند. «مجمع شهروندان» جزو آن‌ها نیست."
      }
    },
    {
      "id": "g049",
      "nummer": 49,
      "frage": "Wer bestimmt in Deutschland die Schulpolitik?",
      "antworten": [
        "die Lehrer und Lehrerinnen",
        "die Bundesländer",
        "das Familienministerium",
        "die Universitäten"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه کسی سیاست آموزشی مدارس را تعیین می‌کند؟",
        "antwort": "ایالت‌ها",
        "erklaerung": "آموزش و پرورش در آلمان در اختیار ایالت‌هاست؛ برای همین برنامهٔ مدارس در هر ایالت کمی متفاوت است."
      }
    },
    {
      "id": "g050",
      "nummer": 50,
      "frage": "Die Wirtschaftsform in Deutschland nennt man …",
      "antworten": [
        "freie Zentralwirtschaft.",
        "soziale Marktwirtschaft.",
        "gelenkte Zentralwirtschaft.",
        "Planwirtschaft."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "نظام اقتصادی آلمان را … می‌نامند.",
        "antwort": "اقتصاد بازار اجتماعی",
        "erklaerung": "در اقتصاد بازار اجتماعی، بازار آزاد است، اما دولت از افراد ضعیف‌تر حمایت اجتماعی می‌کند."
      }
    },
    {
      "id": "g051",
      "nummer": 51,
      "frage": "Zu einem demokratischen Rechtsstaat gehört es nicht, dass …",
      "antworten": [
        "Menschen sich kritisch über die Regierung äußern können.",
        "Bürger friedlich demonstrieren gehen dürfen.",
        "Menschen von einer Privatpolizei ohne Grund verhaftet werden.",
        "jemand ein Verbrechen begeht und deshalb verhaftet wird."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در یک دولت قانون‌مدار دموکراتیک این امر جایی ندارد که …",
        "antwort": "مردم بدون دلیل توسط یک پلیس خصوصی بازداشت شوند.",
        "erklaerung": "در دولت قانون‌مدار فقط پلیس دولتی و طبق قانون حق بازداشت دارد. بازداشت بدون دلیل ممنوع است."
      }
    },
    {
      "id": "g052",
      "nummer": 52,
      "frage": "Was bedeutet \"Volkssouveränität\"? Alle Staatsgewalt geht vom ...",
      "antworten": [
        "Volke aus.",
        "Bundestag aus.",
        "preußischen König aus.",
        "Bundesverfassungsgericht aus."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "«حاکمیت مردم» یعنی چه؟ همهٔ قدرت حکومت از … سرچشمه می‌گیرد.",
        "antwort": "مردم",
        "erklaerung": "این جمله در اصل ۲۰ قانون اساسی آمده است. مردم با انتخابات و همه‌پرسی قدرت را به حکومت می‌دهند."
      }
    },
    {
      "id": "g053",
      "nummer": 53,
      "frage": "Was bedeutet \"Rechtsstaat\" in Deutschland?",
      "antworten": [
        "Der Staat hat Recht.",
        "Es gibt nur rechte Parteien.",
        "Die Bürgerinnen und Bürger entscheiden über Gesetze.",
        "Der Staat muss die Gesetze einhalten."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "«دولت قانون‌مدار» در آلمان یعنی چه؟",
        "antwort": "دولت باید قوانین را رعایت کند.",
        "erklaerung": "در دولت قانون‌مدار، دولت هم مانند همهٔ شهروندان تابع قانون است و نمی‌تواند خودسرانه رفتار کند."
      }
    },
    {
      "id": "g054",
      "nummer": 54,
      "frage": "Was ist keine staatliche Gewalt in Deutschland?",
      "antworten": [
        "Legislative",
        "Judikative",
        "Exekutive",
        "Direktive"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "کدام یک قوهٔ حکومتی در آلمان نیست؟",
        "antwort": "«دیرکتیو» (Direktive)",
        "erklaerung": "سه قوه عبارت‌اند از: مقننه (Legislative)، مجریه (Exekutive) و قضائیه (Judikative). «دیرکتیو» قوه نیست."
      }
    },
    {
      "id": "g055",
      "nummer": 55,
      "frage": "Was zeigt dieses Bild?",
      "antworten": [
        "den Bundestagssitz in Berlin",
        "das Bundesverfassungsgericht in Karlsruhe",
        "das Bundesratsgebäude in Berlin",
        "das Bundeskanzleramt in Berlin"
      ],
      "richtig": 0,
      "bild": "bilder/g055.jpg",
      "bildQuelle": "© Deutscher Bundestag/Achim Melde",
      "fa": {
        "frage": "این تصویر چه چیزی را نشان می‌دهد؟",
        "antwort": "محل بوندستاگ (مجلس فدرال) در برلین",
        "erklaerung": "این ساختمان «رایشستاگ» با گنبد شیشه‌ای است که محل نشست بوندستاگ در برلین است."
      }
    },
    {
      "id": "g056",
      "nummer": 56,
      "frage": "Welches Amt gehört in Deutschland zur Gemeindeverwaltung?",
      "antworten": [
        "Pfarramt",
        "Ordnungsamt",
        "Finanzamt",
        "Auswärtiges Amt"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "کدام اداره در آلمان جزو ادارهٔ شهرداری (Gemeindeverwaltung) است؟",
        "antwort": "ادارهٔ نظم عمومی (Ordnungsamt)",
        "erklaerung": "اوردنونگزامت یک ادارهٔ شهری است. ادارهٔ مالیات و وزارت خارجه دولتی هستند و دفتر کلیسا (Pfarramt) هم به کلیسا تعلق دارد."
      }
    },
    {
      "id": "g057",
      "nummer": 57,
      "frage": "Wer wird meistens zur Präsidentin/zum Präsidenten des Deutschen Bundestages gewählt?",
      "antworten": [
        "die/der älteste Abgeordnete im Parlament",
        "die Ministerpräsidentin/der Ministerpräsident des größten Bundeslandes",
        "eine ehemalige Bundeskanzlerin/ein ehemaliger Bundeskanzler",
        "eine Abgeordnete/ein Abgeordneter der stärksten Fraktion"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "چه کسی معمولاً به ریاست بوندستاگ (مجلس فدرال) انتخاب می‌شود؟",
        "antwort": "یکی از نمایندگانِ بزرگ‌ترین فراکسیون",
        "erklaerung": "طبق سنت، بزرگ‌ترین فراکسیون پارلمان رئیس بوندستاگ را پیشنهاد می‌دهد."
      }
    },
    {
      "id": "g058",
      "nummer": 58,
      "frage": "Wer ernennt in Deutschland die Ministerinnen/die Minister der Bundesregierung?",
      "antworten": [
        "die Präsidentin/der Präsident des Bundesverfassungsgerichtes",
        "die Bundespräsidentin/der Bundespräsident",
        "die Bundesratspräsidentin/der Bundesratspräsident",
        "die Bundestagspräsidentin/der Bundestagspräsident"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه کسی وزیران دولت فدرال را منصوب می‌کند؟",
        "antwort": "رئیس‌جمهور فدرال",
        "erklaerung": "صدراعظم وزیران را پیشنهاد می‌دهد و رئیس‌جمهور فدرال آن‌ها را رسماً منصوب می‌کند."
      }
    },
    {
      "id": "g059",
      "nummer": 59,
      "frage": "Vor wie vielen Jahren gab es erstmals eine jüdische Gemeinde auf dem Gebiet des heutigen Deutschlands?",
      "antworten": [
        "vor etwa 300 Jahren",
        "vor etwa 700 Jahren",
        "vor etwa 1150 Jahren",
        "vor etwa 1700 Jahren"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "اولین جامعهٔ یهودی در سرزمین آلمان امروزی چند سال پیش وجود داشت؟",
        "antwort": "حدود ۱۷۰۰ سال پیش",
        "erklaerung": "اولین سند دربارهٔ یهودیان در کلن مربوط به سال ۳۲۱ میلادی است؛ یعنی حدود ۱۷۰۰ سال پیش."
      }
    },
    {
      "id": "g060",
      "nummer": 60,
      "frage": "In Deutschland gehören der Bundestag und der Bundesrat zur …",
      "antworten": [
        "Exekutive.",
        "Legislative.",
        "Direktive.",
        "Judikative."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان بوندستاگ و بوندس‌رات جزو … هستند.",
        "antwort": "قوهٔ مقننه (قانون‌گذاری)",
        "erklaerung": "بوندستاگ و بوندس‌رات با هم قوانین فدرال را تصویب می‌کنند؛ پس جزو قوهٔ قانون‌گذاری هستند."
      }
    },
    {
      "id": "g061",
      "nummer": 61,
      "frage": "Was bedeutet \"Volkssouveränität\"?",
      "antworten": [
        "Die Königin/der König herrscht über das Volk.",
        "Das Bundesverfassungsgericht steht über der Verfassung.",
        "Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.",
        "Die Staatsgewalt geht vom Volke aus."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "«حاکمیت مردم» یعنی چه؟",
        "antwort": "قدرت حکومت از مردم سرچشمه می‌گیرد.",
        "erklaerung": "در دموکراسی مردم صاحب قدرت هستند و آن را با رأی دادن به نمایندگان واگذار می‌کنند."
      }
    },
    {
      "id": "g062",
      "nummer": 62,
      "frage": "Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das …",
      "antworten": [
        "Kommunalwahl",
        "Landtagswahl",
        "Europawahl",
        "Bundestagswahl"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "وقتی پارلمان یک ایالت آلمان انتخاب می‌شود، به آن … می‌گویند.",
        "antwort": "انتخابات پارلمان ایالتی (Landtagswahl)",
        "erklaerung": "پارلمان هر ایالت «لندتاگ» نام دارد؛ پس انتخابات آن «لندتاگس‌وال» است."
      }
    },
    {
      "id": "g063",
      "nummer": 63,
      "frage": "Was gehört in Deutschland nicht zur Exekutive?",
      "antworten": [
        "die Polizei",
        "die Gerichte",
        "das Finanzamt",
        "die Ministerien"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "چه چیزی در آلمان جزو قوهٔ مجریه نیست؟",
        "antwort": "دادگاه‌ها",
        "erklaerung": "دادگاه‌ها جزو قوهٔ قضائیه هستند. پلیس، ادارهٔ مالیات و وزارتخانه‌ها جزو قوهٔ مجریه‌اند."
      }
    },
    {
      "id": "g064",
      "nummer": 64,
      "frage": "Die Bundesrepublik Deutschland ist heute gegliedert in …",
      "antworten": [
        "vier Besatzungszonen.",
        "einen Oststaat und einen Weststaat.",
        "16 Kantone.",
        "Bund, Länder und Kommunen."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "جمهوری فدرال آلمان امروز به … تقسیم شده است.",
        "antwort": "دولت فدرال، ایالت‌ها و شهرداری‌ها",
        "erklaerung": "آلمان سه سطح سیاسی دارد: سطح فدرال، ۱۶ ایالت و شهرها و روستاها (کمون‌ها)."
      }
    },
    {
      "id": "g065",
      "nummer": 65,
      "frage": "Es gehört nicht zu den Aufgaben des Deutschen Bundestages, …",
      "antworten": [
        "Gesetze zu entwerfen.",
        "die Bundesregierung zu kontrollieren.",
        "die Bundeskanzlerin/den Bundeskanzler zu wählen.",
        "das Bundeskabinett zu bilden."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "کدام یک از وظایف بوندستاگ (مجلس فدرال) نیست؟",
        "antwort": "تشکیل کابینهٔ فدرال",
        "erklaerung": "بوندستاگ صدراعظم را انتخاب می‌کند، اما صدراعظم خودش وزیران را انتخاب و کابینه را تشکیل می‌دهد."
      }
    },
    {
      "id": "g066",
      "nummer": 66,
      "frage": "Welche Städte haben die größten jüdischen Gemeinden in Deutschland?",
      "antworten": [
        "Berlin und München",
        "Hamburg und Essen",
        "Nürnberg und Stuttgart",
        "Worms und Speyer"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "کدام شهرها بزرگ‌ترین جوامع یهودی آلمان را دارند؟",
        "antwort": "برلین و مونیخ",
        "erklaerung": "بزرگ‌ترین جوامع یهودی آلمان در برلین و مونیخ هستند."
      }
    },
    {
      "id": "g067",
      "nummer": 67,
      "frage": "Was ist in Deutschland vor allem eine Aufgabe der Bundesländer?",
      "antworten": [
        "Verteidigungspolitik",
        "Außenpolitik",
        "Wirtschaftspolitik",
        "Schulpolitik"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه چیزی بیشتر وظیفهٔ ایالت‌هاست؟",
        "antwort": "سیاست آموزشی مدارس",
        "erklaerung": "آموزش و پرورش در اختیار ایالت‌هاست. دفاع و سیاست خارجی وظیفهٔ دولت فدرال است."
      }
    },
    {
      "id": "g068",
      "nummer": 68,
      "frage": "Warum kontrolliert der Staat in Deutschland das Schulwesen?",
      "antworten": [
        "weil es in Deutschland nur staatliche Schulen gibt",
        "weil alle Schülerinnen und Schüler einen Schulabschluss haben müssen",
        "weil es in den Bundesländern verschiedene Schulen gibt",
        "weil es nach dem Grundgesetz seine Aufgabe ist"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "چرا دولت در آلمان بر نظام آموزشی مدارس نظارت می‌کند؟",
        "antwort": "چون طبق قانون اساسی این وظیفهٔ دولت است.",
        "erklaerung": "اصل ۷ قانون اساسی می‌گوید کل نظام مدارس تحت نظارت دولت است؛ حتی مدارس خصوصی."
      }
    },
    {
      "id": "g069",
      "nummer": 69,
      "frage": "Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?",
      "antworten": [
        "Stadträte",
        "Landräte",
        "Gemeinden",
        "Bezirksämter"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "جمهوری فدرال آلمان ساختار اداری سه‌سطحی دارد. پایین‌ترین سطح سیاسی چه نام دارد؟",
        "antwort": "شهرداری‌ها / بخش‌ها (Gemeinden)",
        "erklaerung": "سه سطح عبارت‌اند از: فدرال، ایالت و گماینده (شهر یا روستا). گماینده پایین‌ترین سطح است."
      }
    },
    {
      "id": "g070",
      "nummer": 70,
      "frage": "Der deutsche Bundespräsident Gustav Heinemann gibt Helmut Schmidt 1974 die Ernennungsurkunde zum deutschen Bundeskanzler. Was gehört zu den Aufgaben der deutschen Bundespräsidentin/des deutschen Bundespräsidenten?",
      "antworten": [
        "Sie/Er führt die Regierungsgeschäfte.",
        "Sie/Er kontrolliert die Regierungspartei.",
        "Sie/Er wählt die Ministerinnen/Minister aus.",
        "Sie/Er schlägt die Kanzlerin/den Kanzler zur Wahl vor."
      ],
      "richtig": 3,
      "bild": "bilder/g070.jpg",
      "bildQuelle": "© Bundesregierung/Engelbert Reineke",
      "fa": {
        "frage": "رئیس‌جمهور فدرال آلمان، گوستاو هاینمان، در سال ۱۹۷۴ حکم صدراعظمی را به هلموت اشمیت می‌دهد. کدام یک از وظایف رئیس‌جمهور فدرال آلمان است؟",
        "antwort": "او صدراعظم را برای انتخاب پیشنهاد می‌دهد.",
        "erklaerung": "رئیس‌جمهور فدرال یک نامزد صدراعظمی را به بوندستاگ پیشنهاد می‌کند و پس از انتخاب، او را منصوب می‌کند."
      }
    },
    {
      "id": "g071",
      "nummer": 71,
      "frage": "Wo hält sich die deutsche Bundeskanzlerin/der deutsche Bundeskanzler am häufigsten auf? Am häufigsten ist sie/er …",
      "antworten": [
        "in Bonn, weil sich dort das Bundeskanzleramt und der Bundestag befinden.",
        "auf Schloss Meseberg, dem Gästehaus der Bundesregierung, um Staatsgäste zu empfangen.",
        "auf Schloss Bellevue, dem Amtssitz der Bundespräsidentin/des Bundespräsidenten, um Staatsgäste zu empfangen.",
        "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "صدراعظم آلمان بیشتر وقت خود را کجا می‌گذراند؟ بیشتر …",
        "antwort": "در برلین، چون دفتر صدراعظم و بوندستاگ آنجا هستند.",
        "erklaerung": "برلین پایتخت آلمان است و دفتر صدراعظم (Bundeskanzleramt) و بوندستاگ در آنجا قرار دارند."
      }
    },
    {
      "id": "g072",
      "nummer": 72,
      "frage": "Wie heißt die jetzige Bundeskanzlerin/der jetzige Bundeskanzler von Deutschland?",
      "antworten": [
        "Gerhard Schröder",
        "Angela Merkel",
        "Ursula von der Leyen",
        "Friedrich Merz"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "صدراعظم فعلی آلمان چه نام دارد؟",
        "antwort": "فریدریش مرتس (Friedrich Merz)",
        "erklaerung": "فریدریش مرتس از ماه مه ۲۰۲۵ صدراعظم آلمان است (وضعیت: نوامبر ۲۰۲۶)."
      }
    },
    {
      "id": "g073",
      "nummer": 73,
      "frage": "Die beiden größten Fraktionen im Deutschen Bundestag heißen zurzeit …",
      "antworten": [
        "CDU/CSU und AfD.",
        "Die Linke und Bündnis 90/Die Grünen.",
        "Bündnis 90/Die Grünen und SPD.",
        "Die Linke und CDU/CSU."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "دو فراکسیون بزرگ بوندستاگ در حال حاضر … هستند.",
        "antwort": "CDU/CSU و AfD",
        "erklaerung": "پس از انتخابات ۲۰۲۵، CDU/CSU بزرگ‌ترین و AfD دومین فراکسیون بزرگ بوندستاگ است."
      }
    },
    {
      "id": "g074",
      "nummer": 74,
      "frage": "Wie heißt das Parlament für ganz Deutschland?",
      "antworten": [
        "Bundesversammlung",
        "Volkskammer",
        "Bundestag",
        "Bundesgerichtshof"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "پارلمان کل آلمان چه نام دارد؟",
        "antwort": "بوندستاگ (Bundestag)",
        "erklaerung": "بوندستاگ پارلمان سراسری آلمان است. پارلمان هر ایالت «لندتاگ» نام دارد."
      }
    },
    {
      "id": "g075",
      "nummer": 75,
      "frage": "Wie heißt Deutschlands heutiges Staatsoberhaupt?",
      "antworten": [
        "Frank-Walter Steinmeier",
        "Bärbel Bas",
        "Bodo Ramelow",
        "Joachim Gauck"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "رئیس کشور (Staatsoberhaupt) کنونی آلمان چه نام دارد؟",
        "antwort": "فرانک-والتر اشتاین‌مایر",
        "erklaerung": "اشتاین‌مایر از سال ۲۰۱۷ رئیس‌جمهور فدرال است؛ دورهٔ او در سال ۲۰۲۷ به پایان می‌رسد (وضعیت: نوامبر ۲۰۲۶)."
      }
    },
    {
      "id": "g076",
      "nummer": 76,
      "frage": "Was bedeutet die Abkürzung CDU in Deutschland?",
      "antworten": [
        "Christliche Deutsche Union",
        "Club Deutscher Unternehmer",
        "Christlicher Deutscher Umweltschutz",
        "Christlich Demokratische Union"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "مخفف CDU در آلمان به چه معناست؟",
        "antwort": "اتحادیهٔ دموکرات مسیحی (Christlich Demokratische Union)",
        "erklaerung": "CDU یکی از احزاب بزرگ آلمان است و با حزب خواهرش CSU یک فراکسیون مشترک در بوندستاگ دارد."
      }
    },
    {
      "id": "g077",
      "nummer": 77,
      "frage": "Was ist die Bundeswehr?",
      "antworten": [
        "die deutsche Polizei",
        "ein deutscher Hafen",
        "eine deutsche Bürgerinitiative",
        "die deutsche Armee"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "بوندس‌ور (Bundeswehr) چیست؟",
        "antwort": "ارتش آلمان",
        "erklaerung": "بوندس‌ور نیروهای مسلح آلمان است و وظیفهٔ دفاع از کشور را دارد."
      }
    },
    {
      "id": "g078",
      "nummer": 78,
      "frage": "Was bedeutet die Abkürzung SPD?",
      "antworten": [
        "Sozialistische Partei Deutschlands",
        "Sozialpolitische Partei Deutschlands",
        "Sozialdemokratische Partei Deutschlands",
        "Sozialgerechte Partei Deutschlands"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "مخفف SPD به چه معناست؟",
        "antwort": "حزب سوسیال‌دموکرات آلمان (Sozialdemokratische Partei Deutschlands)",
        "erklaerung": "SPD قدیمی‌ترین حزب آلمان است و از سال ۱۸۶۳ وجود دارد."
      }
    },
    {
      "id": "g079",
      "nummer": 79,
      "frage": "Was bedeutet die Abkürzung FDP in Deutschland?",
      "antworten": [
        "Friedliche Demonstrative Partei",
        "Freie Deutschland Partei",
        "Führende Demokratische Partei",
        "Freie Demokratische Partei"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "مخفف FDP در آلمان به چه معناست؟",
        "antwort": "حزب دموکرات آزاد (Freie Demokratische Partei)",
        "erklaerung": "FDP یک حزب لیبرال است که بر آزادی فردی و اقتصاد آزاد تأکید دارد."
      }
    },
    {
      "id": "g080",
      "nummer": 80,
      "frage": "Welches Gericht in Deutschland ist zuständig für die Auslegung des Grundgesetzes?",
      "antworten": [
        "Oberlandesgericht",
        "Amtsgericht",
        "Bundesverfassungsgericht",
        "Verwaltungsgericht"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "کدام دادگاه در آلمان مسئول تفسیر قانون اساسی است؟",
        "antwort": "دادگاه قانون اساسی فدرال (Bundesverfassungsgericht)",
        "erklaerung": "این دادگاه در کارلسروهه است و بررسی می‌کند که قوانین و اقدامات دولت با قانون اساسی سازگار باشند."
      }
    },
    {
      "id": "g081",
      "nummer": 81,
      "frage": "Wer wählt die Bundeskanzlerin/den Bundeskanzler in Deutschland?",
      "antworten": [
        "der Bundesrat",
        "die Bundesversammlung",
        "das Volk",
        "der Bundestag"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه کسی صدراعظم را انتخاب می‌کند؟",
        "antwort": "بوندستاگ (مجلس فدرال)",
        "erklaerung": "مردم صدراعظم را مستقیم انتخاب نمی‌کنند؛ نمایندگان بوندستاگ او را انتخاب می‌کنند."
      }
    },
    {
      "id": "g082",
      "nummer": 82,
      "frage": "Wer leitet das deutsche Bundeskabinett?",
      "antworten": [
        "die Bundestagspräsidentin/der Bundestagspräsident",
        "die Bundespräsidentin/der Bundespräsident",
        "die Bundesratspräsidentin/der Bundesratspräsident",
        "die Bundeskanzlerin/der Bundeskanzler"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "چه کسی کابینهٔ فدرال آلمان را رهبری می‌کند؟",
        "antwort": "صدراعظم فدرال",
        "erklaerung": "صدراعظم رئیس دولت است، خطوط اصلی سیاست را تعیین می‌کند و جلسات کابینه را رهبری می‌کند."
      }
    },
    {
      "id": "g083",
      "nummer": 83,
      "frage": "Wer wählt die deutsche Bundeskanzlerin/den deutschen Bundeskanzler?",
      "antworten": [
        "das Volk",
        "die Bundesversammlung",
        "der Bundestag",
        "die Bundesregierung"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "چه کسی صدراعظم آلمان را انتخاب می‌کند؟",
        "antwort": "بوندستاگ (مجلس فدرال)",
        "erklaerung": "صدراعظم به پیشنهاد رئیس‌جمهور فدرال توسط نمایندگان بوندستاگ انتخاب می‌شود."
      }
    },
    {
      "id": "g084",
      "nummer": 84,
      "frage": "Welche Hauptaufgabe hat die deutsche Bundespräsidentin/der deutsche Bundespräsident? Sie/Er …",
      "antworten": [
        "regiert das Land.",
        "entwirft die Gesetze.",
        "repräsentiert das Land.",
        "überwacht die Einhaltung der Gesetze."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "وظیفهٔ اصلی رئیس‌جمهور فدرال آلمان چیست؟ او …",
        "antwort": "کشور را نمایندگی می‌کند.",
        "erklaerung": "رئیس‌جمهور فدرال بیشتر نقش تشریفاتی و نمایندگی دارد؛ حکومت کردن کار صدراعظم و دولت است."
      }
    },
    {
      "id": "g085",
      "nummer": 85,
      "frage": "Wer bildet den deutschen Bundesrat?",
      "antworten": [
        "die Abgeordneten des Bundestages",
        "die Ministerinnen und Minister der Bundesregierung",
        "die Regierungsvertreter der Bundesländer",
        "die Parteimitglieder"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "بوندس‌رات (شورای فدرال) آلمان از چه کسانی تشکیل می‌شود؟",
        "antwort": "نمایندگان دولت‌های ایالت‌ها",
        "erklaerung": "در بوندس‌رات اعضای دولت‌های ۱۶ ایالت حضور دارند و از منافع ایالت‌ها دفاع می‌کنند."
      }
    },
    {
      "id": "g086",
      "nummer": 86,
      "frage": "Wer wählt in Deutschland die Bundespräsidentin/den Bundespräsidenten?",
      "antworten": [
        "die Bundesversammlung",
        "der Bundesrat",
        "das Bundesparlament",
        "das Bundesverfassungsgericht"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه کسی رئیس‌جمهور فدرال را انتخاب می‌کند؟",
        "antwort": "مجمع فدرال (Bundesversammlung)",
        "erklaerung": "مجمع فدرال از همهٔ نمایندگان بوندستاگ و همین تعداد نماینده از ایالت‌ها تشکیل می‌شود و فقط برای این انتخاب جمع می‌شود."
      }
    },
    {
      "id": "g087",
      "nummer": 87,
      "frage": "Wer ist das Staatsoberhaupt der Bundesrepublik Deutschland?",
      "antworten": [
        "die Bundeskanzlerin/der Bundeskanzler",
        "die Bundespräsidentin/der Bundespräsident",
        "die Bundesratspräsidentin/der Bundesratspräsident",
        "die Bundestagspräsidentin/der Bundestagspräsident"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "رئیس کشور (Staatsoberhaupt) جمهوری فدرال آلمان کیست؟",
        "antwort": "رئیس‌جمهور فدرال",
        "erklaerung": "رئیس‌جمهور فدرال رئیس کشور است؛ صدراعظم رئیس دولت است."
      }
    },
    {
      "id": "g088",
      "nummer": 88,
      "frage": "Die parlamentarische Opposition im Deutschen Bundestag …",
      "antworten": [
        "kontrolliert die Regierung.",
        "entscheidet, wer Bundesministerin/Bundesminister wird.",
        "bestimmt, wer im Bundesrat sitzt.",
        "schlägt die Regierungschefinnen/Regierungschefs der Länder vor."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "اپوزیسیون پارلمانی در بوندستاگ …",
        "antwort": "دولت را کنترل می‌کند.",
        "erklaerung": "احزابی که در دولت نیستند وظیفه دارند کار دولت را بررسی و نقد کنند."
      }
    },
    {
      "id": "g089",
      "nummer": 89,
      "frage": "Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament?",
      "antworten": [
        "Verband",
        "Ältestenrat",
        "Fraktion",
        "Opposition"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در آلمان به گروه نمایندگان یک حزب در پارلمان چه می‌گویند؟",
        "antwort": "فراکسیون (Fraktion)",
        "erklaerung": "نمایندگان یک حزب در پارلمان با هم یک فراکسیون تشکیل می‌دهند و معمولاً با هم رأی می‌دهند."
      }
    },
    {
      "id": "g090",
      "nummer": 90,
      "frage": "Die deutschen Bundesländer wirken an der Gesetzgebung des Bundes mit durch …",
      "antworten": [
        "den Bundesrat.",
        "die Bundesversammlung.",
        "den Bundestag.",
        "die Bundesregierung."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "ایالت‌های آلمان از طریق … در قانون‌گذاری فدرال مشارکت می‌کنند.",
        "antwort": "بوندس‌رات (شورای فدرال)",
        "erklaerung": "بوندس‌رات نمایندهٔ ایالت‌هاست و بسیاری از قوانین فدرال به تأیید آن نیاز دارند."
      }
    },
    {
      "id": "g091",
      "nummer": 91,
      "frage": "In Deutschland kann ein Regierungswechsel in einem Bundesland Auswirkungen auf die Bundespolitik haben. Das Regieren wird …",
      "antworten": [
        "schwieriger, wenn sich dadurch die Mehrheit im Bundestag ändert.",
        "leichter, wenn dadurch neue Parteien in den Bundesrat kommen.",
        "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.",
        "leichter, wenn es sich um ein reiches Bundesland handelt."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در آلمان تغییر دولت در یک ایالت می‌تواند بر سیاست فدرال اثر بگذارد. حکومت کردن …",
        "antwort": "دشوارتر می‌شود، اگر به همین دلیل اکثریت در بوندس‌رات تغییر کند.",
        "erklaerung": "دولت‌های ایالتی در بوندس‌رات رأی می‌دهند. اگر دولت فدرال در بوندس‌رات اکثریت نداشته باشد، تصویب قوانین سخت‌تر می‌شود."
      }
    },
    {
      "id": "g092",
      "nummer": 92,
      "frage": "Was bedeutet die Abkürzung CSU in Deutschland?",
      "antworten": [
        "Christlich Sichere Union",
        "Christlich Süddeutsche Union",
        "Christlich Sozialer Unternehmerverband",
        "Christlich Soziale Union"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "مخفف CSU در آلمان به چه معناست؟",
        "antwort": "اتحادیهٔ سوسیال مسیحی (Christlich Soziale Union)",
        "erklaerung": "CSU فقط در بایرن فعالیت می‌کند و در بوندستاگ با CDU یک فراکسیون مشترک دارد."
      }
    },
    {
      "id": "g093",
      "nummer": 93,
      "frage": "Je mehr \"Zweitstimmen\" eine Partei bei einer Bundestagswahl bekommt, desto …",
      "antworten": [
        "weniger Erststimmen kann sie haben.",
        "mehr Direktkandidaten der Partei ziehen ins Parlament ein.",
        "größer ist das Risiko, eine Koalition bilden zu müssen.",
        "mehr Sitze erhält die Partei im Parlament."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "هر چه یک حزب در انتخابات بوندستاگ «رأی دوم» بیشتری بگیرد، …",
        "antwort": "کرسی‌های بیشتری در پارلمان به دست می‌آورد.",
        "erklaerung": "رأی دوم به حزب داده می‌شود و تعیین می‌کند هر حزب چند کرسی در بوندستاگ داشته باشد."
      }
    },
    {
      "id": "g094",
      "nummer": 94,
      "frage": "Ab welchem Alter darf man in Deutschland an der Wahl zum Deutschen Bundestag teilnehmen?",
      "antworten": [
        "16",
        "18",
        "21",
        "23"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان از چند سالگی می‌توان در انتخابات بوندستاگ شرکت کرد؟",
        "antwort": "از ۱۸ سالگی",
        "erklaerung": "برای انتخابات بوندستاگ باید شهروند آلمان و دست‌کم ۱۸ ساله بود."
      }
    },
    {
      "id": "g095",
      "nummer": 95,
      "frage": "Was gilt für die meisten Kinder in Deutschland?",
      "antworten": [
        "Wahlpflicht",
        "Schulpflicht",
        "Schweigepflicht",
        "Religionspflicht"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "چه چیزی برای بیشتر کودکان در آلمان الزامی است؟",
        "antwort": "الزام به رفتن به مدرسه (Schulpflicht)",
        "erklaerung": "در آلمان همهٔ کودکان باید به مدرسه بروند؛ آموزش در خانه به‌جای مدرسه معمولاً مجاز نیست."
      }
    },
    {
      "id": "g096",
      "nummer": 96,
      "frage": "Wie kann jemand, der den Holocaust leugnet, bestraft werden?",
      "antworten": [
        "Kürzung sozialer Leistungen",
        "bis zu 100 Sozialstunden",
        "gar nicht, Holocaustleugnung ist erlaubt",
        "mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "کسی که هولوکاست را انکار کند، چگونه می‌تواند مجازات شود؟",
        "antwort": "با زندان تا پنج سال یا جریمهٔ نقدی",
        "erklaerung": "انکار هولوکاست در آلمان جرم است (تحریک به نفرت). دلیل آن مسئولیت تاریخی آلمان در قبال قتل‌عام یهودیان است."
      }
    },
    {
      "id": "g097",
      "nummer": 97,
      "frage": "Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?",
      "antworten": [
        "Sozialversicherung",
        "Sozialhilfe",
        "Kindergeld",
        "Wohngeld"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "در آلمان اگر کسی استخدام دائم باشد، به‌طور خودکار چه چیزی را پرداخت می‌کند؟",
        "antwort": "بیمهٔ اجتماعی",
        "erklaerung": "حق بیمه‌های اجتماعی (درمان، بازنشستگی، بیکاری، مراقبت) مستقیماً از حقوق کم می‌شود."
      }
    },
    {
      "id": "g098",
      "nummer": 98,
      "frage": "Wenn Abgeordnete im Deutschen Bundestag ihre Fraktion wechseln, …",
      "antworten": [
        "dürfen sie nicht mehr an den Sitzungen des Parlaments teilnehmen.",
        "kann die Regierung ihre Mehrheit verlieren.",
        "muss die Bundespräsidentin/der Bundespräsident zuvor ihr/sein Einverständnis geben.",
        "dürfen die Wählerinnen/Wähler dieser Abgeordneten noch einmal wählen."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "وقتی نمایندگان بوندستاگ فراکسیون خود را عوض می‌کنند، …",
        "antwort": "ممکن است دولت اکثریت خود را از دست بدهد.",
        "erklaerung": "دولت به اکثریت نمایندگان نیاز دارد. اگر نمایندگانی از احزاب دولت جدا شوند، ممکن است این اکثریت از بین برود."
      }
    },
    {
      "id": "g099",
      "nummer": 99,
      "frage": "Wer bezahlt in Deutschland die Sozialversicherungen?",
      "antworten": [
        "Arbeitgeberinnen/Arbeitgeber und Arbeitnehmerinnen/Arbeitnehmer",
        "nur Arbeitnehmerinnen/Arbeitnehmer",
        "alle Staatsangehörigen",
        "nur Arbeitgeberinnen/Arbeitgeber"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه کسی هزینهٔ بیمه‌های اجتماعی را می‌پردازد؟",
        "antwort": "کارفرمایان و کارکنان",
        "erklaerung": "حق بیمهٔ اجتماعی معمولاً تقریباً به‌طور مساوی بین کارفرما و کارمند تقسیم می‌شود."
      }
    },
    {
      "id": "g100",
      "nummer": 100,
      "frage": "Was gehört nicht zur gesetzlichen Sozialversicherung?",
      "antworten": [
        "die Lebensversicherung",
        "die gesetzliche Rentenversicherung",
        "die Arbeitslosenversicherung",
        "die Pflegeversicherung"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "چه چیزی جزو بیمهٔ اجتماعی قانونی نیست؟",
        "antwort": "بیمهٔ عمر",
        "erklaerung": "بیمهٔ عمر یک بیمهٔ خصوصی و اختیاری است. بیمهٔ بازنشستگی، بیکاری و مراقبت جزو بیمه‌های اجتماعی هستند."
      }
    },
    {
      "id": "g101",
      "nummer": 101,
      "frage": "Gewerkschaften sind Interessenverbände der …",
      "antworten": [
        "Jugendlichen.",
        "Arbeitnehmerinnen und Arbeitnehmer.",
        "Rentnerinnen und Rentner.",
        "Arbeitgeberinnen und Arbeitgeber."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "اتحادیه‌های کارگری (سندیکاها) سازمان‌های مدافع منافع … هستند.",
        "antwort": "کارکنان (کارگران و کارمندان)",
        "erklaerung": "سندیکاها از حقوق کارکنان دفاع می‌کنند، مثلاً برای دستمزد بهتر و ساعت کار منصفانه."
      }
    },
    {
      "id": "g102",
      "nummer": 102,
      "frage": "Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat? Mit dem …",
      "antworten": [
        "Bundesverdienstkreuz",
        "Bundesadler",
        "Vaterländischen Verdienstorden",
        "Ehrentitel \"Held der Deutschen Demokratischen Republik\""
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "اگر کسی در زمینهٔ سیاسی، اقتصادی، فرهنگی، علمی یا اجتماعی کار برجسته‌ای انجام دهد، در آلمان با چه چیزی تقدیر می‌شود؟ با …",
        "antwort": "نشان صلیب شایستگی فدرال (Bundesverdienstkreuz)",
        "erklaerung": "بوندس‌فردینست‌کرویتس بالاترین نشان افتخار جمهوری فدرال آلمان است و رئیس‌جمهور فدرال آن را اهدا می‌کند."
      }
    },
    {
      "id": "g103",
      "nummer": 103,
      "frage": "Was wird in Deutschland als \"Ampelkoalition\" bezeichnet? Die Zusammenarbeit …",
      "antworten": [
        "der Bundestagsfraktionen von CDU und CSU",
        "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung",
        "von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung",
        "der Bundestagsfraktionen von CDU und SPD"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان به چه چیزی «ائتلاف چراغ راهنمایی» (Ampelkoalition) می‌گویند؟ همکاری …",
        "antwort": "SPD، FDP و سبزها در یک دولت",
        "erklaerung": "رنگ‌های این سه حزب قرمز (SPD)، زرد (FDP) و سبز (سبزها) است؛ مثل رنگ‌های چراغ راهنمایی."
      }
    },
    {
      "id": "g104",
      "nummer": 104,
      "frage": "Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?",
      "antworten": [
        "Die Frau ist lange krank und arbeitsunfähig.",
        "Die Frau kam oft zu spät zur Arbeit.",
        "Die Frau erledigt private Sachen während der Arbeitszeit.",
        "Die Frau bekommt ein Kind und ihr Chef weiß das."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "زنی در آلمان کارش را از دست می‌دهد. چه چیزی نباید دلیل این اخراج باشد؟",
        "antwort": "این زن بچه‌دار می‌شود و رئیسش این را می‌داند.",
        "erklaerung": "زنان باردار در آلمان حمایت ویژه در برابر اخراج دارند (قانون حمایت از مادران)."
      }
    },
    {
      "id": "g105",
      "nummer": 105,
      "frage": "Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern in Deutschland?",
      "antworten": [
        "Sie helfen alten Menschen bei der Stimmabgabe in der Wahlkabine.",
        "Sie schreiben die Wahlbenachrichtigungen vor der Wahl.",
        "Sie geben Zwischenergebnisse an die Medien weiter.",
        "Sie zählen die Stimmen nach dem Ende der Wahl."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "وظیفهٔ کمک‌کنندگان انتخاباتی در آلمان چیست؟",
        "antwort": "آن‌ها پس از پایان انتخابات آرا را می‌شمارند.",
        "erklaerung": "کمک‌کنندگان انتخاباتی داوطلبانی هستند که در حوزهٔ رأی‌گیری کمک می‌کنند و در پایان آرا را می‌شمارند."
      }
    },
    {
      "id": "g106",
      "nummer": 106,
      "frage": "In Deutschland helfen ehrenamtliche Wahlhelferinnen und Wahlhelfer bei den Wahlen. Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern?",
      "antworten": [
        "Sie helfen Kindern und alten Menschen beim Wählen.",
        "Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.",
        "Sie geben Zwischenergebnisse an Journalisten weiter.",
        "Sie zählen die Stimmen nach dem Ende der Wahl."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در آلمان کمک‌کنندگان داوطلب در انتخابات کمک می‌کنند. یکی از وظایف آن‌ها چیست؟",
        "antwort": "آن‌ها پس از پایان انتخابات آرا را می‌شمارند.",
        "erklaerung": "رأی دادن مخفی است و کسی نباید در اتاقک رأی کمک کند؛ اما شمارش آرا کار کمک‌کنندگان است."
      }
    },
    {
      "id": "g107",
      "nummer": 107,
      "frage": "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
      "antworten": [
        "2 Jahre",
        "4 Jahre",
        "6 Jahre",
        "8 Jahre"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "بوندستاگ (مجلس فدرال) در آلمان برای چند سال انتخاب می‌شود؟",
        "antwort": "۴ سال",
        "erklaerung": "دورهٔ بوندستاگ چهار سال است؛ سپس انتخابات جدید برگزار می‌شود."
      }
    },
    {
      "id": "g108",
      "nummer": 108,
      "frage": "Bei einer Bundestagswahl in Deutschland darf jede/jeder wählen, die/der …",
      "antworten": [
        "in der Bundesrepublik Deutschland wohnt und wählen möchte.",
        "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.",
        "seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.",
        "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در انتخابات بوندستاگ در آلمان هر کسی می‌تواند رأی بدهد که …",
        "antwort": "شهروند جمهوری فدرال آلمان باشد و دست‌کم ۱۸ سال داشته باشد.",
        "erklaerung": "برای رأی دادن در انتخابات بوندستاگ تابعیت آلمان و سن دست‌کم ۱۸ سال لازم است."
      }
    },
    {
      "id": "g109",
      "nummer": 109,
      "frage": "Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?",
      "antworten": [
        "alle drei Jahre",
        "alle vier Jahre",
        "alle fünf Jahre",
        "alle sechs Jahre"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "معمولاً هر چند وقت یک‌بار در آلمان انتخابات بوندستاگ برگزار می‌شود؟",
        "antwort": "هر چهار سال",
        "erklaerung": "بوندستاگ برای چهار سال انتخاب می‌شود؛ پس انتخابات معمولاً هر چهار سال است."
      }
    },
    {
      "id": "g110",
      "nummer": 110,
      "frage": "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
      "antworten": [
        "2 Jahre",
        "3 Jahre",
        "4 Jahre",
        "5 Jahre"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "بوندستاگ (مجلس فدرال) در آلمان برای چند سال انتخاب می‌شود؟",
        "antwort": "۴ سال",
        "erklaerung": "دورهٔ قانون‌گذاری بوندستاگ چهار سال است."
      }
    },
    {
      "id": "g111",
      "nummer": 111,
      "frage": "Welche Handlungen mit Bezug auf den Staat Israel sind in Deutschland verboten?",
      "antworten": [
        "die Politik Israels öffentlich kritisieren",
        "das Aufhängen einer israelischen Flagge auf dem Privatgrundstück",
        "eine Diskussion über die Politik Israels",
        "der öffentliche Aufruf zur Vernichtung Israels"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "کدام کارها در ارتباط با کشور اسرائیل در آلمان ممنوع است؟",
        "antwort": "فراخوان علنی برای نابودی اسرائیل",
        "erklaerung": "انتقاد از سیاست اسرائیل مجاز است، اما فراخوان به نابودی یک کشور یا تحریک به نفرت جرم است."
      }
    },
    {
      "id": "g112",
      "nummer": 112,
      "frage": "Die Wahlen in Deutschland sind …",
      "antworten": [
        "speziell.",
        "geheim.",
        "berufsbezogen.",
        "geschlechtsabhängig."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "انتخابات در آلمان … است.",
        "antwort": "مخفی",
        "erklaerung": "هر کس تنها و در اتاقک رأی، بدون این‌که دیگران ببینند، رأی می‌دهد."
      }
    },
    {
      "id": "g113",
      "nummer": 113,
      "frage": "Wahlen in Deutschland gewinnt die Partei, die …",
      "antworten": [
        "die meisten Stimmen bekommt.",
        "die meisten Männer mehrheitlich gewählt haben.",
        "die meisten Stimmen bei den Arbeiterinnen/Arbeitern bekommen hat.",
        "die meisten Erststimmen für ihre Kanzlerkandidatin/ihren Kanzlerkandidaten erhalten hat."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "در انتخابات آلمان حزبی برنده می‌شود که …",
        "antwort": "بیشترین رأی را به دست آورد.",
        "erklaerung": "در دموکراسی حزبی که بیشترین رأی را بگیرد برندهٔ انتخابات است؛ هر رأی ارزش برابر دارد."
      }
    },
    {
      "id": "g114",
      "nummer": 114,
      "frage": "An demokratischen Wahlen in Deutschland teilzunehmen ist …",
      "antworten": [
        "eine Pflicht.",
        "ein Recht.",
        "ein Zwang.",
        "eine Last."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "شرکت در انتخابات دموکراتیک در آلمان … است.",
        "antwort": "یک حق",
        "erklaerung": "در آلمان رأی دادن اجباری نیست؛ هر شهروند حق دارد رأی بدهد، اما مجبور نیست."
      }
    },
    {
      "id": "g115",
      "nummer": 115,
      "frage": "Was bedeutet \"aktives Wahlrecht\" in Deutschland?",
      "antworten": [
        "Man kann gewählt werden.",
        "Man muss wählen gehen.",
        "Man kann wählen.",
        "Man muss zur Auszählung der Stimmen gehen."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "«حق رأی فعال» در آلمان یعنی چه؟",
        "antwort": "می‌توان رأی داد.",
        "erklaerung": "حق رأی فعال یعنی حق رأی دادن. حق انتخاب شدن را «حق رأی منفعل» می‌گویند."
      }
    },
    {
      "id": "g116",
      "nummer": 116,
      "frage": "Wenn Sie bei einer Bundestagswahl in Deutschland wählen dürfen, heißt das …",
      "antworten": [
        "aktive Wahlkampagne.",
        "aktives Wahlverfahren.",
        "aktiver Wahlkampf.",
        "aktives Wahlrecht."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "اگر شما در انتخابات بوندستاگ در آلمان اجازهٔ رأی دادن داشته باشید، به آن … می‌گویند.",
        "antwort": "حق رأی فعال",
        "erklaerung": "حق رأی فعال یعنی حق رأی دادن در انتخابات."
      }
    },
    {
      "id": "g117",
      "nummer": 117,
      "frage": "Wie viel Prozent der Zweitstimmen müssen Parteien mindestens bekommen, um in den Deutschen Bundestag gewählt zu werden?",
      "antworten": [
        "3%",
        "4%",
        "5%",
        "6%"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "احزاب برای ورود به بوندستاگ دست‌کم چند درصد از آرای دوم را باید به دست آورند؟",
        "antwort": "۵ درصد",
        "erklaerung": "این قاعده «آستانهٔ ۵ درصد» نام دارد و از ورود احزاب خیلی کوچک به پارلمان جلوگیری می‌کند."
      }
    },
    {
      "id": "g118",
      "nummer": 118,
      "frage": "Wer darf bei den rund 40 jüdischen Makkabi-Sportvereinen Mitglied werden?",
      "antworten": [
        "nur Deutsche",
        "nur Israelis",
        "nur religiöse Menschen",
        "alle Menschen"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "چه کسانی می‌توانند عضو حدود ۴۰ باشگاه ورزشی یهودی «مکابی» شوند؟",
        "antwort": "همهٔ مردم",
        "erklaerung": "باشگاه‌های مکابی برای همه باز هستند، صرف‌نظر از دین یا ملیت."
      }
    },
    {
      "id": "g119",
      "nummer": 119,
      "frage": "Wahlen in Deutschland sind frei. Was bedeutet das?",
      "antworten": [
        "Alle verurteilten Straftäterinnen/Straftäter dürfen nicht wählen.",
        "Wenn ich wählen gehen möchte, muss meine Arbeitgeberin/mein Arbeitgeber mir frei geben.",
        "Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.",
        "Ich kann frei entscheiden, wo ich wählen gehen möchte."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "انتخابات در آلمان آزاد است. این یعنی چه؟",
        "antwort": "هر کس بدون اجبار تصمیم می‌گیرد که آیا رأی بدهد و به چه کسی رأی بدهد.",
        "erklaerung": "آزاد بودن انتخابات یعنی هیچ‌کس نباید رأی‌دهنده را تحت فشار بگذارد."
      }
    },
    {
      "id": "g120",
      "nummer": 120,
      "frage": "Das Wahlsystem in Deutschland ist ein …",
      "antworten": [
        "Zensuswahlrecht.",
        "Dreiklassenwahlrecht.",
        "Mehrheits- und Verhältniswahlrecht.",
        "allgemeines Männerwahlrecht."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "نظام انتخاباتی آلمان یک … است.",
        "antwort": "نظام ترکیبی اکثریتی و تناسبی",
        "erklaerung": "با رأی اول نامزد حوزه (اکثریتی) و با رأی دوم حزب (تناسبی) انتخاب می‌شود."
      }
    },
    {
      "id": "g121",
      "nummer": 121,
      "frage": "Eine Partei möchte in den Deutschen Bundestag. Sie muss aber einen Mindestanteil an Wählerstimmen haben. Das heißt …",
      "antworten": [
        "5%-Hürde.",
        "Zulassungsgrenze.",
        "Basiswert.",
        "Richtlinie."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "حزبی می‌خواهد وارد بوندستاگ شود، اما باید حداقل سهمی از آرا را داشته باشد. به این … می‌گویند.",
        "antwort": "آستانهٔ ۵ درصد (5%-Hürde)",
        "erklaerung": "حزبی که کمتر از ۵ درصد آرای دوم بگیرد، معمولاً به بوندستاگ راه نمی‌یابد."
      }
    },
    {
      "id": "g122",
      "nummer": 122,
      "frage": "Welchem Grundsatz unterliegen Wahlen in Deutschland? Wahlen in Deutschland sind …",
      "antworten": [
        "frei, gleich, geheim.",
        "offen, sicher, frei.",
        "geschlossen, gleich, sicher.",
        "sicher, offen, freiwillig."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "انتخابات در آلمان تابع کدام اصل است؟ انتخابات در آلمان …",
        "antwort": "آزاد، برابر و مخفی است.",
        "erklaerung": "قانون اساسی می‌گوید انتخابات همگانی، مستقیم، آزاد، برابر و مخفی است."
      }
    },
    {
      "id": "g123",
      "nummer": 123,
      "frage": "Was ist in Deutschland die \"5%-Hürde\"?",
      "antworten": [
        "Abstimmungsregelung im Bundestag für kleine Parteien",
        "Anwesenheitskontrolle im Bundestag für Abstimmungen",
        "Mindestanteil an Wählerstimmen, um ins Parlament zu kommen",
        "Anwesenheitskontrolle im Bundesrat für Abstimmungen"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "«آستانهٔ ۵ درصد» در آلمان چیست؟",
        "antwort": "حداقل سهم آرا برای ورود به پارلمان",
        "erklaerung": "یک حزب باید دست‌کم ۵ درصد آرای دوم را بگیرد تا وارد پارلمان شود."
      }
    },
    {
      "id": "g124",
      "nummer": 124,
      "frage": "Die Bundestagswahl in Deutschland ist die Wahl …",
      "antworten": [
        "der Bundeskanzlerin/des Bundeskanzlers.",
        "der Parlamente der Länder.",
        "des Parlaments für Deutschland.",
        "der Bundespräsidentin/des Bundespräsidenten."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "انتخابات بوندستاگ در آلمان انتخابِ … است.",
        "antwort": "پارلمان کل آلمان",
        "erklaerung": "در انتخابات بوندستاگ مردم نمایندگان پارلمان فدرال را انتخاب می‌کنند، نه صدراعظم را."
      }
    },
    {
      "id": "g125",
      "nummer": 125,
      "frage": "In einer Demokratie ist eine Funktion von regelmäßigen Wahlen, …",
      "antworten": [
        "die Bürgerinnen und Bürger zu zwingen, ihre Stimme abzugeben.",
        "nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.",
        "im Land bestehende Gesetze beizubehalten.",
        "den Armen mehr Macht zu geben."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در دموکراسی، یکی از کارکردهای انتخابات منظم این است که …",
        "antwort": "طبق خواست اکثریت رأی‌دهندگان، تغییر دولت ممکن شود.",
        "erklaerung": "با انتخابات مردم می‌توانند دولت را بدون خشونت عوض کنند."
      }
    },
    {
      "id": "g126",
      "nummer": 126,
      "frage": "Was bekommen wahlberechtigte Bürgerinnen und Bürger in Deutschland vor einer Wahl?",
      "antworten": [
        "eine Wahlbenachrichtigung von der Gemeinde",
        "eine Wahlerlaubnis von der Bundespräsidentin/von dem Bundespräsidenten",
        "eine Benachrichtigung von der Bundesversammlung",
        "eine Benachrichtigung vom Pfarramt"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "شهروندان دارای حق رأی در آلمان پیش از انتخابات چه چیزی دریافت می‌کنند؟",
        "antwort": "یک اطلاعیهٔ انتخاباتی از شهرداری",
        "erklaerung": "شهرداری چند هفته پیش از انتخابات نامه‌ای می‌فرستد که محل و زمان رأی‌گیری در آن نوشته شده است."
      }
    },
    {
      "id": "g127",
      "nummer": 127,
      "frage": "Warum gibt es die 5%-Hürde im Wahlgesetz der Bundesrepublik Deutschland? Es gibt sie, weil …",
      "antworten": [
        "die Programme von vielen kleinen Parteien viele Gemeinsamkeiten haben.",
        "die Bürgerinnen und Bürger bei vielen kleinen Parteien die Orientierung verlieren können.",
        "viele kleine Parteien die Regierungsbildung erschweren.",
        "die kleinen Parteien nicht so viel Geld haben, um die Politikerinnen und Politiker zu bezahlen."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "چرا در قانون انتخابات آلمان آستانهٔ ۵ درصد وجود دارد؟ چون …",
        "antwort": "احزاب کوچک زیاد، تشکیل دولت را دشوار می‌کنند.",
        "erklaerung": "اگر احزاب بسیار زیادی در پارلمان باشند، تشکیل اکثریت سخت می‌شود؛ تجربهٔ جمهوری وایمار این را نشان داد."
      }
    },
    {
      "id": "g128",
      "nummer": 128,
      "frage": "Parlamentsmitglieder, die von den Bürgerinnen und Bürgern gewählt werden, nennt man …",
      "antworten": [
        "Abgeordnete.",
        "Kanzlerinnen/Kanzler.",
        "Botschafterinnen/Botschafter.",
        "Ministerpräsidentinnen/Ministerpräsidenten."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "به اعضای پارلمان که توسط شهروندان انتخاب می‌شوند، … می‌گویند.",
        "antwort": "نماینده (Abgeordnete)",
        "erklaerung": "نمایندگان مردم را در پارلمان نمایندگی می‌کنند و قوانین را تصویب می‌کنند."
      }
    },
    {
      "id": "g129",
      "nummer": 129,
      "frage": "Vom Volk gewählt wird in Deutschland …",
      "antworten": [
        "die Bundeskanzlerin/der Bundeskanzler.",
        "die Ministerpräsidentin/der Ministerpräsident eines Bundeslandes.",
        "der Bundestag.",
        "die Bundespräsidentin/der Bundespräsident."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه کسی یا چه چیزی را مردم انتخاب می‌کنند؟",
        "antwort": "بوندستاگ (مجلس فدرال)",
        "erklaerung": "مردم نمایندگان بوندستاگ را مستقیم انتخاب می‌کنند. صدراعظم و رئیس‌جمهور را نهادهای دیگر انتخاب می‌کنند."
      }
    },
    {
      "id": "g130",
      "nummer": 130,
      "frage": "Welcher Stimmzettel wäre bei einer Bundestagswahl gültig?",
      "antworten": [
        "1",
        "2",
        "3",
        "4"
      ],
      "richtig": 0,
      "bild": "bilder/g130.png",
      "bildQuelle": "In Anlehnung an Bundeswahlordnung (BWO), Anlage 26",
      "fa": {
        "frage": "کدام برگهٔ رأی در انتخابات بوندستاگ معتبر است؟",
        "antwort": "برگهٔ شمارهٔ ۱",
        "erklaerung": "هر رأی‌دهنده دقیقاً یک رأی اول (ستون چپ) و یک رأی دوم (ستون راست) دارد. فقط در برگهٔ ۱ در هر ستون یک ضربدر است."
      }
    },
    {
      "id": "g131",
      "nummer": 131,
      "frage": "In Deutschland ist eine Bürgermeisterin/ein Bürgermeister …",
      "antworten": [
        "die Leiterin/der Leiter einer Schule.",
        "die Chefin/der Chef einer Bank.",
        "das Oberhaupt einer Gemeinde.",
        "die/der Vorsitzende einer Partei."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در آلمان شهردار (Bürgermeister) … است.",
        "antwort": "رئیس یک شهر یا روستا (گماینده)",
        "erklaerung": "شهردار ادارهٔ شهر یا روستا را رهبری می‌کند و در بیشتر ایالت‌ها مستقیم توسط مردم انتخاب می‌شود."
      }
    },
    {
      "id": "g132",
      "nummer": 132,
      "frage": "Viele Menschen in Deutschland arbeiten in ihrer Freizeit ehrenamtlich. Was bedeutet das?",
      "antworten": [
        "Sie arbeiten als Soldatinnen/Soldaten.",
        "Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.",
        "Sie arbeiten in der Bundesregierung.",
        "Sie arbeiten in einem Krankenhaus und verdienen dabei Geld."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "بسیاری از مردم آلمان در وقت آزادشان «افتخاری» کار می‌کنند. این یعنی چه؟",
        "antwort": "آن‌ها داوطلبانه و بدون دستمزد در انجمن‌ها و سازمان‌ها کار می‌کنند.",
        "erklaerung": "کار داوطلبانه (Ehrenamt) مثلاً در باشگاه ورزشی، آتش‌نشانی داوطلب یا کمک به همسایگان رایج است."
      }
    },
    {
      "id": "g133",
      "nummer": 133,
      "frage": "Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt?",
      "antworten": [
        "Der Ehemann wählt für seine Frau mit.",
        "Man kann durch Briefwahl seine Stimme abgeben.",
        "Man kann am Wahltag telefonisch seine Stimme abgeben.",
        "Kinder ab dem Alter von 14 Jahren dürfen wählen."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در انتخابات بوندستاگ و لندتاگ در آلمان چه چیزی مجاز است؟",
        "antwort": "می‌توان با رأی پستی (Briefwahl) رأی داد.",
        "erklaerung": "هر کس می‌تواند پیش از انتخابات درخواست رأی پستی کند. رأی دادن به جای دیگری یا تلفنی مجاز نیست."
      }
    },
    {
      "id": "g134",
      "nummer": 134,
      "frage": "Man will die Buslinie abschaffen, mit der Sie immer zur Arbeit fahren. Was können Sie machen, um die Buslinie zu erhalten?",
      "antworten": [
        "Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.",
        "Ich werde Mitglied in einem Sportverein und trainiere Radfahren.",
        "Ich wende mich an das Finanzamt, weil ich als Steuerzahlerin/Steuerzahler ein Recht auf die Buslinie habe.",
        "Ich schreibe einen Brief an das Forstamt der Gemeinde."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "می‌خواهند خط اتوبوسی را که همیشه با آن سر کار می‌روید حذف کنند. برای حفظ آن چه کاری می‌توانید بکنید؟",
        "antwort": "در یک ابتکار شهروندی برای حفظ خط اتوبوس شرکت می‌کنم یا خودم یکی راه می‌اندازم.",
        "erklaerung": "شهروندان می‌توانند در «بورگر‌اینیسیاتیو» (ابتکار شهروندی) با هم برای یک هدف محلی فعالیت کنند."
      }
    },
    {
      "id": "g135",
      "nummer": 135,
      "frage": "Wen vertreten die Gewerkschaften in Deutschland?",
      "antworten": [
        "große Unternehmen",
        "kleine Unternehmen",
        "Selbstständige",
        "Arbeitnehmerinnen und Arbeitnehmer"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "سندیکاها در آلمان نمایندهٔ چه کسانی هستند؟",
        "antwort": "کارکنان (کارگران و کارمندان)",
        "erklaerung": "سندیکاها با کارفرمایان دربارهٔ دستمزد و شرایط کار مذاکره می‌کنند."
      }
    },
    {
      "id": "g136",
      "nummer": 136,
      "frage": "Sie gehen in Deutschland zum Arbeitsgericht bei …",
      "antworten": [
        "falscher Nebenkostenabrechnung.",
        "ungerechtfertigter Kündigung durch Ihre Chefin/Ihren Chef.",
        "Problemen mit den Nachbarinnen/Nachbarn.",
        "Schwierigkeiten nach einem Verkehrsunfall."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان در صورت … به دادگاه کار مراجعه می‌کنید.",
        "antwort": "اخراج ناعادلانه توسط رئیس‌تان",
        "erklaerung": "دادگاه کار به اختلاف‌های میان کارکنان و کارفرمایان رسیدگی می‌کند."
      }
    },
    {
      "id": "g137",
      "nummer": 137,
      "frage": "Welches Gericht ist in Deutschland bei Konflikten in der Arbeitswelt zuständig?",
      "antworten": [
        "das Familiengericht",
        "das Strafgericht",
        "das Arbeitsgericht",
        "das Amtsgericht"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در آلمان کدام دادگاه مسئول رسیدگی به اختلاف‌های محیط کار است؟",
        "antwort": "دادگاه کار (Arbeitsgericht)",
        "erklaerung": "برای اختلاف دربارهٔ حقوق، اخراج یا قرارداد کار، دادگاه کار مسئول است."
      }
    },
    {
      "id": "g138",
      "nummer": 138,
      "frage": "Was kann ich in Deutschland machen, wenn mir meine Arbeitgeberin/mein Arbeitgeber zu Unrecht gekündigt hat?",
      "antworten": [
        "weiterarbeiten und freundlich zur Chefin/zum Chef sein",
        "ein Mahnverfahren gegen die Arbeitgeberin/den Arbeitgeber führen",
        "Kündigungsschutzklage erheben",
        "die Arbeitgeberin/den Arbeitgeber bei der Polizei anzeigen"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در آلمان اگر کارفرما شما را به ناحق اخراج کند، چه کاری می‌توانید بکنید؟",
        "antwort": "شکایت حمایت در برابر اخراج (Kündigungsschutzklage) تنظیم کنم.",
        "erklaerung": "این شکایت باید ظرف سه هفته پس از دریافت نامهٔ اخراج در دادگاه کار ثبت شود."
      }
    },
    {
      "id": "g139",
      "nummer": 139,
      "frage": "Wann kommt es in Deutschland zu einem Prozess vor Gericht? Wenn jemand …",
      "antworten": [
        "zu einer anderen Religion übertritt.",
        "eine Straftat begangen hat und angeklagt wird.",
        "eine andere Meinung als die der Regierung vertritt.",
        "sein Auto falsch geparkt hat und es abgeschleppt wird."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه زمانی کار به دادگاه می‌کشد؟ وقتی کسی …",
        "antwort": "مرتکب جرم شده و علیه او کیفرخواست صادر شده است.",
        "erklaerung": "تغییر دین یا داشتن نظر متفاوت جرم نیست. پارک اشتباه هم معمولاً فقط جریمه دارد."
      }
    },
    {
      "id": "g140",
      "nummer": 140,
      "frage": "Was macht eine Schöffin/ein Schöffe in Deutschland? Sie/Er …",
      "antworten": [
        "entscheidet mit Richterinnen/Richtern über Schuld und Strafe.",
        "gibt Bürgerinnen/Bürgern rechtlichen Rat.",
        "stellt Urkunden aus.",
        "verteidigt die Angeklagte/den Angeklagten."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "یک قاضی افتخاری (Schöffe) در آلمان چه کار می‌کند؟ او …",
        "antwort": "همراه با قاضیان دربارهٔ گناه و مجازات تصمیم می‌گیرد.",
        "erklaerung": "شوفه‌ها شهروندان عادی هستند که به‌صورت افتخاری در دادگاه کیفری کنار قاضی حرفه‌ای رأی می‌دهند."
      }
    },
    {
      "id": "g141",
      "nummer": 141,
      "frage": "Wer berät in Deutschland Personen bei Rechtsfragen und vertritt sie vor Gericht?",
      "antworten": [
        "eine Rechtsanwältin/ein Rechtsanwalt",
        "eine Richterin/ein Richter",
        "eine Schöffin/ein Schöffe",
        "eine Staatsanwältin/ein Staatsanwalt"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه کسی به مردم در مسائل حقوقی مشاوره می‌دهد و آن‌ها را در دادگاه نمایندگی می‌کند؟",
        "antwort": "وکیل (Rechtsanwalt)",
        "erklaerung": "وکیل از منافع موکل خود دفاع می‌کند. قاضی بی‌طرف است و دادستان طرف اتهام است."
      }
    },
    {
      "id": "g142",
      "nummer": 142,
      "frage": "Was ist die Hauptaufgabe einer Richterin/eines Richters in Deutschland? Eine Richterin/ein Richter …",
      "antworten": [
        "vertritt Bürgerinnen und Bürger vor einem Gericht.",
        "arbeitet an einem Gericht und spricht Urteile.",
        "ändert Gesetze.",
        "betreut Jugendliche vor Gericht."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "وظیفهٔ اصلی قاضی در آلمان چیست؟ قاضی …",
        "antwort": "در دادگاه کار می‌کند و حکم صادر می‌کند.",
        "erklaerung": "قاضی مستقل و بی‌طرف است و بر اساس قانون رأی می‌دهد."
      }
    },
    {
      "id": "g143",
      "nummer": 143,
      "frage": "Eine Richterin/ein Richter in Deutschland gehört zur …",
      "antworten": [
        "Judikative.",
        "Exekutive.",
        "Operative.",
        "Legislative."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "قاضی در آلمان جزو … است.",
        "antwort": "قوهٔ قضائیه (Judikative)",
        "erklaerung": "سه قوه: مقننه (قانون‌گذاری)، مجریه (اجرا) و قضائیه (دادرسی). قاضی جزو قوهٔ قضائیه است."
      }
    },
    {
      "id": "g144",
      "nummer": 144,
      "frage": "Eine Richterin/ein Richter gehört in Deutschland zur …",
      "antworten": [
        "vollziehenden Gewalt.",
        "rechtsprechenden Gewalt.",
        "planenden Gewalt.",
        "gesetzgebenden Gewalt."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "قاضی در آلمان جزو … است.",
        "antwort": "قوهٔ دادرسی (rechtsprechende Gewalt)",
        "erklaerung": "«قوهٔ دادرسی» همان قوهٔ قضائیه است که دادگاه‌ها و قاضیان را در بر می‌گیرد."
      }
    },
    {
      "id": "g145",
      "nummer": 145,
      "frage": "In Deutschland wird die Staatsgewalt geteilt. Für welche Staatsgewalt arbeitet eine Richterin/ein Richter? Für die …",
      "antworten": [
        "Judikative",
        "Exekutive",
        "Presse",
        "Legislative"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "در آلمان قدرت حکومت تقسیم شده است. قاضی برای کدام قوه کار می‌کند؟ برای …",
        "antwort": "قوهٔ قضائیه (Judikative)",
        "erklaerung": "تقسیم قوا مانع تمرکز قدرت می‌شود. دادگاه‌ها مستقل از دولت و پارلمان کار می‌کنند."
      }
    },
    {
      "id": "g146",
      "nummer": 146,
      "frage": "Wie nennt man in Deutschland ein Verfahren vor einem Gericht?",
      "antworten": [
        "Programm",
        "Prozedur",
        "Protokoll",
        "Prozess"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در آلمان به رسیدگی در دادگاه چه می‌گویند؟",
        "antwort": "دادرسی (Prozess)",
        "erklaerung": "به جریان یک پرونده در دادگاه «پروسس» می‌گویند."
      }
    },
    {
      "id": "g147",
      "nummer": 147,
      "frage": "Was ist die Arbeit einer Richterin/eines Richters in Deutschland?",
      "antworten": [
        "Deutschland regieren",
        "Recht sprechen",
        "Pläne erstellen",
        "Gesetze erlassen"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "کار قاضی در آلمان چیست؟",
        "antwort": "دادرسی و صدور حکم (Recht sprechen)",
        "erklaerung": "قاضی حکومت نمی‌کند و قانون وضع نمی‌کند؛ کار او قضاوت بر اساس قانون است."
      }
    },
    {
      "id": "g148",
      "nummer": 148,
      "frage": "Was ist eine Aufgabe der Polizei in Deutschland?",
      "antworten": [
        "das Land zu verteidigen",
        "die Bürgerinnen und Bürger abzuhören",
        "die Gesetze zu beschließen",
        "die Einhaltung von Gesetzen zu überwachen"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "یکی از وظایف پلیس در آلمان چیست؟",
        "antwort": "نظارت بر رعایت قوانین",
        "erklaerung": "پلیس جزو قوهٔ مجریه است و از امنیت و نظم عمومی محافظت می‌کند. دفاع از کشور کار ارتش است."
      }
    },
    {
      "id": "g149",
      "nummer": 149,
      "frage": "Was ist ein Beispiel für antisemitisches Verhalten?",
      "antworten": [
        "ein jüdisches Fest besuchen",
        "die israelische Regierung kritisieren",
        "den Holocaust leugnen",
        "gegen Juden Fußball spielen."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "نمونه‌ای از رفتار یهودستیزانه کدام است؟",
        "antwort": "انکار هولوکاست",
        "erklaerung": "انکار قتل‌عام یهودیان یهودستیزی است و در آلمان جرم محسوب می‌شود."
      }
    },
    {
      "id": "g150",
      "nummer": 150,
      "frage": "Eine Gerichtsschöffin/ein Gerichtsschöffe in Deutschland ist …",
      "antworten": [
        "die Stellvertreterin/der Stellvertreter des Stadtoberhaupts.",
        "eine ehrenamtliche Richterin/ein ehrenamtlicher Richter.",
        "ein Mitglied eines Gemeinderats.",
        "eine Person, die Jura studiert hat."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "یک «شوفهٔ دادگاه» (Gerichtsschöffe) در آلمان … است.",
        "antwort": "یک قاضی افتخاری (داوطلب)",
        "erklaerung": "شوفه‌ها شهروندانی بدون تحصیلات حقوقی هستند که به‌صورت افتخاری در دادگاه همراه قاضیان رأی می‌دهند."
      }
    },
    {
      "id": "g151",
      "nummer": 151,
      "frage": "Wer baute die Mauer in Berlin?",
      "antworten": [
        "Großbritannien",
        "die DDR",
        "die Bundesrepublik Deutschland",
        "die USA"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "چه کسی دیوار برلین را ساخت؟",
        "antwort": "جمهوری دموکراتیک آلمان (DDR / آلمان شرقی)",
        "erklaerung": "دولت آلمان شرقی در سال ۱۹۶۱ دیوار را ساخت تا مردم نتوانند به غرب فرار کنند."
      }
    },
    {
      "id": "g152",
      "nummer": 152,
      "frage": "Wann waren die Nationalsozialisten mit Adolf Hitler in Deutschland an der Macht?",
      "antworten": [
        "1918 bis 1923",
        "1932 bis 1950",
        "1933 bis 1945",
        "1945 bis 1989"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "نازی‌ها به رهبری آدولف هیتلر چه زمانی در آلمان در قدرت بودند؟",
        "antwort": "۱۹۳۳ تا ۱۹۴۵",
        "erklaerung": "هیتلر در ژانویهٔ ۱۹۳۳ صدراعظم شد و حکومت نازی با شکست در جنگ در سال ۱۹۴۵ پایان یافت."
      }
    },
    {
      "id": "g153",
      "nummer": 153,
      "frage": "Was war am 8. Mai 1945?",
      "antworten": [
        "Tod Adolf Hitlers",
        "Beginn des Berliner Mauerbaus",
        "Wahl von Konrad Adenauer zum Bundeskanzler",
        "Ende des Zweiten Weltkriegs in Europa"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در ۸ مه ۱۹۴۵ چه اتفاقی افتاد؟",
        "antwort": "پایان جنگ جهانی دوم در اروپا",
        "erklaerung": "در ۸ مه ۱۹۴۵ آلمان بدون قید و شرط تسلیم شد و جنگ در اروپا تمام شد."
      }
    },
    {
      "id": "g154",
      "nummer": 154,
      "frage": "Wann war der Zweite Weltkrieg zu Ende?",
      "antworten": [
        "1933",
        "1945",
        "1949",
        "1961"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "جنگ جهانی دوم چه زمانی تمام شد؟",
        "antwort": "۱۹۴۵",
        "erklaerung": "جنگ جهانی دوم از ۱۹۳۹ تا ۱۹۴۵ طول کشید."
      }
    },
    {
      "id": "g155",
      "nummer": 155,
      "frage": "Wann waren die Nationalsozialisten in Deutschland an der Macht?",
      "antworten": [
        "1888 bis 1918",
        "1921 bis 1934",
        "1933 bis 1945",
        "1949 bis 1963"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "نازی‌ها چه زمانی در آلمان در قدرت بودند؟",
        "antwort": "۱۹۳۳ تا ۱۹۴۵",
        "erklaerung": "دوران نازی‌ها ۱۲ سال طول کشید؛ از به قدرت رسیدن هیتلر تا پایان جنگ."
      }
    },
    {
      "id": "g156",
      "nummer": 156,
      "frage": "In welchem Jahr wurde Hitler Reichskanzler?",
      "antworten": [
        "1923",
        "1927",
        "1933",
        "1936"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "هیتلر در چه سالی صدراعظم (رایش‌کانسلر) شد؟",
        "antwort": "۱۹۳۳",
        "erklaerung": "هیتلر در ۳۰ ژانویهٔ ۱۹۳۳ صدراعظم شد و خیلی زود دیکتاتوری برپا کرد."
      }
    },
    {
      "id": "g157",
      "nummer": 157,
      "frage": "Die Nationalsozialisten mit Adolf Hitler errichteten 1933 in Deutschland …",
      "antworten": [
        "eine Diktatur.",
        "einen demokratischen Staat.",
        "eine Monarchie.",
        "ein Fürstentum."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "نازی‌ها به رهبری آدولف هیتلر در سال ۱۹۳۳ در آلمان … برپا کردند.",
        "antwort": "یک دیکتاتوری",
        "erklaerung": "نازی‌ها احزاب دیگر را ممنوع، مخالفان را زندانی و آزادی‌ها را حذف کردند."
      }
    },
    {
      "id": "g158",
      "nummer": 158,
      "frage": "Das \"Dritte Reich\" war eine …",
      "antworten": [
        "Diktatur.",
        "Demokratie.",
        "Monarchie.",
        "Räterepublik."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "«رایش سوم» یک … بود.",
        "antwort": "دیکتاتوری",
        "erklaerung": "«رایش سوم» نامی است که نازی‌ها برای حکومت خود (۱۹۳۳ تا ۱۹۴۵) به کار می‌بردند."
      }
    },
    {
      "id": "g159",
      "nummer": 159,
      "frage": "Was gab es in Deutschland nicht während der Zeit des Nationalsozialismus?",
      "antworten": [
        "freie Wahlen",
        "Pressezensur",
        "willkürliche Verhaftungen",
        "Verfolgung von Juden"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "در دوران نازی‌ها چه چیزی در آلمان وجود نداشت؟",
        "antwort": "انتخابات آزاد",
        "erklaerung": "در دیکتاتوری نازی سانسور، بازداشت خودسرانه و آزار یهودیان وجود داشت، اما انتخابات آزاد نه."
      }
    },
    {
      "id": "g160",
      "nummer": 160,
      "frage": "Welcher Krieg dauerte von 1939 bis 1945?",
      "antworten": [
        "der Erste Weltkrieg",
        "der Zweite Weltkrieg",
        "der Vietnamkrieg",
        "der Golfkrieg"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "کدام جنگ از ۱۹۳۹ تا ۱۹۴۵ طول کشید؟",
        "antwort": "جنگ جهانی دوم",
        "erklaerung": "جنگ جهانی دوم با حملهٔ آلمان به لهستان در ۱۹۳۹ شروع شد و در ۱۹۴۵ پایان یافت."
      }
    },
    {
      "id": "g161",
      "nummer": 161,
      "frage": "Was kennzeichnete den NS-Staat? Eine Politik …",
      "antworten": [
        "des staatlichen Rassismus",
        "der Meinungsfreiheit",
        "der allgemeinen Religionsfreiheit",
        "der Entwicklung der Demokratie"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "ویژگی دولت نازی چه بود؟ سیاستِ …",
        "antwort": "نژادپرستی دولتی",
        "erklaerung": "نازی‌ها انسان‌ها را بر اساس «نژاد» تقسیم و یهودیان، روماها و دیگران را آزار و قتل‌عام کردند."
      }
    },
    {
      "id": "g162",
      "nummer": 162,
      "frage": "Claus Schenk Graf von Stauffenberg wurde bekannt durch …",
      "antworten": [
        "eine Goldmedaille bei den Olympischen Spielen 1936.",
        "den Bau des Reichstagsgebäudes.",
        "den Aufbau der Wehrmacht.",
        "das Attentat auf Hitler am 20. Juli 1944."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "کلاوس شنک گراف فون اشتاوفنبرگ به خاطر … معروف شد.",
        "antwort": "سوءقصد به هیتلر در ۲۰ ژوئیهٔ ۱۹۴۴",
        "erklaerung": "او افسری بود که با یک بمب تلاش کرد هیتلر را بکشد؛ سوءقصد شکست خورد و او اعدام شد."
      }
    },
    {
      "id": "g163",
      "nummer": 163,
      "frage": "In welchem Jahr zerstörten die Nationalsozialisten Synagogen und jüdische Geschäfte in Deutschland?",
      "antworten": [
        "1925",
        "1930",
        "1938",
        "1945"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "نازی‌ها در چه سالی کنیسه‌ها و مغازه‌های یهودیان را در آلمان ویران کردند؟",
        "antwort": "۱۹۳۸",
        "erklaerung": "در شب ۹ نوامبر ۱۹۳۸ (شب کریستال یا «پوگروم نوامبر») کنیسه‌ها و مغازه‌های یهودیان تخریب شد."
      }
    },
    {
      "id": "g164",
      "nummer": 164,
      "frage": "Was passierte am 9. November 1938 in Deutschland?",
      "antworten": [
        "Mit dem Angriff auf Polen beginnt der Zweite Weltkrieg.",
        "Die Nationalsozialisten verlieren eine Wahl und lösen den Reichstag auf.",
        "Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört.",
        "Hitler wird Reichspräsident und lässt alle Parteien verbieten."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در ۹ نوامبر ۱۹۳۸ در آلمان چه اتفاقی افتاد؟",
        "antwort": "مغازه‌ها و کنیسه‌های یهودیان توسط نازی‌ها و هوادارانشان ویران شد.",
        "erklaerung": "این رویداد «پوگروم نوامبر» نام دارد و یکی از مراحل مهم آزار یهودیان پیش از هولوکاست بود."
      }
    },
    {
      "id": "g165",
      "nummer": 165,
      "frage": "Wie hieß der erste Bundeskanzler der Bundesrepublik Deutschland?",
      "antworten": [
        "Konrad Adenauer",
        "Kurt Georg Kiesinger",
        "Helmut Schmidt",
        "Willy Brandt"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "نام اولین صدراعظم جمهوری فدرال آلمان چه بود؟",
        "antwort": "کنراد آدناور",
        "erklaerung": "آدناور از ۱۹۴۹ تا ۱۹۶۳ صدراعظم بود."
      }
    },
    {
      "id": "g166",
      "nummer": 166,
      "frage": "Bei welchen Demonstrationen in Deutschland riefen die Menschen \"Wir sind das Volk\"?",
      "antworten": [
        "beim Arbeiteraufstand 1953 in der DDR",
        "bei den Demonstrationen 1968 in der Bundesrepublik Deutschland",
        "bei den Anti-Atomkraft-Demonstrationen 1985 in der Bundesrepublik Deutschland",
        "bei den Montagsdemonstrationen 1989 in der DDR"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "مردم در کدام تظاهرات در آلمان فریاد می‌زدند «ما مردم هستیم»؟",
        "antwort": "در تظاهرات دوشنبه‌ها در سال ۱۹۸۹ در آلمان شرقی",
        "erklaerung": "این تظاهرات مسالمت‌آمیز به سقوط دولت آلمان شرقی و باز شدن دیوار برلین کمک کرد."
      }
    },
    {
      "id": "g167",
      "nummer": 167,
      "frage": "Welche Länder wurden nach dem Zweiten Weltkrieg in Deutschland als \"Alliierte Besatzungsmächte\" bezeichnet?",
      "antworten": [
        "Sowjetunion, Großbritannien, Polen, Schweden",
        "Frankreich, Sowjetunion, Italien, Japan",
        "USA, Sowjetunion, Spanien, Portugal",
        "USA, Sowjetunion, Großbritannien, Frankreich"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "پس از جنگ جهانی دوم کدام کشورها در آلمان «قدرت‌های اشغالگر متفق» نامیده می‌شدند؟",
        "antwort": "آمریکا، شوروی، بریتانیا، فرانسه",
        "erklaerung": "این چهار کشور پیروز جنگ، آلمان را به چهار منطقهٔ اشغالی تقسیم کردند."
      }
    },
    {
      "id": "g168",
      "nummer": 168,
      "frage": "Welches Land war keine \"Alliierte Besatzungsmacht\" in Deutschland?",
      "antworten": [
        "USA",
        "Sowjetunion",
        "Frankreich",
        "Japan"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "کدام کشور از «قدرت‌های اشغالگر متفق» در آلمان نبود؟",
        "antwort": "ژاپن",
        "erklaerung": "ژاپن در جنگ جهانی دوم متحد آلمان بود، نه از متفقین."
      }
    },
    {
      "id": "g169",
      "nummer": 169,
      "frage": "Wann wurde die Bundesrepublik Deutschland gegründet?",
      "antworten": [
        "1939",
        "1945",
        "1949",
        "1951"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "جمهوری فدرال آلمان چه زمانی تأسیس شد؟",
        "antwort": "۱۹۴۹",
        "erklaerung": "جمهوری فدرال آلمان در ۲۳ مه ۱۹۴۹ با اجرای قانون اساسی تأسیس شد."
      }
    },
    {
      "id": "g170",
      "nummer": 170,
      "frage": "Was gab es während der Zeit des Nationalsozialismus in Deutschland?",
      "antworten": [
        "das Verbot von Parteien",
        "das Recht zur freien Entfaltung der Persönlichkeit",
        "Pressefreiheit",
        "den Schutz der Menschenwürde"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "در دوران نازی‌ها در آلمان چه چیزی وجود داشت؟",
        "antwort": "ممنوعیت احزاب",
        "erklaerung": "نازی‌ها همهٔ احزاب دیگر را ممنوع کردند. آزادی مطبوعات و حمایت از کرامت انسان وجود نداشت."
      }
    },
    {
      "id": "g171",
      "nummer": 171,
      "frage": "Soziale Marktwirtschaft bedeutet, die Wirtschaft …",
      "antworten": [
        "steuert sich allein nach Angebot und Nachfrage.",
        "wird vom Staat geplant und gesteuert, Angebot und Nachfrage werden nicht berücksichtigt.",
        "richtet sich nach der Nachfrage im Ausland.",
        "richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "اقتصاد بازار اجتماعی یعنی اقتصاد …",
        "antwort": "بر اساس عرضه و تقاضا است، اما دولت برای تعادل اجتماعی تلاش می‌کند.",
        "erklaerung": "بازار آزاد است، اما دولت مثلاً با بیمه‌های اجتماعی و کمک‌هزینه‌ها از افراد ضعیف‌تر حمایت می‌کند."
      }
    },
    {
      "id": "g172",
      "nummer": 172,
      "frage": "In welcher Besatzungszone wurde die DDR gegründet? In der …",
      "antworten": [
        "amerikanischen Besatzungszone",
        "französischen Besatzungszone",
        "britischen Besatzungszone",
        "sowjetischen Besatzungszone"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "جمهوری دموکراتیک آلمان (DDR) در کدام منطقهٔ اشغالی تأسیس شد؟ در …",
        "antwort": "منطقهٔ اشغالی شوروی",
        "erklaerung": "آلمان شرقی در ۱۹۴۹ در منطقهٔ تحت اشغال شوروی تأسیس شد."
      }
    },
    {
      "id": "g173",
      "nummer": 173,
      "frage": "Die Bundesrepublik Deutschland ist ein Gründungsmitglied …",
      "antworten": [
        "des Nordatlantikpakts (NATO).",
        "der Vereinten Nationen (VN).",
        "der Europäischen Union (EU).",
        "des Warschauer Pakts."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "جمهوری فدرال آلمان عضو مؤسس … است.",
        "antwort": "اتحادیهٔ اروپا (EU)",
        "erklaerung": "آلمان از ابتدا در ساخت اتحادیهٔ اروپا (و پیش از آن جامعهٔ اقتصادی اروپا) نقش داشت. به ناتو در ۱۹۵۵ و به سازمان ملل در ۱۹۷۳ پیوست."
      }
    },
    {
      "id": "g174",
      "nummer": 174,
      "frage": "Wann wurde die DDR gegründet?",
      "antworten": [
        "1947",
        "1949",
        "1953",
        "1956"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "جمهوری دموکراتیک آلمان (DDR) چه زمانی تأسیس شد؟",
        "antwort": "۱۹۴۹",
        "erklaerung": "آلمان شرقی در ۷ اکتبر ۱۹۴۹ تأسیس شد؛ چند ماه پس از جمهوری فدرال آلمان."
      }
    },
    {
      "id": "g175",
      "nummer": 175,
      "frage": "Wie viele Besatzungszonen gab es in Deutschland nach dem Zweiten Weltkrieg?",
      "antworten": [
        "3",
        "4",
        "5",
        "6"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "پس از جنگ جهانی دوم در آلمان چند منطقهٔ اشغالی وجود داشت؟",
        "antwort": "۴",
        "erklaerung": "آمریکا، شوروی، بریتانیا و فرانسه هر کدام یک منطقه داشتند."
      }
    },
    {
      "id": "g176",
      "nummer": 176,
      "frage": "Wie waren die Besatzungszonen Deutschlands nach 1945 verteilt?",
      "antworten": [
        "1=Großbritannien, 2=Sowjetunion, 3=Frankreich, 4=USA",
        "1=Sowjetunion, 2=Großbritannien, 3=USA, 4=Frankreich",
        "1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich",
        "1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich"
      ],
      "richtig": 2,
      "bild": "bilder/g176.jpg",
      "fa": {
        "frage": "مناطق اشغالی آلمان پس از ۱۹۴۵ چگونه تقسیم شده بود؟",
        "antwort": "۱=بریتانیا، ۲=شوروی، ۳=آمریکا، ۴=فرانسه",
        "erklaerung": "بریتانیا در شمال‌غرب، شوروی در شرق، آمریکا در جنوب (از جمله بایرن) و فرانسه در جنوب‌غرب بود."
      }
    },
    {
      "id": "g177",
      "nummer": 177,
      "frage": "Welche deutsche Stadt wurde nach dem Zweiten Weltkrieg in vier Sektoren aufgeteilt?",
      "antworten": [
        "München",
        "Berlin",
        "Dresden",
        "Frankfurt/Oder"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "کدام شهر آلمان پس از جنگ جهانی دوم به چهار بخش تقسیم شد؟",
        "antwort": "برلین",
        "erklaerung": "برلین با این‌که در منطقهٔ شوروی بود، بین هر چهار قدرت اشغالگر تقسیم شد."
      }
    },
    {
      "id": "g178",
      "nummer": 178,
      "frage": "Vom Juni 1948 bis zum Mai 1949 wurden die Bürgerinnen und Bürger von West-Berlin durch eine Luftbrücke versorgt. Welcher Umstand war dafür verantwortlich?",
      "antworten": [
        "Für Frankreich war eine Versorgung der West-Berliner Bevölkerung mit dem Flugzeug kostengünstiger.",
        "Die amerikanischen Soldatinnen und Soldaten hatten beim Landtransport Angst vor Überfällen.",
        "Für Großbritannien war die Versorgung über die Luftbrücke schneller.",
        "Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "از ژوئن ۱۹۴۸ تا مه ۱۹۴۹ مردم برلین غربی از طریق «پل هوایی» تأمین می‌شدند. چه چیزی باعث این کار شد؟",
        "antwort": "شوروی همهٔ راه‌های زمینی را بست.",
        "erklaerung": "در محاصرهٔ برلین، متفقین غربی غذا و سوخت را با هواپیما به برلین غربی می‌بردند."
      }
    },
    {
      "id": "g179",
      "nummer": 179,
      "frage": "Wie endete der Zweite Weltkrieg in Europa offiziell?",
      "antworten": [
        "mit dem Tod Adolf Hitlers",
        "durch die bedingungslose Kapitulation Deutschlands",
        "mit dem Rückzug der Deutschen aus den besetzten Gebieten",
        "durch eine Revolution in Deutschland"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "جنگ جهانی دوم در اروپا رسماً چگونه پایان یافت؟",
        "antwort": "با تسلیم بی‌قید و شرط آلمان",
        "erklaerung": "ارتش آلمان در ۸ مه ۱۹۴۵ بدون قید و شرط تسلیم شد."
      }
    },
    {
      "id": "g180",
      "nummer": 180,
      "frage": "Der erste Bundeskanzler der Bundesrepublik Deutschland war …",
      "antworten": [
        "Ludwig Erhard.",
        "Willy Brandt.",
        "Konrad Adenauer.",
        "Gerhard Schröder."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "اولین صدراعظم جمهوری فدرال آلمان … بود.",
        "antwort": "کنراد آدناور",
        "erklaerung": "آدناور (حزب CDU) از ۱۹۴۹ تا ۱۹۶۳ صدراعظم آلمان غربی بود."
      }
    },
    {
      "id": "g181",
      "nummer": 181,
      "frage": "Was wollte Willy Brandt mit seinem Kniefall 1970 im ehemaligen jüdischen Ghetto in Warschau ausdrücken?",
      "antworten": [
        "Er hat sich den ehemaligen Alliierten unterworfen.",
        "Er bat Polen und die polnischen Juden um Vergebung.",
        "Er zeigte seine Demut vor dem Warschauer Pakt.",
        "Er sprach ein Gebet am Grab des Unbekannten Soldaten."
      ],
      "richtig": 1,
      "bild": "bilder/g181.jpg",
      "bildQuelle": "© Bundesregierung/Engelbert Reineke",
      "fa": {
        "frage": "ویلی برانت با زانو زدنش در سال ۱۹۷۰ در گتوی سابق یهودیان ورشو چه می‌خواست نشان دهد؟",
        "antwort": "او از لهستان و یهودیان لهستان طلب بخشش کرد.",
        "erklaerung": "این زانو زدن در برابر یادبود قیام گتوی ورشو نماد پذیرش مسئولیت آلمان برای جنایات نازی‌ها بود."
      }
    },
    {
      "id": "g182",
      "nummer": 182,
      "frage": "Wie heißt das jüdische Gebetshaus?",
      "antworten": [
        "Basilika",
        "Moschee",
        "Synagoge",
        "Kirche"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "عبادتگاه یهودیان چه نام دارد؟",
        "antwort": "کنیسه (Synagoge)",
        "erklaerung": "کنیسه محل عبادت یهودیان است؛ مسجد برای مسلمانان و کلیسا برای مسیحیان."
      }
    },
    {
      "id": "g183",
      "nummer": 183,
      "frage": "Wann war in der Bundesrepublik Deutschland das \"Wirtschaftswunder\"?",
      "antworten": [
        "40er Jahre",
        "50er Jahre",
        "70er Jahre",
        "80er Jahre"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "«معجزهٔ اقتصادی» در جمهوری فدرال آلمان چه زمانی بود؟",
        "antwort": "دههٔ ۱۹۵۰",
        "erklaerung": "پس از جنگ، اقتصاد آلمان غربی در دههٔ ۵۰ بسیار سریع رشد کرد."
      }
    },
    {
      "id": "g184",
      "nummer": 184,
      "frage": "Auf welcher rechtlichen Grundlage wurde der Staat Israel gegründet?",
      "antworten": [
        "eine Resolution der Vereinten Nationen",
        "ein Beschluss des Zionistenkongresses",
        "ein Vorschlag der Bundesregierung",
        "ein Vorschlag der UdSSR"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "کشور اسرائیل بر چه پایهٔ حقوقی تأسیس شد؟",
        "antwort": "یک قطعنامهٔ سازمان ملل متحد",
        "erklaerung": "در سال ۱۹۴۷ سازمان ملل طرح تقسیم فلسطین را تصویب کرد و اسرائیل در ۱۹۴۸ تأسیس شد."
      }
    },
    {
      "id": "g185",
      "nummer": 185,
      "frage": "Wofür stand der Ausdruck \"Eiserner Vorhang\"? Für die Abschottung …",
      "antworten": [
        "des Warschauer Pakts gegen den Westen",
        "Norddeutschlands gegen Süddeutschland",
        "Nazi-Deutschlands gegen die Alliierten",
        "Europas gegen die USA"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "اصطلاح «پردهٔ آهنین» نماد چه بود؟ نماد جدا شدنِ …",
        "antwort": "پیمان ورشو از غرب",
        "erklaerung": "در جنگ سرد، کشورهای کمونیستی اروپای شرقی مرزهای خود را به روی غرب بستند."
      }
    },
    {
      "id": "g186",
      "nummer": 186,
      "frage": "Im Jahr 1953 gab es in der DDR einen Aufstand, an den lange Zeit in der Bundesrepublik Deutschland ein Feiertag erinnerte. Wann war das?",
      "antworten": [
        "1. Mai",
        "17. Juni",
        "20. Juli",
        "9. November"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در سال ۱۹۵۳ در آلمان شرقی قیامی رخ داد که مدت‌ها در آلمان غربی یک روز تعطیل یادآور آن بود. آن روز کی بود؟",
        "antwort": "۱۷ ژوئن",
        "erklaerung": "در ۱۷ ژوئن ۱۹۵۳ کارگران در آلمان شرقی قیام کردند و تانک‌های شوروی آن را سرکوب کردند."
      }
    },
    {
      "id": "g187",
      "nummer": 187,
      "frage": "Welcher deutsche Staat hatte eine schwarz-rot-goldene Flagge mit Hammer, Zirkel und Ährenkranz?",
      "antworten": [
        "Preußen",
        "Bundesrepublik Deutschland",
        "\"Drittes Reich\"",
        "DDR"
      ],
      "richtig": 3,
      "bild": "bilder/g187.jpg",
      "fa": {
        "frage": "کدام دولت آلمانی پرچم سیاه-قرمز-طلایی با چکش، پرگار و حلقهٔ خوشهٔ گندم داشت؟",
        "antwort": "جمهوری دموکراتیک آلمان (DDR)",
        "erklaerung": "پرچم آلمان شرقی همان رنگ‌های پرچم آلمان را داشت، به‌علاوهٔ نشان کارگران، روشنفکران و کشاورزان."
      }
    },
    {
      "id": "g188",
      "nummer": 188,
      "frage": "In welchem Jahr wurde die Mauer in Berlin gebaut?",
      "antworten": [
        "1953",
        "1956",
        "1959",
        "1961"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "دیوار برلین در چه سالی ساخته شد؟",
        "antwort": "۱۹۶۱",
        "erklaerung": "دیوار برلین در ۱۳ اوت ۱۹۶۱ ساخته شد و تا ۱۹۸۹ پابرجا بود."
      }
    },
    {
      "id": "g189",
      "nummer": 189,
      "frage": "Wann baute die DDR die Mauer in Berlin?",
      "antworten": [
        "1919",
        "1933",
        "1961",
        "1990"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "آلمان شرقی (DDR) دیوار برلین را چه زمانی ساخت؟",
        "antwort": "۱۹۶۱",
        "erklaerung": "آلمان شرقی دیوار را ساخت تا جلوی فرار مردم به غرب را بگیرد."
      }
    },
    {
      "id": "g190",
      "nummer": 190,
      "frage": "Was bedeutet die Abkürzung DDR?",
      "antworten": [
        "Dritter Deutscher Rundfunk",
        "Die Deutsche Republik",
        "Dritte Deutsche Republik",
        "Deutsche Demokratische Republik"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "مخفف DDR به چه معناست؟",
        "antwort": "جمهوری دموکراتیک آلمان (Deutsche Demokratische Republik)",
        "erklaerung": "آلمان شرقی از ۱۹۴۹ تا ۱۹۹۰ وجود داشت؛ با وجود نامش، دموکراسی نبود."
      }
    },
    {
      "id": "g191",
      "nummer": 191,
      "frage": "Wann wurde die Mauer in Berlin für alle geöffnet?",
      "antworten": [
        "1987",
        "1989",
        "1992",
        "1995"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "دیوار برلین چه زمانی به روی همه باز شد؟",
        "antwort": "۱۹۸۹",
        "erklaerung": "در ۹ نوامبر ۱۹۸۹ مرزها باز شد و مردم آزادانه از دیوار عبور کردند."
      }
    },
    {
      "id": "g192",
      "nummer": 192,
      "frage": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      "antworten": [
        "Brandenburg",
        "Bayern",
        "Saarland",
        "Hessen"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "کدام ایالت امروزی آلمان قبلاً جزو قلمرو آلمان شرقی بود؟",
        "antwort": "براندنبورگ",
        "erklaerung": "ایالت‌های شرقی عبارت‌اند از: براندنبورگ، مکلنبورگ-فورپومرن، زاکسن، زاکسن-آنهالت و تورینگن (و برلین شرقی)."
      }
    },
    {
      "id": "g193",
      "nummer": 193,
      "frage": "Von 1961 bis 1989 war Berlin …",
      "antworten": [
        "ohne Bürgermeister.",
        "ein eigener Staat.",
        "durch eine Mauer geteilt.",
        "nur mit dem Flugzeug erreichbar."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "از ۱۹۶۱ تا ۱۹۸۹ برلین …",
        "antwort": "با یک دیوار تقسیم شده بود.",
        "erklaerung": "دیوار برلین شهر را به دو بخش شرقی و غربی تقسیم می‌کرد."
      }
    },
    {
      "id": "g194",
      "nummer": 194,
      "frage": "Am 3. Oktober feiert man in Deutschland den Tag der Deutschen …",
      "antworten": [
        "Einheit.",
        "Nation.",
        "Bundesländer.",
        "Städte."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "در ۳ اکتبر در آلمان روز … آلمان جشن گرفته می‌شود.",
        "antwort": "وحدت (Einheit)",
        "erklaerung": "در ۳ اکتبر ۱۹۹۰ دو آلمان دوباره متحد شدند؛ این روز تعطیل رسمی است."
      }
    },
    {
      "id": "g195",
      "nummer": 195,
      "frage": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      "antworten": [
        "Hessen",
        "Sachsen-Anhalt",
        "Nordrhein-Westfalen",
        "Saarland"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "کدام ایالت امروزی آلمان قبلاً جزو قلمرو آلمان شرقی بود؟",
        "antwort": "زاکسن-آنهالت",
        "erklaerung": "زاکسن-آنهالت یکی از پنج ایالت جدید آلمان (ایالت‌های شرقی) است."
      }
    },
    {
      "id": "g196",
      "nummer": 196,
      "frage": "Warum nennt man die Zeit im Herbst 1989 in der DDR \"Die Wende\"? In dieser Zeit veränderte sich die DDR politisch …",
      "antworten": [
        "von einer Diktatur zur Demokratie.",
        "von einer liberalen Marktwirtschaft zum Sozialismus.",
        "von einer Monarchie zur Sozialdemokratie.",
        "von einem religiösen Staat zu einem kommunistischen Staat."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "چرا به پاییز ۱۹۸۹ در آلمان شرقی «چرخش» (Die Wende) می‌گویند؟ در این زمان آلمان شرقی از نظر سیاسی …",
        "antwort": "از دیکتاتوری به دموکراسی تغییر کرد.",
        "erklaerung": "پس از اعتراض‌های مسالمت‌آمیز، حکومت حزب واحد سقوط کرد و راه برای انتخابات آزاد باز شد."
      }
    },
    {
      "id": "g197",
      "nummer": 197,
      "frage": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      "antworten": [
        "Thüringen",
        "Hessen",
        "Bayern",
        "Bremen"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "کدام ایالت امروزی آلمان قبلاً جزو قلمرو آلمان شرقی بود؟",
        "antwort": "تورینگن",
        "erklaerung": "تورینگن در مرکز آلمان یکی از ایالت‌های شرقی است."
      }
    },
    {
      "id": "g198",
      "nummer": 198,
      "frage": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      "antworten": [
        "Bayern",
        "Niedersachsen",
        "Sachsen",
        "Baden-Württemberg"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "کدام ایالت امروزی آلمان قبلاً جزو قلمرو آلمان شرقی بود؟",
        "antwort": "زاکسن",
        "erklaerung": "زاکسن با شهرهای درسدن و لایپزیگ قبلاً جزو آلمان شرقی بود."
      }
    },
    {
      "id": "g199",
      "nummer": 199,
      "frage": "Mit der Abkürzung \"Stasi\" meinte man in der DDR …",
      "antworten": [
        "das Parlament.",
        "das Ministerium für Staatssicherheit.",
        "eine regierende Partei.",
        "das Ministerium für Volksbildung."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "منظور از مخفف «اشتازی» در آلمان شرقی چه بود؟",
        "antwort": "وزارت امنیت دولتی",
        "erklaerung": "اشتازی پلیس مخفی آلمان شرقی بود که مردم را جاسوسی و مخالفان را آزار می‌کرد."
      }
    },
    {
      "id": "g200",
      "nummer": 200,
      "frage": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      "antworten": [
        "Hessen",
        "Schleswig-Holstein",
        "Mecklenburg-Vorpommern",
        "Saarland"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "کدام ایالت امروزی آلمان قبلاً جزو قلمرو آلمان شرقی بود؟",
        "antwort": "مکلنبورگ-فورپومرن",
        "erklaerung": "مکلنبورگ-فورپومرن در شمال‌شرق آلمان، کنار دریای بالتیک، یکی از ایالت‌های شرقی است."
      }
    },
    {
      "id": "g201",
      "nummer": 201,
      "frage": "Welche der folgenden Auflistungen enthält nur Bundesländer, die zum Gebiet der früheren DDR gehörten?",
      "antworten": [
        "Niedersachsen, Nordrhein-Westfalen, Hessen, Schleswig-Holstein, Brandenburg",
        "Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen",
        "Bayern, Baden-Württemberg, Rheinland-Pfalz, Thüringen, Sachsen",
        "Sachsen, Thüringen, Hessen, Niedersachen, Brandenburg"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "کدام فهرست فقط ایالت‌هایی را دارد که جزو قلمرو آلمان شرقی سابق بودند؟",
        "antwort": "مکلنبورگ-فورپومرن، براندنبورگ، زاکسن، زاکسن-آنهالت، تورینگن",
        "erklaerung": "این پنج ایالت «ایالت‌های جدید» نامیده می‌شوند و در ۱۹۹۰ به جمهوری فدرال پیوستند."
      }
    },
    {
      "id": "g202",
      "nummer": 202,
      "frage": "Zu wem gehörte die DDR im \"Kalten Krieg\"?",
      "antworten": [
        "zu den Westmächten",
        "zum Warschauer Pakt",
        "zur NATO",
        "zu den blockfreien Staaten"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "آلمان شرقی در «جنگ سرد» به کدام بلوک تعلق داشت؟",
        "antwort": "پیمان ورشو",
        "erklaerung": "پیمان ورشو اتحاد نظامی کشورهای کمونیستی به رهبری شوروی بود؛ آلمان غربی عضو ناتو بود."
      }
    },
    {
      "id": "g203",
      "nummer": 203,
      "frage": "Wie hieß das Wirtschaftssystem der DDR?",
      "antworten": [
        "Marktwirtschaft",
        "Planwirtschaft",
        "Angebot und Nachfrage",
        "Kapitalismus"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "نظام اقتصادی آلمان شرقی چه نام داشت؟",
        "antwort": "اقتصاد برنامه‌ای (Planwirtschaft)",
        "erklaerung": "در آلمان شرقی دولت تعیین می‌کرد چه چیزی و به چه مقدار تولید شود."
      }
    },
    {
      "id": "g204",
      "nummer": 204,
      "frage": "Wie wurden die Bundesrepublik Deutschland und die DDR zu einem Staat?",
      "antworten": [
        "Die Bundesrepublik hat die DDR besetzt.",
        "Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten.",
        "Die westlichen Bundesländer sind der DDR beigetreten.",
        "Die DDR hat die Bundesrepublik Deutschland besetzt."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "جمهوری فدرال آلمان و آلمان شرقی چگونه یک کشور شدند؟",
        "antwort": "پنج ایالت شرقی امروزی به جمهوری فدرال آلمان پیوستند.",
        "erklaerung": "در ۳ اکتبر ۱۹۹۰ ایالت‌های آلمان شرقی به‌طور مسالمت‌آمیز به جمهوری فدرال ملحق شدند."
      }
    },
    {
      "id": "g205",
      "nummer": 205,
      "frage": "Mit dem Beitritt der DDR zur Bundesrepublik Deutschland gehören die neuen Bundesländer nun auch …",
      "antworten": [
        "zur Europäischen Union.",
        "zum Warschauer Pakt.",
        "zur OPEC.",
        "zur Europäischen Verteidigungsgemeinschaft."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "با پیوستن آلمان شرقی به جمهوری فدرال، ایالت‌های جدید اکنون جزو … نیز هستند.",
        "antwort": "اتحادیهٔ اروپا",
        "erklaerung": "چون آلمان عضو اتحادیهٔ اروپاست، ایالت‌های شرقی هم با وحدت جزو اتحادیهٔ اروپا شدند."
      }
    },
    {
      "id": "g206",
      "nummer": 206,
      "frage": "Woran erinnern die sogenannten „Stolpersteine“ in Deutschland?",
      "antworten": [
        "an berühmte deutsche Politikerinnen und Politiker",
        "an die Opfer des Nationalsozialismus",
        "an Verkehrstote",
        "an bekannte jüdische Musiker"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "«اشتولپراشتاین‌ها» (سنگ‌های لغزش) در آلمان یادآور چه کسانی هستند؟",
        "antwort": "قربانیان نازیسم",
        "erklaerung": "این‌ها پلاک‌های برنجی کوچکی در پیاده‌رو جلوی خانه‌های قربانیان نازی‌ها هستند که نام و سرنوشتشان روی آن‌ها نوشته شده است."
      }
    },
    {
      "id": "g207",
      "nummer": 207,
      "frage": "In welchem Militärbündnis war die DDR Mitglied?",
      "antworten": [
        "in der NATO",
        "im Rheinbund",
        "im Warschauer Pakt",
        "im Europabündnis"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "آلمان شرقی عضو کدام اتحاد نظامی بود؟",
        "antwort": "پیمان ورشو",
        "erklaerung": "پیمان ورشو اتحاد نظامی شوروی و کشورهای کمونیستی اروپای شرقی بود."
      }
    },
    {
      "id": "g208",
      "nummer": 208,
      "frage": "Was war die \"Stasi\"?",
      "antworten": [
        "der Geheimdienst im \"Dritten Reich\"",
        "eine berühmte deutsche Gedenkstätte",
        "der Geheimdienst der DDR",
        "ein deutscher Sportverein während des Zweiten Weltkrieges"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "«اشتازی» چه بود؟",
        "antwort": "سازمان اطلاعاتی (پلیس مخفی) آلمان شرقی",
        "erklaerung": "اشتازی مردم را زیر نظر داشت، مخالفان را آزار می‌داد و پرونده‌های زیادی دربارهٔ شهروندان جمع کرده بود."
      }
    },
    {
      "id": "g209",
      "nummer": 209,
      "frage": "Welches war das Wappen der Deutschen Demokratischen Republik?",
      "antworten": [
        "Bild 1",
        "Bild 2",
        "Bild 3",
        "Bild 4"
      ],
      "richtig": 3,
      "bild": "",
      "antwortBilder": [
        "bilder/g209-1.png",
        "bilder/g209-2.png",
        "bilder/g209-3.png",
        "bilder/g209-4.png"
      ],
      "fa": {
        "frage": "کدام تصویر نشان جمهوری دموکراتیک آلمان (DDR) بود؟",
        "antwort": "تصویر ۴ (چکش و پرگار با حلقهٔ خوشهٔ گندم)",
        "erklaerung": "نشان آلمان شرقی چکش (کارگران)، پرگار (روشنفکران) و خوشهٔ گندم (کشاورزان) بود. تصویر ۱ نشان امروزی آلمان است."
      }
    },
    {
      "id": "g210",
      "nummer": 210,
      "frage": "Was ereignete sich am 17. Juni 1953 in der DDR?",
      "antworten": [
        "der feierliche Beitritt zum Warschauer Pakt",
        "landesweite Streiks und ein Volksaufstand",
        "der 1. SED-Parteitag",
        "der erste Besuch Fidel Castros"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در ۱۷ ژوئن ۱۹۵۳ در آلمان شرقی چه اتفاقی افتاد؟",
        "antwort": "اعتصاب‌های سراسری و یک قیام مردمی",
        "erklaerung": "کارگران علیه شرایط کار و حکومت قیام کردند؛ ارتش شوروی قیام را سرکوب کرد."
      }
    },
    {
      "id": "g211",
      "nummer": 211,
      "frage": "Welcher Politiker steht für die \"Ostverträge\"?",
      "antworten": [
        "Helmut Kohl",
        "Willy Brandt",
        "Michail Gorbatschow",
        "Ludwig Erhard"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "کدام سیاستمدار نماد «قراردادهای شرقی» است؟",
        "antwort": "ویلی برانت",
        "erklaerung": "صدراعظم برانت در دههٔ ۷۰ با شوروی، لهستان و آلمان شرقی قراردادهای آشتی بست («سیاست شرقی»)."
      }
    },
    {
      "id": "g212",
      "nummer": 212,
      "frage": "Wie heißt Deutschland mit vollem Namen?",
      "antworten": [
        "Bundesstaat Deutschland",
        "Bundesländer Deutschland",
        "Bundesrepublik Deutschland",
        "Bundesbezirk Deutschland"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "نام کامل آلمان چیست؟",
        "antwort": "جمهوری فدرال آلمان (Bundesrepublik Deutschland)",
        "erklaerung": "نام رسمی کشور «بوندس‌رپوبلیک دویچلند» است."
      }
    },
    {
      "id": "g213",
      "nummer": 213,
      "frage": "Wie viele Einwohner hat Deutschland?",
      "antworten": [
        "70 Millionen",
        "78 Millionen",
        "84 Millionen",
        "90 Millionen"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "آلمان چند نفر جمعیت دارد؟",
        "antwort": "۸۴ میلیون",
        "erklaerung": "آلمان با حدود ۸۴ میلیون نفر پرجمعیت‌ترین کشور اتحادیهٔ اروپاست."
      }
    },
    {
      "id": "g214",
      "nummer": 214,
      "frage": "Welche Farben hat die deutsche Flagge?",
      "antworten": [
        "schwarz-rot-gold",
        "rot-weiß-schwarz",
        "schwarz-rot-grün",
        "schwarz-gelb-rot"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "پرچم آلمان چه رنگ‌هایی دارد؟",
        "antwort": "سیاه-قرمز-طلایی",
        "erklaerung": "پرچم آلمان سه نوار افقی سیاه، قرمز و طلایی دارد؛ این رنگ‌ها نماد جنبش دموکراسی قرن ۱۹ هستند."
      }
    },
    {
      "id": "g215",
      "nummer": 215,
      "frage": "Wer wird als \"Kanzler der Deutschen Einheit\" bezeichnet?",
      "antworten": [
        "Gerhard Schröder",
        "Helmut Kohl",
        "Konrad Adenauer",
        "Helmut Schmidt"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "چه کسی «صدراعظم وحدت آلمان» نامیده می‌شود؟",
        "antwort": "هلموت کهل",
        "erklaerung": "هلموت کهل در زمان وحدت دو آلمان در ۱۹۹۰ صدراعظم بود."
      }
    },
    {
      "id": "g216",
      "nummer": 216,
      "frage": "Welches Symbol ist im Plenarsaal des Deutschen Bundestages zu sehen?",
      "antworten": [
        "der Bundesadler",
        "die Fahne der Stadt Berlin",
        "der Reichsadler",
        "die Reichskrone"
      ],
      "richtig": 0,
      "bild": "bilder/g216.jpg",
      "bildQuelle": "© Deutscher Bundestag/Janine Schmitz",
      "fa": {
        "frage": "کدام نماد در تالار اصلی بوندستاگ دیده می‌شود؟",
        "antwort": "عقاب فدرال (Bundesadler)",
        "erklaerung": "عقاب فدرال بزرگ روی دیوار تالار بوندستاگ نصب است و به آن «مرغ چاق» هم می‌گویند."
      }
    },
    {
      "id": "g217",
      "nummer": 217,
      "frage": "In welchem Zeitraum gab es die Deutsche Demokratische Republik (DDR)?",
      "antworten": [
        "1919 bis 1927",
        "1933 bis 1945",
        "1945 bis 1961",
        "1949 bis 1990"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "جمهوری دموکراتیک آلمان (DDR) در چه دوره‌ای وجود داشت؟",
        "antwort": "۱۹۴۹ تا ۱۹۹۰",
        "erklaerung": "آلمان شرقی در ۱۹۴۹ تأسیس شد و با وحدت آلمان در ۱۹۹۰ پایان یافت."
      }
    },
    {
      "id": "g218",
      "nummer": 218,
      "frage": "Wie viele Bundesländer kamen bei der Wiedervereinigung 1990 zur Bundesrepublik Deutschland hinzu?",
      "antworten": [
        "4",
        "5",
        "6",
        "7"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در وحدت دوبارهٔ آلمان در ۱۹۹۰ چند ایالت به جمهوری فدرال اضافه شدند؟",
        "antwort": "۵",
        "erklaerung": "براندنبورگ، مکلنبورگ-فورپومرن، زاکسن، زاکسن-آنهالت و تورینگن اضافه شدند؛ برلین شرقی هم با برلین غربی یکی شد."
      }
    },
    {
      "id": "g219",
      "nummer": 219,
      "frage": "Die Bundesrepublik Deutschland hat die Grenzen von heute seit …",
      "antworten": [
        "1933",
        "1949",
        "1971",
        "1990"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "جمهوری فدرال آلمان مرزهای امروزی‌اش را از … دارد.",
        "antwort": "۱۹۹۰",
        "erklaerung": "با وحدت آلمان در ۱۹۹۰ مرزهای امروزی آلمان نهایی و به‌طور بین‌المللی تأیید شد."
      }
    },
    {
      "id": "g220",
      "nummer": 220,
      "frage": "Der 27. Januar ist in Deutschland ein offizieller Gedenktag. Woran erinnert dieser Tag?",
      "antworten": [
        "an das Ende des Zweiten Weltkrieges",
        "an die Verabschiedung des Grundgesetzes",
        "an die Wiedervereinigung Deutschlands",
        "an die Opfer des Nationalsozialismus (Tag der Befreiung des Vernichtungslagers Auschwitz)"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "۲۷ ژانویه در آلمان یک روز یادبود رسمی است. این روز یادآور چیست؟",
        "antwort": "قربانیان نازیسم (روز آزادی اردوگاه نابودی آشویتس)",
        "erklaerung": "در ۲۷ ژانویهٔ ۱۹۴۵ ارتش شوروی اردوگاه آشویتس را آزاد کرد؛ امروز این روز یادبود قربانیان هولوکاست است."
      }
    },
    {
      "id": "g221",
      "nummer": 221,
      "frage": "Deutschland ist Mitglied des Schengener Abkommens. Was bedeutet das?",
      "antworten": [
        "Deutsche können in viele Länder Europas ohne Passkontrolle reisen.",
        "Alle Menschen können ohne Personenkontrolle in Deutschland einreisen.",
        "Deutsche können ohne Passkontrolle in jedes Land reisen.",
        "Deutsche können in jedem Land mit dem Euro bezahlen."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "آلمان عضو پیمان شنگن است. این یعنی چه؟",
        "antwort": "آلمانی‌ها می‌توانند بدون کنترل گذرنامه به بسیاری از کشورهای اروپا سفر کنند.",
        "erklaerung": "میان کشورهای شنگن معمولاً کنترل مرزی ثابت وجود ندارد."
      }
    },
    {
      "id": "g222",
      "nummer": 222,
      "frage": "Welches Land ist ein Nachbarland von Deutschland?",
      "antworten": [
        "Ungarn",
        "Portugal",
        "Spanien",
        "Schweiz"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "کدام کشور همسایهٔ آلمان است؟",
        "antwort": "سوئیس",
        "erklaerung": "آلمان ۹ همسایه دارد: دانمارک، لهستان، چک، اتریش، سوئیس، فرانسه، لوکزامبورگ، بلژیک و هلند."
      }
    },
    {
      "id": "g223",
      "nummer": 223,
      "frage": "Welches Land ist ein Nachbarland von Deutschland?",
      "antworten": [
        "Rumänien",
        "Bulgarien",
        "Polen",
        "Griechenland"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "کدام کشور همسایهٔ آلمان است؟",
        "antwort": "لهستان",
        "erklaerung": "لهستان در شرق آلمان قرار دارد و مرز آن رودهای اودر و نایسه است."
      }
    },
    {
      "id": "g224",
      "nummer": 224,
      "frage": "Was bedeutet die Abkürzung EU?",
      "antworten": [
        "Europäische Unternehmen",
        "Europäische Union",
        "Einheitliche Union",
        "Euro Union"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "مخفف EU به چه معناست؟",
        "antwort": "اتحادیهٔ اروپا (Europäische Union)",
        "erklaerung": "اتحادیهٔ اروپا گروهی از کشورهای اروپایی است که با هم همکاری سیاسی و اقتصادی دارند. آلمان یکی از کشورهای بنیان‌گذار آن است."
      }
    },
    {
      "id": "g225",
      "nummer": 225,
      "frage": "In welchem anderen Land gibt es eine große deutschsprachige Bevölkerung?",
      "antworten": [
        "Tschechien",
        "Norwegen",
        "Spanien",
        "Österreich"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در کدام کشور دیگر جمعیت بزرگی آلمانی‌زبان هستند؟",
        "antwort": "اتریش",
        "erklaerung": "زبان رسمی اتریش آلمانی است. در سوئیس، لیختن‌اشتاین و لوکزامبورگ هم آلمانی صحبت می‌شود."
      }
    },
    {
      "id": "g226",
      "nummer": 226,
      "frage": "Welche ist die Flagge der Europäischen Union?",
      "antworten": [
        "Bild 1",
        "Bild 2",
        "Bild 3",
        "Bild 4"
      ],
      "richtig": 1,
      "bild": "",
      "antwortBilder": [
        "bilder/g226-1.png",
        "bilder/g226-2.png",
        "bilder/g226-3.png",
        "bilder/g226-4.png"
      ],
      "fa": {
        "frage": "کدام پرچم، پرچم اتحادیهٔ اروپاست؟",
        "antwort": "تصویر ۲ (ستاره‌های طلایی روی زمینهٔ آبی)",
        "erklaerung": "پرچم اتحادیهٔ اروپا ۱۲ ستارهٔ طلایی در یک دایره روی زمینهٔ آبی دارد. تصویر ۳ پرچم سازمان ملل است."
      }
    },
    {
      "id": "g227",
      "nummer": 227,
      "frage": "Welches Land ist ein Nachbarland von Deutschland?",
      "antworten": [
        "Finnland",
        "Dänemark",
        "Norwegen",
        "Schweden"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "کدام کشور همسایهٔ آلمان است؟",
        "antwort": "دانمارک",
        "erklaerung": "دانمارک در شمال آلمان قرار دارد و با ایالت شلسویگ-هولشتاین هم‌مرز است."
      }
    },
    {
      "id": "g228",
      "nummer": 228,
      "frage": "Wie wird der Beitritt der DDR zur Bundesrepublik Deutschland im Jahr 1990 allgemein genannt?",
      "antworten": [
        "NATO-Osterweiterung",
        "EU-Osterweiterung",
        "Deutsche Wiedervereinigung",
        "Europäische Gemeinschaft"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "پیوستن آلمان شرقی به جمهوری فدرال در سال ۱۹۹۰ معمولاً چه نامیده می‌شود؟",
        "antwort": "وحدت دوبارهٔ آلمان (Deutsche Wiedervereinigung)",
        "erklaerung": "در ۳ اکتبر ۱۹۹۰ آلمان پس از ۴۱ سال جدایی دوباره یک کشور شد."
      }
    },
    {
      "id": "g229",
      "nummer": 229,
      "frage": "Welches Land ist ein Nachbarland von Deutschland?",
      "antworten": [
        "Spanien",
        "Bulgarien",
        "Norwegen",
        "Luxemburg"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "کدام کشور همسایهٔ آلمان است؟",
        "antwort": "لوکزامبورگ",
        "erklaerung": "لوکزامبورگ در غرب آلمان، کنار ایالت‌های راینلاند-فالتس و زارلند قرار دارد."
      }
    },
    {
      "id": "g230",
      "nummer": 230,
      "frage": "Das Europäische Parlament wird regelmäßig gewählt, nämlich alle …",
      "antworten": [
        "5 Jahre.",
        "6 Jahre.",
        "7 Jahre.",
        "8 Jahre."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "پارلمان اروپا به‌طور منظم انتخاب می‌شود؛ یعنی هر …",
        "antwort": "۵ سال",
        "erklaerung": "انتخابات پارلمان اروپا هر پنج سال در همهٔ کشورهای عضو برگزار می‌شود."
      }
    },
    {
      "id": "g231",
      "nummer": 231,
      "frage": "Was bedeutet der Begriff \"europäische Integration\"?",
      "antworten": [
        "Damit sind amerikanische Einwanderinnen und Einwanderer in Europa gemeint.",
        "Der Begriff meint den Einwanderungsstopp nach Europa.",
        "Damit sind europäische Auswanderinnen und Auswanderer in den USA gemeint.",
        "Der Begriff meint den Zusammenschluss europäischer Staaten zur EU."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "اصطلاح «یکپارچگی اروپایی» به چه معناست؟",
        "antwort": "پیوستن کشورهای اروپایی به یکدیگر در قالب اتحادیهٔ اروپا",
        "erklaerung": "کشورهای اروپایی پس از جنگ جهانی دوم به‌تدریج با هم همکاری کردند تا صلح و رفاه را تضمین کنند."
      }
    },
    {
      "id": "g232",
      "nummer": 232,
      "frage": "Wer wird bei der Europawahl gewählt?",
      "antworten": [
        "die Europäische Kommission",
        "die Länder, die in die EU eintreten dürfen",
        "die Abgeordneten des Europäischen Parlaments",
        "die europäische Verfassung"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در انتخابات اروپا چه کسانی انتخاب می‌شوند؟",
        "antwort": "نمایندگان پارلمان اروپا",
        "erklaerung": "شهروندان اتحادیهٔ اروپا نمایندگان پارلمان اروپا را مستقیم انتخاب می‌کنند."
      }
    },
    {
      "id": "g233",
      "nummer": 233,
      "frage": "Welches Land ist ein Nachbarland von Deutschland?",
      "antworten": [
        "Tschechien",
        "Bulgarien",
        "Griechenland",
        "Portugal"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "کدام کشور همسایهٔ آلمان است؟",
        "antwort": "جمهوری چک",
        "erklaerung": "چک در شرق آلمان، کنار ایالت‌های بایرن و زاکسن قرار دارد."
      }
    },
    {
      "id": "g234",
      "nummer": 234,
      "frage": "Wo ist ein Sitz des Europäischen Parlaments?",
      "antworten": [
        "London",
        "Paris",
        "Berlin",
        "Straßburg"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "یکی از مقرهای پارلمان اروپا کجاست؟",
        "antwort": "استراسبورگ",
        "erklaerung": "جلسات اصلی پارلمان اروپا در استراسبورگ (فرانسه) برگزار می‌شود."
      }
    },
    {
      "id": "g235",
      "nummer": 235,
      "frage": "Der damalige französische Staatspräsident François Mitterrand und der damalige deutsche Bundeskanzler Helmut Kohl gedenken in Verdun gemeinsam der Toten beider Weltkriege. Welches Ziel der Europäischen Union wird bei diesem Treffen deutlich?",
      "antworten": [
        "Freundschaft zwischen England und Deutschland",
        "Reisefreiheit in alle Länder der EU",
        "Frieden und Sicherheit in den Ländern der EU",
        "einheitliche Feiertage in den Ländern der EU"
      ],
      "richtig": 2,
      "bild": "bilder/g235.jpg",
      "bildQuelle": "© Bundesregierung/Richard Schulze-Vorberg",
      "fa": {
        "frage": "فرانسوا میتران، رئیس‌جمهور وقت فرانسه، و هلموت کهل، صدراعظم وقت آلمان، در وردن با هم یاد کشته‌شدگان هر دو جنگ جهانی را گرامی می‌دارند. کدام هدف اتحادیهٔ اروپا در این دیدار آشکار می‌شود؟",
        "antwort": "صلح و امنیت در کشورهای اتحادیهٔ اروپا",
        "erklaerung": "آلمان و فرانسه بارها با هم جنگیده بودند. این دیدار در سال ۱۹۸۴ نماد آشتی و صلح در اروپاست."
      }
    },
    {
      "id": "g236",
      "nummer": 236,
      "frage": "Wie viele Mitgliedstaaten hat die EU heute?",
      "antworten": [
        "21",
        "23",
        "25",
        "27"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "اتحادیهٔ اروپا امروز چند کشور عضو دارد؟",
        "antwort": "۲۷",
        "erklaerung": "پس از خروج بریتانیا در سال ۲۰۲۰، اتحادیهٔ اروپا ۲۷ کشور عضو دارد."
      }
    },
    {
      "id": "g237",
      "nummer": 237,
      "frage": "2007 wurde das 50-jährige Jubiläum der \"Römischen Verträge\" gefeiert. Was war der Inhalt der Verträge?",
      "antworten": [
        "Beitritt Deutschlands zur NATO",
        "Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)",
        "Verpflichtung Deutschlands zu Reparationsleistungen",
        "Festlegung der Oder-Neiße-Linie als Ostgrenze"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در سال ۲۰۰۷ پنجاهمین سالگرد «پیمان‌های رم» جشن گرفته شد. محتوای این پیمان‌ها چه بود؟",
        "antwort": "تأسیس جامعهٔ اقتصادی اروپا (EWG)",
        "erklaerung": "در ۱۹۵۷ شش کشور از جمله آلمان در رم جامعهٔ اقتصادی اروپا را تأسیس کردند؛ پیش‌زمینهٔ اتحادیهٔ اروپا."
      }
    },
    {
      "id": "g238",
      "nummer": 238,
      "frage": "An welchen Orten arbeitet das Europäische Parlament?",
      "antworten": [
        "Paris, London und Den Haag",
        "Straßburg, Luxemburg und Brüssel",
        "Rom, Bern und Wien",
        "Bonn, Zürich und Mailand"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "پارلمان اروپا در کدام شهرها کار می‌کند؟",
        "antwort": "استراسبورگ، لوکزامبورگ و بروکسل",
        "erklaerung": "جلسات عمومی در استراسبورگ، کمیسیون‌ها در بروکسل و بخشی از اداره در لوکزامبورگ است."
      }
    },
    {
      "id": "g239",
      "nummer": 239,
      "frage": "Durch welche Verträge schloss sich die Bundesrepublik Deutschland mit anderen Staaten zur Europäischen Wirtschaftsgemeinschaft zusammen?",
      "antworten": [
        "durch die \"Hamburger Verträge\"",
        "durch die \"Römischen Verträge\"",
        "durch die \"Pariser Verträge\"",
        "durch die \"Londoner Verträge\""
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "جمهوری فدرال آلمان با کدام پیمان‌ها همراه با کشورهای دیگر جامعهٔ اقتصادی اروپا را تشکیل داد؟",
        "antwort": "با «پیمان‌های رم»",
        "erklaerung": "پیمان‌های رم در سال ۱۹۵۷ امضا شدند و جامعهٔ اقتصادی اروپا را بنیان گذاشتند."
      }
    },
    {
      "id": "g240",
      "nummer": 240,
      "frage": "Seit wann bezahlt man in Deutschland mit dem Euro in bar?",
      "antworten": [
        "1995",
        "1998",
        "2002",
        "2005"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "از چه زمانی در آلمان با یورو به‌صورت نقدی پرداخت می‌کنند؟",
        "antwort": "از سال ۲۰۰۲",
        "erklaerung": "از اول ژانویهٔ ۲۰۰۲ اسکناس و سکهٔ یورو جایگزین مارک آلمان شد."
      }
    },
    {
      "id": "g241",
      "nummer": 241,
      "frage": "Frau Seger bekommt ein Kind. Was muss sie tun, um Elterngeld zu erhalten?",
      "antworten": [
        "Sie muss an ihre Krankenkasse schreiben.",
        "Sie muss einen Antrag bei der Elterngeldstelle stellen.",
        "Sie muss nichts tun, denn sie bekommt automatisch Elterngeld.",
        "Sie muss das Arbeitsamt um Erlaubnis bitten."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "خانم زگر بچه‌دار می‌شود. برای دریافت «کمک‌هزینهٔ والدین» (Elterngeld) چه باید بکند؟",
        "antwort": "باید در ادارهٔ کمک‌هزینهٔ والدین (Elterngeldstelle) درخواست بدهد.",
        "erklaerung": "الترن‌گلد خودکار پرداخت نمی‌شود؛ باید پس از تولد فرزند درخواست داد."
      }
    },
    {
      "id": "g242",
      "nummer": 242,
      "frage": "Wer entscheidet, ob ein Kind in Deutschland in den Kindergarten geht?",
      "antworten": [
        "der Staat",
        "die Bundesländer",
        "die Eltern/die Erziehungsberechtigten",
        "die Schulen"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه کسی تصمیم می‌گیرد که کودک به مهدکودک برود یا نه؟",
        "antwort": "والدین / سرپرستان قانونی",
        "erklaerung": "رفتن به مهدکودک در آلمان اجباری نیست؛ والدین تصمیم می‌گیرند. اما مدرسه رفتن اجباری است."
      }
    },
    {
      "id": "g243",
      "nummer": 243,
      "frage": "Maik und Sybille wollen mit Freunden an ihrem deutschen Wohnort eine Demonstration auf der Straße abhalten. Was müssen sie vorher tun?",
      "antworten": [
        "Sie müssen die Demonstration anmelden.",
        "Sie müssen nichts tun. Man darf in Deutschland jederzeit überall demonstrieren.",
        "Sie können gar nichts tun, denn Demonstrationen sind in Deutschland grundsätzlich verboten.",
        "Maik und Sybille müssen einen neuen Verein gründen, weil nur Vereine demonstrieren dürfen."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "مایک و زیبیله می‌خواهند با دوستانشان در شهر محل زندگی‌شان در خیابان تظاهرات کنند. پیش از آن چه باید بکنند؟",
        "antwort": "باید تظاهرات را ثبت (اعلام) کنند.",
        "erklaerung": "آزادی تجمع یک حق بنیادی است، اما تظاهرات در فضای باز باید از قبل به ادارهٔ مربوطه اعلام شود."
      }
    },
    {
      "id": "g244",
      "nummer": 244,
      "frage": "Welchen Schulabschluss braucht man normalerweise, um an einer Universität in Deutschland ein Studium zu beginnen?",
      "antworten": [
        "das Abitur",
        "ein Diplom",
        "die Prokura",
        "eine Gesellenprüfung"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "برای شروع تحصیل در دانشگاه در آلمان معمولاً به کدام مدرک نیاز است؟",
        "antwort": "آبیتور (دیپلم کامل متوسطه)",
        "erklaerung": "آبیتور مدرک پایان دبیرستان (گیمنازیوم) است و اجازهٔ تحصیل در دانشگاه را می‌دهد."
      }
    },
    {
      "id": "g245",
      "nummer": 245,
      "frage": "Wer darf in Deutschland nicht als Paar zusammenleben?",
      "antworten": [
        "Hans (20 Jahre) und Marie (19 Jahre)",
        "Tom (20 Jahre) und Klaus (45 Jahre)",
        "Sofie (35 Jahre) und Lisa (40 Jahre)",
        "Anne (13 Jahre) und Tim (25 Jahre)"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه کسانی اجازه ندارند به‌عنوان زوج با هم زندگی کنند؟",
        "antwort": "آنه (۱۳ ساله) و تیم (۲۵ ساله)",
        "erklaerung": "آنه کودک است و قانون از کودکان در برابر روابط با بزرگسالان محافظت می‌کند. زوج‌های هم‌جنس یا با اختلاف سنی بزرگسال مجازند."
      }
    },
    {
      "id": "g246",
      "nummer": 246,
      "frage": "Ab welchem Alter ist man in Deutschland volljährig?",
      "antworten": [
        "16",
        "18",
        "19",
        "21"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان از چند سالگی به سن قانونی (بلوغ قانونی) می‌رسند؟",
        "antwort": "۱۸",
        "erklaerung": "از ۱۸ سالگی همهٔ حقوق و تکالیف یک بزرگسال را دارید، مثلاً بستن قرارداد بدون اجازهٔ والدین."
      }
    },
    {
      "id": "g247",
      "nummer": 247,
      "frage": "Eine Frau ist schwanger. Sie ist kurz vor und nach der Geburt ihres Kindes vom Gesetz besonders beschützt. Wie heißt dieser Schutz?",
      "antworten": [
        "Elternzeit",
        "Mutterschutz",
        "Geburtsvorbereitung",
        "Wochenbett"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "زنی باردار است. او کمی پیش و پس از تولد فرزندش توسط قانون حمایت ویژه می‌شود. نام این حمایت چیست؟",
        "antwort": "حمایت از مادران (Mutterschutz)",
        "erklaerung": "در این دوره (معمولاً ۶ هفته پیش و ۸ هفته پس از زایمان) مادر نباید کار کند و حقوقش ادامه دارد."
      }
    },
    {
      "id": "g248",
      "nummer": 248,
      "frage": "Die Erziehung der Kinder ist in Deutschland vor allem Aufgabe …",
      "antworten": [
        "des Staates.",
        "der Eltern.",
        "der Großeltern.",
        "der Schulen."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "تربیت کودکان در آلمان پیش از همه وظیفهٔ … است.",
        "antwort": "والدین",
        "erklaerung": "طبق قانون اساسی (اصل ۶) مراقبت و تربیت فرزندان حق طبیعی و وظیفهٔ والدین است."
      }
    },
    {
      "id": "g249",
      "nummer": 249,
      "frage": "Wer ist in Deutschland hauptsächlich verantwortlich für die Kindererziehung?",
      "antworten": [
        "der Staat",
        "die Eltern",
        "die Verwandten",
        "die Schulen"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان چه کسی مسئول اصلی تربیت کودکان است؟",
        "antwort": "والدین",
        "erklaerung": "والدین در درجهٔ اول مسئول تربیت هستند؛ دولت فقط نظارت می‌کند و در صورت نیاز کمک می‌کند."
      }
    },
    {
      "id": "g250",
      "nummer": 250,
      "frage": "In Deutschland hat man die besten Chancen auf einen gut bezahlten Arbeitsplatz, wenn man …",
      "antworten": [
        "katholisch ist.",
        "gut ausgebildet ist.",
        "eine Frau ist.",
        "Mitglied einer Partei ist."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "در آلمان کسی بهترین شانس را برای یک شغل با درآمد خوب دارد که …",
        "antwort": "تحصیلات و آموزش خوبی داشته باشد.",
        "erklaerung": "در آلمان آموزش حرفه‌ای یا دانشگاهی خوب کلید یافتن کار خوب است؛ دین، جنسیت یا عضویت در حزب نباید نقشی داشته باشد."
      }
    },
    {
      "id": "g251",
      "nummer": 251,
      "frage": "Wenn man in Deutschland ein Kind schlägt, …",
      "antworten": [
        "geht das niemanden etwas an.",
        "geht das nur die Familie etwas an.",
        "kann man dafür nicht bestraft werden.",
        "kann man dafür bestraft werden."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "اگر کسی در آلمان کودکی را بزند، …",
        "antwort": "می‌تواند به خاطر آن مجازات شود.",
        "erklaerung": "کودکان در آلمان حق دارند بدون خشونت تربیت شوند؛ کتک زدن کودک حتی توسط والدین ممنوع است."
      }
    },
    {
      "id": "g252",
      "nummer": 252,
      "frage": "In Deutschland …",
      "antworten": [
        "darf man zur gleichen Zeit nur mit einer Partnerin/einem Partner verheiratet sein.",
        "kann man mehrere Ehepartnerinnen/Ehepartner gleichzeitig haben.",
        "darf man nicht wieder heiraten, wenn man einmal verheiratet war.",
        "darf eine Frau nicht wieder heiraten, wenn ihr Mann gestorben ist."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "در آلمان …",
        "antwort": "در یک زمان فقط می‌توان با یک همسر ازدواج کرد.",
        "erklaerung": "چندهمسری در آلمان ممنوع است؛ اما پس از طلاق یا مرگ همسر می‌توان دوباره ازدواج کرد."
      }
    },
    {
      "id": "g253",
      "nummer": 253,
      "frage": "Wo müssen Sie sich anmelden, wenn Sie in Deutschland umziehen?",
      "antworten": [
        "beim Einwohnermeldeamt",
        "beim Standesamt",
        "beim Ordnungsamt",
        "beim Gewerbeamt"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "وقتی در آلمان اسباب‌کشی می‌کنید، کجا باید ثبت‌نام (اعلام نشانی) کنید؟",
        "antwort": "در ادارهٔ ثبت ساکنان (Einwohnermeldeamt)",
        "erklaerung": "پس از نقل مکان باید معمولاً ظرف دو هفته نشانی جدید را در ادارهٔ ثبت ساکنان یا «بورگرامت» اعلام کرد."
      }
    },
    {
      "id": "g254",
      "nummer": 254,
      "frage": "In Deutschland dürfen Ehepaare sich scheiden lassen. Meistens müssen sie dazu das \"Trennungsjahr\" einhalten. Was bedeutet das?",
      "antworten": [
        "Der Scheidungsprozess dauert ein Jahr.",
        "Die Ehegatten sind ein Jahr verheiratet, dann ist die Scheidung möglich.",
        "Das Besuchsrecht für die Kinder gilt ein Jahr.",
        "Die Ehegatten führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در آلمان زوج‌ها می‌توانند طلاق بگیرند. معمولاً باید «سال جدایی» را رعایت کنند. این یعنی چه؟",
        "antwort": "همسران دست‌کم یک سال جدا از هم زندگی می‌کنند. پس از آن طلاق ممکن است.",
        "erklaerung": "سال جدایی نشان می‌دهد که زندگی مشترک واقعاً به پایان رسیده است."
      }
    },
    {
      "id": "g255",
      "nummer": 255,
      "frage": "Bei Erziehungsproblemen können Eltern in Deutschland Hilfe erhalten vom …",
      "antworten": [
        "Ordnungsamt.",
        "Schulamt.",
        "Jugendamt.",
        "Gesundheitsamt."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در مشکلات تربیتی، والدین در آلمان می‌توانند از … کمک بگیرند.",
        "antwort": "ادارهٔ امور جوانان (Jugendamt)",
        "erklaerung": "یوگنت‌امت به خانواده‌ها مشاوره می‌دهد و از کودکان و نوجوانان حمایت می‌کند."
      }
    },
    {
      "id": "g256",
      "nummer": 256,
      "frage": "Ein Ehepaar möchte in Deutschland ein Restaurant eröffnen. Was braucht es dazu unbedingt?",
      "antworten": [
        "eine Erlaubnis der Polizei",
        "eine Genehmigung einer Partei",
        "eine Genehmigung des Einwohnermeldeamts",
        "eine Gaststättenerlaubnis von der zuständigen Behörde"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "یک زوج می‌خواهد در آلمان رستوران باز کند. حتماً به چه چیزی نیاز دارد؟",
        "antwort": "مجوز رستوران‌داری از ادارهٔ مسئول",
        "erklaerung": "برای فروش نوشیدنی‌های الکلی و غذا در رستوران مجوز «گاست‌اشتتن‌ارلاوبنیس» از ادارهٔ مربوطه لازم است."
      }
    },
    {
      "id": "g257",
      "nummer": 257,
      "frage": "Eine erwachsene Frau möchte in Deutschland das Abitur nachholen. Das kann sie an …",
      "antworten": [
        "einer Hochschule.",
        "einem Abendgymnasium.",
        "einer Hauptschule.",
        "einer Privatuniversität."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "یک زن بزرگسال می‌خواهد در آلمان دیپلم آبیتور را دوباره بگیرد. این کار را می‌تواند در … انجام دهد.",
        "antwort": "یک دبیرستان شبانه (Abendgymnasium)",
        "erklaerung": "در دبیرستان شبانه بزرگسالان می‌توانند کنار کار، آبیتور را بگیرند."
      }
    },
    {
      "id": "g258",
      "nummer": 258,
      "frage": "Was darf das Jugendamt in Deutschland?",
      "antworten": [
        "Es entscheidet, welche Schule das Kind besucht.",
        "Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.",
        "Es bezahlt das Kindergeld an die Eltern.",
        "Es kontrolliert, ob das Kind einen Kindergarten besucht."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "ادارهٔ امور جوانان در آلمان چه اجازه‌ای دارد؟",
        "antwort": "می‌تواند کودکی را که کتک می‌خورد یا گرسنه می‌ماند از خانواده جدا کند.",
        "erklaerung": "یوگنت‌امت وظیفه دارد از کودکانی که در خطر هستند محافظت کند."
      }
    },
    {
      "id": "g259",
      "nummer": 259,
      "frage": "Das Berufsinformationszentrum BIZ bei der Bundesagentur für Arbeit in Deutschland hilft bei der …",
      "antworten": [
        "Rentenberechnung.",
        "Lehrstellensuche.",
        "Steuererklärung.",
        "Krankenversicherung."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "مرکز اطلاعات شغلی BIZ در ادارهٔ کار فدرال در آلمان در … کمک می‌کند.",
        "antwort": "جستجوی جای کارآموزی (Lehrstelle)",
        "erklaerung": "در BIZ جوانان دربارهٔ شغل‌ها و دوره‌های آموزش حرفه‌ای اطلاعات می‌گیرند."
      }
    },
    {
      "id": "g260",
      "nummer": 260,
      "frage": "In Deutschland hat ein Kind in der Schule …",
      "antworten": [
        "Recht auf unbegrenzte Freizeit.",
        "Wahlfreiheit für alle Fächer.",
        "Anspruch auf Schulgeld.",
        "Anwesenheitspflicht."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در آلمان کودک در مدرسه … دارد.",
        "antwort": "الزام به حضور",
        "erklaerung": "به دلیل الزام تحصیلی، کودکان باید منظم در کلاس حاضر باشند."
      }
    },
    {
      "id": "g261",
      "nummer": 261,
      "frage": "Ein Mann möchte mit 30 Jahren in Deutschland sein Abitur nachholen. Wo kann er das tun? An …",
      "antworten": [
        "einer Hochschule.",
        "einem Abendgymnasium.",
        "einer Hauptschule.",
        "einer Privatuniversität."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "مردی می‌خواهد در ۳۰ سالگی در آلمان آبیتور بگیرد. کجا می‌تواند این کار را بکند؟ در …",
        "antwort": "یک دبیرستان شبانه (Abendgymnasium)",
        "erklaerung": "دبیرستان شبانه برای بزرگسالانی است که می‌خواهند دیپلم آبیتور را بعداً بگیرند."
      }
    },
    {
      "id": "g262",
      "nummer": 262,
      "frage": "Was bedeutet in Deutschland der Grundsatz der Gleichbehandlung?",
      "antworten": [
        "Niemand darf z.B. wegen einer Behinderung benachteiligt werden.",
        "Man darf andere Personen benachteiligen, wenn ausreichende persönliche Gründe hierfür vorliegen.",
        "Niemand darf gegen Personen klagen, wenn sie benachteiligt wurden.",
        "Es ist für alle Gesetz, benachteiligten Gruppen jährlich Geld zu spenden."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "اصل «رفتار برابر» در آلمان یعنی چه؟",
        "antwort": "هیچ‌کس نباید مثلاً به خاطر معلولیت مورد تبعیض قرار گیرد.",
        "erklaerung": "طبق قانون اساسی و قانون رفتار برابر، تبعیض به خاطر معلولیت، دین، جنسیت، تبار و غیره ممنوع است."
      }
    },
    {
      "id": "g263",
      "nummer": 263,
      "frage": "In Deutschland sind Jugendliche ab 14 Jahren strafmündig. Das bedeutet: Jugendliche, die 14 Jahre und älter sind und gegen Strafgesetze verstoßen, …",
      "antworten": [
        "werden bestraft.",
        "werden wie Erwachsene behandelt.",
        "teilen die Strafe mit ihren Eltern.",
        "werden nicht bestraft."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "در آلمان نوجوانان از ۱۴ سالگی مسئولیت کیفری دارند. یعنی نوجوانانی که ۱۴ ساله یا بزرگ‌ترند و قانون کیفری را نقض کنند، …",
        "antwort": "مجازات می‌شوند.",
        "erklaerung": "برای آن‌ها قانون دادگاه نوجوانان اعمال می‌شود که بیشتر بر تربیت تأکید دارد تا تنبیه."
      }
    },
    {
      "id": "g264",
      "nummer": 264,
      "frage": "Zu welchem Fest tragen Menschen in Deutschland bunte Kostüme und Masken?",
      "antworten": [
        "am Rosenmontag",
        "am Maifeiertag",
        "beim Oktoberfest",
        "an Pfingsten"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "مردم آلمان در کدام جشن لباس‌های رنگارنگ و ماسک می‌پوشند؟",
        "antwort": "در «دوشنبهٔ گل‌سرخ» (Rosenmontag)",
        "erklaerung": "روزن‌مونتاگ اوج کارناوال است، به‌ویژه در کلن، ماینتس و دوسلدورف."
      }
    },
    {
      "id": "g265",
      "nummer": 265,
      "frage": "Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?",
      "antworten": [
        "zum Einwohnermeldeamt",
        "zum Ordnungsamt",
        "zur Agentur für Arbeit",
        "zum Standesamt"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در آلمان کسی که می‌خواهد ازدواج کند، اول باید کجا برود؟",
        "antwort": "ادارهٔ ثبت احوال (Standesamt)",
        "erklaerung": "ازدواج قانونی در آلمان فقط در اشتاندس‌امت ثبت می‌شود."
      }
    },
    {
      "id": "g266",
      "nummer": 266,
      "frage": "Wann beginnt die gesetzliche Nachtruhe in Deutschland?",
      "antworten": [
        "wenn die Sonne untergeht",
        "wenn die Nachbarn schlafen gehen",
        "um 0 Uhr, Mitternacht",
        "um 22 Uhr"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "سکوت شبانهٔ قانونی در آلمان کی شروع می‌شود؟",
        "antwort": "ساعت ۲۲",
        "erklaerung": "از ساعت ۱۰ شب تا ۶ صبح باید سروصدا را کم کرد تا همسایه‌ها بتوانند استراحت کنند."
      }
    },
    {
      "id": "g267",
      "nummer": 267,
      "frage": "Eine junge Frau in Deutschland, 22 Jahre alt, lebt mit ihrem Freund zusammen. Die Eltern der Frau finden das nicht gut, weil ihnen der Freund nicht gefällt. Was können die Eltern tun?",
      "antworten": [
        "Sie müssen die Entscheidung der volljährigen Tochter respektieren.",
        "Sie haben das Recht, die Tochter in die elterliche Wohnung zurückzuholen.",
        "Sie können zur Polizei gehen und die Tochter anzeigen.",
        "Sie suchen einen anderen Mann für die Tochter."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "زن جوانی ۲۲ ساله در آلمان با دوست‌پسرش زندگی می‌کند. والدینش این را دوست ندارند چون از دوست‌پسر خوششان نمی‌آید. والدین چه می‌توانند بکنند؟",
        "antwort": "باید تصمیم دختر بالغشان را محترم بشمارند.",
        "erklaerung": "کسی که ۱۸ سال یا بیشتر دارد، خودش دربارهٔ زندگی‌اش تصمیم می‌گیرد."
      }
    },
    {
      "id": "g268",
      "nummer": 268,
      "frage": "Eine junge Frau will den Führerschein machen. Sie hat Angst vor der Prüfung, weil ihre Muttersprache nicht Deutsch ist. Was ist richtig?",
      "antworten": [
        "Sie muss mindestens zehn Jahre in Deutschland leben, bevor sie den Führerschein machen kann.",
        "Wenn sie kein Deutsch kann, darf sie keinen Führerschein haben.",
        "Sie muss den Führerschein in dem Land machen, in dem man ihre Sprache spricht.",
        "Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "زن جوانی می‌خواهد گواهینامهٔ رانندگی بگیرد. چون زبان مادری‌اش آلمانی نیست از امتحان می‌ترسد. کدام درست است؟",
        "antwort": "شاید بتواند امتحان تئوری را به زبان مادری‌اش بدهد. بیش از ده زبان برای انتخاب وجود دارد.",
        "erklaerung": "امتحان تئوری رانندگی در آلمان به زبان‌های مختلفی (از جمله انگلیسی، ترکی و عربی) قابل انجام است."
      }
    },
    {
      "id": "g269",
      "nummer": 269,
      "frage": "In Deutschland haben Kinder ab dem Alter von drei Jahren bis zur Ersteinschulung einen Anspruch auf …",
      "antworten": [
        "monatliches Taschengeld.",
        "einen Platz in einem Sportverein.",
        "einen Kindergartenplatz.",
        "einen Ferienpass."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در آلمان کودکان از سه سالگی تا زمان ورود به مدرسه حق دارند …",
        "antwort": "یک جا در مهدکودک داشته باشند.",
        "erklaerung": "از سه سالگی قانوناً حق داشتن جا در مهدکودک وجود دارد (و از یک سالگی برای مراقبت روزانه)."
      }
    },
    {
      "id": "g270",
      "nummer": 270,
      "frage": "Die Volkshochschule in Deutschland ist eine Einrichtung …",
      "antworten": [
        "für den Religionsunterricht.",
        "nur für Jugendliche.",
        "zur Weiterbildung.",
        "nur für Rentnerinnen und Rentner."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "«فولکس‌هوخ‌شوله» در آلمان مؤسسه‌ای … است.",
        "antwort": "برای آموزش تکمیلی (آموزش بزرگسالان)",
        "erklaerung": "در فولکس‌هوخ‌شوله همه می‌توانند با هزینهٔ کم دوره‌هایی مثل زبان، کامپیوتر یا آشپزی بگذرانند."
      }
    },
    {
      "id": "g271",
      "nummer": 271,
      "frage": "Was ist in Deutschland ein Brauch zu Weihnachten?",
      "antworten": [
        "bunte Eier verstecken",
        "einen Tannenbaum schmücken",
        "sich mit Masken und Kostümen verkleiden",
        "Kürbisse vor die Tür stellen"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "یکی از رسم‌های کریسمس در آلمان چیست؟",
        "antwort": "تزئین درخت کاج",
        "erklaerung": "درخت کریسمس در آلمان سنتی قدیمی است. پنهان کردن تخم‌مرغ رسم عید پاک است."
      }
    },
    {
      "id": "g272",
      "nummer": 272,
      "frage": "Welche Lebensform ist in Deutschland nicht erlaubt?",
      "antworten": [
        "Mann und Frau sind geschieden und leben mit neuen Partnern zusammen.",
        "Zwei Frauen leben zusammen.",
        "Ein alleinerziehender Vater lebt mit seinen zwei Kindern zusammen.",
        "Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "کدام شکل زندگی در آلمان مجاز نیست؟",
        "antwort": "مردی هم‌زمان با دو زن ازدواج کرده است.",
        "erklaerung": "چندهمسری در آلمان ممنوع است. زندگی دو زن با هم یا والد تنها با فرزندان مجاز است."
      }
    },
    {
      "id": "g273",
      "nummer": 273,
      "frage": "Bei Erziehungsproblemen gehen Sie in Deutschland …",
      "antworten": [
        "zur Ärztin/zum Arzt.",
        "zum Gesundheitsamt.",
        "zum Einwohnermeldeamt.",
        "zum Jugendamt."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "در مشکلات تربیتی در آلمان به … مراجعه می‌کنید.",
        "antwort": "ادارهٔ امور جوانان (Jugendamt)",
        "erklaerung": "یوگنت‌امت در مسائل تربیتی به والدین مشاوره و کمک می‌دهد."
      }
    },
    {
      "id": "g274",
      "nummer": 274,
      "frage": "Sie haben in Deutschland absichtlich einen Brief geöffnet, der an eine andere Person adressiert ist. Was haben Sie nicht beachtet?",
      "antworten": [
        "das Schweigerecht",
        "das Briefgeheimnis",
        "die Schweigepflicht",
        "die Meinungsfreiheit"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "شما در آلمان عمداً نامه‌ای را باز کرده‌اید که به نام شخص دیگری بوده است. چه چیزی را رعایت نکرده‌اید؟",
        "antwort": "حریم نامه‌ها (Briefgeheimnis)",
        "erklaerung": "طبق قانون اساسی محرمانه بودن نامه‌ها محافظت می‌شود؛ باز کردن نامهٔ دیگران جرم است."
      }
    },
    {
      "id": "g275",
      "nummer": 275,
      "frage": "Was braucht man in Deutschland für eine Ehescheidung?",
      "antworten": [
        "die Einwilligung der Eltern",
        "ein Attest einer Ärztin/eines Arztes",
        "die Einwilligung der Kinder",
        "die Unterstützung einer Anwältin/eines Anwalts"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "برای طلاق در آلمان به چه چیزی نیاز است؟",
        "antwort": "همراهی یک وکیل",
        "erklaerung": "در دادگاه خانواده دست‌کم یکی از طرفین باید وکیل داشته باشد."
      }
    },
    {
      "id": "g276",
      "nummer": 276,
      "frage": "Was sollten Sie tun, wenn Sie von Ihrer Ansprechpartnerin/Ihrem Ansprechpartner in einer deutschen Behörde schlecht behandelt werden?",
      "antworten": [
        "Ich kann nichts tun.",
        "Ich muss mir diese Behandlung gefallen lassen.",
        "Ich drohe der Person.",
        "Ich kann mich bei der Behördenleiterin/beim Behördenleiter beschweren."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "اگر کارمند یک ادارهٔ دولتی در آلمان با شما بدرفتاری کند، چه باید بکنید؟",
        "antwort": "می‌توانم نزد رئیس اداره شکایت کنم.",
        "erklaerung": "ادارات دولتی باید با همه محترمانه رفتار کنند؛ می‌توان از رفتار نادرست شکایت کرد."
      }
    },
    {
      "id": "g277",
      "nummer": 277,
      "frage": "Eine Frau, die ein zweijähriges Kind hat, bewirbt sich in Deutschland um eine Stelle. Was ist ein Beispiel für Diskriminierung? Sie bekommt die Stelle nur deshalb nicht, weil sie …",
      "antworten": [
        "kein Englisch spricht.",
        "zu hohe Gehaltsvorstellungen hat.",
        "keine Erfahrungen in diesem Beruf hat.",
        "Mutter ist."
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "زنی که یک کودک دو ساله دارد برای یک شغل در آلمان درخواست می‌دهد. کدام نمونهٔ تبعیض است؟ او فقط به این دلیل کار را نمی‌گیرد که …",
        "antwort": "مادر است.",
        "erklaerung": "رد کردن کسی فقط به خاطر مادر بودن تبعیض است. نداشتن تجربه یا زبان دلیل منطقی است."
      }
    },
    {
      "id": "g278",
      "nummer": 278,
      "frage": "Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil er …",
      "antworten": [
        "im Rollstuhl sitzt.",
        "keine Erfahrung hat.",
        "zu hohe Gehaltsvorstellungen hat.",
        "kein Englisch spricht."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "مردی که روی ویلچر است برای شغل حسابداری درخواست داده است. کدام نمونهٔ تبعیض است؟ او فقط به این دلیل کار را نمی‌گیرد که …",
        "antwort": "روی ویلچر نشسته است.",
        "erklaerung": "معلولیت دلیلی برای رد کردن نیست، چون حسابداری را می‌توان با ویلچر هم انجام داد."
      }
    },
    {
      "id": "g279",
      "nummer": 279,
      "frage": "In den meisten Mietshäusern in Deutschland gibt es eine \"Hausordnung\". Was steht in einer solchen \"Hausordnung\"? Sie nennt …",
      "antworten": [
        "Regeln für die Benutzung öffentlicher Verkehrsmittel.",
        "alle Mieterinnen und Mieter im Haus.",
        "Regeln, an die sich alle Bewohnerinnen und Bewohner halten müssen.",
        "die Adresse des nächsten Ordnungsamtes."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در بیشتر ساختمان‌های اجاره‌ای آلمان «مقررات ساختمان» (Hausordnung) وجود دارد. در آن چه نوشته شده است؟",
        "antwort": "قوانینی که همهٔ ساکنان باید رعایت کنند.",
        "erklaerung": "مثلاً ساعات سکوت، نظافت راه‌پله یا جای گذاشتن زباله در هاوس‌اوردنونگ مشخص شده است."
      }
    },
    {
      "id": "g280",
      "nummer": 280,
      "frage": "Wenn Sie sich in Deutschland gegen einen falschen Steuerbescheid wehren wollen, müssen Sie …",
      "antworten": [
        "nichts machen.",
        "den Bescheid wegwerfen.",
        "Einspruch einlegen.",
        "warten, bis ein anderer Bescheid kommt."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "اگر بخواهید در آلمان به یک برگهٔ مالیاتی نادرست اعتراض کنید، باید …",
        "antwort": "اعتراض (Einspruch) ثبت کنید.",
        "erklaerung": "اعتراض به برگهٔ مالیاتی معمولاً باید ظرف یک ماه به ادارهٔ مالیات فرستاده شود."
      }
    },
    {
      "id": "g281",
      "nummer": 281,
      "frage": "Zwei Freunde wollen in ein öffentliches Schwimmbad in Deutschland. Beide haben eine dunkle Hautfarbe und werden deshalb nicht hineingelassen. Welches Recht wird in dieser Situation verletzt? Das Recht auf …",
      "antworten": [
        "Meinungsfreiheit",
        "Gleichbehandlung",
        "Versammlungsfreiheit",
        "Freizügigkeit"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "دو دوست می‌خواهند به یک استخر عمومی در آلمان بروند. هر دو پوست تیره دارند و به همین دلیل اجازهٔ ورود ندارند. کدام حق در این وضعیت نقض شده است؟ حقِ …",
        "antwort": "رفتار برابر",
        "erklaerung": "هیچ‌کس نباید به خاطر رنگ پوست یا تبار مورد تبعیض قرار گیرد."
      }
    },
    {
      "id": "g282",
      "nummer": 282,
      "frage": "Welches Ehrenamt müssen deutsche Staatsbürgerinnen und Staatsbürger übernehmen, wenn sie dazu aufgefordert werden?",
      "antworten": [
        "Vereinstrainerin/Vereinstrainer",
        "Wahlhelferin/Wahlhelfer",
        "Bibliotheksaufsicht",
        "Lehrerin/Lehrer"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "شهروندان آلمانی اگر از آن‌ها خواسته شود، کدام کار افتخاری را باید بپذیرند؟",
        "antwort": "کمک‌کنندهٔ انتخاباتی (Wahlhelfer)",
        "erklaerung": "کمک در انتخابات یک وظیفهٔ شهروندی است و فقط با دلیل مهم می‌توان آن را رد کرد."
      }
    },
    {
      "id": "g283",
      "nummer": 283,
      "frage": "Was tun Sie, wenn Sie eine falsche Rechnung von einer deutschen Behörde bekommen?",
      "antworten": [
        "Ich lasse die Rechnung liegen.",
        "Ich lege Widerspruch bei der Behörde ein.",
        "Ich schicke die Rechnung an die Behörde zurück.",
        "Ich gehe mit der Rechnung zum Finanzamt."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "اگر از یک ادارهٔ دولتی آلمان صورت‌حساب نادرستی دریافت کنید، چه می‌کنید؟",
        "antwort": "نزد همان اداره اعتراض (Widerspruch) می‌کنم.",
        "erklaerung": "علیه تصمیم‌های اداری می‌توان در مهلت تعیین‌شده (معمولاً یک ماه) اعتراض کرد."
      }
    },
    {
      "id": "g284",
      "nummer": 284,
      "frage": "Was man für die Arbeit können muss, ändert sich in Zukunft sehr schnell. Was kann man tun?",
      "antworten": [
        "Es ist egal, was man lernt.",
        "Erwachsene müssen auch nach der Ausbildung immer weiter lernen.",
        "Kinder lernen in der Schule alles, was im Beruf wichtig ist. Nach der Schule muss man nicht weiter lernen.",
        "Alle müssen früher aufhören zu arbeiten, weil sich alles ändert."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "مهارت‌هایی که برای کار لازم است در آینده خیلی سریع تغییر می‌کند. چه می‌توان کرد؟",
        "antwort": "بزرگسالان باید پس از آموزش هم همیشه به یادگیری ادامه دهند.",
        "erklaerung": "به این «یادگیری مادام‌العمر» می‌گویند؛ مثلاً با دوره‌های آموزش تکمیلی."
      }
    },
    {
      "id": "g285",
      "nummer": 285,
      "frage": "Frau Frost arbeitet als fest angestellte Mitarbeiterin in einem Büro. Was muss sie nicht von ihrem Gehalt bezahlen?",
      "antworten": [
        "Lohnsteuer",
        "Beiträge zur Arbeitslosenversicherung",
        "Beiträge zur Renten- und Krankenversicherung",
        "Umsatzsteuer"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "خانم فروست کارمند دائم یک دفتر است. چه چیزی را نباید از حقوقش بپردازد؟",
        "antwort": "مالیات بر فروش (Umsatzsteuer)",
        "erklaerung": "مالیات بر فروش را شرکت‌ها هنگام فروش کالا و خدمات دریافت می‌کنند، نه از حقوق کارمند."
      }
    },
    {
      "id": "g286",
      "nummer": 286,
      "frage": "Welche Organisation in einer Firma hilft den Arbeitnehmerinnen und Arbeitnehmern bei Problemen mit der Arbeitgeberin/dem Arbeitgeber?",
      "antworten": [
        "der Betriebsrat",
        "die Betriebsprüferin/der Betriebsprüfer",
        "die Betriebsgruppe",
        "das Betriebsmanagement"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "کدام نهاد در یک شرکت به کارکنان در مشکلات با کارفرما کمک می‌کند؟",
        "antwort": "شورای کارکنان (Betriebsrat)",
        "erklaerung": "بتریبس‌رات را کارکنان انتخاب می‌کنند و از منافع آن‌ها در برابر کارفرما دفاع می‌کند."
      }
    },
    {
      "id": "g287",
      "nummer": 287,
      "frage": "Sie möchten bei einer Firma in Deutschland ihr Arbeitsverhältnis beenden. Was müssen Sie beachten?",
      "antworten": [
        "die Gehaltszahlungen",
        "die Arbeitszeit",
        "die Kündigungsfrist",
        "die Versicherungspflicht"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "می‌خواهید قرارداد کار خود را با یک شرکت در آلمان تمام کنید. به چه چیزی باید توجه کنید؟",
        "antwort": "مهلت فسخ قرارداد (Kündigungsfrist)",
        "erklaerung": "هر دو طرف باید هنگام استعفا یا اخراج مهلتی را که در قانون یا قرارداد آمده رعایت کنند."
      }
    },
    {
      "id": "g288",
      "nummer": 288,
      "frage": "Woraus begründet sich Deutschlands besondere Verantwortung für Israel?",
      "antworten": [
        "aus der Mitgliedschaft in der Europäischen Union (EU)",
        "aus den nationalsozialistischen Verbrechen gegen Juden",
        "aus dem Grundgesetz der Bundesrepublik Deutschland",
        "aus der christlichen Tradition"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "مسئولیت ویژهٔ آلمان در قبال اسرائیل از کجا ناشی می‌شود؟",
        "antwort": "از جنایات نازی‌ها علیه یهودیان",
        "erklaerung": "به دلیل هولوکاست، آلمان مسئولیت تاریخی ویژه‌ای در قبال یهودیان و امنیت اسرائیل دارد."
      }
    },
    {
      "id": "g289",
      "nummer": 289,
      "frage": "Ein Mann mit dunkler Hautfarbe bewirbt sich um eine Stelle als Kellner in einem Restaurant in Deutschland. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil …",
      "antworten": [
        "seine Deutschkenntnisse zu gering sind.",
        "er zu hohe Gehaltsvorstellungen hat.",
        "er eine dunkle Haut hat.",
        "er keine Erfahrungen im Beruf hat."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "مردی با پوست تیره برای کار پیشخدمتی در یک رستوران در آلمان درخواست می‌دهد. کدام نمونهٔ تبعیض است؟ او فقط به این دلیل کار را نمی‌گیرد که …",
        "antwort": "پوستش تیره است.",
        "erklaerung": "رنگ پوست هیچ ربطی به توانایی کار ندارد؛ این رد کردن تبعیض است و ممنوع است."
      }
    },
    {
      "id": "g290",
      "nummer": 290,
      "frage": "Sie haben in Deutschland einen Fernseher gekauft. Zu Hause packen Sie den Fernseher aus, doch er funktioniert nicht. Der Fernseher ist kaputt. Was können Sie machen?",
      "antworten": [
        "eine Anzeige schreiben",
        "den Fernseher reklamieren",
        "das Gerät ungefragt austauschen",
        "die Garantie verlängern"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "شما در آلمان یک تلویزیون خریده‌اید. در خانه آن را باز می‌کنید، اما کار نمی‌کند و خراب است. چه کار می‌توانید بکنید؟",
        "antwort": "تلویزیون را مرجوع کنید (Reklamation)",
        "erklaerung": "خریدار حق دارد کالای معیوب را برگرداند تا تعمیر یا تعویض شود یا پولش را پس بگیرد."
      }
    },
    {
      "id": "g291",
      "nummer": 291,
      "frage": "Warum muss man in Deutschland bei der Steuererklärung aufschreiben, ob man zu einer Kirche gehört oder nicht? Weil …",
      "antworten": [
        "es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist.",
        "das für die Statistik in Deutschland wichtig ist.",
        "man mehr Steuern zahlen muss, wenn man nicht zu einer Kirche gehört.",
        "die Kirche für die Steuererklärung verantwortlich ist."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "چرا در آلمان باید در اظهارنامهٔ مالیاتی بنویسید که عضو کلیسا هستید یا نه؟ چون …",
        "antwort": "مالیات کلیسا وجود دارد که به مالیات بر درآمد و حقوق وابسته است.",
        "erklaerung": "اعضای کلیساهای کاتولیک و پروتستان مالیات کلیسا (حدود ۸ تا ۹ درصد مالیات بر درآمد) می‌پردازند."
      }
    },
    {
      "id": "g292",
      "nummer": 292,
      "frage": "Die Menschen in Deutschland leben nach dem Grundsatz der religiösen Toleranz. Was bedeutet das?",
      "antworten": [
        "Es dürfen keine Moscheen gebaut werden.",
        "Alle Menschen glauben an Gott.",
        "Jeder kann glauben, was er möchte.",
        "Der Staat entscheidet, an welchen Gott die Menschen glauben."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "مردم آلمان طبق اصل مدارای دینی زندگی می‌کنند. این یعنی چه؟",
        "antwort": "هر کس می‌تواند به هر چه می‌خواهد باور داشته باشد.",
        "erklaerung": "آزادی دین یک حق بنیادی است؛ دولت تعیین نمی‌کند مردم به چه باور داشته باشند."
      }
    },
    {
      "id": "g293",
      "nummer": 293,
      "frage": "Was ist in Deutschland ein Brauch zu Ostern?",
      "antworten": [
        "Kürbisse vor die Tür stellen",
        "einen Tannenbaum schmücken",
        "Eier bemalen",
        "Raketen in die Luft schießen"
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "یکی از رسم‌های عید پاک در آلمان چیست؟",
        "antwort": "رنگ کردن تخم‌مرغ",
        "erklaerung": "در عید پاک تخم‌مرغ رنگ می‌کنند و برای کودکان پنهان می‌کنند."
      }
    },
    {
      "id": "g294",
      "nummer": 294,
      "frage": "Pfingsten ist ein …",
      "antworten": [
        "christlicher Feiertag.",
        "deutscher Gedenktag.",
        "internationaler Trauertag.",
        "bayerischer Brauch."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "عید پنجاهه (Pfingsten) یک … است.",
        "antwort": "جشن مسیحی",
        "erklaerung": "پفینگستن ۵۰ روز پس از عید پاک است و در آلمان تعطیل رسمی است."
      }
    },
    {
      "id": "g295",
      "nummer": 295,
      "frage": "Welche Religion hat die europäische und deutsche Kultur geprägt?",
      "antworten": [
        "der Hinduismus",
        "das Christentum",
        "der Buddhismus",
        "der Islam"
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "کدام دین فرهنگ اروپا و آلمان را شکل داده است؟",
        "antwort": "مسیحیت",
        "erklaerung": "بسیاری از جشن‌ها، تعطیلات و سنت‌های آلمان ریشهٔ مسیحی دارند."
      }
    },
    {
      "id": "g296",
      "nummer": 296,
      "frage": "In Deutschland nennt man die letzten vier Wochen vor Weihnachten …",
      "antworten": [
        "den Buß- und Bettag.",
        "das Erntedankfest.",
        "die Adventszeit.",
        "Allerheiligen."
      ],
      "richtig": 2,
      "bild": "",
      "fa": {
        "frage": "در آلمان به چهار هفتهٔ آخر پیش از کریسمس … می‌گویند.",
        "antwort": "دوران ادونت (Adventszeit)",
        "erklaerung": "در ادونت هر یکشنبه یک شمع روی تاج ادونت روشن می‌شود."
      }
    },
    {
      "id": "g297",
      "nummer": 297,
      "frage": "Aus welchem Land sind die meisten Migrantinnen und Migranten nach Deutschland gekommen?",
      "antworten": [
        "Italien",
        "Polen",
        "Marokko",
        "Türkei"
      ],
      "richtig": 3,
      "bild": "",
      "fa": {
        "frage": "بیشتر مهاجران از کدام کشور به آلمان آمده‌اند؟",
        "antwort": "ترکیه",
        "erklaerung": "از دههٔ ۱۹۶۰ بسیاری از ترک‌ها به‌عنوان کارگر مهمان به آلمان آمدند؛ بزرگ‌ترین گروه مهاجران از ترکیه است."
      }
    },
    {
      "id": "g298",
      "nummer": 298,
      "frage": "In der DDR lebten vor allem Migrantinnen und Migranten aus …",
      "antworten": [
        "Vietnam, Polen, Mosambik.",
        "Frankreich, Rumänien, Somalia.",
        "Chile, Ungarn, Simbabwe.",
        "Nordkorea, Mexiko, Ägypten."
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "در آلمان شرقی بیشتر مهاجرانی از … زندگی می‌کردند.",
        "antwort": "ویتنام، لهستان، موزامبیک",
        "erklaerung": "آلمان شرقی از کشورهای سوسیالیستی دوست کارگر قراردادی جذب می‌کرد."
      }
    },
    {
      "id": "g299",
      "nummer": 299,
      "frage": "Ausländische Arbeitnehmerinnen und Arbeitnehmer, die in den 50er und 60er Jahren von der Bundesrepublik Deutschland angeworben wurden, nannte man …",
      "antworten": [
        "Schwarzarbeiterinnen/Schwarzarbeiter.",
        "Gastarbeiterinnen/Gastarbeiter.",
        "Zeitarbeiterinnen/Zeitarbeiter.",
        "Schichtarbeiterinnen/Schichtarbeiter."
      ],
      "richtig": 1,
      "bild": "",
      "fa": {
        "frage": "به کارگران خارجی که در دهه‌های ۵۰ و ۶۰ توسط آلمان غربی استخدام شدند، … می‌گفتند.",
        "antwort": "کارگران مهمان (Gastarbeiter)",
        "erklaerung": "آلمان غربی پس از جنگ نیروی کار کم داشت و از کشورهایی مثل ایتالیا، ترکیه و یونان کارگر جذب کرد."
      }
    },
    {
      "id": "g300",
      "nummer": 300,
      "frage": "Aus welchem Land kamen die ersten Gastarbeiterinnen und Gastarbeiter in die Bundesrepublik Deutschland?",
      "antworten": [
        "Italien",
        "Spanien",
        "Portugal",
        "Türkei"
      ],
      "richtig": 0,
      "bild": "",
      "fa": {
        "frage": "اولین کارگران مهمان از کدام کشور به جمهوری فدرال آلمان آمدند؟",
        "antwort": "ایتالیا",
        "erklaerung": "اولین قرارداد جذب کارگر در سال ۱۹۵۵ با ایتالیا بسته شد."
      }
    }
  ],

  /* -------------------------------------------------------------------
     TEIL II – BUNDESLAND-FRAGEN (Ziel: 16 × 10 = 160)
     Schlüssel = Name des Bundeslandes, alphabetisch sortiert.
     ------------------------------------------------------------------- */
  bundeslandFragen: {
    "Baden-Württemberg": [
      {
        "id": "bw-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Bundesland Baden-Württemberg?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 0,
        "bild": "",
        "antwortBilder": [
          "bilder/bw-01-1.png",
          "bilder/bw-01-2.png",
          "bilder/bw-01-3.png",
          "bilder/bw-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت بادن-وورتمبرگ است؟",
          "antwort": "تصویر ۱ (سه شیر سیاه روی زمینهٔ طلایی با تاج)",
          "erklaerung": "نشان بادن-وورتمبرگ سه شیر سیاه روی سپر طلایی است."
        }
      },
      {
        "id": "bw-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis in Baden-Württemberg?",
        "antworten": [
          "Mecklenburgische Seenplatte",
          "Neckar-Odenwald-Kreis",
          "Nordfriesland",
          "Altötting"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در بادن-وورتمبرگ است؟",
          "antwort": "نکار-اودن‌والد (Neckar-Odenwald-Kreis)",
          "erklaerung": "این شهرستان در شمال بادن-وورتمبرگ است. آلتؤتینگ در بایرن و نوردفریسلاند در شلسویگ-هولشتاین قرار دارد."
        }
      },
      {
        "id": "bw-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag in Baden-Württemberg gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) بادن-وورتمبرگ برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم بادن-وورتمبرگ هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "bw-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Baden-Württemberg bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در بادن-وورتمبرگ از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۶ سالگی",
          "erklaerung": "در بادن-وورتمبرگ نوجوانان از ۱۶ سالگی اجازهٔ رأی دادن در این انتخابات را دارند."
        }
      },
      {
        "id": "bw-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Baden-Württemberg?",
        "antworten": [
          "blau-weiß-rot",
          "schwarz-gold",
          "weiß-blau",
          "grün-weiß-rot"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت بادن-وورتمبرگ چه رنگ‌هایی دارد؟",
          "antwort": "سیاه و طلایی",
          "erklaerung": "رنگ‌های پرچم بادن-وورتمبرگ: سیاه و طلایی."
        }
      },
      {
        "id": "bw-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Baden-Württemberg über politische Themen informieren?",
        "antworten": [
          "beim Ordnungsamt der Gemeinde",
          "bei der Verbraucherzentrale",
          "bei der Landeszentrale für politische Bildung",
          "bei den Kirchen"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "در بادن-وورتمبرگ کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "bw-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt von Baden-Württemberg heißt …",
        "antworten": [
          "Heidelberg.",
          "Stuttgart.",
          "Karlsruhe.",
          "Mannheim."
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پایتخت ایالت بادن-وورتمبرگ … نام دارد.",
          "antwort": "اشتوتگارت",
          "erklaerung": "اشتوتگارت مرکز دولت و پارلمان بادن-وورتمبرگ است."
        }
      },
      {
        "id": "bw-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Baden-Württemberg?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 1,
        "bild": "bilder/bw-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت بادن-وورتمبرگ است؟",
          "antwort": "شمارهٔ ۲",
          "erklaerung": "بادن-وورتمبرگ در جنوب‌غرب آلمان، کنار فرانسه و سوئیس قرار دارد."
        }
      },
      {
        "id": "bw-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef in Baden-Württemberg?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت بادن-وورتمبرگ را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت بادن-وورتمبرگ «مینیستِرپرِزیدِنت» نام دارد و پارلمان ایالت او را انتخاب می‌کند."
        }
      },
      {
        "id": "bw-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat Baden-Württemberg nicht?",
        "antworten": [
          "Finanzministerin/Finanzminister",
          "Justizministerin/Justizminister",
          "Innenministerin/Innenminister",
          "Außenministerin/Außenminister"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "بادن-وورتمبرگ کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ],
    "Bayern": [
      {
        "id": "by-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Freistaat Bayern?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 1,
        "bild": "",
        "antwortBilder": [
          "bilder/by-01-1.png",
          "bilder/by-01-2.png",
          "bilder/by-01-3.png",
          "bilder/by-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت آزاد بایرن است؟",
          "antwort": "تصویر ۲ (لوزی‌های سفید و آبی)",
          "erklaerung": "نشان بایرن لوزی‌های سفید و آبی با یک تاج در بالا دارد. تصویر ۱ نشان بادن-وورتمبرگ است."
        }
      },
      {
        "id": "by-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis in Bayern?",
        "antworten": [
          "Prignitz",
          "Rhein-Sieg-Kreis",
          "Nordfriesland",
          "Altötting"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در بایرن است؟",
          "antwort": "آلتؤتینگ (Altötting)",
          "erklaerung": "آلتؤتینگ در جنوب‌شرق بایرن است. پریگنیتس در براندنبورگ، راین-زیگ در نوردراین-وستفالن و نوردفریسلاند در شلسویگ-هولشتاین قرار دارد."
        }
      },
      {
        "id": "by-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag in Bayern gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) بایرن برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم بایرن هر پنج سال یک‌بار نمایندگان لندتاگ را انتخاب می‌کنند."
        }
      },
      {
        "id": "by-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Bayern bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "در بایرن از چند سالگی می‌توان در انتخابات محلی (شهر و شهرستان) رأی داد؟",
          "antwort": "از ۱۸ سالگی",
          "erklaerung": "در بایرن برای رأی دادن در انتخابات محلی باید دست‌کم ۱۸ ساله بود. در برخی ایالت‌های دیگر این سن ۱۶ سال است."
        }
      },
      {
        "id": "by-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Bayern?",
        "antworten": [
          "blau-weiß-rot",
          "weiß-blau",
          "grün-weiß-rot",
          "schwarz-gelb"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت بایرن چه رنگ‌هایی دارد؟",
          "antwort": "سفید و آبی",
          "erklaerung": "رنگ‌های بایرن سفید و آبی است؛ معروف‌ترین شکل پرچم آن لوزی‌های سفید و آبی است."
        }
      },
      {
        "id": "by-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Bayern über politische Themen informieren?",
        "antworten": [
          "beim Ordnungsamt der Gemeinde",
          "bei der Landeszentrale für politische Bildung",
          "bei der Verbraucherzentrale",
          "bei den Kirchen"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در بایرن کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "by-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt von Bayern heißt …",
        "antworten": [
          "Ingolstadt.",
          "Regensburg.",
          "Nürnberg.",
          "München."
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "پایتخت ایالت بایرن … نام دارد.",
          "antwort": "مونیخ",
          "erklaerung": "مونیخ مرکز دولت و پارلمان ایالت بایرن است."
        }
      },
      {
        "id": "by-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Bayern?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 3,
        "bild": "bilder/by-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت بایرن است؟",
          "antwort": "شمارهٔ ۴",
          "erklaerung": "بایرن بزرگ‌ترین ایالت آلمان است و در جنوب‌شرق کشور قرار دارد."
        }
      },
      {
        "id": "by-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef in Bayern?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت بایرن را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت هر ایالت آلمان «مینیستِرپرِزیدِنت» نام دارد. او را پارلمان ایالت (لندتاگ) انتخاب می‌کند."
        }
      },
      {
        "id": "by-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat Bayern nicht?",
        "antworten": [
          "Justizministerin/Justizminister",
          "Außenministerin/Außenminister",
          "Finanzministerin/Finanzminister",
          "Innenministerin/Innenminister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "بایرن کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ],
    "Berlin": [
      {
        "id": "be-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Bundesland Berlin?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 3,
        "bild": "",
        "antwortBilder": [
          "bilder/be-01-1.png",
          "bilder/be-01-2.png",
          "bilder/be-01-3.png",
          "bilder/be-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت برلین است؟",
          "antwort": "تصویر ۴ (خرس سیاه با تاج)",
          "erklaerung": "نشان برلین یک خرس سیاه روی زمینهٔ سفید است. تصویر ۱ نشان هامبورگ و تصویر ۲ نشان برمن است."
        }
      },
      {
        "id": "be-02",
        "nummer": 2,
        "frage": "Welches ist ein Bezirk von Berlin?",
        "antworten": [
          "Altona",
          "Prignitz",
          "Pankow",
          "Mecklenburgische Seenplatte"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "کدام یک بخش (Bezirk) در برلین است؟",
          "antwort": "پانکو (Pankow)",
          "erklaerung": "پانکو یکی از ۱۲ بخش برلین است. آلتونا در هامبورگ و پریگنیتس در براندنبورگ است."
        }
      },
      {
        "id": "be-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird das Landesparlament in Berlin gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (Abgeordnetenhaus) برلین برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم برلین هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "be-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Berlin bei Kommunalwahlen (Wahl der Bezirksverordnetenversammlung) wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در برلین از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۶ سالگی",
          "erklaerung": "در برلین نوجوانان از ۱۶ سالگی اجازهٔ رأی دادن در این انتخابات را دارند."
        }
      },
      {
        "id": "be-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Berlin?",
        "antworten": [
          "blau-weiß-rot",
          "weiß-rot",
          "grün-weiß-rot",
          "schwarz-gold"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت برلین چه رنگ‌هایی دارد؟",
          "antwort": "سفید و قرمز",
          "erklaerung": "رنگ‌های پرچم برلین: سفید و قرمز."
        }
      },
      {
        "id": "be-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Berlin über politische Themen informieren?",
        "antworten": [
          "beim Ordnungsamt der Gemeinde",
          "bei den Kirchen",
          "bei der Verbraucherzentrale",
          "bei der Landeszentrale für politische Bildung"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "در برلین کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "be-07",
        "nummer": 7,
        "frage": "Welches Bundesland ist ein Stadtstaat?",
        "antworten": [
          "Berlin",
          "Saarland",
          "Brandenburg",
          "Hessen"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "کدام ایالت یک «دولت‌شهر» است؟",
          "antwort": "برلین",
          "erklaerung": "دولت‌شهر یعنی شهری که خودش یک ایالت است. سه دولت‌شهر آلمان: برلین، هامبورگ و برمن."
        }
      },
      {
        "id": "be-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Berlin?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 3,
        "bild": "bilder/be-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت برلین است؟",
          "antwort": "شمارهٔ ۴",
          "erklaerung": "برلین یک شهر-ایالت در شرق آلمان است که از همه طرف با براندنبورگ احاطه شده است."
        }
      },
      {
        "id": "be-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef des Stadtstaates Berlin?",
        "antworten": [
          "Ministerpräsidentin/Ministerpräsident",
          "Oberbürgermeisterin/Oberbürgermeister",
          "Präsidentin/Präsident des Senates",
          "Regierende Bürgermeisterin/Regierender Bürgermeister"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت دولت‌شهر برلین را چه می‌نامند؟",
          "antwort": "شهردار حاکم (Regierender Bürgermeister)",
          "erklaerung": "رئیس دولت برلین «شهردار حاکم» نامیده می‌شود."
        }
      },
      {
        "id": "be-10",
        "nummer": 10,
        "frage": "Welche Senatorin/welchen Senator hat Berlin nicht?",
        "antworten": [
          "Finanzsenatorin/Finanzsenator",
          "Innensenatorin/Innensenator",
          "Senatorin/Senator für Außenbeziehungen",
          "Justizsenatorin/Justizsenator"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "برلین کدام سناتور (وزیر) را ندارد؟",
          "antwort": "سناتور امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است؛ پس برلین سناتوری برای امور خارجه ندارد."
        }
      }
    ],
    "Brandenburg": [
      {
        "id": "bb-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Bundesland Brandenburg?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 0,
        "bild": "",
        "antwortBilder": [
          "bilder/bb-01-1.png",
          "bilder/bb-01-2.png",
          "bilder/bb-01-3.png",
          "bilder/bb-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت براندنبورگ است؟",
          "antwort": "تصویر ۱ (عقاب قرمز روی زمینهٔ سفید)",
          "erklaerung": "نشان براندنبورگ یک عقاب قرمز روی سپر سفید است."
        }
      },
      {
        "id": "bb-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis in Brandenburg?",
        "antworten": [
          "Prignitz",
          "Rhein-Sieg-Kreis",
          "Vogtlandkreis",
          "Amberg-Sulzbach"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در براندنبورگ است؟",
          "antwort": "پریگنیتس (Prignitz)",
          "erklaerung": "پریگنیتس در شمال‌غرب براندنبورگ است. فوگت‌لاندکرایس در زاکسن و آمبرگ-زولتسباخ در بایرن قرار دارد."
        }
      },
      {
        "id": "bb-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag in Brandenburg gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) براندنبورگ برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم براندنبورگ هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "bb-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Brandenburg bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در براندنبورگ از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۶ سالگی",
          "erklaerung": "در براندنبورگ نوجوانان از ۱۶ سالگی اجازهٔ رأی دادن در این انتخابات را دارند."
        }
      },
      {
        "id": "bb-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Brandenburg?",
        "antworten": [
          "blau-weiß-rot",
          "rot-weiß",
          "grün-weiß-rot",
          "schwarz-gelb"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت براندنبورگ چه رنگ‌هایی دارد؟",
          "antwort": "قرمز و سفید",
          "erklaerung": "رنگ‌های پرچم براندنبورگ: قرمز و سفید."
        }
      },
      {
        "id": "bb-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Brandenburg über politische Themen informieren?",
        "antworten": [
          "bei den Kirchen",
          "beim Ordnungsamt der Gemeinde",
          "bei der Landeszentrale für politische Bildung",
          "bei der Verbraucherzentrale"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "در براندنبورگ کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "bb-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt von Brandenburg heißt …",
        "antworten": [
          "Potsdam.",
          "Cottbus.",
          "Brandenburg.",
          "Frankfurt/Oder."
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "پایتخت ایالت براندنبورگ … نام دارد.",
          "antwort": "پوتسدام",
          "erklaerung": "پوتسدام نزدیک برلین است و مرکز دولت و پارلمان براندنبورگ است."
        }
      },
      {
        "id": "bb-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Brandenburg?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 3,
        "bild": "bilder/bb-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت براندنبورگ است؟",
          "antwort": "شمارهٔ ۴",
          "erklaerung": "براندنبورگ در شرق آلمان است و برلین را احاطه می‌کند (جای خالی وسط آن برلین است)."
        }
      },
      {
        "id": "bb-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef in Brandenburg?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت براندنبورگ را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت براندنبورگ «مینیستِرپرِزیدِنت» نام دارد و پارلمان ایالت او را انتخاب می‌کند."
        }
      },
      {
        "id": "bb-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat Brandenburg nicht?",
        "antworten": [
          "Justizministerin/Justizminister",
          "Außenministerin/Außenminister",
          "Finanzministerin/Finanzminister",
          "Innenministerin/Innenminister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "براندنبورگ کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ],
    "Bremen": [
      {
        "id": "hb-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zur Freien Hansestadt Bremen?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 2,
        "bild": "",
        "antwortBilder": [
          "bilder/hb-01-1.png",
          "bilder/hb-01-2.png",
          "bilder/hb-01-3.png",
          "bilder/hb-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت برمن است؟",
          "antwort": "تصویر ۳ (کلید نقره‌ای روی زمینهٔ قرمز با تاج)",
          "erklaerung": "نشان برمن یک کلید نقره‌ای روی سپر قرمز است. تصویر ۱ نشان شلسویگ-هولشتاین است."
        }
      },
      {
        "id": "hb-02",
        "nummer": 2,
        "frage": "Welches ist ein Stadtteil von Bremen?",
        "antworten": [
          "Altona",
          "Hemelingen",
          "Pankow",
          "Babelsberg"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "کدام یک محله (Stadtteil) در برمن است؟",
          "antwort": "همه‌لینگن (Hemelingen)",
          "erklaerung": "همه‌لینگن محله‌ای در برمن است. آلتونا در هامبورگ، پانکو در برلین و بابلسبرگ در پوتسدام است."
        }
      },
      {
        "id": "hb-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird das Landesparlament in Bremen gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (Bürgerschaft) برمن برای چند سال انتخاب می‌شود؟",
          "antwort": "۴ سال",
          "erklaerung": "مردم برمن هر ۴ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند. برمن تنها ایالتی است که دورهٔ پارلمانش ۴ سال است."
        }
      },
      {
        "id": "hb-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Bremen bei den Wahlen zur Bürgerschaft (Landtag) wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در برمن از چند سالگی می‌توان در انتخابات «بورگرشافت» (پارلمان ایالتی) رأی داد؟",
          "antwort": "از ۱۶ سالگی",
          "erklaerung": "در برمن نوجوانان از ۱۶ سالگی اجازهٔ رأی دادن در این انتخابات را دارند."
        }
      },
      {
        "id": "hb-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Bremen?",
        "antworten": [
          "blau-weiß-rot",
          "rot-weiß",
          "grün-weiß-rot",
          "schwarz-gold"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت برمن چه رنگ‌هایی دارد؟",
          "antwort": "قرمز و سفید",
          "erklaerung": "رنگ‌های پرچم برمن: قرمز و سفید."
        }
      },
      {
        "id": "hb-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Bremen über politische Themen informieren?",
        "antworten": [
          "beim Ordnungsamt der Gemeinde",
          "bei der Landeszentrale für politische Bildung",
          "bei den Kirchen",
          "bei der Verbraucherzentrale"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در برمن کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "hb-07",
        "nummer": 7,
        "frage": "Was ist ein deutscher Stadtstaat?",
        "antworten": [
          "Bremen",
          "München",
          "Frankfurt",
          "Erfurt"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "دولت‌شهر آلمانی کدام است؟",
          "antwort": "برمن",
          "erklaerung": "برمن، همراه با برلین و هامبورگ، یکی از سه دولت‌شهر آلمان است. مونیخ، فرانکفورت و ارفورت شهرهای معمولی‌اند."
        }
      },
      {
        "id": "hb-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Bremen?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 0,
        "bild": "bilder/hb-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت برمن است؟",
          "antwort": "شمارهٔ ۱",
          "erklaerung": "برمن یک دولت‌شهر کوچک در شمال‌غرب آلمان، کنار رود وزر است."
        }
      },
      {
        "id": "hb-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef des Stadtstaates Bremen?",
        "antworten": [
          "Ministerpräsidentin/Ministerpräsident",
          "Erste Bürgermeisterin/Erster Bürgermeister",
          "Präsidentin/Präsident des Senates",
          "Regierende Bürgermeisterin/Regierender Bürgermeister"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت دولت‌شهر برمن را چه می‌نامند؟",
          "antwort": "رئیس سنا (Präsident des Senates)",
          "erklaerung": "رئیس دولت برمن «رئیس سنا و شهردار» نامیده می‌شود."
        }
      },
      {
        "id": "hb-10",
        "nummer": 10,
        "frage": "Welche Senatorin/welchen Senator hat Bremen nicht?",
        "antworten": [
          "Senatorin/Senator für Außenbeziehungen",
          "Finanzsenatorin/Finanzsenator",
          "Justizsenatorin/Justizsenator",
          "Innensenatorin/Innensenator"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "برمن کدام سناتور (وزیر) را ندارد؟",
          "antwort": "سناتور امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است؛ پس برمن سناتوری برای امور خارجه ندارد."
        }
      }
    ],
    "Hamburg": [
      {
        "id": "hh-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zur Freien und Hansestadt Hamburg?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 1,
        "bild": "",
        "antwortBilder": [
          "bilder/hh-01-1.png",
          "bilder/hh-01-2.png",
          "bilder/hh-01-3.png",
          "bilder/hh-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت هامبورگ است؟",
          "antwort": "تصویر ۲ (قلعهٔ سفید روی زمینهٔ قرمز)",
          "erklaerung": "نشان هامبورگ یک قلعهٔ سفید با سه برج روی سپر قرمز است. تصویر ۱ نشان نیدرزاکسن است."
        }
      },
      {
        "id": "hh-02",
        "nummer": 2,
        "frage": "Welches ist ein Bezirk von Hamburg?",
        "antworten": [
          "Altona",
          "Hemelingen",
          "Pankow",
          "Mecklenburgische Seenplatte"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "کدام یک بخش (Bezirk) در هامبورگ است؟",
          "antwort": "آلتونا (Altona)",
          "erklaerung": "آلتونا یکی از هفت بخش هامبورگ است. همه‌لینگن در برمن و پانکو در برلین است."
        }
      },
      {
        "id": "hh-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird das Landesparlament in Hamburg gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (Bürgerschaft) هامبورگ برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم هامبورگ هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "hh-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Hamburg bei Kommunalwahlen (Wahl der Bezirksversammlungen) wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در هامبورگ از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۶ سالگی",
          "erklaerung": "در هامبورگ نوجوانان از ۱۶ سالگی اجازهٔ رأی دادن در این انتخابات را دارند."
        }
      },
      {
        "id": "hh-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Hamburg?",
        "antworten": [
          "blau-weiß-rot",
          "weiß-rot",
          "grün-weiß-rot",
          "schwarz-gelb"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت هامبورگ چه رنگ‌هایی دارد؟",
          "antwort": "سفید و قرمز",
          "erklaerung": "رنگ‌های پرچم هامبورگ: سفید و قرمز."
        }
      },
      {
        "id": "hh-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Hamburg über politische Themen informieren?",
        "antworten": [
          "beim Ordnungsamt der Gemeinde",
          "bei der Verbraucherzentrale",
          "bei den Kirchen",
          "bei der Landeszentrale für politische Bildung"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "در هامبورگ کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "hh-07",
        "nummer": 7,
        "frage": "Welches Bundesland ist ein Stadtstaat?",
        "antworten": [
          "Hamburg",
          "Sachsen",
          "Bayern",
          "Thüringen"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "کدام ایالت یک «دولت‌شهر» است؟",
          "antwort": "هامبورگ",
          "erklaerung": "هامبورگ شهری است که خودش یک ایالت است؛ مثل برلین و برمن."
        }
      },
      {
        "id": "hh-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Hamburg?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 2,
        "bild": "bilder/hh-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت هامبورگ است؟",
          "antwort": "شمارهٔ ۳",
          "erklaerung": "هامبورگ یک دولت‌شهر در شمال آلمان، کنار رود البه است."
        }
      },
      {
        "id": "hh-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef des Stadtstaates Hamburg?",
        "antworten": [
          "Ministerpräsidentin/Ministerpräsident",
          "Erste Bürgermeisterin/Erster Bürgermeister",
          "Regierende Senatorin/Regierender Senator",
          "Oberbürgermeisterin/Oberbürgermeister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت دولت‌شهر هامبورگ را چه می‌نامند؟",
          "antwort": "شهردار اول (Erster Bürgermeister)",
          "erklaerung": "رئیس دولت هامبورگ «شهردار اول» نامیده می‌شود."
        }
      },
      {
        "id": "hh-10",
        "nummer": 10,
        "frage": "Welche Senatorin/welchen Senator hat Hamburg nicht?",
        "antworten": [
          "Justizsenatorin/Justizsenator",
          "Senatorin/Senator für Außenbeziehungen",
          "Finanzsenatorin/Finanzsenator",
          "Innensenatorin/Innensenator"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "هامبورگ کدام سناتور (وزیر) را ندارد؟",
          "antwort": "سناتور امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است؛ پس هامبورگ سناتوری برای امور خارجه ندارد."
        }
      }
    ],
    "Hessen": [
      {
        "id": "he-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Bundesland Hessen?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 0,
        "bild": "",
        "antwortBilder": [
          "bilder/he-01-1.png",
          "bilder/he-01-2.png",
          "bilder/he-01-3.png",
          "bilder/he-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت هسن است؟",
          "antwort": "تصویر ۱ (شیر راه‌راه سفید و قرمز روی زمینهٔ آبی)",
          "erklaerung": "نشان هسن یک شیر با نوارهای سفید و قرمز روی سپر آبی است."
        }
      },
      {
        "id": "he-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis in Hessen?",
        "antworten": [
          "Ammerland",
          "Altötting",
          "Prignitz",
          "Main-Taunus-Kreis"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در هسن است؟",
          "antwort": "ماین-تاونوس (Main-Taunus-Kreis)",
          "erklaerung": "این شهرستان نزدیک فرانکفورت است. آمرلند در نیدرزاکسن، آلتؤتینگ در بایرن و پریگنیتس در براندنبورگ است."
        }
      },
      {
        "id": "he-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag in Hessen gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) هسن برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم هسن هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "he-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Hessen bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "در هسن از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۸ سالگی",
          "erklaerung": "در هسن برای رأی دادن در انتخابات محلی باید دست‌کم ۱۸ ساله بود؛ در بیشتر ایالت‌های دیگر این سن ۱۶ سال است."
        }
      },
      {
        "id": "he-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Hessen?",
        "antworten": [
          "blau-weiß-rot",
          "rot-weiß",
          "schwarz-gold",
          "grün-weiß-rot"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت هسن چه رنگ‌هایی دارد؟",
          "antwort": "قرمز و سفید",
          "erklaerung": "رنگ‌های پرچم هسن: قرمز و سفید."
        }
      },
      {
        "id": "he-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Hessen über politische Themen informieren?",
        "antworten": [
          "bei der Landeszentrale für politische Bildung",
          "bei der Verbraucherzentrale",
          "beim Ordnungsamt der Gemeinde",
          "bei den Kirchen"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "در هسن کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "he-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt von Hessen heißt …",
        "antworten": [
          "Kassel.",
          "Darmstadt.",
          "Frankfurt.",
          "Wiesbaden."
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "پایتخت ایالت هسن … نام دارد.",
          "antwort": "ویسبادن",
          "erklaerung": "پایتخت هسن ویسبادن است، نه فرانکفورت که بزرگ‌ترین شهر آن است."
        }
      },
      {
        "id": "he-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Hessen?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 2,
        "bild": "bilder/he-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت هسن است؟",
          "antwort": "شمارهٔ ۳",
          "erklaerung": "هسن در مرکز آلمان قرار دارد؛ فرانکفورت در این ایالت است."
        }
      },
      {
        "id": "he-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef in Hessen?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت هسن را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت هسن «مینیستِرپرِزیدِنت» نام دارد و پارلمان ایالت او را انتخاب می‌کند."
        }
      },
      {
        "id": "he-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat Hessen nicht?",
        "antworten": [
          "Justizministerin/Justizminister",
          "Außenministerin/Außenminister",
          "Finanzministerin/Finanzminister",
          "Innenministerin/Innenminister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "هسن کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ],
    "Mecklenburg-Vorpommern": [
      {
        "id": "mv-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Bundesland Mecklenburg-Vorpommern?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 2,
        "bild": "",
        "antwortBilder": [
          "bilder/mv-01-1.png",
          "bilder/mv-01-2.png",
          "bilder/mv-01-3.png",
          "bilder/mv-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت مکلنبورگ-فورپومرن است؟",
          "antwort": "تصویر ۳ (سر گاو و گریفین قرمز، نیمه زرد و نیمه سفید)",
          "erklaerung": "نشان مکلنبورگ-فورپومرن سر گاو سیاه (مکلنبورگ) و گریفین قرمز (پومرن) دارد."
        }
      },
      {
        "id": "mv-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis in Mecklenburg-Vorpommern?",
        "antworten": [
          "Prignitz",
          "Mecklenburgische Seenplatte",
          "Vogtlandkreis",
          "Rhein-Sieg-Kreis"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در مکلنبورگ-فورپومرن است؟",
          "antwort": "دریاچه‌های مکلنبورگ (Mecklenburgische Seenplatte)",
          "erklaerung": "این شهرستان پر از دریاچه است. پریگنیتس در براندنبورگ و فوگت‌لاندکرایس در زاکسن است."
        }
      },
      {
        "id": "mv-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag in Mecklenburg-Vorpommern gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) مکلنبورگ-فورپومرن برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم مکلنبورگ-فورپومرن هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "mv-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Mecklenburg-Vorpommern bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در مکلنبورگ-فورپومرن از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۶ سالگی",
          "erklaerung": "در مکلنبورگ-فورپومرن نوجوانان از ۱۶ سالگی اجازهٔ رأی دادن در این انتخابات را دارند."
        }
      },
      {
        "id": "mv-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Mecklenburg-Vorpommern?",
        "antworten": [
          "schwarz-rot-gold",
          "blau-weiß-gelb-rot",
          "grün-weiß-rot",
          "schwarz-gelb"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت مکلنبورگ-فورپومرن چه رنگ‌هایی دارد؟",
          "antwort": "آبی، سفید، زرد و قرمز",
          "erklaerung": "رنگ‌های پرچم مکلنبورگ-فورپومرن: آبی، سفید، زرد و قرمز."
        }
      },
      {
        "id": "mv-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Mecklenburg-Vorpommern über politische Themen informieren?",
        "antworten": [
          "bei der Landeszentrale für politische Bildung",
          "bei den Kirchen",
          "beim Ordnungsamt der Gemeinde",
          "bei der Verbraucherzentrale"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "در مکلنبورگ-فورپومرن کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "mv-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt von Mecklenburg-Vorpommern heißt …",
        "antworten": [
          "Greifswald.",
          "Schwerin.",
          "Rostock.",
          "Wismar."
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پایتخت ایالت مکلنبورگ-فورپومرن … نام دارد.",
          "antwort": "شورین",
          "erklaerung": "پایتخت شورین است، نه روستوک که بزرگ‌ترین شهر ایالت است."
        }
      },
      {
        "id": "mv-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Mecklenburg-Vorpommern?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 2,
        "bild": "bilder/mv-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت مکلنبورگ-فورپومرن است؟",
          "antwort": "شمارهٔ ۳",
          "erklaerung": "مکلنبورگ-فورپومرن در شمال‌شرق آلمان، کنار دریای بالتیک قرار دارد."
        }
      },
      {
        "id": "mv-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef in Mecklenburg-Vorpommern?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت مکلنبورگ-فورپومرن را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت مکلنبورگ-فورپومرن «مینیستِرپرِزیدِنت» نام دارد و پارلمان ایالت او را انتخاب می‌کند."
        }
      },
      {
        "id": "mv-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat Mecklenburg-Vorpommern nicht?",
        "antworten": [
          "Justizministerin/Justizminister",
          "Außenministerin/Außenminister",
          "Finanzministerin/Finanzminister",
          "Innenministerin/Innenminister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "مکلنبورگ-فورپومرن کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ],
    "Niedersachsen": [
      {
        "id": "ni-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Bundesland Niedersachsen?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 2,
        "bild": "",
        "antwortBilder": [
          "bilder/ni-01-1.png",
          "bilder/ni-01-2.png",
          "bilder/ni-01-3.png",
          "bilder/ni-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت نیدرزاکسن است؟",
          "antwort": "تصویر ۳ (اسب سفید روی زمینهٔ قرمز)",
          "erklaerung": "نشان نیدرزاکسن یک اسب سفید در حال جهش روی سپر قرمز است."
        }
      },
      {
        "id": "ni-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis in Niedersachsen?",
        "antworten": [
          "Ammerland",
          "Rhein-Sieg-Kreis",
          "Nordfriesland",
          "Vogtlandkreis"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در نیدرزاکسن است؟",
          "antwort": "آمرلند (Ammerland)",
          "erklaerung": "آمرلند در شمال‌غرب نیدرزاکسن است. راین-زیگ در نوردراین-وستفالن و فوگت‌لاندکرایس در زاکسن است."
        }
      },
      {
        "id": "ni-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag in Niedersachsen gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) نیدرزاکسن برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم نیدرزاکسن هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "ni-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Niedersachsen bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در نیدرزاکسن از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۶ سالگی",
          "erklaerung": "در نیدرزاکسن نوجوانان از ۱۶ سالگی اجازهٔ رأی دادن در این انتخابات را دارند."
        }
      },
      {
        "id": "ni-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Niedersachsen?",
        "antworten": [
          "weiß-blau",
          "schwarz-rot-gold",
          "schwarz-gelb",
          "blau-weiß-rot"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت نیدرزاکسن چه رنگ‌هایی دارد؟",
          "antwort": "سیاه، قرمز و طلایی (با نشان ایالت)",
          "erklaerung": "رنگ‌های پرچم نیدرزاکسن: سیاه، قرمز و طلایی (با نشان ایالت)."
        }
      },
      {
        "id": "ni-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Niedersachsen über politische Themen informieren?",
        "antworten": [
          "bei der Landeszentrale für politische Bildung",
          "beim Ordnungsamt der Gemeinde",
          "bei der Verbraucherzentrale",
          "bei den Kirchen"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "در نیدرزاکسن کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "ni-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt von Niedersachsen heißt …",
        "antworten": [
          "Hannover.",
          "Braunschweig.",
          "Wolfsburg.",
          "Osnabrück."
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "پایتخت ایالت نیدرزاکسن … نام دارد.",
          "antwort": "هانوفر",
          "erklaerung": "هانوفر مرکز دولت و پارلمان نیدرزاکسن است."
        }
      },
      {
        "id": "ni-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Niedersachsen?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 0,
        "bild": "bilder/ni-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت نیدرزاکسن است؟",
          "antwort": "شمارهٔ ۱",
          "erklaerung": "نیدرزاکسن در شمال‌غرب آلمان است و دومین ایالت بزرگ کشور است."
        }
      },
      {
        "id": "ni-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef in Niedersachsen?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت نیدرزاکسن را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت نیدرزاکسن «مینیستِرپرِزیدِنت» نام دارد و پارلمان ایالت او را انتخاب می‌کند."
        }
      },
      {
        "id": "ni-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat Niedersachsen nicht?",
        "antworten": [
          "Justizministerin/Justizminister",
          "Außenministerin/Außenminister",
          "Finanzministerin/Finanzminister",
          "Innenministerin/Innenminister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "نیدرزاکسن کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ],
    "Nordrhein-Westfalen": [
      {
        "id": "nw-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Bundesland Nordrhein-Westfalen?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 1,
        "bild": "",
        "antwortBilder": [
          "bilder/nw-01-1.png",
          "bilder/nw-01-2.png",
          "bilder/nw-01-3.png",
          "bilder/nw-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت نوردراین-وستفالن است؟",
          "antwort": "تصویر ۲ (رود موج‌دار، اسب سفید و گل سرخ)",
          "erklaerung": "نشان نوردراین-وستفالن سه بخش دارد: رود راین، اسب وستفالن و گل سرخ لیپه."
        }
      },
      {
        "id": "nw-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis in Nordrhein-Westfalen?",
        "antworten": [
          "Ammerland",
          "Rhein-Sieg-Kreis",
          "Nordfriesland",
          "Vogtlandkreis"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در نوردراین-وستفالن است؟",
          "antwort": "راین-زیگ (Rhein-Sieg-Kreis)",
          "erklaerung": "این شهرستان نزدیک بن است. آمرلند در نیدرزاکسن و نوردفریسلاند در شلسویگ-هولشتاین است."
        }
      },
      {
        "id": "nw-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag in Nordrhein-Westfalen gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) نوردراین-وستفالن برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم نوردراین-وستفالن هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "nw-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Nordrhein-Westfalen bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در نوردراین-وستفالن از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۶ سالگی",
          "erklaerung": "در نوردراین-وستفالن نوجوانان از ۱۶ سالگی اجازهٔ رأی دادن در این انتخابات را دارند."
        }
      },
      {
        "id": "nw-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Nordrhein-Westfalen?",
        "antworten": [
          "rot-weiß",
          "grün-weiß-rot",
          "schwarz-gold",
          "blau-weiß-rot"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت نوردراین-وستفالن چه رنگ‌هایی دارد؟",
          "antwort": "سبز، سفید و قرمز",
          "erklaerung": "رنگ‌های پرچم نوردراین-وستفالن: سبز، سفید و قرمز."
        }
      },
      {
        "id": "nw-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Nordrhein-Westfalen über politische Themen informieren?",
        "antworten": [
          "bei den Kirchen",
          "beim Ordnungsamt der Gemeinde",
          "bei der Verbraucherzentrale",
          "bei der Landeszentrale für politische Bildung"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "در نوردراین-وستفالن کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "nw-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt von Nordrhein-Westfalen heißt …",
        "antworten": [
          "Köln.",
          "Bonn.",
          "Düsseldorf.",
          "Dortmund."
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پایتخت ایالت نوردراین-وستفالن … نام دارد.",
          "antwort": "دوسلدورف",
          "erklaerung": "پایتخت دوسلدورف است، نه کلن که بزرگ‌ترین شهر ایالت است."
        }
      },
      {
        "id": "nw-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Nordrhein-Westfalen?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 2,
        "bild": "bilder/nw-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت نوردراین-وستفالن است؟",
          "antwort": "شمارهٔ ۳",
          "erklaerung": "نوردراین-وستفالن در غرب آلمان است و پرجمعیت‌ترین ایالت کشور است."
        }
      },
      {
        "id": "nw-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef in Nordrhein-Westfalen?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت نوردراین-وستفالن را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت نوردراین-وستفالن «مینیستِرپرِزیدِنت» نام دارد و پارلمان ایالت او را انتخاب می‌کند."
        }
      },
      {
        "id": "nw-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat Nordrhein-Westfalen nicht?",
        "antworten": [
          "Justizministerin/Justizminister",
          "Außenministerin/Außenminister",
          "Finanzministerin/Finanzminister",
          "Innenministerin/Innenminister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "نوردراین-وستفالن کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ],
    "Rheinland-Pfalz": [
      {
        "id": "rp-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Bundesland Rheinland-Pfalz?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 0,
        "bild": "",
        "antwortBilder": [
          "bilder/rp-01-1.png",
          "bilder/rp-01-2.png",
          "bilder/rp-01-3.png",
          "bilder/rp-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت راینلاند-فالتس است؟",
          "antwort": "تصویر ۱ (صلیب قرمز، چرخ و شیر طلایی با تاج)",
          "erklaerung": "نشان راینلاند-فالتس صلیب قرمز (تریر)، چرخ (ماینتس) و شیر (فالتس) دارد."
        }
      },
      {
        "id": "rp-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis in Rheinland-Pfalz?",
        "antworten": [
          "Westerwaldkreis",
          "Altötting",
          "Emsland",
          "Prignitz"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در راینلاند-فالتس است؟",
          "antwort": "وستروالد (Westerwaldkreis)",
          "erklaerung": "وستروالد در شمال راینلاند-فالتس است. آلتؤتینگ در بایرن، امسلند در نیدرزاکسن و پریگنیتس در براندنبورگ است."
        }
      },
      {
        "id": "rp-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag in Rheinland-Pfalz gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) راینلاند-فالتس برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم راینلاند-فالتس هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "rp-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Rheinland-Pfalz bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "در راینلاند-فالتس از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۸ سالگی",
          "erklaerung": "در راینلاند-فالتس برای رأی دادن در انتخابات محلی باید دست‌کم ۱۸ ساله بود؛ در بیشتر ایالت‌های دیگر این سن ۱۶ سال است."
        }
      },
      {
        "id": "rp-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Rheinland-Pfalz?",
        "antworten": [
          "weiß-rot",
          "schwarz-rot-gold",
          "schwarz-gelb",
          "grün-weiß-rot"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت راینلاند-فالتس چه رنگ‌هایی دارد؟",
          "antwort": "سیاه، قرمز و طلایی (با نشان ایالت)",
          "erklaerung": "رنگ‌های پرچم راینلاند-فالتس: سیاه، قرمز و طلایی (با نشان ایالت)."
        }
      },
      {
        "id": "rp-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Rheinland-Pfalz über politische Themen informieren?",
        "antworten": [
          "bei den Kirchen",
          "bei der Verbraucherzentrale",
          "beim Ordnungsamt der Gemeinde",
          "bei der Landeszentrale für politische Bildung"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "در راینلاند-فالتس کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "rp-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt von Rheinland-Pfalz heißt …",
        "antworten": [
          "Mainz.",
          "Kaiserslautern.",
          "Ludwigshafen.",
          "Koblenz."
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "پایتخت ایالت راینلاند-فالتس … نام دارد.",
          "antwort": "ماینتس",
          "erklaerung": "ماینتس کنار رود راین، مرکز دولت و پارلمان راینلاند-فالتس است."
        }
      },
      {
        "id": "rp-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Rheinland-Pfalz?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 0,
        "bild": "bilder/rp-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت راینلاند-فالتس است؟",
          "antwort": "شمارهٔ ۱",
          "erklaerung": "راینلاند-فالتس در غرب آلمان، کنار فرانسه، لوکزامبورگ و بلژیک قرار دارد."
        }
      },
      {
        "id": "rp-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef in Rheinland-Pfalz?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت راینلاند-فالتس را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت راینلاند-فالتس «مینیستِرپرِزیدِنت» نام دارد و پارلمان ایالت او را انتخاب می‌کند."
        }
      },
      {
        "id": "rp-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat Rheinland-Pfalz nicht?",
        "antworten": [
          "Justizministerin/Justizminister",
          "Außenministerin/Außenminister",
          "Finanzministerin/Finanzminister",
          "Innenministerin/Innenminister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "راینلاند-فالتس کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ],
    "Saarland": [
      {
        "id": "sl-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Bundesland Saarland?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 3,
        "bild": "",
        "antwortBilder": [
          "bilder/sl-01-1.png",
          "bilder/sl-01-2.png",
          "bilder/sl-01-3.png",
          "bilder/sl-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت زارلند است؟",
          "antwort": "تصویر ۴ (چهار بخش با شیر، صلیب و نوارها)",
          "erklaerung": "نشان زارلند از چهار بخش تشکیل شده که یادآور سرزمین‌های تاریخی این منطقه است."
        }
      },
      {
        "id": "sl-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis im Saarland?",
        "antworten": [
          "Mecklenburgische Seenplatte",
          "Altötting",
          "Neunkirchen",
          "Rhein-Sieg-Kreis"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در زارلند است؟",
          "antwort": "نویکیرشن (Neunkirchen)",
          "erklaerung": "نویکیرشن یکی از شهرستان‌های زارلند است. آلتؤتینگ در بایرن و راین-زیگ در نوردراین-وستفالن است."
        }
      },
      {
        "id": "sl-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag des Saarlandes gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) زارلند برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم زارلند هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "sl-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man im Saarland bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "در زارلند از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۸ سالگی",
          "erklaerung": "در زارلند برای رأی دادن در انتخابات محلی باید دست‌کم ۱۸ ساله بود؛ در بیشتر ایالت‌های دیگر این سن ۱۶ سال است."
        }
      },
      {
        "id": "sl-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge des Saarlandes?",
        "antworten": [
          "weiß-blau",
          "schwarz-rot-gold",
          "schwarz-gelb",
          "grün-weiß-rot"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت زارلند چه رنگ‌هایی دارد؟",
          "antwort": "سیاه، قرمز و طلایی (با نشان ایالت)",
          "erklaerung": "رنگ‌های پرچم زارلند: سیاه، قرمز و طلایی (با نشان ایالت)."
        }
      },
      {
        "id": "sl-06",
        "nummer": 6,
        "frage": "Wo können Sie sich im Saarland über politische Themen informieren?",
        "antworten": [
          "bei den Kirchen",
          "bei der Landeszentrale für politische Bildung",
          "bei der Verbraucherzentrale",
          "beim Ordnungsamt der Gemeinde"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در زارلند کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "sl-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt des Saarlandes heißt …",
        "antworten": [
          "Neunkirchen.",
          "Homburg.",
          "Saarbrücken.",
          "Völklingen."
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پایتخت زارلند … نام دارد.",
          "antwort": "زاربروکن",
          "erklaerung": "زاربروکن بزرگ‌ترین شهر و پایتخت زارلند است."
        }
      },
      {
        "id": "sl-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist das Saarland?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 1,
        "bild": "bilder/sl-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت زارلند است؟",
          "antwort": "شمارهٔ ۲",
          "erklaerung": "زارلند کوچک‌ترین ایالت غیرشهری آلمان است و در جنوب‌غرب، کنار فرانسه قرار دارد."
        }
      },
      {
        "id": "sl-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef des Saarlandes?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت زارلند را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت زارلند «مینیستِرپرِزیدِنت» نام دارد و پارلمان ایالت او را انتخاب می‌کند."
        }
      },
      {
        "id": "sl-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat das Saarland nicht?",
        "antworten": [
          "Justizministerin/Justizminister",
          "Außenministerin/Außenminister",
          "Finanzministerin/Finanzminister",
          "Innenministerin/Innenminister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "زارلند کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ],
    "Sachsen": [
      {
        "id": "sn-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Freistaat Sachsen?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 3,
        "bild": "",
        "antwortBilder": [
          "bilder/sn-01-1.png",
          "bilder/sn-01-2.png",
          "bilder/sn-01-3.png",
          "bilder/sn-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت زاکسن است؟",
          "antwort": "تصویر ۴ (نوارهای سیاه و زرد با تاج سبز مورب)",
          "erklaerung": "نشان زاکسن نوارهای افقی سیاه و زرد با یک تاج‌گل سبز مورب است."
        }
      },
      {
        "id": "sn-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis in Sachsen?",
        "antworten": [
          "Vogtlandkreis",
          "Altötting",
          "Uckermark",
          "Nordfriesland"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در زاکسن است؟",
          "antwort": "فوگت‌لاندکرایس (Vogtlandkreis)",
          "erklaerung": "فوگت‌لاند در جنوب‌غرب زاکسن است. اوکرمارک در براندنبورگ و آلتؤتینگ در بایرن است."
        }
      },
      {
        "id": "sn-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag in Sachsen gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) زاکسن برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم زاکسن هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "sn-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Sachsen bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "در زاکسن از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۸ سالگی",
          "erklaerung": "در زاکسن برای رأی دادن در انتخابات محلی باید دست‌کم ۱۸ ساله بود؛ در بیشتر ایالت‌های دیگر این سن ۱۶ سال است."
        }
      },
      {
        "id": "sn-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Sachsen?",
        "antworten": [
          "blau-weiß-rot",
          "weiß-grün",
          "grün-weiß-rot",
          "schwarz-gelb"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت زاکسن چه رنگ‌هایی دارد؟",
          "antwort": "سفید و سبز",
          "erklaerung": "رنگ‌های پرچم زاکسن: سفید و سبز."
        }
      },
      {
        "id": "sn-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Sachsen über politische Themen informieren?",
        "antworten": [
          "bei der Landeszentrale für politische Bildung",
          "beim Ordnungsamt der Gemeinde",
          "bei den Kirchen",
          "bei der Verbraucherzentrale"
        ],
        "richtig": 0,
        "bild": "",
        "fa": {
          "frage": "در زاکسن کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "sn-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt von Sachsen heißt …",
        "antworten": [
          "Leipzig.",
          "Dresden.",
          "Chemnitz.",
          "Zwickau."
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پایتخت ایالت زاکسن … نام دارد.",
          "antwort": "درسدن",
          "erklaerung": "پایتخت درسدن است، نه لایپزیگ که بزرگ‌ترین شهر ایالت است."
        }
      },
      {
        "id": "sn-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Sachsen?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 3,
        "bild": "bilder/sn-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت زاکسن است؟",
          "antwort": "شمارهٔ ۴",
          "erklaerung": "زاکسن در شرق آلمان، کنار لهستان و چک قرار دارد."
        }
      },
      {
        "id": "sn-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef in Sachsen?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت زاکسن را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت زاکسن «مینیستِرپرِزیدِنت» نام دارد و پارلمان ایالت او را انتخاب می‌کند."
        }
      },
      {
        "id": "sn-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat Sachsen nicht?",
        "antworten": [
          "Justizministerin/Justizminister",
          "Außenministerin/Außenminister",
          "Finanzministerin/Finanzminister",
          "Innenministerin/Innenminister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "زاکسن کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ],
    "Sachsen-Anhalt": [
      {
        "id": "st-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Bundesland Sachsen-Anhalt?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 3,
        "bild": "",
        "antwortBilder": [
          "bilder/st-01-1.png",
          "bilder/st-01-2.png",
          "bilder/st-01-3.png",
          "bilder/st-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت زاکسن-آنهالت است؟",
          "antwort": "تصویر ۴ (نوارهای سیاه و زرد، عقاب و خرس روی دیوار)",
          "erklaerung": "نشان زاکسن-آنهالت بالای آن نوارهای زاکسن و عقاب، و پایین آن خرس روی دیوار آجری (آنهالت) است."
        }
      },
      {
        "id": "st-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis in Sachsen-Anhalt?",
        "antworten": [
          "Ammerland",
          "Altötting",
          "Uckermark",
          "Börde"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در زاکسن-آنهالت است؟",
          "antwort": "بورده (Börde)",
          "erklaerung": "بورده نزدیک ماگدبورگ است. آمرلند در نیدرزاکسن، آلتؤتینگ در بایرن و اوکرمارک در براندنبورگ است."
        }
      },
      {
        "id": "st-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag in Sachsen-Anhalt gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) زاکسن-آنهالت برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم زاکسن-آنهالت هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "st-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Sachsen-Anhalt bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در زاکسن-آنهالت از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۶ سالگی",
          "erklaerung": "در زاکسن-آنهالت نوجوانان از ۱۶ سالگی اجازهٔ رأی دادن در این انتخابات را دارند."
        }
      },
      {
        "id": "st-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Sachsen-Anhalt?",
        "antworten": [
          "blau-weiß-rot",
          "gelb-schwarz",
          "grün-weiß-rot",
          "weiß-rot"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت زاکسن-آنهالت چه رنگ‌هایی دارد؟",
          "antwort": "زرد و سیاه",
          "erklaerung": "رنگ‌های پرچم زاکسن-آنهالت: زرد و سیاه."
        }
      },
      {
        "id": "st-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Sachsen-Anhalt über politische Themen informieren?",
        "antworten": [
          "bei den Kirchen",
          "bei der Landeszentrale für politische Bildung",
          "beim Ordnungsamt der Gemeinde",
          "bei der Verbraucherzentrale"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در زاکسن-آنهالت کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "st-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt von Sachsen-Anhalt heißt …",
        "antworten": [
          "Halle.",
          "Dessau.",
          "Magdeburg.",
          "Wittenberg."
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پایتخت ایالت زاکسن-آنهالت … نام دارد.",
          "antwort": "ماگدبورگ",
          "erklaerung": "پایتخت ماگدبورگ است، نه هاله که بزرگ‌ترین شهر ایالت است."
        }
      },
      {
        "id": "st-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Sachsen-Anhalt?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 2,
        "bild": "bilder/st-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت زاکسن-آنهالت است؟",
          "antwort": "شمارهٔ ۳",
          "erklaerung": "زاکسن-آنهالت در شرق آلمان، بین نیدرزاکسن، براندنبورگ، زاکسن و تورینگن قرار دارد."
        }
      },
      {
        "id": "st-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef in Sachsen-Anhalt?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت زاکسن-آنهالت را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت زاکسن-آنهالت «مینیستِرپرِزیدِنت» نام دارد و پارلمان ایالت او را انتخاب می‌کند."
        }
      },
      {
        "id": "st-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat Sachsen-Anhalt nicht?",
        "antworten": [
          "Justizministerin/Justizminister",
          "Außenministerin/Außenminister",
          "Finanzministerin/Finanzminister",
          "Innenministerin/Innenminister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "زاکسن-آنهالت کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ],
    "Schleswig-Holstein": [
      {
        "id": "sh-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Bundesland Schleswig-Holstein?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 2,
        "bild": "",
        "antwortBilder": [
          "bilder/sh-01-1.png",
          "bilder/sh-01-2.png",
          "bilder/sh-01-3.png",
          "bilder/sh-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت شلسویگ-هولشتاین است؟",
          "antwort": "تصویر ۳ (دو شیر آبی و برگ گزنهٔ سفید)",
          "erklaerung": "نشان شلسویگ-هولشتاین دو شیر آبی (شلسویگ) و برگ گزنهٔ سفید روی قرمز (هولشتاین) دارد."
        }
      },
      {
        "id": "sh-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis in Schleswig-Holstein?",
        "antworten": [
          "Ammerland",
          "Mecklenburgische Seenplatte",
          "Nordfriesland",
          "Rhein-Sieg-Kreis"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در شلسویگ-هولشتاین است؟",
          "antwort": "نوردفریسلاند (Nordfriesland)",
          "erklaerung": "نوردفریسلاند در ساحل دریای شمال است. آمرلند در نیدرزاکسن و راین-زیگ در نوردراین-وستفالن است."
        }
      },
      {
        "id": "sh-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag in Schleswig-Holstein gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) شلسویگ-هولشتاین برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم شلسویگ-هولشتاین هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "sh-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Schleswig-Holstein bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در شلسویگ-هولشتاین از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۶ سالگی",
          "erklaerung": "در شلسویگ-هولشتاین نوجوانان از ۱۶ سالگی اجازهٔ رأی دادن در این انتخابات را دارند."
        }
      },
      {
        "id": "sh-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Schleswig-Holstein?",
        "antworten": [
          "weiß-blau",
          "blau-weiß-rot",
          "weiß-rot",
          "grün-weiß-rot"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت شلسویگ-هولشتاین چه رنگ‌هایی دارد؟",
          "antwort": "آبی، سفید و قرمز",
          "erklaerung": "رنگ‌های پرچم شلسویگ-هولشتاین: آبی، سفید و قرمز."
        }
      },
      {
        "id": "sh-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Schleswig-Holstein über politische Themen informieren?",
        "antworten": [
          "bei der Verbraucherzentrale",
          "beim Ordnungsamt der Gemeinde",
          "beim / bei der Landesbeauftragten für politische Bildung",
          "bei den Kirchen"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "در شلسویگ-هولشتاین کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "نزد مسئول ایالتی آموزش سیاسی (Landesbeauftragte für politische Bildung)",
          "erklaerung": "در شلسویگ-هولشتاین به‌جای «مرکز»، یک «مسئول ایالتی آموزش سیاسی» وجود دارد که اطلاعات بی‌طرف دربارهٔ سیاست ارائه می‌دهد."
        }
      },
      {
        "id": "sh-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt von Schleswig-Holstein heißt …",
        "antworten": [
          "Husum.",
          "Flensburg.",
          "Lübeck.",
          "Kiel."
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "پایتخت ایالت شلسویگ-هولشتاین … نام دارد.",
          "antwort": "کیل",
          "erklaerung": "کیل کنار دریای بالتیک، مرکز دولت و پارلمان شلسویگ-هولشتاین است."
        }
      },
      {
        "id": "sh-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Schleswig-Holstein?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 0,
        "bild": "bilder/sh-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت شلسویگ-هولشتاین است؟",
          "antwort": "شمارهٔ ۱",
          "erklaerung": "شلسویگ-هولشتاین شمالی‌ترین ایالت آلمان است و بین دریای شمال و دریای بالتیک، کنار دانمارک قرار دارد."
        }
      },
      {
        "id": "sh-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef in Schleswig-Holstein?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت شلسویگ-هولشتاین را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت شلسویگ-هولشتاین «مینیستِرپرِزیدِنت» نام دارد و پارلمان ایالت او را انتخاب می‌کند."
        }
      },
      {
        "id": "sh-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat Schleswig-Holstein nicht?",
        "antworten": [
          "Justizministerin/Justizminister",
          "Außenministerin/Außenminister",
          "Finanzministerin/Finanzminister",
          "Innenministerin/Innenminister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "شلسویگ-هولشتاین کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ],
    "Thüringen": [
      {
        "id": "th-01",
        "nummer": 1,
        "frage": "Welches Wappen gehört zum Freistaat Thüringen?",
        "antworten": [
          "Bild 1",
          "Bild 2",
          "Bild 3",
          "Bild 4"
        ],
        "richtig": 3,
        "bild": "",
        "antwortBilder": [
          "bilder/th-01-1.png",
          "bilder/th-01-2.png",
          "bilder/th-01-3.png",
          "bilder/th-01-4.png"
        ],
        "fa": {
          "frage": "کدام نشان متعلق به ایالت تورینگن است؟",
          "antwort": "تصویر ۴ (شیر راه‌راه با هشت ستارهٔ سفید روی زمینهٔ آبی)",
          "erklaerung": "نشان تورینگن یک شیر با نوارهای سفید و قرمز و هشت ستارهٔ سفید روی سپر آبی است."
        }
      },
      {
        "id": "th-02",
        "nummer": 2,
        "frage": "Welches ist ein Landkreis in Thüringen?",
        "antworten": [
          "Ammerland",
          "Altötting",
          "Nordfriesland",
          "Wartburgkreis"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "کدام یک شهرستان (لاندکرایس) در تورینگن است؟",
          "antwort": "وارتبورگ (Wartburgkreis)",
          "erklaerung": "وارتبورگ‌کرایس در غرب تورینگن است و نامش از قلعهٔ وارتبورگ گرفته شده است."
        }
      },
      {
        "id": "th-03",
        "nummer": 3,
        "frage": "Für wie viele Jahre wird der Landtag in Thüringen gewählt?",
        "antworten": [
          "3",
          "4",
          "5",
          "6"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "پارلمان ایالتی (لندتاگ) تورینگن برای چند سال انتخاب می‌شود؟",
          "antwort": "۵ سال",
          "erklaerung": "مردم تورینگن هر ۵ سال یک‌بار نمایندگان پارلمان ایالتی را انتخاب می‌کنند."
        }
      },
      {
        "id": "th-04",
        "nummer": 4,
        "frage": "Ab welchem Alter darf man in Thüringen bei Kommunalwahlen wählen?",
        "antworten": [
          "14",
          "16",
          "18",
          "20"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "در تورینگن از چند سالگی می‌توان در انتخابات محلی رأی داد؟",
          "antwort": "از ۱۶ سالگی",
          "erklaerung": "در تورینگن نوجوانان از ۱۶ سالگی اجازهٔ رأی دادن در این انتخابات را دارند."
        }
      },
      {
        "id": "th-05",
        "nummer": 5,
        "frage": "Welche Farben hat die Landesflagge von Thüringen?",
        "antworten": [
          "blau-weiß-rot",
          "weiß-rot",
          "grün-weiß-rot",
          "schwarz-gold"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پرچم ایالت تورینگن چه رنگ‌هایی دارد؟",
          "antwort": "سفید و قرمز",
          "erklaerung": "رنگ‌های پرچم تورینگن: سفید و قرمز."
        }
      },
      {
        "id": "th-06",
        "nummer": 6,
        "frage": "Wo können Sie sich in Thüringen über politische Themen informieren?",
        "antworten": [
          "bei den Kirchen",
          "bei der Verbraucherzentrale",
          "bei der Landeszentrale für politische Bildung",
          "beim Ordnungsamt der Gemeinde"
        ],
        "richtig": 2,
        "bild": "",
        "fa": {
          "frage": "در تورینگن کجا می‌توانید دربارهٔ موضوعات سیاسی اطلاعات بگیرید؟",
          "antwort": "در مرکز ایالتی آموزش سیاسی (Landeszentrale für politische Bildung)",
          "erklaerung": "این یک ادارهٔ دولتی است که اطلاعات بی‌طرف و اغلب رایگان دربارهٔ سیاست و دموکراسی ارائه می‌دهد."
        }
      },
      {
        "id": "th-07",
        "nummer": 7,
        "frage": "Die Landeshauptstadt von Thüringen heißt …",
        "antworten": [
          "Eisenach.",
          "Erfurt.",
          "Gera.",
          "Jena."
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "پایتخت ایالت تورینگن … نام دارد.",
          "antwort": "ارفورت",
          "erklaerung": "ارفورت مرکز دولت و پارلمان تورینگن است."
        }
      },
      {
        "id": "th-08",
        "nummer": 8,
        "frage": "Welches Bundesland ist Thüringen?",
        "antworten": [
          "1",
          "2",
          "3",
          "4"
        ],
        "richtig": 1,
        "bild": "bilder/th-08.png",
        "fa": {
          "frage": "در نقشه، کدام ایالت تورینگن است؟",
          "antwort": "شمارهٔ ۲",
          "erklaerung": "تورینگن در مرکز آلمان قرار دارد و به آن «قلب سبز آلمان» می‌گویند."
        }
      },
      {
        "id": "th-09",
        "nummer": 9,
        "frage": "Wie nennt man die Regierungschefin/den Regierungschef in Thüringen?",
        "antworten": [
          "Erste Ministerin/Erster Minister",
          "Premierministerin/Premierminister",
          "Bürgermeisterin/Bürgermeister",
          "Ministerpräsidentin/Ministerpräsident"
        ],
        "richtig": 3,
        "bild": "",
        "fa": {
          "frage": "رئیس دولت ایالت تورینگن را چه می‌نامند؟",
          "antwort": "نخست‌وزیر ایالتی (Ministerpräsident)",
          "erklaerung": "رئیس دولت تورینگن «مینیستِرپرِزیدِنت» نام دارد و پارلمان ایالت او را انتخاب می‌کند."
        }
      },
      {
        "id": "th-10",
        "nummer": 10,
        "frage": "Welche Ministerin/welchen Minister hat Thüringen nicht?",
        "antworten": [
          "Justizministerin/Justizminister",
          "Außenministerin/Außenminister",
          "Finanzministerin/Finanzminister",
          "Innenministerin/Innenminister"
        ],
        "richtig": 1,
        "bild": "",
        "fa": {
          "frage": "تورینگن کدام وزیر را ندارد؟",
          "antwort": "وزیر امور خارجه",
          "erklaerung": "سیاست خارجی وظیفهٔ دولت فدرال است، نه ایالت‌ها؛ بنابراین ایالت‌ها وزیر خارجه ندارند."
        }
      }
    ]
  }
};
