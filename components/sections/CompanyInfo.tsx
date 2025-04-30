import React from 'react'

export default function CompanyInfo() {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Наша компания</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            Мы специализируемся на производстве и установке пластиковых и алюминиевых окон 
            в Астане и области. Наша компания работает на рынке более 10 лет, 
            за это время мы заслужили репутацию надежного партнера.
          </p>
          <p className="mb-6">
            Мы используем только качественные материалы от ведущих производителей, 
            таких как Rehau, Veka и KBE. Наши специалисты проходят регулярное обучение 
            и имеют большой опыт работы.
          </p>
          <p>
            Каждый наш проект - это индивидуальный подход к клиенту, 
            качественное выполнение работ и гарантия на все виды услуг.
          </p>
        </div>
      </div>
    </section>
  )
} 