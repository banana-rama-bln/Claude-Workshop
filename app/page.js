'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Tool from '@/components/Tool'
import Leistungen from '@/components/Leistungen'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Ressourcen from '@/components/Ressourcen'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  const [lang, setLang] = useState('DE')

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Marquee />
      <Tool lang={lang} />
      <Leistungen lang={lang} />
      <Portfolio lang={lang} />
      <About lang={lang} />
      <Process lang={lang} />
      <Testimonials lang={lang} />
      <Ressourcen lang={lang} />
      <CTASection lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
