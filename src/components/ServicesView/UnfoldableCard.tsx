import React, { useState } from "react";
import parse from "html-react-parser";

interface UnfoldableCardProps {
  title: string;
  content?: string;
  children?: React.ReactNode;
  styling?: string;
  initialOpen?: boolean;
  imageSrc?: string;
  imageClasses?: string;
}

export function UnfoldableCard({ 
  title, 
  content, 
  children, 
  styling = '', 
  initialOpen = false,
  imageSrc,
  imageClasses = ''
}: UnfoldableCardProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col w-full p-4 rounded-md cursor-pointer ${styling}`} onClick={handleClick}>
      <div className="flex justify-between items-center">
        <h3 className="text-l text-white font-bold">{title}</h3>
        <span
          className={`transform transition-transform duration-300 text-white ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ display: "inline-block" }}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <>
          {imageSrc && <img src={imageSrc} className={`mx-auto ${imageClasses}`} alt="Unfoldable card content" />}
          {content && <p className="mt-2 text-white">{parse(content)}</p>}
          {children}
        </>
      )}
    </div>
  );
}
