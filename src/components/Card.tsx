import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  image?: string;
  url?: string;
  children?: ReactNode; 
}

export function Card({ title, image, url }: { title: string; image?: string, url?:string }) {
    return (
      <a
        href={url}
        className="relative bg-backgroundLight rounded-lg w-full h-36 md:h-52 lg:h-72 mb-5 overflow-hidden"
      >
        {image && (
          <img
            src={image}
            className="absolute top-0 left-0 w-full h-full object-contain p-3"
          />
        )}
        <div className="absolute right-0 bottom-0 bg-primary p-2 rounded-tl-lg">
          <span className="text-white">{title}</span>
        </div>
      </a>
    );
  }
