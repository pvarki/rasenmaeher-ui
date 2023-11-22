import React, { useState, useRef } from "react";
import { Button } from "./Button";

interface ButtonCardProps {
  title: string;
  classes?: string;
  children?: React.ReactNode;
}

export function ButtonFoldableCard({
  title,
  children,
  classes,
}: ButtonCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);

    // Using setTimeout to ensure the state update completes before scrolling
    setTimeout(() => {
      if (!isOpen && bottomRef.current) {
        // If the card is opened, scroll to the bottom
        bottomRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      } else if (isOpen && bottomRef.current) {
        // If the card is closed, scroll to the top of the card
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
      className={`relative flex flex-col w-full rounded-md cursor-pointer m-2 ${
        isOpen ? "bg-backgroundLight" : ""
      }`}
      onClick={handleClick}
    >
      <Button styling={classes}>
        {title}
        <span
          className={`ml-2 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </Button>

      {isOpen && (
        <div className="mt-0">
          {children}
          <div ref={bottomRef}></div>
        </div>
      )}
    </div>
  );
}
