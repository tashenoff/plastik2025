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
  advantages: string[]
  qa?: QAItem[]
}

export interface ServicesData {
  services: Service[]
} 