'use client'
import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'

const navItems = [
  { label: 'Tool', href: '#tool' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Über mich', href: '#ueber' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Header({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scroll = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F4F1EC]/90 backdrop-blur-md border-b border-[#D9D2C5]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scroll('#hero')}
          className="font-[family-name:var(--font-fraunces)] text-lg font-semibold tracking-tight"
        >
          Sanierungs<span className="text-[#B8654A]">.</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide uppercase">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scroll(item.href)}
              className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(l => l === 'DE' ? 'EN' : 'DE')}
            className="text-[12px] font-mono text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
          >
            {lang === 'DE' ? 'EN' : 'DE'}
          </button>
          <button
            onClick={() => scroll('#kontakt')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1A1A1A] text-[#F4F1EC] text-[12px] tracking-wide uppercase hover:bg-[#B8654A] transition-colors duration-300"
          >
            Kontakt <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-xl" onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F4F1EC] border-t border-[#D9D2C5] px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scroll(item.href)}
              className="text-left text-sm font-[family-name:var(--font-fraunces)]"
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => setLang(l => l === 'DE' ? 'EN' : 'DE')} className="self-start text-xs font-mono text-[#1A1A1A]/50">
            {lang === 'DE' ? 'EN' : 'DE'}
          </button>
        </div>
      )}
    </header>
  )
}
