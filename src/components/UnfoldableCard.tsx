import React, { useState } from "react";

interface UnfoldableCardProps {
  title: string;
  content?: React.ReactNode;
  children?: React.ReactNode;
  styling?: string;
  initialOpen?: boolean;
  imageSrc?: string;
  imageClasses?: string;
  image2Src?: string;
  image2Classes?: string;
  image3Src?: string;
  image3Classes?: string;
  image4Src?: string;
  image4Classes?: string;
  description1?: React.ReactNode;
  description2?: React.ReactNode;
  description3?: React.ReactNode;
  description4?: React.ReactNode;
}

export function UnfoldableCard({
  title,
  content,
  children,
  styling = "",
  initialOpen = false,
  imageSrc,
  imageClasses = "",
  image2Src,
  image2Classes = "",
  image3Src,
  image3Classes = "",
  image4Src,
  image4Classes = "",
  description1,
  description2,
  description3,
  description4,
}: UnfoldableCardProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const renderImage = (src = "", classes = "") =>
    src && (
      <img
        src={src}
        className={`mx-auto ${classes}`}
        alt="Unfoldable card content"
      />
    );

  return (
    <div
      className={`flex flex-col w-full p-4 rounded-md cursor-pointer bg-background ${styling}`}
      onClick={handleClick}
    >
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
          {renderImage(imageSrc, imageClasses)}
          {description1 && (
            <p className="m-2 text-white prose prose-white">{description1}</p>
          )}

          {renderImage(image2Src, image2Classes)}
          {description2 && (
            <p className="m-2 text-white prose prose-white">{description2}</p>
          )}

          {renderImage(image3Src, image3Classes)}
          {description3 && (
            <p className="m-2 text-white prose prose-white">{description3}</p>
          )}

          {renderImage(image4Src, image4Classes)}
          {description4 && (
            <p className="m-2 text-white prose prose-white">{description4}</p>
          )}

          {content && (
            <p className="mt-2 text-white prose prose-white">{content}</p>
          )}
          {children}
        </>
      )}
    </div>
  );
}
