'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const words = ['Bestand', 'verstehen.']
const words2 = ['Sanierung', 'richtig', 'sequenzieren.']

function WordReveal({ words, delay = 0, italic = false }) {
  return (
    <span className="inline-flex flex-wrap gap-x-4">
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className={`inline-block ${italic ? 'italic' : ''}`}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: delay + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default function Hero({ lang }) {
  const t = {
    DE: {
      sub: 'Pre-Assessment-Tool für deutsche Gebäudetypologien. Bauphysik, Denkmalpflege, Umnutzung.',
      cta1: 'Tool öffnen',
      cta2: 'Mehr erfahren',
      card: { label: 'Aktuelles Projekt', title: 'Gründerzeit MFH', sub: 'Berlin · Sanierung EH 70', tag: 'Pre-Assessment verfügbar' },
    },
    EN: {
      sub: 'Pre-assessment tool for German building typologies. Building physics, heritage conservation, adaptive reuse.',
      cta1: 'Open Tool',
      cta2: 'Learn more',
      card: { label: 'Current project', title: 'Gründerzeit MFH', sub: 'Berlin · Renovation EH 70', tag: 'Pre-assessment available' },
    },
  }[lang]

  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="min-h-screen pt-16 grid md:grid-cols-2 max-w-6xl mx-auto px-6 items-center gap-12 pb-20">
      {/* Left */}
      <div className="pt-12 md:pt-0">
        <motion.p
          className="text-[12px] uppercase tracking-[0.2em] text-[#B8654A] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Pre-Assessment Tool
        </motion.p>

        <h1 className="font-[family-name:var(--font-fraunces)] text-[clamp(2.8rem,6vw,5rem)] leading-[1.05] tracking-[-0.02em] mb-8">
          <WordReveal words={words} delay={0.3} />
          <br />
          <WordReveal words={['Sanierung']} delay={0.55} />
          {' '}
          <WordReveal words={['richtig']} delay={0.67} italic />
          {' '}
          <WordReveal words={['sequenzieren.']} delay={0.79} />
        </h1>

        <motion.p
          className="text-[#1A1A1A]/60 max-w-sm mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.sub}
        </motion.p>

        <motion.div
          className="flex gap-3 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={() => scroll('tool')}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] text-[#F4F1EC] text-sm hover:bg-[#B8654A] transition-colors duration-300"
          >
            {t.cta1}
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scroll('ueber')}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#1A1A1A]/30 text-sm hover:border-[#1A1A1A] transition-colors duration-300"
          >
            {t.cta2}
          </button>
        </motion.div>
      </div>

      {/* Right — Image placeholder + floating card */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#D9D2C5]">
          {/* Placeholder — replace with real image */}
          <div className="absolute inset-0 flex items-center justify-center text-[#1A1A1A]/20 text-sm font-mono">
            Architekturfoto
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/20 to-transparent" />
        </div>

        {/* Floating info card */}
        <motion.div
          className="absolute bottom-8 left-6 right-6 bg-[#F4F1EC]/95 backdrop-blur rounded-xl p-4 border border-[#D9D2C5]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-[11px] uppercase tracking-widest text-[#B8654A] mb-1">{t.card.label}</p>
          <p className="font-[family-name:var(--font-fraunces)] text-lg font-semibold">{t.card.title}</p>
          <p className="text-[13px] text-[#1A1A1A]/60">{t.card.sub}</p>
          <span className="inline-block mt-2 text-[11px] px-2 py-0.5 rounded-full bg-[#5C6B4A]/10 text-[#5C6B4A]">
            {t.card.tag}
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
