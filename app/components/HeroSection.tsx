'use client'

import React from 'react'
import Image from 'next/image'

interface HeroSectionProps {
  title: string
  description: string
  imageUrl?: string
  showContactButton?: boolean
}

export default function HeroSection({ title, description, imageUrl, showContactButton = false }: HeroSectionProps) {
  return (
    <div className="relative bg-gray-900 text-white pt-16 pb-16 overflow-hidden min-h-full flex justify-center items-center">
      {imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
      )}
      <div className="relative container mx-auto px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl mb-8">{description}</p>
          {showContactButton && (
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Заказать консультацию
            </a>
          )}
        </div>
      </div>
    </div>
  )
} 