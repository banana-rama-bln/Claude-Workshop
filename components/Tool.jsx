'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Printer } from 'lucide-react'
import assessmentData from '@/data/assessmentData.json'

const t = {
  DE: {
    title: 'Pre-Assessment für Ihre Bestandssanierung',
    step1: 'Schritt 1 — Gebäudetypologie',
    step2: 'Schritt 2 — Sanierungsziel',
    step3: 'Sanierungsroadmap',
    bestand: 'Bestandskennwerte',
    sequenz: 'Empfohlene Sequenz',
    risiken: 'Kritische Anschlüsse',
    kosten: 'Kostenrahmen netto',
    bauzeit: 'Bauzeit',
    foerderung: 'Förderung',
    print: 'PDF',
    disclaimer: 'Orientierungswerte. Ersetzt keine Fachplanung. Quellen: GEG 2024, WTA 6-4/6-5, DIN 4108.',
  },
  EN: {
    title: 'Pre-Assessment for Building Renovation',
    step1: 'Step 1 — Building Typology',
    step2: 'Step 2 — Renovation Goal',
    step3: 'Renovation Roadmap',
    bestand: 'Existing Building Data',
    sequenz: 'Recommended Sequence',
    risiken: 'Critical Junctions',
    kosten: 'Cost Range (net)',
    bauzeit: 'Construction Time',
    foerderung: 'Funding',
    print: 'PDF',
    disclaimer: 'Reference values only. Sources: GEG 2024, WTA 6-4/6-5, DIN 4108.',
  },
}

export default function Tool({ lang }) {
  const [building, setBuilding] = useState(null)
  const [goal, setGoal] = useState(null)
  const tx = t[lang]
  const results = building && goal ? assessmentData.results[building]?.[goal] : null

  return (
    <section id="tool" className="py-24 border-t border-[#D9D2C5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A] mb-3">Tool</p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">
            {tx.title}
          </h2>
        </div>

        {/* Step 1 */}
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-5">{tx.step1}</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {assessmentData.buildingTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setBuilding(type.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                  building === type.id
                    ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#F4F1EC]'
                    : 'border-[#D9D2C5] bg-white hover:border-[#B8654A]'
                }`}
              >
                <p className="font-[family-name:var(--font-fraunces)] font-semibold text-sm leading-tight">{type.name}</p>
                <p className={`text-[11px] font-mono mt-1.5 ${building === type.id ? 'text-[#F4F1EC]/50' : 'text-[#1A1A1A]/40'}`}>
                  {type.period}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-5">{tx.step2}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {assessmentData.renovationGoals.map(goal_ => (
              <label
                key={goal_.id}
                className={`flex items-start gap-4 p-5 rounded-2xl border cursor-pointer bg-white transition-all duration-300 ${
                  goal === goal_.id ? 'border-[#1A1A1A]' : 'border-[#D9D2C5] hover:border-[#B8654A]'
                }`}
              >
                <input
                  type="radio"
                  name="goal"
                  checked={goal === goal_.id}
                  onChange={() => setGoal(goal_.id)}
                  className="mt-1 accent-[#1A1A1A]"
                />
                <div>
                  <p className="font-[family-name:var(--font-fraunces)] font-semibold">{goal_.name}</p>
                  <p className="text-[13px] text-[#1A1A1A]/50 mt-0.5">{goal_.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Step 3: Results */}
        <AnimatePresence>
          {results && (
            <motion.div
              key={`${building}-${goal}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-[#D9D2C5] p-8"
            >
              <div className="flex justify-between items-start mb-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A]">{tx.step3}</p>
                <button onClick={() => window.print()} className="flex items-center gap-1.5 text-[12px] text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors">
                  <Printer size={13} /> {tx.print}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Left column */}
                <div className="space-y-8">
                  <div>
                    <h3 className="font-[family-name:var(--font-fraunces)] font-semibold mb-4">{tx.bestand}</h3>
                    <dl className="space-y-2">
                      {Object.entries(results.bestandskennwerte).map(([k, v]) => (
                        <div key={k} className="flex gap-3 text-sm border-b border-[#F4F1EC] pb-2">
                          <dt className="text-[#1A1A1A]/40 font-mono text-[12px] w-28 shrink-0 pt-0.5">{k.replace(/_/g, ' ')}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-fraunces)] font-semibold mb-4">{tx.risiken}</h3>
                    <ul className="space-y-2">
                      {results.risiken.map((r, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span>🟡</span><span className="text-[#1A1A1A]/70">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-8">
                  <div>
                    <h3 className="font-[family-name:var(--font-fraunces)] font-semibold mb-4">{tx.sequenz}</h3>
                    <ol className="space-y-3">
                      {results.massnahmen.map((m, i) => (
                        <li key={i} className="flex gap-4 text-sm">
                          <span className="font-mono text-[#B8654A] text-[12px] w-5 shrink-0 pt-0.5">0{i + 1}</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: tx.kosten, value: results.kosten },
                      { label: tx.bauzeit, value: results.bauzeit },
                      { label: tx.foerderung, value: results.foerderungen },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-[#F4F1EC] rounded-xl p-4">
                        <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 mb-1">{label}</p>
                        <p className="font-[family-name:var(--font-fraunces)] font-semibold text-sm leading-snug">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-8 text-[11px] text-[#1A1A1A]/30 border-t border-[#F4F1EC] pt-4">{tx.disclaimer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
