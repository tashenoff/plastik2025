import React from 'react'

interface Certificate {
  title: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    title: 'Сертификаты качества',
    description: 'Наша продукция соответствует всем международным стандартам качества и имеет необходимые сертификаты соответствия.'
  },
  {
    title: 'Лицензии',
    description: 'Компания имеет все необходимые лицензии на осуществление деятельности в сфере производства и установки оконных конструкций.'
  }
]

export default function Certificates() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Сертификаты и лицензии</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((certificate, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">{certificate.title}</h3>
            <p className="text-gray-600">{certificate.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 