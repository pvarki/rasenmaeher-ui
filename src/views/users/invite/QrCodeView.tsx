import QRCode from "react-qr-code";
import { Navbar } from "../../../components/Navbar";
import { Button } from "../../../components/Button";

import { useLocation, useParams } from "react-router-dom";

export function QrCodeView() {
  const { inviteCode } = useParams();

  const inviteUrl =
    window.location.origin + "/login?code=" + (inviteCode ?? "");

  return (
    <div className="flex flex-col items-center gap-5">
      <Navbar title={inviteCode} backUrl="/app/user-management/code-list" />
      <div className="w-min flex flex-col justify-center items-center p-3 pb-0 bg-backgroundLight rounded-lg">
        <QRCode value={inviteUrl} />
        <div className="w-full flex justify-end">
          <Button variant={{ color: "tertiary" }}>Kopio Linkki</Button>
        </div>
      </div>
      <span className="p-3 bg-backgroundLight rounded-lg text-white text-center">
        Käyttäjien lisääminen Näytä taistelijallesi QR-koodia Taistelija pääsee
        kirjautumissivulle Hyväksy taistelijasi kirjautuminen Hyväksy taistelija
        kuvaamalla tämän näytöltä QR-koodi, tai hyväksymällä se “Hae koodilla”
        -valikosta{" "}
      </span>
    </div>
  );
}
