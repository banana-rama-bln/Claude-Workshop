# Workshop-Cheatsheet – Claude Code Friday 19.06.2026

**Ziel:** in 2 Stunden eine deploye-fertige Landing Page mit Mini-Tool live auf Vercel.

**Was du mitbringst (auf dem Laptop / Cloud-Drive):**
- `sanierungs_datenbasis.json` (die fact-checked JSON-Datei)
- `texte.md` (Hero, Über-mich, Disclaimer, Leistungen – alle Texte fertig)
- `portfolio/` Ordner mit 3 Bestand-Render-Paaren (Bilder)
- `profilfoto.jpg`
- 2-3 Design-Referenz-Screenshots
- Diese Datei (Cheatsheet)

**Accounts ready (vorher checken):**
- [ ] GitHub eingeloggt
- [ ] Vercel mit GitHub verbunden
- [ ] Claude Pro / Max aktiv

---

## Workshop-Ablauf in 6 Phasen

### Phase 1: Setup (ca. 15 Min)

Vidushi wird euch durch das initiale Setup führen. Wenn du selbst loslegst:

**Prompt 1 an Claude Code:**
```
Setup ein neues React + Vite + Tailwind Projekt für eine Landing Page.
Verwende TypeScript. Erstelle einen GitHub-Repo "sanierungs-pre-assessment"
und verbinde Vercel für automatisches Deployment. Strukturiere den Code
modular mit Komponenten in src/components/, Daten in src/data/, Texte
mehrsprachig in src/i18n/.
```

### Phase 2: JSON-Datenbasis einbinden (ca. 10 Min)

**Prompt 2:**
```
Lege die Datei sanierungs_datenbasis.json (im Anhang) unter
src/data/typologien.json ab. Erstelle einen TypeScript-Type
"SanierungsDatenbank" der das Schema abbildet. Erstelle einen Hook
useSanierungsData() der die Daten lädt und bereitstellt.
```

→ Lade dann die JSON in den Chat / referenziere die Datei.

### Phase 3: Hero + Nav (ca. 15 Min)

**Prompt 3:**
```
Erstelle die Hero-Sektion mit folgendem Inhalt (Deutsch und Englisch
via Toggle):

[Hero-Text aus texte.md einfügen]

Designvorgaben:
- Schriftart Headlines: serifenbetont (z.B. Source Serif Pro via Google Fonts)
- Schriftart Body: sans-serif (Inter)
- Hintergrund: warmes Off-White #F7F4EE
- Text: #1a1a1a
- Akzentfarbe: gedecktes Terracotta #B8654A
- Sticky Navigation mit DE/EN Toggle rechts
- Anker-Links: Tool, Leistungen, Portfolio, Über, Kontakt
- Zwei CTAs in Hero: primär "Tool öffnen" (scrollt zu #tool),
  sekundär "Über das Projekt" (scrollt zu #ueber)
- Sehr viel Weißraum, ruhige, technisch-präzise Anmutung
- Mobile responsive
```

### Phase 4: Mini-Tool – das Kernstück (ca. 40 Min)

