'use client'

import React, { useState } from 'react'

interface PortfolioItem {
  src: string
  alt: string
  caption?: string
}

interface PortfolioCarouselProps {
  items: PortfolioItem[]
}

export default function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  const [page, setPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(items.length / perPage)

  const prev = () => setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  const next = () => setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))

  if (!items || items.length === 0) return null

  // Адаптивно: 1/2/3
  const getGridCols = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1
      if (window.innerWidth < 1024) return 2
    }
    return 3
  }

  // Показываем только текущую "страницу" (по 3)
  const start = page * perPage
  const currentItems = items.slice(start, start + perPage)

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative flex items-center justify-center mb-6">
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-white/80 hover:bg-blue-100 rounded-full p-2 shadow transition-colors"
          aria-label="Предыдущие фото"
        >
          <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {currentItems.map((item, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-lg bg-gray-100 flex flex-col items-center">
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-56 sm:h-64 lg:h-72 transition-all duration-500"
                loading="lazy"
              />
              {item.caption && (
                <div className="text-center text-gray-700 mt-3 text-sm px-2 pb-3">{item.caption}</div>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-white/80 hover:bg-blue-100 rounded-full p-2 shadow transition-colors"
          aria-label="Следующие фото"
        >
          <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === page ? 'bg-blue-600' : 'bg-gray-300'} transition-colors`}
            onClick={() => setPage(idx)}
            aria-label={`Перейти к странице ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 