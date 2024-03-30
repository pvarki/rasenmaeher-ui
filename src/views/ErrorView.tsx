import { useMemo } from "react";
import { Layout } from "../components/Layout";
import { useTranslation, Trans } from "react-i18next";
import { useQueryParams } from "../utils/useQueryParams";

export function ErrorView() {
  const { t, i18n } = useTranslation();
  const params = useQueryParams();

  const errorDetails = useMemo(() => {
    const code = params.get("code");
    if (!code)
      return {
        titleKey: "error.fall_back.title",
        detailsKey: "error.fall_back.details",
      };

    const titleKey = `error.${code}.title`;
    const detailsKey = `error.${code}.details`;

    return { titleKey, detailsKey };
  }, [params]);

  const feedbackLink =
    i18n.language === "fi"
      ? "https://docs.google.com/forms/d/e/1FAIpQLSehHTASMmqszEMOVOwMvjUNOj-lcEGskk58sUjsmurJDlvFZw/viewform"
      : "https://example.com/english-feedback-form";

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col text-centered items-center justify-center h-screen gap-4 p-8">
        <h1 className="text-white">{t(errorDetails.titleKey)}</h1>
        <p className="text-white">
          <Trans
            i18nKey={errorDetails.detailsKey}
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
