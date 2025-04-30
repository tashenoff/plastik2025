import React from 'react'

interface Advantage {
  icon: string;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    icon: '🏭',
    title: 'Собственное производство',
    description: 'Современное оборудование и контроль качества на всех этапах'
  },
  {
    icon: '⚡',
    title: 'Опытные специалисты',
    description: 'Профессиональные монтажники с большим стажем работы'
  },
  {
    icon: '✅',
    title: 'Гарантия качества',
    description: 'Гарантия на окна и монтаж до 5 лет'
  }
]

export default function Advantages() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary-blue text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 