import { Trans, useTranslation } from "react-i18next";
import { InfoModal } from "./InfoModal";
import { LanguageDropdown } from "./LanguageDropdown";
import useHealthCheck from "../hook/helpers/useHealthcheck";

export function Footer() {
  const { i18n } = useTranslation();
  const isMtls = window.location.origin.includes("mtls.");
  const { version } = useHealthCheck();

  // Determine the feedback link based on the current i18n language
  const feedbackLink =
    i18n.language === "fi"
      ? "https://docs.google.com/forms/d/e/1FAIpQLSehHTASMmqszEMOVOwMvjUNOj-lcEGskk58sUjsmurJDlvFZw/viewform"
      : "https://docs.google.com/forms/d/1BXMxeTt5TtmuhX9XsiZTH2yl-Fko-NVPUumvu40TUAM/viewform";

  return (
    <div className="font-heading text-uppercase text-center text-sm text-gray-500 pt-5 mt-10 mx-auto max-w-screen-xl">
      <hr className="mx-auto" />

      <div className="pt-4 py-3">
        RASENMAEHER {version || <Trans i18nKey="footer.loading" />} -{" "}
        <LanguageDropdown />
      </div>
      {isMtls && (
        <div className="py-1 pb-3 text-xs">
          <InfoModal triggerClassName="text-m text-blue-500 underline cursor-pointer" />{" "}
          - <Trans i18nKey="footer.authenticatedWithMtls" />
        </div>
      )}

      <hr className="mx-auto w-56" />

      <div className="py-5 text-xs">
        <Trans i18nKey="footer.proudlyServedBy" />{" "}
        <a
          href="https://github.com/pvarki"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          PVATK
        </a>
        <br />
        &copy; <Trans i18nKey="footer.allRightsReservedPVATK" />
        <br />
        <br />
        <Trans i18nKey="footer.allRightsReservedFDF" />
        <br />
        &copy; <Trans i18nKey="footer.allRightsReservedFDFnotice" />
        <br />
        <br />
        <a
          href={feedbackLink}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans i18nKey="footer.feedbackForm" />
        </a>
      </div>

      <hr className="mx-auto w-56" />
    </div>
  );
}
