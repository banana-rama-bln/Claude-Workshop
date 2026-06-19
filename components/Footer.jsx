'use client'

export default function Footer({ lang }) {
  const t = {
    DE: { disclaimer: 'Alle Angaben sind Orientierungswerte und ersetzen keine Fachplanung.', stand: 'Stand: Juni 2026', newsletter: 'Newsletter', placeholder: 'Ihre E-Mail-Adresse', send: 'Abonnieren →' },
    EN: { disclaimer: 'All data are reference values and do not replace professional planning.', stand: 'June 2026', newsletter: 'Newsletter', placeholder: 'Your email address', send: 'Subscribe →' },
  }[lang]

  return (
    <footer id="kontakt" className="bg-[#EFEBE4] border-t border-[#D9D2C5] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-[family-name:var(--font-fraunces)] text-lg font-semibold mb-1">
              Sanierungs<span className="text-[#B8654A]">.</span>
            </p>
            <p className="text-[12px] text-[#1A1A1A]/40 leading-relaxed">
              Pre-Assessment für deutsche Gebäudetypologien
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/30 mb-4">Links</p>
            <ul className="space-y-2 text-sm text-[#1A1A1A]/60">
              {['#tool', '#leistungen', '#portfolio', '#ueber'].map(href => (
                <li key={href}>
                  <button onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#B8654A] transition-colors">
                    → {href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/30 mb-4">Kontakt</p>
            <ul className="space-y-2 text-sm text-[#1A1A1A]/60">
              <li><a href="mailto:" className="hover:text-[#B8654A] transition-colors">→ E-Mail</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8654A] transition-colors">→ LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/30 mb-4">{t.newsletter}</p>
            <div className="border-b border-[#1A1A1A]/20 flex items-center pb-2">
              <input type="email" placeholder={t.placeholder} className="bg-transparent text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 outline-none flex-1 min-w-0" />
              <button className="text-sm text-[#B8654A] shrink-0 ml-2">{t.send}</button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D9D2C5] pt-6 flex flex-col md:flex-row justify-between gap-2 text-[11px] text-[#1A1A1A]/30 font-mono">
          <p>{t.disclaimer}</p>
          <p>© 2026 · {t.stand} · Impressum · Datenschutz</p>
        </div>
      </div>
    </footer>
  )
}
