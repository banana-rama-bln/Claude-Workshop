'use client'
import { motion } from 'framer-motion'

const items = ['GEG 2024', 'KfW BEG', 'DGNB Platin', 'WTA 6-4/6-5', 'DIN 4108', 'Effizienzhaus 55', 'UNESCO Welterbe', 'WELL Platinum', 'BEG Einzelmaßnahmen', 'DIN 68800']

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="border-y border-[#D9D2C5] overflow-hidden py-4">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A] shrink-0">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
