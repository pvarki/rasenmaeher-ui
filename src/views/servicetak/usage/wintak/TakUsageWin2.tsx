import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageCard } from "../helpers/ServiceTakUsageCard";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import Wintak from "../../../../assets/icons/wintak.png";

import pic9 from "../../../../assets/takguides/wintak/Kuva39.png";
import pic10 from "../../../../assets/takguides/wintak/Kuva40.png";
import pic11 from "../../../../assets/takguides/wintak/Kuva41.png";
import pic12 from "../../../../assets/takguides/wintak/Kuva42.png";
import pic13 from "../../../../assets/takguides/wintak/Kuva43.png";

export function TakUsageWin2() {
  return (
    <div className="pb-32">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="Käyttö joukossa: WinTAK"
        backUrl="/app/services/tak/Usage"
      >
        <StatusBar
          title="Hallitse Recon Feediä (2/4)"
          progressMax={4}
          progressNow={2}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="WinTAK"
              image={Wintak}
              details={
                <>
                  Käyttö joukossa WinTAK - vaihe 2:{" "}
                  <strong>Hallitse Recon Feediä</strong>
                  <br />
                </>
              }
            >
              <ServiceTakUsageCard />
            </ServiceInfoCard>
            <UnfoldableCard
              title="1. Luo Recon Feed"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      WinTAKin työkalurivillä <strong>Home Tab</strong>issä on
                      Data Sync-työkalut.
                    </>
                  ),
                  imageSrc: pic9,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      Tämä ohje olettaa, että toimit WinTAKilla{" "}
                      <strong>komentopaikkana</strong> ja siksi luot tarvittavat
                      feedit. <br /> <br />
                      Paina <strong>New Feed</strong>.
                    </>
                  ),
                  imageSrc: pic10,
                  imageClasses: "m-3 w-[400px]",
                  note: (
                    <>
                      Huom. Komentopaikalla <em>yksi käyttäjä</em> luo
                      tarvittavat feedit, ja muut ottavat ne käyttöön!
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Luo uusi <strong>Feed</strong> seuraavilla tiedoilla:
                      <ul>
                        <li>
                          <strong>Name</strong>: Recon
                        </li>
                        <li>
                          <strong>Group</strong>: Public
                        </li>
                        <li>
                          <strong>Default Role</strong>: Read Only
                        </li>
                      </ul>
                    </>
                  ),
                  imageSrc: pic11,
                  imageClasses: "m-3 w-[400px]",
                  note: (
                    <>
                      <em>
                        (HUOMAA: Groupin oletusasetus pitää vaihtaa asetukseen{" "}
                        <strong>Read Only</strong>.)
                      </em>
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Uusi feed on luotu. Feedin luojalla se näkyy heti
                      tilattuna Data Sync-valikossa.
                    </>
                  ),
                  imageSrc: pic12,
                  imageClasses: "m-3 w-[400px]",
                },
              ]}
            />

            <UnfoldableCard
              title="2. Muut KNTOP-käyttäjät tilaavat feedin"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Muut komentopaikan (WinTAKin) käyttäjät tilaavat itselleen
                      luodut feedit, perusmallissa <strong>RECON</strong>
                      -feedin.
                    </>
                  ),
                  imageSrc: pic12,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      Avautuvasta näkymästä valitse{" "}
                      <strong>Download and stay synced.</strong>
                    </>
                  ),
                  imageSrc: pic13,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>Feed näkyy tällöin käyttäjän Data Sync-valikossa. </>
                  ),
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage/win1"
          forwardUrl="/app/services/tak/usage/win3"
        />
      </Layout>
    </div>
  );
}
