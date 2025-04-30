import React from 'react'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Layout from './components/Layout'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Plastik 2025 - Производство пластиковых изделий',
  description: 'Производство и продажа пластиковых изделий высокого качества',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.className} ${montserrat.variable}`}>
      <body className="font-montserrat">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
} 