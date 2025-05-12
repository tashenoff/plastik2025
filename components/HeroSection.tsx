import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative h-[400px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-blue/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-white max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroSection; 