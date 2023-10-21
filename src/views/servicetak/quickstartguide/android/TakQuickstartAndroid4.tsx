import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { GuideSection } from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";

import pic07 from "../../../../assets/takguides/atak/07-Kartta1.png";
import pic08 from "../../../../assets/takguides/atak/08-OK1.png";

export function TakQuickstartAndroid4() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="ATAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Vaihda karttapohjaa"
          progressMax={4}
          progressNow={4}
        />
        <div className="flex justify-center items-center w-full">
          <CardsContainer>
            <GuideSection
              number="1."
              description={
                <>
                  Valitse työkalurivistä (oikea yläkulma){" "}
                  <strong> Kartat </strong>.
                </>
              }
              imageSrc={pic07}
              imageClasses="m-3 w-[300px]"
            />
            <GuideSection
              number="2."
              description={
                <>
                  Totea <strong>OK</strong> muutamaan ilmoitukseen.
                </>
              }
              imageSrc={pic08}
              imageClasses="m-3 w-[300px]"
            />
            <GuideSection
              number="3."
              description={
                <>
                  Valitse <strong>Mobile</strong> välilehdeltä{" "}
                  <strong>02 Google Hybrid</strong> Karttapohja aktivoituu.
                </>
              }
              imageSrc={pic08}
              imageClasses="m-3 w-[300px]"
              description2={
                <>
                  Pääset pois valikosta painamalla muutamia kertoja{" "}
                  <strong>Back</strong>-nappia.
                </>
              }
            />
          </CardsContainer>
        </div>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/android3"
          forwardUrl="/app/"
          alterForward="Valmis! Palaa kotiin."
        />
      </Layout>
    </div>
  );
}
