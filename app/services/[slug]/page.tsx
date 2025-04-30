import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import servicesData from '@/data/services.json'
import type { ServicesData } from '../../types/services'
import FAQ from '../../components/FAQ'
import Advantages from '../../components/Advantages'
import PortfolioCarousel from '../../components/PortfolioCarousel'
import HeroSection from '../../components/HeroSection'

const services = servicesData as unknown as ServicesData

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.services.find(s => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <HeroSection
        title={service.title}
        
        description={service.description}
        imageUrl="/images/services/hero.jpg"
        showContactButton={true}
      />

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Особенности {service.title.toLowerCase()}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors flex flex-col items-center">
              <div className="mb-4">{renderFeatureIcon(index)}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
       
          <Advantages items={service.advantages} />
        </div>
      </section>

      {/* Portfolio Section */}
      {service.portfolio && service.portfolio.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Портфолио</h2>
            <PortfolioCarousel items={service.portfolio} />
          </div>
        </section>
      )}

      {/* Applications Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Области применения</h2>
          <div className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
            {service.applications.map((application, index) => (
              <div
                key={index}
                className="min-w-[260px] bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-blue-100">
                  {/* Можно подобрать иконки по теме, пример ниже */}
                  <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M12 8v8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{application}</h3>
                <p className="text-center text-gray-500 text-sm">Идеально подходит для {application.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.qa && <FAQ items={service.qa} />}

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы установить новые окна?</h2>
          <p className="text-xl mb-8">Свяжитесь с нами для бесплатной консультации и расчета стоимости</p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Оставить заявку
          </Link>
        </div>
      </section>
    </div>
  )
}

function renderFeatureIcon(index: number) {
  const icons = [
    // окно
    <svg key="window" className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2}/><line x1="3" y1="12" x2="21" y2="12" strokeWidth={2}/><line x1="12" y1="3" x2="12" y2="21" strokeWidth={2}/></svg>,
    // дом
    <svg key="home" className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l9-9 9 9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/><path d="M9 21V9h6v12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>,
    // шестерёнка
    <svg key="gear" className="w-10 h-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="3" strokeWidth={2}/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" strokeWidth={2}/></svg>,
    // инструменты
    <svg key="tools" className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M14.7 6.3a1 1 0 011.4 0l1.6 1.6a1 1 0 010 1.4l-8.5 8.5a1 1 0 01-1.4 0l-1.6-1.6a1 1 0 010-1.4l8.5-8.5z" strokeWidth={2}/><path d="M7 17l-3 3" strokeWidth={2} strokeLinecap="round"/></svg>,
    // звезда
    <svg key="star" className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" strokeWidth={2} strokeLinejoin="round"/></svg>,
    // график
    <svg key="chart" className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m4 0v-2a2 2 0 012-2h2a2 2 0 012 2v2" strokeWidth={2}/></svg>
  ];
  return icons[index % icons.length];
} 