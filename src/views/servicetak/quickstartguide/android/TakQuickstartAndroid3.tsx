import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import ATAK from "../../../../assets/icons/tak-logo.png";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";

import Settings10 from "../../../../assets/takguides/atak/10-Settings1.png";
import Callsign11 from "../../../../assets/takguides/atak/11-Callsign1.png";
import Csprefs12 from "../../../../assets/takguides/atak/12-Csprefs1.png";
import Mycallsign13 from "../../../../assets/takguides/atak/13-MyCallsign1.png";
import Omapeite14 from "../../../../assets/takguides/atak/14-OmaPeite1.png";
import MyTeam15 from "../../../../assets/takguides/atak/15-MyTeam1.png";
import MyRole16 from "../../../../assets/takguides/atak/16-MyRole1.png";

export function TakQuickstartAndroid3() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="ATAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Tee asetukset (3/5)"
          progressMax={5}
          progressNow={3}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <>
                  ATAK käyttöönotto - vaihe 3: <strong>tee asetukset</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee. Tässä vaiheessa ATAK-sovelluksen tulee olla auki.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  1. <strong>Avaa</strong> Settings
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  Paina oikeassa yläkulmassa olevaa{" "}
                  <strong>kolmea viivaa</strong> (hampurilaispainike).
                </>
              }
              imageSrc={Settings10}
              imageClasses="m-3 w-[250px]"
              description2={
                <>
                  Mene valikon alareunaan, valitse <strong>Settings</strong>
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  2. Aseta <strong>Callsign</strong>
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
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
            <UnfoldableCard
              title={
                <>
                  3. <strong>Aseta</strong> Team ja Role
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  Valitse <strong>My Team</strong> ja valitse sinulle käsketty
                  väri.
                </>
              }
              image2Src={MyTeam15}
              image2Classes="m-3 w-[300px]"
              description2={
                <>
                  Valitse <strong>My Role.</strong> Kaikki paitsi komentopaikka
                  käyttävät <strong>Team Member</strong>-roolia.
                </>
              }
              image3Src={MyRole16}
              image3Classes="m-3 w-[300px]"
              description3={<>Rooli ja tiimi on nyt asetettu.</>}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/android2"
          forwardUrl="/app/services/tak/quickstart/android4"
        />
      </Layout>
    </div>
  );
}
