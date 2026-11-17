# Einbürgerungstest Trainer

Web-App zum Üben für den deutschen Einbürgerungstest / „Leben in Deutschland“ – mit Farsi-Hilfe.

**App öffnen:** https://mojtabaershad.github.io/einbuergerungstest/

- Alle 460 Fragen aus dem BAMF-Gesamtfragenkatalog (Stand 07.05.2025): 300 allgemeine + 10 Landesfragen für jedes der 16 Bundesländer
- Sofort-Feedback, Farsi-Übersetzung und kurze Erklärung zu jeder Frage
- Lernhilfen: Suche/Sprung zu jeder Frage, Farsi-Übersetzung aller Antwortmöglichkeiten (auch vor dem Antworten einblendbar), Vorlesen auf Deutsch
- Fehler-Ordner: falsche Fragen werden zufällig wiederholt, bis sie 2× richtig beantwortet sind
- Prüfungssimulation wie im echten Test: 30 + 3 Fragen, 60 Minuten, bestanden ab 17
- Konto mit E-Mail und Passwort (Firebase Authentication), Fortschritt wird in der Cloud gespeichert und zwischen Geräten abgeglichen (Cloud Firestore, Frankfurt)

## Dateien
- `index.html` – die App
- `fragen.js` – Fragenkatalog (allgemeine Fragen + Bundesland-Fragen)
- `bilder/` – Bilder zu den Bildfragen (aus dem BAMF-Katalog, Bildnachweise in der App)

Hinweis: Die Lösungen sind nicht Teil des offiziellen Katalogs und wurden nachträglich ergänzt – vor der Prüfung bitte mit dem BAMF-Online-Testcenter abgleichen.

## Datenschutz
Schriften werden lokal ausgeliefert (`fonts/`, Vazirmatn unter SIL Open Font License). Kein Tracking. Siehe `datenschutz.html` und `impressum.html`.
