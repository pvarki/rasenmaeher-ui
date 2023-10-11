import React, { ReactNode } from 'react';

interface GuideSectionProps {
    number: string; 
    description: string;
    imageSrc?: string; 
    note?: string; 
  }

  export function GuideSection({
    number,
    description,
    imageSrc,
    note
  }: GuideSectionProps) {

      return (
        <div className="items-start self-stretch bg-neutral-800 flex w-[350px] max-w-full justify-between gap-2.5 mt-8 pr-2.5 pb-2.5">
          <div className="justify-center text-white text-center text-4xl font-bold leading-6">
            {number}
          </div>
          <div className="items-start flex flex-col grow shrink-0 basis-auto mt-2.5">
            <p className="text-white text-xl leading-6 w-[266px] max-w-full">
              {description}
            </p>
            {imageSrc && (
              <img
                loading="lazy"
                srcSet={imageSrc}
                className="aspect-[3.38] object-cover object-center w-[135px] bg-blend-normal border shrink-0 mt-2.5 rounded-md border-solid border-neutral-400"
                alt="Image"
              />
            )}
            {note && <p className="text-red-400">{note}</p>}
          </div>
        </div>
      );
    }