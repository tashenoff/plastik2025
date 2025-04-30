"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import companyData from '../../data/company.json'

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/services', label: 'Услуги' },
  { href: '/about', label: 'О компании' },
  { href: '/contact', label: 'Контакты' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white py-5 shadow-md sticky top-0 z-30">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700 tracking-tight">
          <Image src="/logo.svg" alt="Логотип" width={160} height={60} />

        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-2 rounded-lg transition-colors duration-200 font-medium ${pathname === link.href
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`}
            >
              {link.label}
            </Link>
          ))}

          <div className=" text-blue-700 font-semibold flex items-center">
            <a href={`tel:${companyData.contacts.phone.replace(/[^+\d]/g, '')}`}>
              {companyData.contacts.phone}
            </a>
          </div>


        </div>
        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
        >
          <span className={`block w-6 h-0.5 bg-blue-700 mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-700 mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-700 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setMenuOpen(false)} />
        )}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            <button
              className="self-end mb-4 text-2xl text-gray-500 hover:text-blue-700"
              onClick={() => setMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              &times;
            </button>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-6 py-3 rounded-lg transition-colors duration-200 font-medium text-lg ${pathname === link.href
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}



          </div>
        </div>
      </nav>
    </header>
  )
} 1