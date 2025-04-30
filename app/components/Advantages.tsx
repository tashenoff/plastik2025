'use client'

import React from 'react'

interface AdvantageItem {
  text: string
  icon?: string
  description?: string
}

interface AdvantagesProps {
  items: AdvantageItem[]
  title?: string
}

export default function Advantages({ items, title = 'Преимущества' }: AdvantagesProps) {
  return (
    <section className="py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-full shadow mb-6 group-hover:scale-110 transition-transform ${getBgColor(item.icon)}`}> 
                {renderThematicIcon(item.icon)}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-blue-900">{item.text}</h3>
              {item.description && (
                <p className="text-center text-gray-600">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getBgColor(icon?: string) {
  switch (icon) {
    case 'strength':
    case 'size':
      return 'bg-green-100'
    case 'weight':
      return 'bg-blue-100'
    case 'corrosion':
      return 'bg-yellow-100'
    case 'design':
      return 'bg-pink-100'
    case 'energy':
      return 'bg-yellow-200'
    case 'sound':
      return 'bg-blue-200'
    case 'eco':
      return 'bg-green-200'
    case 'easy':
      return 'bg-cyan-100'
    case 'price':
      return 'bg-orange-100'
    case 'durability':
      return 'bg-purple-100'
    default:
      return 'bg-cyan-100'
  }
}

function renderThematicIcon(icon?: string) {
  switch (icon) {
    case 'strength': // щит
      return (
        <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" /></svg>
      )
    case 'weight': // перо
      return (
        <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 4c-4.418 4.418-9.582 9.582-14 14M16 8c-1.657 1.657-3.343 3.343-5 5M8 16l-4 4m0 0h6m-6 0v-6" /></svg>
      )
    case 'corrosion': // капля с щитом
      return (
        <svg className="w-10 h-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8.5 7 12a5 5 0 0010 0c0-3.5-5-10-5-10z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="15" r="3" strokeWidth={2} /></svg>
      )
    case 'size': // стрелки в стороны
      return (
        <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4" /></svg>
      )
    case 'design': // палитра
      return (
        <svg className="w-10 h-10 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 3C7.03 3 3 7.03 3 12c0 3.87 3.13 7 7 7 1.1 0 2-.9 2-2s.9-2 2-2 2-.9 2-2-.9-2-2-2c-.55 0-1 .45-1 1s.45 1 1 1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    case 'energy': // молния
      return (
        <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    case 'sound': // ухо
      return (
        <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 8a6 6 0 10-12 0c0 7 6 13 6 13s6-6 6-13z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="8" r="2" /></svg>
      )
    case 'eco': // лист
      return (
        <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8.5 7 12a5 5 0 0010 0c0-3.5-5-10-5-10z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    case 'easy': // щётка
      return (
        <svg className="w-10 h-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="17" width="16" height="2" rx="1"/><rect x="9" y="7" width="6" height="10" rx="2"/><path d="M9 7V5a3 3 0 016 0v2"/></svg>
      )
    case 'price': // монета
      return (
        <svg className="w-10 h-10 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" strokeWidth={2}/><path d="M8 12h8M12 8v8" strokeWidth={2}/></svg>
      )
    case 'durability': // часы
      return (
        <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2}/><path d="M12 6v6l4 2" strokeWidth={2}/></svg>
      )
    default:
      // fallback: shield
      return (
        <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" /></svg>
      )
  }
} 