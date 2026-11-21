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
     (Übersetzungen liegen NICHT hier, sondern je Sprache in sprachen/<code>.js)
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      ]
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bildQuelle": "© Deutscher Bundestag/Achim Melde"
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bildQuelle": "© Bundesregierung/Engelbert Reineke"
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bildQuelle": "In Anlehnung an Bundeswahlordnung (BWO), Anlage 26"
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": "bilder/g176.jpg"
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bildQuelle": "© Bundesregierung/Engelbert Reineke"
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": "bilder/g187.jpg"
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      ]
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bildQuelle": "© Deutscher Bundestag/Janine Schmitz"
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      ]
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bildQuelle": "© Bundesregierung/Richard Schulze-Vorberg"
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
      "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/bw-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/by-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/be-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/bb-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/hb-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/hh-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/he-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/mv-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/ni-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/nw-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/rp-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/sl-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/sn-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/st-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/sh-08.png"
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
        "bild": ""
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
        "bild": ""
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
        ]
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": ""
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
        "bild": "bilder/th-08.png"
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
        "bild": ""
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
        "bild": ""
      }
    ]
  }
};
