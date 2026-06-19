# Workshop Brief – Claude Code Berlin, 19. Juni 2026

## Projekt

**Arbeitstitel:** Sanierungs-Pre-Assessment für deutsche Gebäudetypologien
**Format:** Landing Page (Single-Page) mit eingebettetem interaktiven Mini-Tool
**Deploy:** Vercel
**Tech:** React + Tailwind, statisch, JSON-Datenbasis im Code

---

## Was ich baue

Eine Landing Page, auf der Besucher:innen in drei Klicks eine Erstabschätzung zur Sanierung eines deutschen Bestandsgebäudes bekommen:

1. Gebäudetypologie wählen (5 Optionen: Gründerzeit, Wiederaufbau, Plattenbau, Büro 60er/70er, Büro 80er/90er)
2. Sanierungsziel wählen (GEG-Mindeststandard, Effizienzhaus 70/55, denkmalverträglich, Büro→Wohnen-Umnutzung)
3. Ergebnis: Sanierungsroadmap mit Bestandskennwerten, Sequenz-Empfehlung, kritischen Anschlüssen mit Risiko-Ampel, Kostenrahmen, Bauzeit, Fördermöglichkeiten und Pflichtprüfungs-Warnungen

Plus klassische Landing-Page-Elemente: Über mich, Leistungen, Portfolio (Bestand → Render), Ressourcen/Quellen, Kontakt.

---

## Für wen

**Primäre Zielgruppen:**
- Privateigentümer:innen von Bestandsgebäuden (Sanierungsentscheidung)
- Architekturbüros ohne eigene Bauphysik-Expertise (Erstcheck vor Fachplaner-Beauftragung)
- Investoren / Vermieter (Portfolio-Bewertung)
- Studierende und Berufseinsteiger:innen Architektur/Bauingenieurwesen (Lern-Tool)

**Sekundär:** Eigentümer:innen von Bürogebäuden mit Umnutzungs-Interesse.

---

## Welches Problem

Zwischen kostenfreien Laien-Tools (co2online Heizkostenrechner) und kostenpflichtiger Profi-Software (BKI Energieplaner, Hottgenroth) gibt es keine zugängliche Erstabschätzung, die:

- **typologisch denkt** (nicht Bauteil-isoliert, sondern Gebäude als System)
- **die richtige Sequenz** der Sanierungsmaßnahmen erklärt (warum erst Dach, dann Fenster, dann Innendämmung)
- **kritische Anschlussdetails** sichtbar macht (Holzbalkenkopf, Fensterlaibung, Schornstein)
- **Schadstoff- und Schwamm-Risiken** als Pflichtcheck integriert
- **Umnutzungspotenzial** (Büro→Wohnen) realistisch einordnet
- bauordnungsrechtliche Stolpersteine (Treppenhaus-Brandschutz, lichte Raumhöhe) markiert

Das Tool schließt diese Lücke als Pre-Assessment – kein Ersatz für Fachplanung, aber strukturierte Orientierung vor dem Erstgespräch.

---

## Sections / Seitenstruktur

1. **Nav Bar** (sticky, mit DE/EN Toggle)
2. **Hero** – Headline + Untertitel + zwei CTAs
3. **Mini-Tool** – Pre-Assessment (Herzstück)
4. **Leistungen / Services** – 5 Karten (Bauphysik, Denkmal, Nutzungskonzepte, Visualisierung, Nachhaltigkeit)
5. **Portfolio** – 3 Projekte: Bestandsfoto neben Sanierungs-Render
6. **Über mich** – Profilfoto + Kurztext + Werdegang-Stichpunkte
7. **Ressourcen / Quellen** – kuratierte Linkliste (GEG, WTA, DIN, KfW, BAFA, u-wert.net, IWU, BKI, TRGS)
8. **Kontakt** – E-Mail, LinkedIn
9. **Footer** – Disclaimer, Impressum, Datenschutz, Stand

Mobile: Hamburger-Menü, Karten gestackt.

---

## Design-Referenzen / Style

**Ton:** ruhig, technisch, wissenschaftlich-präzise. Keine Marketing-Sprache, keine Stockfotos.

**Farbwelt (Vorschlag, finalisiere ich Donnerstag):**
- warmes Off-White Hintergrund
- Anthrazit-Text
- ein Akzent (Terracotta oder Tiefblau)
- gedämpfte Risiko-Ampel (Grün/Gelb/Rot, nicht knallig)

