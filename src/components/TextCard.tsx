import React from 'react';
import parse from 'html-react-parser';

export function TextCard({ 
  title, 
  image, 
  details, 
}: { 
  title?: string; 
  image?: string;
  details?: string; 
}) {
  return (
    <div className="flex flex-col items-center justify-center bg-backgroundLight rounded-lg w-full h-36 md:h-52 lg:h-72 mb-5 overflow-hidden">
      <h3 className="text-white text-xl font-bold mt-1 mb-1">{title}</h3>
      {image && (
        <img
          src={image}
          className="w-28 h-28 object-contain mt-2"  
        />
      )}
      {details && (
        <p className="text-white text-center ml-2 mr-2 ">
          {parse(details)}
        </p>
      )}
    </div>
  );
}
