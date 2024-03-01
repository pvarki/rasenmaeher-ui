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
import Callsign11 from "../../../../assets/takguides/atak/11-Callsign1.png";
import Csprefs12 from "../../../../assets/takguides/atak/12-Csprefs1.png";
import Mycallsign13 from "../../../../assets/takguides/atak/13-MyCallsign1.png";
import Omapeite14 from "../../../../assets/takguides/atak/14-OmaPeite1.png";

export function TakQuickstartAndroid5() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="ATAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Tarkasta tarvittaessa mittayksiköt ja kartta (5/5)"
          progressMax={5}
          progressNow={5}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <>
                  ATAK käyttöönotto - vaihe 5:{" "}
                  <strong>
                    Tarkista tarvittaessa mittayksiköt, callsign ja kartta.
                  </strong>
                  <br />
                  <br />
                  Näiden asetusten tulisi olla viestiperusteiden asettamisen
                  jälkeen kunnossa. Tarkista tai muuta niitä halutessasi.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  <strong>Valitse</strong> haluamaisi karttapohja
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  Mikäli haluat valita karttapohjan (eri vaihtoehtoja
                  saatavilla), toimi seuraavasti.
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
                  Pääset pois valikosta painamalla muutamia kertoja{" "}
                  <strong>Back</strong>-nappia.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  <strong>Tarkista</strong> tarvittaessa mittayksiköt
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  Android ATAKissa mittayksikköasetukset tulevat
                  perustepaketista. Tarkista ne tarvittaessa seuraavasti.
                  <br />
                  <br />
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
                  Tarkista ja vaihda tarvittaessa <strong>Callsign</strong>
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  Peitenimesi Android ATAKissa tulee perustepaketissa. Mikäli
                  sinun tarvitsee vaihtaa se, se tapahtuu näin.
                  <br />
                  <br />
                  Valitse <strong>Callsign and Device Preferences.</strong>
                </>
              }
              image2Src={Callsign11}
              image2Classes="m-3 w-[300px]"
              description2={
                <>
                  Valitse <strong>Callsign Preferences.</strong>
                </>
              }
              image3Src={Csprefs12}
              image3Classes="m-3 w-[300px]"
              description4={
                <>
                  Valitse <strong>My Callsign.</strong>
                </>
              }
              image5Src={Mycallsign13}
              image5Classes="m-3 w-[300px]"
              description5={
                <>
                  Anna omaksi tunnukseksi{" "}
                  <strong>sinulle käsketty peite,</strong> esimerkiksi{" "}
                  <em>Rambo</em>.
                </>
              }
              image6Src={Omapeite14}
              image6Classes="m-3 w-[300px]"
              description7={
                <>
                  Paina <strong>OK.</strong>
                </>
              }
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/android4"
          forwardUrl="/app/services/tak/quickstart"
          alterForward="Valmis! Palaa tästä."
        />
      </Layout>
    </div>
  );
}
