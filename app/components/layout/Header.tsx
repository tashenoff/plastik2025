'use client'

import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'
import companyData from '@/data/company.json'

export default function Header() {
  const { phone, whatsapp } = companyData.contacts
  const whatsappNumber = whatsapp.replace(/[^\d+]/g, '').replace('+', '')

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            PLASTIK
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-blue-600">
              Услуги
            </Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-blue-600">
              Портфолио
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              О компании
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${phone.replace(/[^\d+]/g, '')}`}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">{phone}</span>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
} 