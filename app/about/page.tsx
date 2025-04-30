import React from 'react'
import HeroSection from '@/components/sections/HeroSection'
import CompanyInfo from '@/components/sections/CompanyInfo'
import Advantages from '@/components/sections/Advantages'
import Certificates from '@/components/sections/Certificates'
import CTASection from '@/components/sections/CTASection'

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <HeroSection 
        title="О компании"
        subtitle="Профессиональный подход к производству и установке окон"
      />
      
      <CompanyInfo />
      
      <Advantages />
      
      <Certificates />
      
      <CTASection 
        title="Готовы к сотрудничеству?"
        subtitle="Свяжитесь с нами для получения подробной информации"
        buttonText="Связаться с нами"
        buttonLink="/contact"
      />
    </div>
  )
} 