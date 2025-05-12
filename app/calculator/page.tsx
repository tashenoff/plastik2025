'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import calculatorData from '@/data/calculator.json'
import companyData from '@/data/company.json'
import HeroSection from '@/components/HeroSection'

interface CalculatorState {
  step: number
  windowType: string
  width: string
  height: string
  profile: {
    color: string
    type: string
  }
  glazing: string
  windowsill: string
  sill: string
  slopes: string
}

interface WindowDimensions {
  min: { width: number; height: number }
  max: { width: number; height: number }
}

const windowDimensions: Record<string, WindowDimensions> = {
  fixed: {
    min: { width: 300, height: 300 },
    max: { width: 1800, height: 1800 }
  },
  single: {
    min: { width: 400, height: 400 },
    max: { width: 1200, height: 1800 }
  },
  double: {
    min: { width: 900, height: 400 },
    max: { width: 1800, height: 1800 }
  },
  triple: {
    min: { width: 1200, height: 400 },
    max: { width: 2400, height: 1800 }
  },
  balcony: {
    min: { width: 600, height: 1800 },
    max: { width: 1000, height: 2400 }
  },
  panoramic: {
    min: { width: 1000, height: 1800 },
    max: { width: 3000, height: 2600 }
  }
}

const STEPS = ['Тип окна', 'Размеры', 'Комплектация']

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    step: 1,
    windowType: '',
    width: '',
    height: '',
    profile: {
      color: 'white',
      type: 'veka-euroline'
    },
    glazing: 'double',
    windowsill: 'none',
    sill: 'none',
    slopes: 'none'
  })

  const nextStep = () => {
    setState(prev => ({ ...prev, step: prev.step + 1 }))
  }

  const prevStep = () => {
    setState(prev => ({ ...prev, step: prev.step - 1 }))
  }

  const handleSubmit = () => {
    const message = `
Расчет окна:
Тип окна: ${calculatorData.windowTypes.find(t => t.id === state.windowType)?.name}
Размеры: ${state.width}x${state.height} мм
Профиль: ${calculatorData.profile.types.find(t => t.id === state.profile.type)?.name}
Цвет: ${calculatorData.profile.colors.find(c => c.id === state.profile.color)?.name}
Стеклопакет: ${calculatorData.glazing.find(g => g.id === state.glazing)?.name}
Подоконник: ${calculatorData.windowsill.find(w => w.id === state.windowsill)?.name}
Отлив: ${calculatorData.sill.find(s => s.id === state.sill)?.name}
Откосы: ${calculatorData.slopes.find(s => s.id === state.slopes)?.name}
    `.trim()

    const whatsappLink = `https://wa.me/${companyData.contacts.whatsapp.replace(/[^\d+]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, '_blank')
  }

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculatorData.windowTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setState(prev => ({ ...prev, windowType: type.id }))
                  nextStep()
                }}
                className={`p-6 border rounded-lg hover:border-primary-blue transition-colors ${
                  state.windowType === type.id ? 'border-primary-blue' : 'border-gray-200'
                }`}
              >
                <div className="aspect-video relative mb-4">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{type.name}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </button>
            ))}
          </div>
        )

      case 2:
        const dimensions = windowDimensions[state.windowType]
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Укажите размеры окна</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ширина (мм)
                </label>
                <input
                  type="number"
                  value={state.width}
                  onChange={(e) => setState(prev => ({ ...prev, width: e.target.value }))}
                  min={dimensions.min.width}
                  max={dimensions.max.width}
                  className="form-input w-full"
                  placeholder={`${dimensions.min.width} - ${dimensions.max.width}`}
                />
                <p className="text-sm text-gray-500">
                  Минимум: {dimensions.min.width} мм, максимум: {dimensions.max.width} мм
                </p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Высота (мм)
                </label>
                <input
                  type="number"
                  value={state.height}
                  onChange={(e) => setState(prev => ({ ...prev, height: e.target.value }))}
                  min={dimensions.min.height}
                  max={dimensions.max.height}
                  className="form-input w-full"
                  placeholder={`${dimensions.min.height} - ${dimensions.max.height}`}
                />
                <p className="text-sm text-gray-500">
                  Минимум: {dimensions.min.height} мм, максимум: {dimensions.max.height} мм
                </p>
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button onClick={prevStep} className="btn-secondary">
                Назад
              </button>
              <button
                onClick={nextStep}
                disabled={
                  !state.width || 
                  !state.height || 
                  Number(state.width) < dimensions.min.width ||
                  Number(state.width) > dimensions.max.width ||
                  Number(state.height) < dimensions.min.height ||
                  Number(state.height) > dimensions.max.height
                }
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Далее
              </button>
            </div>
            {(Number(state.width) < dimensions.min.width ||
              Number(state.width) > dimensions.max.width ||
              Number(state.height) < dimensions.min.height ||
              Number(state.height) > dimensions.max.height) && (
              <p className="text-red-500 text-sm mt-2">
                Пожалуйста, укажите размеры в допустимых пределах
              </p>
            )}
          </div>
        )

      case 3:
        return (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-4">Выберите комплектацию</h3>
            
            {/* Цвет профиля */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Цвет профиля
              </label>
              <div className="grid grid-cols-2 gap-4">
                {calculatorData.profile.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setState(prev => ({
                      ...prev,
                      profile: { ...prev.profile, color: color.id }
                    }))}
                    className={`p-4 border rounded-lg hover:border-primary-blue transition-colors ${
                      state.profile.color === color.id ? 'border-primary-blue bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    {color.name}
                    {color.price > 0 && (
                      <span className="block text-sm text-gray-500">+{color.price} ₸</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Тип профиля */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Тип профиля
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {calculatorData.profile.types.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setState(prev => ({
                      ...prev,
                      profile: { ...prev.profile, type: type.id }
                    }))}
                    className={`p-4 border rounded-lg hover:border-primary-blue transition-colors ${
                      state.profile.type === type.id ? 'border-primary-blue bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    {type.name}
                    {type.price > 0 && (
                      <span className="block text-sm text-gray-500">+{type.price} ₸</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Стеклопакет */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Стеклопакет
              </label>
              <div className="grid grid-cols-2 gap-4">
                {calculatorData.glazing.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setState(prev => ({ ...prev, glazing: item.id }))}
                    className={`p-4 border rounded-lg hover:border-primary-blue transition-colors ${
                      state.glazing === item.id ? 'border-primary-blue bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    {item.name}
                    {item.price > 0 && (
                      <span className="block text-sm text-gray-500">+{item.price} ₸</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Подоконник */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Подоконник
              </label>
              <div className="grid grid-cols-3 gap-4">
                {calculatorData.windowsill.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setState(prev => ({ ...prev, windowsill: item.id }))}
                    className={`p-4 border rounded-lg hover:border-primary-blue transition-colors ${
                      state.windowsill === item.id ? 'border-primary-blue bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    {item.name}
                    {item.price > 0 && (
                      <span className="block text-sm text-gray-500">+{item.price} ₸</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Отлив */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Отлив
              </label>
              <div className="grid grid-cols-2 gap-4">
                {calculatorData.sill.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setState(prev => ({ ...prev, sill: item.id }))}
                    className={`p-4 border rounded-lg hover:border-primary-blue transition-colors ${
                      state.sill === item.id ? 'border-primary-blue bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    {item.name}
                    {item.price > 0 && (
                      <span className="block text-sm text-gray-500">+{item.price} ₸</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Откосы */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Откосы
              </label>
              <div className="grid grid-cols-3 gap-4">
                {calculatorData.slopes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setState(prev => ({ ...prev, slopes: item.id }))}
                    className={`p-4 border rounded-lg hover:border-primary-blue transition-colors ${
                      state.slopes === item.id ? 'border-primary-blue bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    {item.name}
                    {item.price > 0 && (
                      <span className="block text-sm text-gray-500">+{item.price} ₸</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-6">
              <button onClick={prevStep} className="btn-secondary">
                Назад
              </button>
              <button onClick={handleSubmit} className="btn-primary">
                Отправить заявку
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div>
      <HeroSection
        title="Калькулятор окон"
        description="Рассчитайте стоимость окон онлайн"
        imageUrl="/images/calculator-hero.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {STEPS.map((stepName, index) => (
                <div
                  key={stepName}
                  className={`text-sm font-medium ${
                    state.step > index + 1 ? 'text-primary-blue' :
                    state.step === index + 1 ? 'text-gray-900' :
                    'text-gray-400'
                  }`}
                >
                  {stepName}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-primary-blue rounded-full transition-all duration-300"
                style={{ width: `${(state.step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Step content */}
          {renderStep()}
        </div>
      </div>
    </div>
  )
} 