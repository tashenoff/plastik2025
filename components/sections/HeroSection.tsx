import React from 'react'

interface HeroSectionProps {
  title: string;
  subtitle: string;
  height?: string;
}

export default function HeroSection({ title, subtitle, height = 'h-[400px]' }: HeroSectionProps) {
  return (
    <section className={`relative ${height} w-full`}>
      <div className="absolute inset-0 bg-primary-blue opacity-90"></div>
      <div className="relative container mx-auto h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl">{subtitle}</p>
        </div>
      </div>
    </section>
  )
} 