'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = {
  DE: [
    { tag: 'Bürobau 1960er · DGNB Gold', title: 'Kasernenstraße 39–49, Düsseldorf', desc: 'Revitalisierung eines denkmalgeschützten 13-geschossigen Bürohochhauses von Paul Schneider-Esleben. Historische Aluminiumfassade erhalten, Gebäudetechnik energetisch ertüchtigt. DGNB Gold.', meta: 'BGF 13.800 m² · 2017–2018' },
    { tag: 'Holz-Hybrid · DGNB Platin', title: 'EDGE Suedkreuz Berlin', desc: 'Eines der größten Holz-Hybrid-Bürogebäude Europas. CO₂-Fußabdruck −50 % gegenüber Stahlbeton. DGNB Platin 95,4 %, DGNB Diamant, WELL Core Platinum.', meta: 'BGF 32.000 m² · 2017–2018' },
    { tag: 'UNESCO-Welterbe · Denkmalpflege', title: 'Rotes Haus, Neuer Garten, Potsdam', desc: 'Wissenschaftliche Bestandsdokumentation für UNESCO-Welterbe Neuer Garten. Bauaufnahme, Schadens- und Materialkartierung, Wärmeschutzkonzept.', meta: 'BGF 350 m² · 2018–2019' },
  ],
  EN: [
    { tag: 'Office 1960s · DGNB Gold', title: 'Kasernenstraße 39–49, Düsseldorf', desc: 'Revitalisation of a listed 13-storey office tower by Paul Schneider-Esleben. Historic aluminium facade retained, building systems upgraded. DGNB Gold.', meta: 'GFA 13,800 m² · 2017–2018' },
    { tag: 'Timber Hybrid · DGNB Platinum', title: 'EDGE Suedkreuz Berlin', desc: 'One of Europe\'s largest timber hybrid office buildings. CO₂ footprint −50% vs concrete. DGNB Platinum 95.4%, DGNB Diamond, WELL Core Platinum.', meta: 'GFA 32,000 m² · 2017–2018' },
    { tag: 'UNESCO Heritage · Conservation', title: 'Rotes Haus, Neuer Garten, Potsdam', desc: 'Architectural survey of UNESCO World Heritage site. Building survey, damage mapping, thermal concept as basis for total renovation.', meta: 'GFA 350 m² · 2018–2019' },
  ],
}

export default function Portfolio({ lang }) {
  const list = projects[lang]
  return (
    <section id="portfolio" className="py-24 border-t border-[#D9D2C5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A] mb-3">Portfolio</p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">
            {lang === 'DE' ? 'Referenzprojekte' : 'Reference projects'}
          </h2>
        </div>

        <div className="space-y-6">
          {list.map((proj, i) => (
            <motion.div
              key={i}
              className="group grid md:grid-cols-5 gap-6 border border-[#D9D2C5] rounded-2xl p-6 bg-white hover:border-[#B8654A] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="md:col-span-2 bg-[#EDE8DF] rounded-xl h-52 flex items-center justify-center text-[#1A1A1A]/20 text-xs font-mono overflow-hidden">
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  Foto folgt
                </motion.div>
              </div>
              <div className="md:col-span-3 flex flex-col justify-center">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#1A1A1A]/40 mb-2">{proj.tag}</span>
                <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold mb-3">{proj.title}</h3>
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed mb-4">{proj.desc}</p>
                <p className="text-[12px] font-mono text-[#1A1A1A]/30">{proj.meta}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
