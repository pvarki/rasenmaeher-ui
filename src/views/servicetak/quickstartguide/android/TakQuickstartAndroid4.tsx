import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import ATAK from "../../../../assets/icons/tak-logo.png";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";

import Settings17 from "../../../../assets/takguides/atak/17-settings2.png";
import Settings18 from "../../../../assets/takguides/atak/18-DisplaySettings1.png";
import UnitDisplay19 from "../../../../assets/takguides/atak/19-UnitDisplay1.png";
import Altitude20 from "../../../../assets/takguides/atak/20-Altitude1.png";
import UnitFormat21 from "../../../../assets/takguides/atak/21-UnitFormat1.png";
import Speedunits24 from "../../../../assets/takguides/atak/24-SpeedUnits1.png";
import Meterstokilo25 from "../../../../assets/takguides/atak/25-MetersToKilo1.png";
import Meterskmunits26 from "../../../../assets/takguides/atak/26-10001.png";
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
          title="Vaihda mittayksiköt ja kartta (4/4)"
          progressMax={4}
          progressNow={4}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <>
                  ATAK käyttöönotto - vaihe 4:{" "}
                  <strong>vaihda mittayksiköt ja kartta</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee. Tässä vaiheessa ATAK-sovelluksen tulee olla auki.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  4. <strong>Aseta</strong> mittayksiköt
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  a. Palaa takaisin <strong>Settings</strong>-päävalikkoon
                  peruuttamalla.
                  <br />
                  <br />
                  b. Valitse <em>Display Preferences</em>.
                </>
              }
              image2Src={Settings17}
              image2Classes="m-3 w-[300px]"
              description2={
                <>
                  <br />
                  c. Valitse <em>Basic Display Preferences</em>.
                </>
              }
              image3Src={Settings18}
              image3Classes="m-3 w-[300px]"
              description3={
                <>
                  <br />
                  d. Valitse <em>Unit Display Format Preferences</em>.
                </>
              }
              image4Src={UnitDisplay19}
              image4Classes="m-3 w-[300px]"
              description4={
                <>
                  <br />
                  e. Valitse <em>Altitude Units</em>.
                </>
              }
              image5Src={Altitude20}
              image5Classes="m-3 w-[300px]"
              description5={
                <>
                  <br />
                  f. <strong>Vaihda</strong> yksiköksi{" "}
                  <strong>Meters (m)</strong>.
                </>
              }
              image6Src={UnitFormat21}
              image6Classes="m-3 w-[300px]"
              description6={
                <>
                  <br />
                  g. Valitse <strong>Speed Units</strong>, ja valitse yksiköksi{" "}
                  <strong>KM per Hour (kmph)</strong>
                </>
              }
              image7Src={Speedunits24}
              image7Classes="m-3 w-[300px]"
              description7={
                <>
                  <br />
                  h. valitse yksiköksi <strong>KM per Hour (kmph)</strong>
                </>
              }
              image8Src={Meterstokilo25}
              image8Classes="m-3 w-[300px]"
              description8={
                <>
                  <br />
                  j. Vieritä valikko alas kohtaan <strong>UNIT TRESHOLD</strong>
                  . Valitse yksiköksi <strong>Meters to Kilometers.</strong>
                </>
              }
              image9Src={Meterstokilo25}
              image9Classes="m-3 w-[300px]"
              description9={
                <>
                  <br />
                  i. Vaihda arvoksi <strong>1000</strong>. Paina{" "}
                  <strong>OK.</strong>
                </>
              }
              imageSrc={Meterskmunits26}
              imageClasses="m-3 w-[300px]"
              description15={
                <>
                  Mittayksiköt ovat nyt asetettu. Poistu valikosta painamalla
                  back-nappia useita kertoja.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  5. <strong>Vaihda</strong> karttapohja
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  <br />
                  Valitse työkalurivistä (oikea yläkulma){" "}
                  <strong> Kartat </strong>.
                </>
              }
              image2Src={pic07}
              image2Classes="m-3 w-[300px]"
              description2={
                <>
                  <br />
                  Totea <strong>OK</strong> muutamaan ilmoitukseen.
                </>
              }
              image3Src={pic08}
              image3Classes="m-3 w-[300px]"
              description3={
                <>
                  <br />
                  Valitse <strong>Mobile</strong> välilehdeltä{" "}
                  <strong>02 Google Hybrid</strong> Karttapohja aktivoituu.
                </>
              }
              image4Src={pic08}
              image4Classes="m-3 w-[300px]"
              description4={
                <>
                  <br />
                  Pääset pois valikosta painamalla muutamia kertoja
                  <strong>Back</strong>-nappia.
                </>
              }
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/android3"
          forwardUrl="/app/services/tak/quickstart"
          alterForward="Valmis! Palaa tästä."
        />
      </Layout>
    </div>
  );
}
