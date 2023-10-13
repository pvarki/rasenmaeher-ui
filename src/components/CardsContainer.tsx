import React, { ReactNode } from 'react';

interface CardsContainerProps {
  children: ReactNode;
}

export function CardsContainer({children}: CardsContainerProps) {
  return (
    <div className="flex flex-col items-center justify-center mx-5 h-[calc(100vh - 4rem)] md:px-[20%] lg:px-[33%]">
      {children}
    </div>
  );
}
