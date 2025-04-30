import React from 'react'
import Link from 'next/link'

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink 
}: CTASectionProps) {
  return (
    <section className="bg-primary-blue text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8">{subtitle}</p>
        <Link 
          href={buttonLink}
          className="inline-block bg-secondary-red hover:bg-secondary-light text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
} 