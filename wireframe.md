# Wireframe – Sanierungs-Pre-Assessment Landing Page

**Stand:** 17.06.2026
**Format:** Single-Page (Long-Scroll) mit Anker-Navigation
**Sprachen:** DE / EN Toggle
**Tech:** React + Tailwind, statisch, Vercel-Deploy

---

## Seitenstruktur (Top → Bottom)

```
┌─────────────────────────────────────────────────────┐
│ 1. NAV BAR (sticky)                                 │
│ 2. HERO                                             │
│ 3. MINI-TOOL (Sanierungs-Pre-Assessment)            │
│ 4. LEISTUNGEN / SERVICES                            │
│ 5. PORTFOLIO (Bestand → Render)                     │
│ 6. ÜBER MICH                                        │
│ 7. RESSOURCEN / QUELLEN                             │
│ 8. KONTAKT                                          │
│ 9. FOOTER (Disclaimer, Impressum, Datenschutz)      │
└─────────────────────────────────────────────────────┘
```

---

## 1. Nav Bar (sticky top)

```
┌──────────────────────────────────────────────────────────────┐
│ [Logo/Name]    Tool · Leistungen · Portfolio · Über · Kontakt│
│                                              [DE | EN]       │
└──────────────────────────────────────────────────────────────┘
```

- Sticky beim Scrollen
- Anker-Links zu Sektionen
- Sprach-Toggle rechts

---

## 2. Hero

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   Bestand verstehen.                                         │
│   Sanierung richtig sequenzieren.                            │
│                                                              │
│   Pre-Assessment-Tool für deutsche Gebäudetypologien.        │
│   Bauphysik, Denkmalpflege, Umnutzung.                       │
│                                                              │
│   [Tool öffnen →]    [Mehr erfahren]                         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

- Klare Headline, ein Untertitel-Satz
- Zwei CTAs: primär Tool-Anker, sekundär Scroll
- Optional: subtiles Hintergrundbild (Bestandsfoto, sehr dezent)

---

## 3. Mini-Tool – Sanierungs-Pre-Assessment

**Herzstück.** Drei-Schritte-Flow, alles auf einer Seite sichtbar.

```
┌──────────────────────────────────────────────────────────────┐
│ Pre-Assessment für deine Bestandssanierung                   │
│ ──────────────────────────────────────────────               │
│                                                              │
│ Schritt 1: Gebäudetypologie wählen                           │
│                                                              │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────┐│
│ │Gründer-  │ │Wieder-   │ │Plattenbau│ │Büro      │ │Büro  ││
│ │zeit MFH  │ │aufbau    │ │WBS 70    │ │60er/70er │ │80er  ││
│ │1870-1918 │ │1948-1960 │ │Ost       │ │Curtain   │ │/90er ││
│ │          │ │          │ │          │ │Wall      │ │Loch  ││
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────┘│
│                                                              │
│ Schritt 2: Sanierungsziel                                    │
│                                                              │
│ ( ) GEG-Mindeststandard                                      │
│ ( ) Effizienzhaus 70 / 55                                    │
│ ( ) Denkmalverträglich (§ 105 GEG)                           │
│ ( ) Umnutzung Büro → Wohnen   (nur bei D/E)                  │
│                                                              │
│ Schritt 3: Ergebnis                                          │
│ ──────────────────────────────────────                       │
│                                                              │
│ ┌──── Sanierungsroadmap ───────────────────────────┐         │
│ │                                                   │         │
│ │ Bestandskennwerte                                 │         │
│ │  Außenwand U:  1,4 – 1,7 W/(m²K)                  │         │
│ │  Fenster Uw:   2,5 – 3,0 W/(m²K)                  │         │
│ │  ...                                              │         │
│ │                                                   │         │
│ │ Empfohlene Sequenz                                │         │
│ │  1. Schadstoff- und Schwamm-Screening             │         │
│ │  2. Feuchtediagnose Balkenköpfe                   │         │
│ │  3. Innendämmung mit WTA 6-4/6-5 Nachweis         │         │
│ │  ...                                              │         │
│ │                                                   │         │
│ │ Kritische Anschlüsse (Risiko-Ampel)               │         │
│ │  🔴 Holzbalkenkopf                                 │         │
│ │  🟡 Fensterlaibung                                 │         │
│ │  🟡 Schornsteinanschluss                           │         │
│ │                                                   │         │
│ │ Kostenrahmen netto:    400 – 800 €/m² BGF         │         │
│ │ Bauzeit:               6 – 14 Monate              │         │
│ │ Förderung möglich:     BEG-EM, KfW 261 Denkmal    │         │
│ │                                                   │         │
│ │ ⚠️  Pflichtprüfung vor Maßnahme:                  │         │
│ │    Brandschutzstatus Treppenhaus bei Dachausbau   │         │
│ │    Hausschwamm-Verdacht an Holzbalkendecken       │         │
│ │                                                   │         │
│ └───────────────────────────────────────────────────┘         │
│                                                              │
│ Disclaimer: Orientierungswerte. Ersetzt keine Fachplanung.   │
│ Quellen: GEG 2024, WTA 6-4/6-5, DIN 4108, BKI Altbau         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**UX-Logik:**
- Typologie-Karten als Klick-Tiles (5 Stück nebeneinander auf Desktop, 2-spaltig mobil)
- Sanierungsziele als Radio-Buttons
- Ergebnis erscheint dynamisch unter den Eingaben
- Ergebnis bleibt sichtbar während User zwischen Optionen wechselt
- Print-Button rechts oben am Ergebnis (für PDF-Export im Browser)

---

## 4. Leistungen / Services

```
┌──────────────────────────────────────────────────────────────┐
│ Leistungen                                                   │
│ ─────────                                                    │
│                                                              │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐           │
│ │ Bauphysik    │ │ Denkmal-     │ │ Nutzungs-    │           │
│ │ Bestand      │ │ pflege       │ │ konzepte     │           │
│ │              │ │              │ │              │           │
│ │ - U-Wert     │ │ - Bauforsch. │ │ - Umnutzung  │           │
│ │ - WUFI       │ │ - Inventar   │ │ - Machbark.  │           │
│ │ - WTA-konf.  │ │ - § 105 GEG  │ │ - Grob/Fein  │           │
│ └──────────────┘ └──────────────┘ └──────────────┘           │
│                                                              │
│ ┌──────────────┐ ┌──────────────┐                            │
│ │ Visualisier. │ │ Nachhaltige  │                            │
│ │ Bestand →    │ │ Planung      │                            │
│ │ Sanierung    │ │              │                            │
│ │              │ │ - DGNB / LEED│                            │
│ │ - Renderings │ │ - Lebenszyk. │                            │
│ │ - Varianten  │ │ - Recycling  │                            │
│ └──────────────┘ └──────────────┘                            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

