import React, {
  useState,
  useRef,
  ReactNode,
} from "react";
import { useTranslation } from "react-i18next";

interface FoldableCardProps {
  title: string | ReactNode;
  imageSrc?: string;
  children?: React.ReactNode;
}

export function FoldableCard({ title, imageSrc, children }: FoldableCardProps) {
  const { t } = useTranslation(["common", "dynamic"]);
  const [isOpen, setIsOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);

    setTimeout(() => {
      if (!isOpen && bottomRef.current) {
        bottomRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      } else if (isOpen && bottomRef.current) {
        window.scrollTo({
          top:
            document.documentElement.scrollTop +
            bottomRef.current.getBoundingClientRect().top,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <div
      className="foldable-card relative flex flex-col w-full p-0 rounded-md cursor-pointer m-2 bg-backgroundLight"
      onClick={handleClick}
    >
      {!isOpen && imageSrc && (
        <img
          src={imageSrc}
          alt={typeof title === 'string' ? title : 'product image'}
          className="w-16 h-16 object-contain self-center mt-2 mb-2"
        />
      )}

      <div className="absolute top-0 right-0 flex items-center space-x-2 bg-primary p-2 rounded-tl-lg">
        <h3 className="text-l text-white">{typeof title === 'string' ? t(title) : title}</h3>
        <span
          className={`transform transition-transform duration-300 text-white ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {isOpen && (
        <div className="mt-6">
          {children}
          <div ref={bottomRef}></div>
        </div>
      )}
    </div>
  );
}
