'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = {
  DE: [
    { num: '01', title: 'Pre-Assessment', desc: 'Gebäudetypologie, Bestandskennwerte und Sanierungsziele klären. Dieses Tool liefert die erste Strukturierung.' },
    { num: '02', title: 'Schadstoff- & Schwammscreening', desc: 'Vor jeder Maßnahme: Asbest, KMF, PCB und Hausschwamm als Pflichtcheck. Kein Sanierungsplan ohne diesen Schritt.' },
    { num: '03', title: 'Feuchtediagnose & Bauaufnahme', desc: 'Balkenköpfe, Sockel, Fensterbänke: Feuchtemessung und verformungsgerechte Bauaufnahme als Planungsgrundlage.' },
    { num: '04', title: 'Maßnahmenplanung & Förderantrag', desc: 'Sequenzierte Maßnahmenliste, Kostenrahmen, KfW/BAFA-Förderantrag vorbereiten — in der richtigen Reihenfolge.' },
  ],
  EN: [
    { num: '01', title: 'Pre-Assessment', desc: 'Clarify building typology, existing data and renovation goals. This tool provides the initial structure.' },
    { num: '02', title: 'Hazardous material & rot screening', desc: 'Before any work: asbestos, MMF, PCB and dry rot as mandatory checks. No renovation plan without this step.' },
    { num: '03', title: 'Moisture diagnosis & survey', desc: 'Beam ends, plinth, window sills: moisture measurement and accurate building survey as planning basis.' },
    { num: '04', title: 'Measure planning & funding', desc: 'Sequenced measure list, cost frame, KfW/BAFA funding application — in the right order.' },
  ],
}

export default function Process({ lang }) {
  const [open, setOpen] = useState(null)
  const list = steps[lang]

  return (
    <section className="py-24 border-t border-[#D9D2C5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A] mb-3">{lang === 'DE' ? 'Prozess' : 'Process'}</p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">
            {lang === 'DE' ? 'Wie Sanierung gelingt' : 'How renovation succeeds'}
          </h2>
        </div>

        <div className="divide-y divide-[#D9D2C5]">
          {list.map((step, i) => (
            <div key={step.num}>
              <button
                className="w-full flex items-center justify-between py-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center gap-8">
                  <span className="font-mono text-[12px] text-[#B8654A] w-8">{step.num}</span>
                  <span className="font-[family-name:var(--font-fraunces)] text-xl font-semibold group-hover:text-[#B8654A] transition-colors">
                    {step.title}
                  </span>
                </div>
                <span className="text-[#1A1A1A]/30 text-lg transition-transform duration-300" style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pl-16 text-sm text-[#1A1A1A]/60 leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
