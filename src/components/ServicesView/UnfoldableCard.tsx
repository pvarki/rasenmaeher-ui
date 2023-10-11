import React, { useState } from 'react';
import parse from 'html-react-parser';

export function UnfoldableCard({ title, content }: { title: string; content: string }) {
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
      {isOpen && <p className="mt-2 text-white">{parse(content)}</p>}
    </div>
  );
}
