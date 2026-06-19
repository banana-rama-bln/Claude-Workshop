'use client'
import { motion } from 'framer-motion'

const stats = [
  { value: '10+', label: { DE: 'Jahre Erfahrung', EN: 'Years experience' } },
  { value: '3', label: { DE: 'Zertifizierungen', EN: 'Certifications' } },
  { value: 'DGNB', label: { DE: 'Platin-Projekterfahrung', EN: 'Platinum experience' } },
]

export default function About({ lang }) {
  const t = {
    DE: {
      label: 'Über mich',
      quote: 'Zwischen Denkmalpflege und Energieeffizienz gibt es keine echte Spannung — nur Sequenzierungsfragen.',
      role: 'Architektin · Bauphysikerin',
      degree: 'M.A. Historische Bauforschung & Denkmalpflege',
      text: 'Doppelqualifikation MEng Architectural Engineering + M.A. Denkmalpflege. Schwerpunkt Schnittstelle Bauphysik / historische Substanz / Umnutzung. Erfahrung in Nachhaltigkeits-Consulting und Zertifizierungsmanagement (DGNB, WELL, KfW). Aktuell: DB InfraGO AG, Projektentwicklung Personenbahnhöfe.',
    },
    EN: {
      label: 'About me',
      quote: 'Between heritage conservation and energy efficiency, there is no real tension — only sequencing questions.',
      role: 'Architect · Building Physicist',
      degree: 'M.A. Architectural Heritage & Conservation',
      text: 'Dual qualification MEng Architectural Engineering + M.A. Conservation. Focus on the interface of building physics / historic fabric / adaptive reuse. Experience in sustainability consulting and certification management (DGNB, WELL, KfW). Currently: DB InfraGO AG, development of passenger stations.',
    },
  }[lang]

  return (
    <section id="ueber" className="py-24 border-t border-[#D9D2C5]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A] mb-14">{t.label}</p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="font-[family-name:var(--font-fraunces)] text-[clamp(1.5rem,3vw,2.2rem)] leading-tight tracking-tight italic text-[#1A1A1A]">
              "{t.quote}"
            </blockquote>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.value}>
                  <p className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#B8654A]">{s.value}</p>
                  <p className="text-[12px] text-[#1A1A1A]/50 mt-1">{s.label[lang]}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-[#D9D2C5] flex items-center justify-center text-[11px] font-mono text-[#1A1A1A]/30 shrink-0">
                Foto
              </div>
              <div>
                <p className="font-[family-name:var(--font-fraunces)] font-semibold">{t.role}</p>
                <p className="text-[12px] text-[#1A1A1A]/40 font-mono">{t.degree}</p>
              </div>
            </div>
            <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{t.text}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
