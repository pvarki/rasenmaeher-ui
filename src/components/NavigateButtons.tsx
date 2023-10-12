import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavigateButtonsProps {
    backUrl: string;
    forwardUrl: string;
  }
  
  export function NavigateButtons({ backUrl, forwardUrl }: NavigateButtonsProps) {
    const navigate = useNavigate();
    const [BackClicked, setBackClicked] = useState(false);
    const [ContinueClicked, setContinueClicked] = useState(false);
  
    const handleBackClick = () => {
      setBackClicked(true);
      navigate(backUrl);
      setBackClicked(false);  // Resetting to the original state after click
    };
  
    const handleContinueClick = () => {
      setContinueClicked(true);
      navigate(forwardUrl);
      setContinueClicked(false);  // Resetting to the original state after click
    };

  return (
    <div className="fixed bottom-2 left-0 right-0 flex justify-center">
      <section className="items-start rounded bg-zinc-800 flex w-[370px] max-w-full gap-2.5 mt-24 p-2.5 max-md:justify-center">
        <button
          className={`transform transition-transform duration-200 justify-center items-center rounded ${
            BackClicked ? "scale-95" : "scale-100"
          } ${
            BackClicked ? "bg-blue-500" : "bg-zinc-800"
          } self-stretch flex w-[163px] max-w-full flex-col px-5 py-2.5`}
          onMouseDown={() => setBackClicked(true)}
          onMouseUp={() => setBackClicked(false)}
          onClick={handleBackClick}
        >
          <span className="text-white text-xl font-medium leading-6 self-center">
            Takaisin
          </span>
        </button>
        <div className="self-stretch bg-neutral-800 flex w-1 h-11 flex-col" />
        <button
          className={`transform transition-transform duration-200 bg-blue-900 justify-center items-center ${
            ContinueClicked ? "scale-95" : "scale-100"
          } self-stretch flex w-[163px] max-w-full flex-col px-5 py-2.5`}
          onMouseDown={() => setContinueClicked(true)}
          onMouseUp={() => setContinueClicked(false)}
          onClick={handleContinueClick}
        >
          <span className="text-white text-xl font-medium leading-6 self-center">
            Jatka
          </span>
        </button>
      </section>
    </div>
  );
}
