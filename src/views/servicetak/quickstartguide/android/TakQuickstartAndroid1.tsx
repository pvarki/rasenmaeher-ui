import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import wait from "../../../../assets/takguides/atak/wait.png";
import ATAK from "../../../../assets/icons/tak-logo.png";
import googleplay from "../../../../assets/icons/googleplay.png";
import viestiperustebutton from "../../../../assets/takguides/viestiperustebutton.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";

export function TakQuickstartAndroid1() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="ATAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Asenna sovellukset (1/4)"
          progressMax={4}
          progressNow={1}
        />

        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <>
                  ATAK käyttöönotto - vaihe 1:{" "}
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
                  <h3>Lataa ATAK (1/2)</h3>
                  <strong>Lataa</strong> ATAK-CIV-sovellus Play Storesta ja
                  asenna se. Latauslinkki alla, <strong>paina</strong>:
                </>
              }
              image2Src={googleplay}
              image2Link="https://play.google.com/store/apps/details?id=com.atakmap.app.civ"
              image2Classes="w-[200px]"
              description2={
                <>
                  <h3>b. Lataa ATAK Data Sync-plugin (2/2)</h3>
                  <strong>Lataa </strong>ATAK Data Sync-plugin, ja asenna se.
                  Latauslinkki alla, <strong>paina</strong>:
                </>
              }
              image3Src={googleplay}
              image3Classes="w-[200px]"
              image3Link="https://play.google.com/store/apps/details?id=com.atakmap.android.datasync.plugin"
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
            <UnfoldableCard
              title="3. Avaa sovellus ja anna sille sen kysymät oikeudet"
              styling="bg-backgroundLight"
              description1="Avaa sovellus. Anna kaikki oikeudet, mitä applikaatio pyytää."
              imageSrc={wait}
              imageClasses="m-3 w-[200px]"
              description2={
                <em>Jos applikaatio antaa virheilmoituksen, valitse Wait. </em>
              }
            />
          </div>
        </CardsContainer>

        <NavigateButtons
          backUrl="/app/services/tak/quickstart"
          forwardUrl="/app/services/tak/quickstart/android2"
        />
      </Layout>
    </div>
  );
}
