import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import Wintak from "../../../../assets/icons/wintak.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic28 from "../../../../assets/takguides/wintak/Kuva28.png";
import pic29 from "../../../../assets/takguides/wintak/Kuva29.png";
import pic30 from "../../../../assets/takguides/wintak/Kuva30.png";
import pic31 from "../../../../assets/takguides/wintak/Kuva31.png";

export function TakQuickstartWin4() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="WinTAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Aseta mittayksiköt (4/4)"
          progressMax={4}
          progressNow={4}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="WinTAK"
              image={Wintak}
              details={
                <>
                  WinTAK käyttöönotto - vaihe 4:{" "}
                  <strong>Aseta mittayksiköt</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee.
                </>
              }
            />
            <UnfoldableCard
              title={<>1. Tarkista mittayksikköasetukset</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  <span>
                    Tarkista WinTAKin mittayksikköasetukset.
                    <br />
                    Paina vasemmasta yläkulmasta kolmea päällekkäistä viivaa,{" "}
                    <strong>hampurilaisvalikkoa</strong>.
                  </span>
                </>
              }
              image2Src={pic28}
              image2Classes="mx-auto pr-12 w-[200px] p-4"
              description2={
                <span>
                  Valitse <strong>Settings</strong>.
                </span>
              }
              image3Src={pic29}
              image3Classes="mx-auto pr-5 w-[300px] p-4"
              description3={
                <>
                  <span>
                    Valitse <strong>Display Preferences</strong>.
                  </span>
                </>
              }
              image4Src={pic29}
              image4Classes="mx-auto pr-5 w-[300px] p-4"
              description4={
                <span>
                  Display Preferences-valikko avautuu. Valitse{" "}
                  <strong>Unit Display Format Preferences</strong>.
                </span>
              }
              image5Src={pic30}
              image5Classes="mx-auto pr-5 w-[300px] p-4"
              description5={
                <span>
                  Tarkista, että asetukset ovat kuvan mukaiset. Vaihda
                  tarvittaessa.
                </span>
              }
              image6Src={pic31}
              image6Classes="mx-auto pr-5 w-[300px] p-4"
              description6={
                <>
                  WinTAK on nyt asetettu!
                  <br />
                  Mallin mukaisen käytön ohjeet löydät Rasenmaeherin TAK-valikon
                  etusivulta <strong>Käyttö joukossa</strong>.
                </>
              }
            />
            <UnfoldableCard
              title={<>2. Vianetsintä</>}
              styling="bg-backgroundLight"
              description1="TBD: TroubleShoot."
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/win3"
          forwardUrl="/app/services/tak/quickstart"
          alterForward="Valmis! Palaa tästä."
        />
      </Layout>
    </div>
  );
}
