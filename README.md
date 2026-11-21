# Einbürgerungstest Trainer

Web-App zum Üben für den deutschen Einbürgerungstest / „Leben in Deutschland“ – mit Übersetzungshilfe in Farsi/Dari, Arabisch, Türkisch, Russisch und Englisch.

**App öffnen:** https://mojtabaershad.github.io/einbuergerungstest/

- Alle 460 Fragen aus dem BAMF-Gesamtfragenkatalog (Stand 07.05.2025): 300 allgemeine + 10 Landesfragen für jedes der 16 Bundesländer
- Hilfssprache wird bei der Registrierung gewählt (jederzeit änderbar): Farsi/Dari, العربية, Türkçe, Русский, English – oder nur Deutsch
- Sofort-Feedback, Übersetzung und kurze Erklärung zu jeder Frage in der gewählten Sprache
- Lernhilfen: Suche/Sprung zu jeder Frage, Übersetzung aller Antwortmöglichkeiten (auch vor dem Antworten einblendbar), Vorlesen auf Deutsch
- Fehler-Ordner: falsche Fragen werden zufällig wiederholt, bis sie 2× richtig beantwortet sind
- Prüfungssimulation wie im echten Test: 30 + 3 Fragen, 60 Minuten, bestanden ab 17
- Konto mit E-Mail und Passwort (Firebase Authentication), Fortschritt wird in der Cloud gespeichert und zwischen Geräten abgeglichen (Cloud Firestore, Frankfurt)

## Dateien
- `index.html` – die App
- `fragen.js` – Fragenkatalog auf Deutsch (allgemeine Fragen + Bundesland-Fragen)
- `sprachen/` – Übersetzungen (`fa.js`, `ar.js`, `tr.js`, `ru.js`, `en.js`); es wird nur die gewählte Sprache geladen
- `bilder/` – Bilder zu den Bildfragen (aus dem BAMF-Katalog, Bildnachweise in der App)

Hinweis: Die Übersetzungen sind Lernhilfen und sollten von Muttersprachlern gegengelesen werden. Die Lösungen sind nicht Teil des offiziellen Katalogs und wurden nachträglich ergänzt – vor der Prüfung bitte mit dem BAMF-Online-Testcenter abgleichen.

## Datenschutz
Schriften werden lokal ausgeliefert (`fonts/`, Vazirmatn und Atkinson Hyperlegible unter SIL Open Font License). Kein Tracking. Siehe `datenschutz.html` und `impressum.html`.
