import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import wait from "../../../../assets/takguides/atak/wait.png";
import { GuideSection } from "../../../../components/TakGuides/GuideSection";
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
        <StatusBar title="Asenna sovellukset" progressMax={4} progressNow={1} />

        <CardsContainer>
          <div className="flex flex-col items-center justify-center p-5">
            <GuideSection
              number="1."
              description='Lataa ATAK-CIV sovellus Play Storesta ja asenna se.

          <a href="https://play.google.com/store/apps/details?id=com.atakmap.app.civ" style="color: SteelBlue; text-decoration: underline;">ATAK-CIV - Paina tästä ladataksesi Google Playsta</a>
          <br></br>'
              description2='Tämän jälkeen lataa ATAK Data Sync-plugin, ja asenna se.

          <a href="https://play.google.com/store/apps/details?id=com.atakmap.android.datasync.plugin" style="color: SteelBlue; text-decoration: underline;">ATAK Datasync Plugin - Paina tästä ladataksesi Google Playsta</a>
          <br></br>'
              description3="Olet nyt ladannut tarvittavat sovellukset."
            />
            <GuideSection
              number="2."
              description="Lataa viestiperusteesi Palvelut/TAK-sivulta. Tallenna .zip-tiedosto."
              note="HUOMAA! Tiedostoa ei saa purkaa!"
            />
            <GuideSection
              number="3."
              description="Avaa sovellus. Anna kaikki oikeudet, mitä applikaatio pyytää."
              imageSrc={wait}
              imageClasses="m-3 w-[200px]"
              description2="<em>Jos applikaatio antaa virheilmoituksen, valitse Wait. </em>"
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