- 5 Karten, jeweils Icon + Titel + 3 Stichpunkte
- Klick auf Karte könnte später zu Detailseite führen (V2)

---

## 5. Portfolio – Bestand → Render

```
┌──────────────────────────────────────────────────────────────┐
│ Portfolio                                                    │
│ ─────────                                                    │
│ Bestand ─→ Sanierungsvariante                                │
│                                                              │
│ ┌─────────────────────┬─────────────────────┐                │
│ │  [Bestand-Foto]     │  [Render Variante]  │  Projekt 1     │
│ │                     │                     │  Beschreibung  │
│ │  Vorher             │  Nachher            │  in 2-3 Zeilen │
│ └─────────────────────┴─────────────────────┘                │
│                                                              │
│ ┌─────────────────────┬─────────────────────┐                │
│ │  [Bestand-Foto]     │  [Render Variante]  │  Projekt 2     │
│ └─────────────────────┴─────────────────────┘                │
│                                                              │
│ ┌─────────────────────┬─────────────────────┐                │
│ │  [Bestand-Foto]     │  [Render Variante]  │  Projekt 3     │
│ └─────────────────────┴─────────────────────┘                │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

- 3 Projekte (du wählst Donnerstag aus)
- Vorher/Nachher-Slider wäre nice, aber V2
- V1: einfach zwei Bilder nebeneinander + Beschreibungstext rechts/unten

---

## 6. Über mich

```
┌──────────────────────────────────────────────────────────────┐
│ Über mich                                                    │
│ ─────────                                                    │
│                                                              │
│ ┌──────────┐  [Name]                                         │
│ │          │  Architektin · Bauphysikerin                    │
│ │  [Foto]  │  M.A. Historische Bauforschung                  │
│ │          │  & Denkmalpflege                                │
│ └──────────┘                                                 │
│                                                              │
│ Profil-Text 4-6 Zeilen:                                      │
│ Doppelqualifikation MEng Architectural Engineering           │
│ + M.A. Denkmalpflege. Schwerpunkt Schnittstelle              │
│ Bauphysik / historische Substanz / Umnutzung.                │
│                                                              │
│ Aktuell: DB InfraGO AG, Projektentwicklung                   │
│ Personenbahnhöfe.                                            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 7. Ressourcen / Quellen