**Typografie:**
- Serif Headlines (Source Serif, Crimson Pro, oder ähnlich)
- Sans-Serif Body (Inter, IBM Plex Sans)
- Monospace für Daten/Zahlen (JetBrains Mono)

**Layout:**
- Viel Weißraum
- Tabellen statt Bullet-Listen wo möglich
- Dezente horizontale Trennlinien
- Reduzierte Icon-Verwendung

**Referenzen die mir gefallen:**
- Donnerstag bringe ich 2-3 konkrete URLs mit.

---

## Inhalt, den ich mitbringe

**Datenbasis:**
- Validierte JSON-Datei mit 5 Typologien × 3 Sanierungspfaden + Materialien + Risikomatrix + Schadstoffregister + Förderlogik 2025. Fact-checked gegen GEG 2024, WTA, DIN, BKI, KfW/BAFA.

**Texte (vorformuliert):**
- Hero Headline + Untertitel (DE/EN)
- Tool-Erklärung + Disclaimer
- Über-mich-Text
- Leistungs-Karten-Texte
- Footer-Disclaimer

**Visuelles:**
- 3 Portfolio-Projekte (Bestandsfoto + Render)
- Profilfoto
- 2-3 Design-Referenz-URLs

**Kontaktdaten:**
- E-Mail, LinkedIn

---

## Features (Wunschliste, priorisiert)

**Priorität 1 – Workshop-Output:**
- Funktionierende Typologie-Auswahl + Sanierungsziel + Ergebnis-Anzeige
- JSON-Datenbasis korrekt eingebunden
- Sprach-Toggle DE/EN (mindestens Hero + Tool)
- Disclaimer prominent platziert
- Deploy auf Vercel mit Custom-Subdomain
- Footer mit Impressum-Platzhalter (rechtlich Pflicht)

**Priorität 2 – wenn Zeit bleibt:**
- Über mich + Kontakt + Portfolio-Sektion
- Print/PDF-Button für Tool-Ergebnis
- Sticky Nav mit Smooth-Scroll

**Priorität 3 – V2 nach Workshop:**
- Vollständige Übersetzung EN
- Detaillierte Anschlussdetails als Modal/Drawer
- Bauteil-Tooltips mit erklärenden Texten
- Vorher/Nachher-Slider im Portfolio
- Erweiterung auf weitere Typologien (Fachwerk, Industriebau, Glasfassade 2000er)

---

## Was ich vom Workshop brauche

- Hilfe bei der React-Struktur (Komponenten-Aufbau)
- Tailwind-Styling-Patterns für saubere Typografie
- JSON-Import und State-Management für Tool-Auswahl
- Vercel-Deploy
- Sinnvolle Folder-Struktur für Erweiterung post-Workshop

---

## Was ich NICHT erwarte

- Vollständige V1 (Portfolio-Bilder kommen später, EN-Übersetzung kommt später)
- Backend / Datenbank (alles statisch)
- Login / User-Konten
- Tracking / Analytics (V2 separat)

---

## Disclaimer auf der Seite (Pflicht-Text)

> Dieses Tool dient ausschließlich der ersten Orientierung. Die dargestellten Werte sind typologische Mittelwerte aus normativen Quellen (GEG 2024, WTA-Merkblätter, DIN 4108, DIN EN 1991-1-1, BKI Altbau, IWU Wohngebäudetypologie). Sie ersetzen keine objektspezifische Fachplanung, keine Tragwerksplanung, keinen Brandschutznachweis und keine Vor-Ort-Begutachtung. Vor jeder konkreten Maßnahme ist die Einbindung qualifizierter Fachplaner:innen, Energieeffizienz-Expert:innen und ggf. öffentlich bestellter Sachverständiger zwingend erforderlich. Förderkonditionen ändern sich häufig – tagesaktuell prüfen.

---

## Stand der Vorbereitung

- [x] Inhaltliche Recherche abgeschlossen (Gemini Deep Research + Claude Fact-Check)
- [x] JSON-Datenbasis erstellt und validiert
- [x] Wireframe definiert
- [x] Brief-Dokument (dieses Dokument)
- [ ] Texte ausformulieren (heute/morgen mit Claude)
- [ ] Portfolio-Bilder sammeln (Donnerstag)
- [ ] Design-Referenzen sammeln (Donnerstag)
- [ ] GitHub-Repo angelegt (Workshop)
- [ ] Vercel-Account verbunden (Workshop)
