import React from 'react';
import Image from 'next/image';

interface OpeningType {
  id: string;
  name: string;
  image: string;
}

interface OpeningTypeSelectorProps {
  types: OpeningType[];
  selectedType: string;
  onSelect: (typeId: string) => void;
}

const OpeningTypeSelector: React.FC<OpeningTypeSelectorProps> = ({
  types,
  selectedType,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {types.map((type) => (
        <button
          key={type.id}
          onClick={() => onSelect(type.id)}
          className={`p-6 border rounded-lg hover:border-primary-blue transition-colors ${
            selectedType === type.id ? 'border-primary-blue bg-blue-50' : 'border-gray-200'
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
          <h4 className="text-lg font-medium text-gray-900">{type.name}</h4>
        </button>
      ))}
    </div>
  );
};

export default OpeningTypeSelector; 