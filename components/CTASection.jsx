'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function CTASection({ lang }) {
  const t = {
    DE: { headline: 'Bereit für Ihre Sanierung?', sub: 'Starten Sie mit dem Pre-Assessment — kostenlos, ohne Anmeldung.', cta: 'Tool jetzt öffnen' },
    EN: { headline: 'Ready for your renovation?', sub: 'Start with the pre-assessment — free, no registration required.', cta: 'Open tool now' },
  }[lang]

  return (
    <section className="py-32 bg-[#1A1A1A] text-[#F4F1EC]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="font-[family-name:var(--font-fraunces)] text-[clamp(2.5rem,6vw,5rem)] leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.headline}
        </motion.h2>
        <motion.p
          className="text-[#F4F1EC]/50 mb-10 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t.sub}
        </motion.p>
        <motion.button
          onClick={() => document.getElementById('tool')?.scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#F4F1EC]/30 hover:bg-[#B8654A] hover:border-[#B8654A] transition-all duration-300 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t.cta}
          <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      </div>
    </section>
  )
}
