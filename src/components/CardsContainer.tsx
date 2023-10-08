import React, { ReactNode } from 'react';

interface CardsContainerProps {
    children: ReactNode;
  }
  
  export function CardsContainer({children}: CardsContainerProps) {
      return (
          <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-10 p-5 lg:space-x-10">
              {children}
          </div>
      );
  }