export interface AdvantageItem {
  text: string
  icon?: string
  description?: string
}

export interface QAItem {
  question: string
  answer: string
}

export interface Service {
  slug: string
  title: string
  description: string
  features: string[]
  applications: string[]
  advantages: AdvantageItem[]
  qa?: QAItem[]
  portfolio?: {
    src: string
    alt: string
    caption?: string
  }[]
}

export interface ServicesData {
  services: Service[]
} 