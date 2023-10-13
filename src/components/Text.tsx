import React from 'react';
import parse from 'html-react-parser';

interface TextProps {
  title?: string;
  description?: string;
}

export function Text(props: TextProps) {
  return (
    <div className="flex flex-col items-center p-0">
      <h3 className="text-lg text-white font-bold mb-0">{parse(props.title || '')}</h3>
      <p className="text-white">{parse(props.description || '')}</p>
    </div>
  );
}
