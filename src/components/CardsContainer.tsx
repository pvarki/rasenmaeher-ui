import React, { ReactNode } from 'react';

interface CardsContainerProps {
  children: ReactNode;
}

export function CardsContainer({children}: CardsContainerProps) {
  return (
    <div className="flex flex-col items-center justify-center mx-2 h-[calc(100vh - 4rem)] md:px-[20%] lg:px-[32%]">
      {children}
    </div>
  );
}
