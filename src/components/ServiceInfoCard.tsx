import React from 'react';
import parse from 'html-react-parser';

interface ServiceInfoCardProps {
  title?: string;
  image?: string;
  details?: string;
  children?: React.ReactNode;
}

export function ServiceInfoCard({ 
  title, 
  image, 
  details, 
  children 
}: ServiceInfoCardProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-backgroundLight rounded-lg w-full p-2 mb-2 overflow-hidden">
      {title && (
        <h3 className="text-white text-xl font-bold mt-1 mb-1">
          {title}
        </h3>
      )}
      {image && (
        <img
          src={image}
          className="flex max-w-[120px] max-h-[120px] object-contain mt-1 mb-1"  
        />
      )}
      {details && (
        <p className="text-white text-center mt-1 mb-1">
          {parse(details)}
        </p>
      )}
      {children}
    </div>
  );
}
