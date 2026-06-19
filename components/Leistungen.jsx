'use client'
import { motion } from 'framer-motion'

const items = {
  DE: [
    { num: '01', title: 'Bauphysik Bestand', points: ['U-Wert Analyse', 'WUFI Feuchtesimulation', 'WTA-konforme Planung'] },
    { num: '02', title: 'Denkmalpflege', points: ['Bauforschung & Inventar', 'Denkmalwürdigung', '§ 105 GEG Ausnahmen'] },
    { num: '03', title: 'Nutzungskonzepte', points: ['Umnutzung Büro → Wohnen', 'Machbarkeitsanalyse', 'Grob- und Feinkonzept'] },
    { num: '04', title: 'Visualisierung', points: ['Bestand → Sanierung', 'Renderings', 'Variantenvergleich'] },
    { num: '05', title: 'Nachhaltige Planung', points: ['DGNB / LEED / WELL', 'Lebenszyklusanalyse', 'Recycling & Materialpass'] },
  ],
  EN: [
    { num: '01', title: 'Building Physics', points: ['U-value analysis', 'WUFI moisture simulation', 'WTA-compliant planning'] },
    { num: '02', title: 'Heritage Conservation', points: ['Architectural survey', 'Heritage assessment', '§ 105 GEG exemptions'] },
    { num: '03', title: 'Use Concepts', points: ['Office → residential conversion', 'Feasibility analysis', 'Concept development'] },
    { num: '04', title: 'Visualisation', points: ['Existing → renovated', 'Renderings', 'Variant comparison'] },
    { num: '05', title: 'Sustainable Planning', points: ['DGNB / LEED / WELL', 'Life cycle analysis', 'Material passport'] },
  ],
}

export default function Leistungen({ lang }) {
  const list = items[lang]
  return (
    <section id="leistungen" className="py-24 border-t border-[#D9D2C5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A] mb-3">{lang === 'DE' ? 'Leistungen' : 'Services'}</p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">
            {lang === 'DE' ? 'Was ich anbiete' : 'What I offer'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {list.map((item, i) => (
            <motion.div
              key={item.num}
              className="group border border-[#D9D2C5] rounded-2xl p-7 bg-white hover:border-[#B8654A] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-[11px] text-[#B8654A] mb-4">{item.num}</p>
              <h3 className="font-[family-name:var(--font-fraunces)] font-semibold text-lg mb-4">{item.title}</h3>
              <ul className="space-y-1.5">
                {item.points.map((p, j) => (
                  <li key={j} className="text-sm text-[#1A1A1A]/60">— {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
