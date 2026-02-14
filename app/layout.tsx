import type { Metadata } from 'next'
import { DM_Serif_Display, Jost } from 'next/font/google'

import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, Psychologist ',
  description: 'Therapy for Adults in Minneapolis, MN. Live your life in full bloom.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${jost.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
