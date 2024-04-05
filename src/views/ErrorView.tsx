import { useMemo } from "react";
import { Layout } from "../components/Layout";
import { useTranslation, Trans } from "react-i18next";
import { useQueryParams } from "../utils/useQueryParams";

export function ErrorView() {
  const { t, i18n } = useTranslation();
  const params = useQueryParams();

  const errorDetails = useMemo(() => {
    const code = params.get("code");
    const titleKey = code ? `error.${code}.title` : "error.fall_back.title";
    const detailsKey = code
      ? `error.${code}.details`
      : "error.fall_back.details";
    const title = t(titleKey, "error.fall_back.title");
    const details = t(detailsKey, "error.fall_back.details");

    return { title, details };
  }, [params, t]);

  const feedbackLink =
    i18n.language === "fi"
      ? "https://docs.google.com/forms/d/e/1FAIpQLSehHTASMmqszEMOVOwMvjUNOj-lcEGskk58sUjsmurJDlvFZw/viewform"
      : "https://docs.google.com/forms/d/1BXMxeTt5TtmuhX9XsiZTH2yl-Fko-NVPUumvu40TUAM/viewform";

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col text-centered items-center justify-center h-screen gap-4 p-8">
        <h1 className="text-white">{errorDetails.title}</h1>
        <p className="text-white">
          <Trans
            i18nKey={errorDetails.details}
            components={{ strong: <strong />, em: <em /> }}
          />
        </p>
        <div className="py-5 text-s text-white">
          <a
            href={feedbackLink}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("error.reporting.linkText")}
          </a>
        </div>
        <a
          href="/"
          className="rounded-lg px-4 py-2 font-bold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed text-white bg-primary hover:bg-primary-700 focus:ring-primary-300 disabled:bg-primary-200"
        >
          {t("error.returnHome")}
        </a>
      </div>
    </Layout>
  );
}
