import React, { useState } from 'react';
import parse from 'html-react-parser';

interface FoldableCardProps {
  title: string;
  content: string;
  imageSrc?: string;
  children?: React.ReactNode;
}

export function FoldableCard({ title, content, imageSrc, children }: FoldableCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full p-4  rounded-md cursor-pointer m-2 bg-backgroundLight" onClick={handleClick}>
      <div className="flex justify-between items-center">
        <h3 className="text-l text-white font-bold">{title}</h3>
        <span 
          className={`transform transition-transform duration-300 text-white ${isOpen ? 'rotate-180' : ''}`}
          style={{ display: 'inline-block' }}
        >
          ▼
        </span>
      </div>
      {imageSrc && <img src={imageSrc} alt={title} className="flex max-w-[120px] max-h-[120px] object-contain mt-1 mb-1" />}
      {isOpen && <p className="mt-2 text-white">{parse(content)}</p>}
      {children}
    </div>
  );
}
