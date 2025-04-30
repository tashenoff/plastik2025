'use client'

import { AppWindow, Building2, Cog, Wrench } from 'lucide-react'

interface FeaturesProps {
  features: string[]
  title: string
}

const iconMap = {
  0: AppWindow,
  1: Building2,
  2: Cog,
  3: Wrench,
}

export default function Features({ features, title }: FeaturesProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[index as keyof typeof iconMap] || AppWindow
            return (
              <div
                key={index}
                className="relative group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out p-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <Icon className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                  </div>
                  <p className="text-center text-gray-800 font-medium">
                    {feature}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 