```
┌──────────────────────────────────────────────────────────────┐
│ Ressourcen & Quellen                                         │
│ ─────────────────────                                        │
│                                                              │
│ Normen und Regelwerke                                        │
│  → GEG 2024 (Gebäudeenergiegesetz)        [Link]             │
│  → DIN 4108 Wärmeschutz                   [Link]             │
│  → DIN EN 1991-1-1 Eurocode 1 Lasten      [Link]             │
│  → DIN 68800-4 Holzschutz                 [Link]             │
│                                                              │
│ WTA-Merkblätter (Innendämmung)                               │
│  → 6-4 Planungsleitfaden                  [Link]             │
│  → 6-5 Numerischer Nachweis               [Link]             │
│  → 1-2 Echter Hausschwamm                 [Link]             │
│                                                              │
│ Förderung                                                    │
│  → KfW BEG (Bundesförderung)              [Link]             │
│  → BAFA Einzelmaßnahmen                   [Link]             │
│  → KfW 261 Effizienzhaus Denkmal          [Link]             │
│                                                              │
│ Datenbanken                                                  │
│  → u-wert.net (Materialdatenbank)         [Link]             │
│  → IWU Wohngebäudetypologie               [Link]             │
│  → BKI Baukosten Altbau                   [Link]             │
│                                                              │
│ Schadstoffe                                                  │
│  → TRGS 519 (Asbest)                      [Link]             │
│  → TRGS 521 (KMF)                         [Link]             │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

- 5 Kategorien, jeweils 3-5 Links
- Externe Links öffnen in neuem Tab
- Stand des Tools angeben

---

## 8. Kontakt

```
┌──────────────────────────────────────────────────────────────┐
│ Kontakt                                                      │
│ ───────                                                      │
│                                                              │
│ Für Anfragen, Projektgespräche oder Feedback zum Tool:       │
│                                                              │
│   [E-Mail]:     ...                                          │
│   [LinkedIn]:   ...                                          │
│                                                              │
│ Optional: Kontaktformular (Name, Mail, Nachricht)            │
│ V1: nur E-Mail + LinkedIn als Direktlinks                    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 9. Footer

```
┌──────────────────────────────────────────────────────────────┐
│ Disclaimer · Impressum · Datenschutz · Stand: Juni 2026      │
│ © [Name] 2026                                                │
└──────────────────────────────────────────────────────────────┘
```

- Disclaimer-Text klein
- Impressum/Datenschutz: V1 als Anker, V2 als eigene Unterseite

---

## Mobile-Anpassung (responsive)

- Nav: Hamburger-Menü
- Typologie-Karten: 2-spaltig, scroll-bar oder 1-spaltig stacked
- Portfolio: Bilder untereinander statt nebeneinander
- Tool-Ergebnis: untereinander gestapelt

---

## Styling-Direction (Vorschlag, du entscheidest Donnerstag)

**Ton:** ruhig, technisch, kein Marketing-Glanz. Wie eine wissenschaftliche Publikation, aber digital.

**Farben (Vorschlag):**
- Hintergrund: warmes Off-White (`#F5F3EE` o.ä.)
- Text: dunkles Anthrazit (`#1A1A1A`)
- Akzent: gedecktes Terracotta oder Tiefblau (Risikoampel)
- Risiko: Grün/Gelb/Rot in gedämpften Tönen, nicht knallig

**Typografie:**
- Serif für Headlines (z.B. Source Serif, Crimson Pro)
- Sans-Serif für Body (z.B. Inter, IBM Plex Sans)
- Mono für Datenwerte und Tabellen (z.B. JetBrains Mono)

**Visuelle Sprache:**
- Viel Weißraum
- Dezente horizontale Trennlinien
- Tabellen statt Bullet-Klingel
- Iconographie reduziert, lieber Text

---

## Was Claude Code Freitag konkret bauen soll

**Priorität 1 (Pflicht für Workshop-Ergebnis):**
1. Hero + Mini-Tool + Footer/Disclaimer funktionsfähig
2. JSON-Datenbasis eingebunden, Tool liest daraus
3. Sprach-Toggle DE/EN (mindestens Hero + Tool-Labels)
4. Deploy auf Vercel mit Custom-Subdomain

**Priorität 2 (wenn Zeit bleibt):**
5. Über mich + Kontakt
6. Portfolio mit Platzhaltern (echte Bilder ersetze ich später)

**Priorität 3 (V2 nach Workshop):**
7. Leistungen / Services
8. Ressourcen / Quellen mit Links
9. Mobile-Feinschliff
10. PDF-Export des Tool-Ergebnisses
