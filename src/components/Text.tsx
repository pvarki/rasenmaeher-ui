import React from 'react';

interface TextProps {
  title: string;
  description: string;
}

export const Text: React.FC<TextProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="text-lg text-white font-bold mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};
