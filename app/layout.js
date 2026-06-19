import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/LenisProvider'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Sanierungs-Tool — Pre-Assessment für Bestandsgebäude',
  description: 'Pre-Assessment-Tool für deutsche Gebäudetypologien. Bauphysik, Denkmalpflege, Umnutzung.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
