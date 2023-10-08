import React, { useState } from 'react';
import parse from 'html-react-parser';

export function UnfoldableCard({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full p-4 border rounded-md cursor-pointer m-2" onClick={handleClick}>
      <h3 className="text-lg text-white font-bold">{title}</h3>
      {isOpen && <p className="mt-2 text-white">{parse(content)}</p>}
    </div>
  );
}
