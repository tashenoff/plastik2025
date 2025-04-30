import React from 'react'
import Link from 'next/link'
import companyData from '../../data/company.json'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white  pt-16 pb-16">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Plastik 2025</h3>
            <p className="text-gray-300">
              Производство и продажа пластиковых изделий высокого качества
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-gray-300">Телефон: {companyData.contacts.phone}</p>
            <p className="text-gray-300">Email: {companyData.contacts.email}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Адрес</h3>
            <p className="text-gray-300">
              {companyData.address.city}, {companyData.address.street}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Plastik 2025. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
} 