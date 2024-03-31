import { useTranslation } from "react-i18next";

interface LoadingComponentProps {
  text?: string; // Optional prop to allow custom loading text keys
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({
  text = "loading",
}) => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="z-50 relative flex flex-col items-center justify-center">
        <div
          className="animate-spin inline-block w-9 h-9 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-white"
          role="status"
          aria-label="loading"
        ></div>
        {/* Use the translation function `t` with the provided textKey */}
        <span className="text-lg text-white mt-2">{t(text)}</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