**Prompt 4 (Tool-Struktur):**
```
Baue die Mini-Tool-Sektion als interaktive Komponente <SanierungsTool />:

EINGABE-FLOW (alles auf einer Seite sichtbar, scrollend):

Schritt 1 - Gebäudetypologie:
  5 Karten nebeneinander (Desktop) / 2-spaltig (Mobile)
  Karten: A Gründerzeit, B Wiederaufbau, C Plattenbau WBS70,
  D Büro 60er/70er Curtain Wall, E Büro 80er/90er Loch
  Klick aktiviert Karte (visuelle Hervorhebung)
  Daten kommen aus typologien.json

Schritt 2 - Eckdaten:
  - Baujahr genauer: Dropdown 5-Jahres-Spannen je nach Typologie
  - Denkmalstatus: Radio (Ja / Nein / Erhaltungsverordnung / unbekannt)
    → wenn Ja: roter Hinweis-Block "Pflicht vor jeder Maßnahme:
      Denkmalrechtliche Erlaubnis bei Unterer Denkmalschutzbehörde.
      Steuervorteil §7i/§11b EStG, KfW 261 EH-Denkmal möglich.
      Behördengespräch + Sachverständige zwingend."
  - Bundesland: Dropdown 16 BL
  - Größenklasse: Dropdown (<200, 200-1000, 1000-5000, >5000 m² BGF)

Schritt 3 - Sanierungsziel:
  Radio-Buttons mit Tooltip-Info (Klick auf "i"):
    - GEG-Mindeststandard (Tooltip: § 71 GEG Bauteilanforderung)
    - Effizienzhaus 70 (Tooltip: KfW 261, bis 120.000€/WE Kredit)
    - Effizienzhaus 55 (Tooltip: KfW 261, mit EE-Klasse 150.000€/WE)
    - Effizienzhaus 40 (Tooltip: höchste Förderung KfW 261)
    - Denkmal-verträglich (Tooltip: § 105 GEG Abweichung, EH-Denkmal)
    - Nutzungsänderung / Umnutzung
      → wenn gewählt: zusätzliches Dropdown "Von-Nach"
        (Büro→Wohnen, Gewerbe→Wohnen, Wohnen→Gewerbe, sonstiges)
      → roter Hinweis-Block "Nutzungsänderung = Lastenwechsel.
        Tragwerksprüfung nach DIN EN 1991-1-1 zwingend.
        Statikgutachten erforderlich. Bauordnungsrechtliche
        Nutzungsänderung beantragen (LBO)."

Schritt 4 - Bestand-Status:
  Multi-Select Checkboxen: "Was wurde bereits saniert/erneuert?"
    Fenster, Dach, Fassade, Heizung, Sanitär, Elektro,
    Innenwände, Decken, Fußbodenbeläge, Tragwerk,
    nichts / unbekannt

Schritt 5 - Vorab-Checks (Yes/No):
  - Schadstoffgutachten vorhanden? (Ja/Nein/unbekannt)
  - Asbest-Befund bekannt? (Ja/Nein/unbekannt)
  - Hausschwamm-Verdacht oder -Befund? (Ja/Nein/unbekannt)
  - Statisches Bestandsgutachten vorhanden? (Ja/Nein)

AUSGABE-LOGIK:
Ergebnis-Karte erscheint UNTER den Eingaben, sobald genug Daten da sind.
Aktualisiert sich live bei Änderungen.
```

**Prompt 5 (Ergebnis-Karte):**
```
Erstelle die Ergebnis-Karte <Roadmap /> mit folgender Struktur,
gefüllt aus typologien.json basierend auf Eingaben:

1. Bestandskennwerte:
   Tabelle Bauteile mit U-Werten (aus JSON gefiltert nach Typologie
   und ob laut Schritt 4 schon erneuert)

2. Empfohlene Sanierungssequenz:
   Nummerierte Schritte aus json[typologie].sanierungspfade[ziel].sequenz
   Jeder Schritt mit Begründung (Tauwasser, Anschlussabhängigkeit, etc.)
   Wenn Schadstoff-/Schwamm-Check verneint: als Schritt 1 einfügen
   "Schadstoff- und Schwammgutachten beauftragen"

3. Kritische Anschlüsse – Risiko-Ampel:
   Liste aus json[typologie].risikomatrix_anschluesse
   Rote, gelbe, grüne Punkte mit Begründung

4. Kennzahlen-Block:
   - Kostenrahmen: X-Y €/m² BGF (netto, ohne Gerüst/Nebenkosten)
   - Bauzeit: X-Y Monate
   - GEG-Bezug: § 102 / 103 / 105

5. Förderoptionen:
   Liste der möglichen Programme (BEG-EM BAFA, KfW 261 Effizienzhaus,
   KfW 458 Heizung, etc.) mit kurzer Beschreibung und Link zu kfw.de/bafa.de

6. Pflicht-Warnungen:
   Aus json[typologie].warnhinweise_kritisch alle relevanten,
   plus dynamisch generierte (z.B. bei Denkmal "ja", bei
   Nutzungsänderung, bei fehlendem Schadstoffgutachten)

7. Empfohlene nächste Schritte:
   - Was du als nächstes brauchst (z.B. Energieeffizienz-Experte,
     Tragwerksplaner, Brandschutzgutachter, Denkmal-Sachverständige)
   - Link zu Energieeffizienz-Expertenliste der dena

8. Disclaimer prominent unter dem Ergebnis:
   "Orientierungswerte. Ersetzt keine Fachplanung. Stand: Juni 2026.
    Quellen: GEG 2024, WTA 6-4/6-5, DIN 4108, DIN EN 1991-1-1, BKI Altbau."

Plus: Print-Button rechts oben (window.print()).
```

### Phase 5: Restliche Sektionen (ca. 20 Min)

