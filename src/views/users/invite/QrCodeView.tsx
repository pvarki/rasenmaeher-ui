import QRCode from "react-qr-code";
import { Layout } from "../../../components/Layout";
import { Button } from "../../../components/Button";
import { CardsContainer } from "../../../components/CardsContainer";
import { useParams } from "react-router-dom";
import { ServiceInfoCard } from "../../../components/ServiceInfoCard";

export function QrCodeView() {
  const { inviteCode } = useParams();

  const inviteUrl =
    window.location.origin + "/login?code=" + (inviteCode ?? "");

  return (
    <Layout
      showNavbar={true}
      navbarTitle={<>Kutsukoodi {inviteCode}</>}
      backUrl="/app/admin/user-management/code-list"
    >
      <CardsContainer>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col justify-center w-full items-center p-3 pb-0 bg-backgroundLight rounded-lg">
            <QRCode value={inviteUrl} />
            <div className="w-full flex justify-end">
              <Button variant={{ color: "tertiary" }}>Kopio Linkki</Button>
            </div>
          </div>
          <ServiceInfoCard
            details={
              <>
                1. <strong>Näytä</strong> käyttäjällesi tätä QR-koodia.
                <br />
                2. Käyttäjäsi pääsee syöttämään <strong>peitenimensä</strong>.
                <br />
                3. <strong>Hyväksy</strong> käyttäjäsi kirjautuminen.
                <br />
                <small>
                  <br />
                  Käyttäjän kirjautuminen hyväksytään kuvaamalla tämän näytöltä
                  QR-koodi, tai hyväksymällä se
                  <br />
                  käyttäjienhallinnan <strong>“Hyväksy"</strong>-näkymässä.{" "}
                </small>
              </>
            }
          />
        </div>
      </CardsContainer>
    </Layout>
  );
}
