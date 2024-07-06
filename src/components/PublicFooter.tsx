import { PrivacyPolicyModal } from "./legal/PrivacyPolicyModal";
import { DropdownMenu } from "./DropdownMenu";
import { useLanguageChange } from "./Localization/LanguageChange";
import { Trans } from "react-i18next";

export function PublicFooter() {
  const { changeLanguage, availableLanguages } = useLanguageChange();
  // Convert available languages to dropdown items
  const languageItems = availableLanguages.map((lang) => ({
    label: lang.name,
    value: lang.code,
  }));

  return (
    <div className="font-heading text-uppercase text-center text-sm text-gray-500 pt-5 mt-10 mx-auto max-w-screen-xl">
      <hr className="mx-auto" />

      <div className="pt-4 py-4">
        &copy; <Trans i18nKey="footer.allRightsReservedMain" ns="dynamic" />
        <br />
        <br />
        <Trans i18nKey="footer.allRightsReservedSecond" ns="dynamic" />
        <br />
        &copy;{" "}
        <Trans i18nKey="footer.allRightsReservedSecondNotice" ns="dynamic" />
      </div>

      <hr className="mx-auto w-56" />

      <div className="py-3 text-m">
        <PrivacyPolicyModal triggerClassName="text-m text-blue-500 underline cursor-pointer" />{" "}
        <DropdownMenu
          triggerLabel="Language"
          items={languageItems}
          onSelect={(value) => changeLanguage(value)}
        />
      </div>
      <hr className="mx-auto w-56" />
    </div>
  );
}