**Prompt 6:**
```
Erstelle die folgenden Sektionen unter dem Tool:

LEISTUNGEN: 5 Karten in Grid (3+2 Desktop, 1-spaltig Mobile)
[Texte aus leistungen.md einfügen]

PORTFOLIO: 3 Projekte, jeweils zwei Bilder nebeneinander (Vorher/Nachher)
plus Titel + 2-3 Zeilen Beschreibung
Bilder aus public/portfolio/

ÜBER MICH: Profilfoto links, Text rechts (Desktop) / Mobile gestackt
[Text aus ueber-mich.md kurze Version einfügen]

RESSOURCEN / QUELLEN: 5 Kategorien als Linklisten
- Normen (GEG, DIN 4108, DIN EN 1991-1-1, DIN 68800-4)
- WTA-Merkblätter (6-4, 6-5, 1-2)
- Förderung (KfW BEG, BAFA, KfW 261 Denkmal)
- Datenbanken (u-wert.net, IWU, BKI)
- Schadstoffe (TRGS 519, TRGS 521)
Externe Links öffnen in neuem Tab

KONTAKT: nur E-Mail (dayanaborn@gmail.com) und LinkedIn als Direkt-Links
KEIN Kontaktformular in V1

FOOTER:
"Showcase / wissenschaftliches Projekt in Entwicklung.
 Disclaimer | Impressum (placeholder) | Datenschutz (placeholder) |
 Stand: Juni 2026 | © Dayana Born 2026"
```

### Phase 6: i18n + Deploy (ca. 20 Min)

**Prompt 7:**
```
Aktiviere die Sprachumschaltung DE/EN. Verwende react-i18next oder
ein leichtgewichtiges Custom-Hook System. Alle Texte aus texte.md
mit DE/EN Versionen in src/i18n/de.json und src/i18n/en.json.
Toggle in der Navigation persistiert in localStorage.
```

**Prompt 8:**
```
Mache einen Production-Build, fixe alle TypeScript-Errors und
deploye auf Vercel. Subdomain: sanierungs-pre-assessment.vercel.app
(oder ähnlich). Stelle sicher dass der Build keine Warnings produziert.
```

---

## Notfall-Snippets falls etwas hakt

**Wenn JSON-Import probleme macht:**
```
Importiere die JSON wie folgt:
import typologien from './data/typologien.json' assert { type: 'json' };
Falls Vite das nicht akzeptiert, alternativ:
import typologien from './data/typologien.json';
und in vite-env.d.ts: declare module '*.json';
```

**Wenn Tailwind nicht greift:**
```
Stelle sicher dass tailwind.config.js content auf
"./src/**/*.{js,ts,jsx,tsx}" zeigt und @tailwind base/components/utilities
in src/index.css importiert sind.
```

**Wenn Vercel-Deploy fehlschlägt:**
```
Prüfe ob package.json "build": "vite build" definiert.
In Vercel-Einstellungen: Framework Preset = Vite, Build Command = npm run build,
Output Directory = dist.
```

---

## Was NICHT machen am Freitag (V2-Backlog)

- ❌ Echter PDF-Export (Browser-Print reicht V1)
- ❌ Vollständige EN-Übersetzung (nur Hero + Tool-Labels)
- ❌ Visualisierung IST/SOLL (V2)
- ❌ KI-Chat (V3)
- ❌ Kontaktformular (E-Mail-Link reicht)
- ❌ Analytics
- ❌ Cookie-Banner (keine Cookies in V1)
- ❌ Detail-Modals für Anschlüsse (V2)

---

## Nach dem Workshop

- [ ] Disclaimer-Text mit Anwalt prüfen (Haftungsausschluss präzisieren)
- [ ] Impressum und Datenschutzerklärung erstellen (Pflicht in DE!)
  - Tipp: e-recht24.de Generator für Standard-Texte
- [ ] Portfolio-Bilder hochauflösend ersetzen
- [ ] EN-Übersetzung komplettieren
- [ ] Bei Tag X: Custom Domain registrieren

---

## Wenn du gar nicht mehr weiterkommst

1. Sag Vidushi oder Nakul Bescheid (sie sind da um zu helfen)
2. Notfalls: Tool-Sektion auf "Coming Soon"-Placeholder reduzieren,
   restliche Seite trotzdem fertigstellen
3. Notfalls 2: nur Single-Page mit Hero + Über-mich + Kontakt deployen,
   Tool später nachreichen
