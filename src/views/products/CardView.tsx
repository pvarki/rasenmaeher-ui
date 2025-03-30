import { ReactNode } from "react";

interface CardViewProps {
  readonly title: string;
  readonly message?: string | ReactNode;
  readonly children?: ReactNode;
}

export const CardView: React.FC<CardViewProps> = ({ title, message, children }) => {
  return (
    <div className="cards-container flex flex-col items-center justify-center mx-2 md:px-[20%] lg:px-[32%]">
      <div className="flex flex-col items-center justify-center bg-backgroundLight rounded-lg w-full max-w-full mb-5 overflow-hidden prose prose-white">
        <div className="flex flex-col items-center justify-center bg-backgroundLight rounded-lg w-full max-w-full mb-5 overflow-hidden prose prose-white">
          <h3 className="text-xl font-bold mt-1 mb-1">{title}</h3>
          {message ? (
            <p className="text-center ml-2 mr-2">{message}</p>
          ) : null}
          {children}
        </div>
      </div>
    </div>
  );
};
