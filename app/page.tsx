import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from './components/HeroSection'
import CTASection from './components/CTASection'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <div className="absolute inset-0 bg-red-500 opacity-90"></div>
        <HeroSection
          title='Пластиковые и алюминиевые окна в Астане'
          description='Производство и установка качественных окон из ПВХ и алюминия. Современные технологии, надежные материалы и профессиональный монтаж.'
          imageUrl="/images/hero-home.png"
          showContactButton={true}
        />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="text-primary-blue text-4xl mb-4">🏭</div>
            <h3 className="text-xl font-semibold mb-2">Качественные материалы</h3>
            <p>Используем профили ведущих производителей: Rehau, Veka, KBE</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="text-primary-blue text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Быстрый монтаж</h3>
            <p>Профессиональная установка окон в кратчайшие сроки</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="text-primary-blue text-4xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
            <p>Гарантия на окна и монтаж до 5 лет</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-primary-blue">Пластиковые окна ПВХ</h3>
              <p className="text-gray-600 mb-6">
                Энергоэффективные окна из ПВХ для квартир, домов и офисов. 
                Отличная тепло- и шумоизоляция, долговечность и простота в уходе.
              </p>
              <Link 
                href="/services/plastic-windows"
                className="inline-block bg-primary-blue hover:bg-primary-light text-white px-6 py-2 rounded-lg transition-colors"
              >
                Подробнее
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-primary-blue">Алюминиевые окна</h3>
              <p className="text-gray-600 mb-6">
                Современные алюминиевые конструкции для коммерческих объектов и частных домов. 
                Прочность, долговечность и возможность создания больших проемов.
              </p>
              <Link 
                href="/services/aluminum-windows"
                className="inline-block bg-primary-blue hover:bg-primary-light text-white px-6 py-2 rounded-lg transition-colors"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        backgroundImage="/images/services/cta-bg.jpg"
        title="Готовы установить новые окна?"
        description="Получите бесплатную консультацию и расчет стоимости"
        buttonText="Оставить заявку"
        buttonLink="/contact"
      />
    </div>
  )
} 