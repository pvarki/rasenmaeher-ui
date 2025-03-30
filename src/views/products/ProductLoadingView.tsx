import { ReactNode } from "react";
import { CardView } from "./CardView";

interface ProductLoadingViewProps {
  readonly title?: string;
  readonly message?: string | ReactNode;
  readonly children?: ReactNode;
}

export const ProductLoadingView: React.FC<ProductLoadingViewProps> = ({ title, message, children }) => {
  return (
    <CardView title={title ?? 'loading'} message={message}>
      <div
        className="animate-spin inline-block w-9 h-9 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-white"
        role="status"
        aria-label="loading"
      ></div>
      {children}
    </CardView>
  );
};
