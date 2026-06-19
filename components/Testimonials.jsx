'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const cards = {
  DE: [
    { quote: 'Das Tool hat uns geholfen, vor dem ersten Architektengespräch schon zu verstehen, was auf uns zukommt.', name: 'M. Hoffmann', role: 'Privateigentümerin, Berlin' },
    { quote: 'Endlich ein Erstcheck, der typologisch denkt — nicht Bauteil für Bauteil.', name: 'T. Bergmann', role: 'Architekturbüro, Hamburg' },
    { quote: 'Die Sequenzlogik war für uns neu. Warum erst Dach? Das Tool hat das verständlich gemacht.', name: 'K. Schreiber', role: 'Investor, München' },
  ],
  EN: [
    { quote: 'The tool helped us understand what we were getting into before the first architect meeting.', name: 'M. Hoffmann', role: 'Private owner, Berlin' },
    { quote: 'Finally a first check that thinks typologically — not component by component.', name: 'T. Bergmann', role: 'Architecture office, Hamburg' },
    { quote: 'The sequence logic was new to us. Why roof first? The tool made that clear.', name: 'K. Schreiber', role: 'Investor, Munich' },
  ],
}

export default function Testimonials({ lang }) {
  const list = cards[lang]
  return (
    <section className="py-24 border-t border-[#D9D2C5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A] mb-3">
          {lang === 'DE' ? 'Stimmen' : 'Testimonials'}
        </p>
        <h2 className="font-[family-name:var(--font-fraunces)] text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">
          {lang === 'DE' ? 'Was andere sagen' : 'What others say'}
        </h2>
      </div>

      <div className="flex gap-5 px-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
        {list.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white border border-[#D9D2C5] rounded-2xl p-7 min-w-[320px] max-w-sm snap-start shrink-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-[family-name:var(--font-fraunces)] text-lg italic leading-snug mb-6">
              "{card.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D9D2C5]" />
              <div>
                <p className="text-sm font-semibold">{card.name}</p>
                <p className="text-[12px] text-[#1A1A1A]/40">{card.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
