import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import servicesData from '@/data/services.json'
import type { ServicesData } from '../types/services'
import HeroSection from '../components/HeroSection'

const services = servicesData as unknown as ServicesData

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Наши услуги"
        description="Предлагаем широкий выбор высококачественных оконных решений для вашего дома или бизнеса. От классических пластиковых до современных алюминиевых систем."
        imageUrl="/images/services/hero.jpg"
        showContactButton={true}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.services.map((service) => (
            <div key={service.slug} className="border border-gray-200 my-20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={`/images/services/${service.slug}.jpg`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
} 