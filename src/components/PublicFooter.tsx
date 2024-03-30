import { PrivacyPolicyModal } from "./legal/PrivacyPolicyModal";
import { Trans } from "react-i18next";

export function PublicFooter() {
  return (
    <div className="font-heading text-uppercase text-center text-sm text-gray-500 pt-5 mt-10 mx-auto max-w-screen-xl">
      <hr className="mx-auto" />

      <div className="pt-4 py-4">
        &copy; <Trans i18nKey="footer.allRightsReservedPVATK" />
        <br />
        <br />
        <Trans i18nKey="footer.allRightsReservedFDF" />
        <br />
        &copy; <Trans i18nKey="footer.allRightsReservedFDFnotice" />
      </div>

      <hr className="mx-auto w-56" />

      <div className="py-3 text-xs">
        <PrivacyPolicyModal triggerClassName="text-m text-blue-500 underline cursor-pointer" />
      </div>
      <hr className="mx-auto w-56" />
    </div>
  );
}
