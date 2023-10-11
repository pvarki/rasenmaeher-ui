import React, { useState } from "react";

export function NavigateButtons() {
  const [BackClicked, setBackClicked] = useState(false);
  const [ContinueClicked, setContinueClicked] = useState(false);

  const handleBackClick = () => {
    setBackClicked(true);
  };

  const handleContinueClick = () => {
    setContinueClicked(true);
  };

  return (
    <div className="fixed bottom-2 left-0 right-0 flex justify-center">
      <section className="items-start rounded bg-zinc-800 flex w-[370px] max-w-full gap-2.5 mt-24 p-2.5 max-md:justify-center">
    
        <button
          className={`justify-center items-center rounded ${
            BackClicked ? "bg-blue-500" : "bg-zinc-800"
          } self-stretch flex w-[163px] max-w-full flex-col px-5 py-2.5`}
          onClick={handleBackClick}
        >
          <span className="text-white text-xl font-medium leading-6 self-center">
            Takaisin
          </span>
        </button>
        <div className="self-stretch bg-neutral-800 flex w-1 h-11 flex-col" />
        <button
          className={`justify-center items-center ${
            ContinueClicked ? "bg-blue-500" : "bg-neutral-800"
          } self-stretch flex w-[163px] max-w-full flex-col px-5 py-2.5`}
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