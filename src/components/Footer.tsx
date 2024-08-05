import { Trans, useTranslation } from "react-i18next";
import { InfoModal } from "./InfoModal";
import { DropdownMenu } from "./DropdownMenu";
import { useLanguageChange } from "./Localization/LanguageChange";
import useHealthCheck from "../hook/helpers/useHealthcheck";

export function Footer() {
  // Use both common and dynamic namespaces
  const { t } = useTranslation(["common", "dynamic"]);
  const isMtls = window.location.origin.includes("mtls.");
  const { version } = useHealthCheck();
  const feedbackLink = t("footer.feedbackFormLink", { ns: "dynamic" });
  const { changeLanguage, availableLanguages } = useLanguageChange();

  // Convert available languages to dropdown items
  const languageItems = availableLanguages.map((lang) => ({
    label: lang.name,
    value: lang.code,
  }));

  return (
    <div className="font-heading text-uppercase text-center text-sm text-gray-500 pt-5 mt-10 mx-auto max-w-screen-xl">
      <hr className="mx-auto" />

      <div className="pt-4 py-3">
        RASENMAEHER {version || <Trans i18nKey="footer.loading" />} -{" "}
        <DropdownMenu
          triggerLabel="Language"
          items={languageItems}
          onSelect={(value) => changeLanguage(value)}
        />
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
        &copy; <Trans i18nKey="footer.allRightsReservedMain" ns="dynamic" />
        <br />
        <br />
        <Trans i18nKey="footer.TAKServerCopyRightNotice" />
        <br />
        &copy; <Trans i18nKey="footer.TAKProductCenter" />{" "}
        <a
          href="https://github.com/TAK-Product-Center/Server"
          className="underline text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans i18nKey="footer.TAKServerSource" />
        </a>
        <br />
        <br />
        <Trans i18nKey="footer.allRightsReservedSecond" ns="dynamic" />
        <br />
        &copy;{" "}
        <Trans i18nKey="footer.allRightsReservedSecondNotice" ns="dynamic" />
        <br />
        <br />
        <a
          href={feedbackLink}
          className="underline text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans i18nKey="footer.feedbackForm" ns="dynamic" />
        </a>
      </div>

      <hr className="mx-auto w-56" />
    </div>
  );
}
