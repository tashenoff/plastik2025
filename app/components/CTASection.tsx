import Link from 'next/link'
import Image from 'next/image'

interface CTASectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  backgroundImage?: string
}

export default function CTASection({
  title = "Готовы установить новые окна?",
  description = "Свяжитесь с нами для бесплатной консультации и расчета стоимости",
  buttonText = "Оставить заявку",
  buttonLink = "/contact",
  backgroundImage = "/images/cta-bg.jpg"
}: CTASectionProps) {
  return (
    <section className="relative text-white overflow-hidden h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
          quality={100}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary-blue/70" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto text-center relative z-10 px-4">
        <h2 className="text-4xl font-bold mb-6 font-montserrat tracking-tight">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto font-montserrat">{description}</p>
        <Link
          href={buttonLink}
          className="bg-white text-primary-blue hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
} 