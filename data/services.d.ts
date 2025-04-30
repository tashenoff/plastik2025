declare module '@/data/services.json' {
  interface QAItem {
    question: string;
    answer: string;
  }

  interface Service {
    slug: string;
    title: string;
    description: string;
    features: string[];
    applications: string[];
    advantages: string[];
    qa: QAItem[];
  }

  const services: Service[];
  export default services;
} 