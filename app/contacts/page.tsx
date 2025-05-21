import React from 'react'
import HeroSection from '../components/HeroSection'
import companyData from '../../data/company.json'

const address = `${companyData.address.city}, ${companyData.address.street}`

export default function ContactsPage() {
  return (
    <>
      <HeroSection
        title="Контакты"
        description="Свяжитесь с нами для получения консультации или оформления заказа. Мы всегда готовы помочь вам с выбором оптимального решения для ваших окон."
        imageUrl="/images/contacts/hero.jpg"
        showContactButton={true}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Контактная информация */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 flex items-center gap-2">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Контактная информация
            </h2>
            <div className="flex items-center gap-3 text-gray-700">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {address}
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {companyData.contacts.phone}
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {companyData.contacts.email}
            </div>
          </div>
          {/* Режим работы */}
          <div className="bg-white my-8 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 flex items-center gap-2">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19a7 7 0 100-14 7 7 0 000 14z" /></svg>
              Режим работы
            </h2>
            <div className="space-y-2 text-lg text-gray-700">
              <div>Понедельник - Пятница: 9:00 - 18:00</div>
              <div>Суббота: 10:00 - 16:00</div>
              <div>Воскресенье: выходной</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 