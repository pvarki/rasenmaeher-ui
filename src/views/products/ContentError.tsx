import {
  Trans,
  useTranslation,
} from "react-i18next";

interface ErrorComponentProps {
  title: string;
  details?: string;
  feedbackLink?: string;
  feedbackLabel?: string;
  returnLink?: string;
  returnLabel?: string;
}

export const ErrorComponent: React.FC<ErrorComponentProps> = ({ 
  title,
  details,
  feedbackLink,
  returnLink,
  returnLabel = "error.returnHome",
  feedbackLabel = "error.reporting.linkText"
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col text-centered items-center justify-center h-screen gap-4 p-8">
      <h1 className="text-white">{title}</h1>
      {details && (
        <p className="text-white">
          <Trans
            i18nKey={details}
            components={{ strong: <strong />, em: <em /> }}
          />
        </p>
      )}
      {feedbackLink && (
        <div className="py-5 text-s text-white">
          <a
            href={feedbackLink}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(feedbackLabel)}
          </a>
        </div>
      )}
      {returnLink && (
        <a
          href={returnLink}
          className="rounded-lg px-4 py-2 font-bold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed text-white bg-primary hover:bg-primary-700 focus:ring-primary-300 disabled:bg-primary-200"
        >
          {t(returnLabel)}
        </a>
      )}
    </div>
  );
};
