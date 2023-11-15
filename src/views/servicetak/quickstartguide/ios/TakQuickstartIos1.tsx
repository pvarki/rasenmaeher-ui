import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import appstore from "../../../../assets/icons/appstore.svg";
import viestiperustebutton from "../../../../assets/takguides/viestiperustebutton.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";

export function TakQuickstartIos1() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="iTAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Asenna sovellus (1/4)"
          progressMax={4}
          progressNow={1}
        />

        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="iTAK"
              image={ITAK}
              details={
                <>
                  iTAK käyttöönotto - vaihe 1:{" "}
                  <strong>asenna sovellukset</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee.
                </>
              }
            />
            <UnfoldableCard
              title="1. Lataa sovellukset"
              styling="bg-backgroundLight"
              description1={
                <>
                  <h3>Lataa iTAK (1/2)</h3>
                  <strong>Lataa</strong> iTAK-sovellus App Storesta ja asenna
                  se. Latauslinkki alla, <strong>paina</strong>:
                </>
              }
              image2Src={appstore}
              image2Link="https://apps.apple.com/us/app/itak/id1561656396"
              image2Classes="w-[200px]"
            />
            <UnfoldableCard
              title="2. Lataa viestiperusteet"
              styling="bg-backgroundLight"
              image2Src={viestiperustebutton}
              image2Classes="m-3 w-[500px]"
              description1={
                <>
                  Lataa viestiperusteesi etusivulta painamalla kuvan mukaista{" "}
                  <strong>Lataa viestiperustepaketti</strong>-nappia. Tallenna
                  .zip-tiedosto.
                </>
              }
              note="HUOMAA! Zip-tiedostoa ei tarvitse purkaa!"
            />
          </div>
        </CardsContainer>

        <NavigateButtons
          backUrl="/app/services/tak/quickstart"
          forwardUrl="/app/services/tak/quickstart/ios2"
        />
      </Layout>
    </div>
  );
}
