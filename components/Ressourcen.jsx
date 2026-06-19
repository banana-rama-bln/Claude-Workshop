'use client'

const kategorien = {
  DE: [
    { title: 'Normen', links: [{ label: 'GEG 2024', href: 'https://www.gesetze-im-internet.de/geg/' }, { label: 'DIN 4108 Wärmeschutz', href: 'https://www.beuth.de' }, { label: 'DIN 68800-4 Holzschutz', href: 'https://www.beuth.de' }] },
    { title: 'WTA-Merkblätter', links: [{ label: 'WTA 6-4 Planungsleitfaden', href: 'https://www.wta.de' }, { label: 'WTA 6-5 Numerischer Nachweis', href: 'https://www.wta.de' }, { label: 'WTA 1-2 Hausschwamm', href: 'https://www.wta.de' }] },
    { title: 'Förderung', links: [{ label: 'KfW BEG Bundesförderung', href: 'https://www.kfw.de' }, { label: 'BAFA Einzelmaßnahmen', href: 'https://www.bafa.de' }] },
    { title: 'Datenbanken', links: [{ label: 'u-wert.net', href: 'https://www.u-wert.net' }, { label: 'IWU Gebäudetypologie', href: 'https://www.iwu.de' }] },
    { title: 'Schadstoffe', links: [{ label: 'TRGS 519 Asbest', href: 'https://www.baua.de' }, { label: 'TRGS 521 KMF', href: 'https://www.baua.de' }] },
  ],
  EN: [
    { title: 'Standards', links: [{ label: 'GEG 2024 (Building Energy Act)', href: 'https://www.gesetze-im-internet.de/geg/' }, { label: 'DIN 4108 Thermal insulation', href: 'https://www.beuth.de' }, { label: 'DIN 68800-4 Timber', href: 'https://www.beuth.de' }] },
    { title: 'WTA Guidelines', links: [{ label: 'WTA 6-4 Planning guide', href: 'https://www.wta.de' }, { label: 'WTA 6-5 Numerical verification', href: 'https://www.wta.de' }, { label: 'WTA 1-2 Dry rot', href: 'https://www.wta.de' }] },
    { title: 'Funding', links: [{ label: 'KfW BEG Federal funding', href: 'https://www.kfw.de' }, { label: 'BAFA individual measures', href: 'https://www.bafa.de' }] },
    { title: 'Databases', links: [{ label: 'u-wert.net', href: 'https://www.u-wert.net' }, { label: 'IWU building typology', href: 'https://www.iwu.de' }] },
    { title: 'Hazardous materials', links: [{ label: 'TRGS 519 Asbestos', href: 'https://www.baua.de' }, { label: 'TRGS 521 MMF', href: 'https://www.baua.de' }] },
  ],
}

export default function Ressourcen({ lang }) {
  const list = kategorien[lang]
  return (
    <section className="py-24 border-t border-[#D9D2C5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A] mb-3">
            {lang === 'DE' ? 'Ressourcen' : 'Resources'}
          </p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">
            {lang === 'DE' ? 'Quellen & Normen' : 'Sources & Standards'}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10">
          {list.map((kat) => (
            <div key={kat.title}>
              <p className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/40 mb-3">{kat.title}</p>
              <ul className="space-y-2">
                {kat.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#1A1A1A]/60 hover:text-[#B8654A] transition-colors">
                      → {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
