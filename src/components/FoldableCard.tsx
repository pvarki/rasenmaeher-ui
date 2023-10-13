import React, { useState } from 'react';

interface FoldableCardProps {
  title: string;
  imageSrc?: string;
  children?: React.ReactNode;
}

export function FoldableCard({ title, imageSrc, children }: FoldableCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col w-full p-0 rounded-md cursor-pointer m-2 bg-backgroundLight" onClick={() => setIsOpen(!isOpen)}>
      
      {!isOpen && imageSrc && <img src={imageSrc} alt={title} className="w-16 h-16 object-contain self-center mt-2 mb-2" />}

      <div className="absolute top-0 right-0 flex items-center space-x-2 bg-primary p-2 rounded-tl-lg">
        <h3 className="text-l text-white">{title}</h3>
        <span 
          className={`transform transition-transform duration-300 text-white ${isOpen ? 'rotate-180' : ''}`}
        >
          ▼
        </span>
      </div>
      
      {isOpen && (
        <div className="mt-6">
          {children}
        </div>
      )}

    </div>
  );
}
