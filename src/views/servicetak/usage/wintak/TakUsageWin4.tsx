import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageCard } from "../helpers/ServiceTakUsageCard";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import Wintak from "../../../../assets/icons/wintak.png";

import pic61 from "../../../../assets/takguides/wintak/Kuva61.png";
import pic62 from "../../../../assets/takguides/wintak/Kuva62.png";
import pic63 from "../../../../assets/takguides/wintak/Kuva63.png";

export function TakUsageWin4() {
  return (
    <div className="pb-32">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="Käyttö joukossa: WinTAK"
        backUrl="/app/services/tak/usage"
      >
        <StatusBar title="Tietohuolto (4/4)" progressMax={4} progressNow={4} />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="WinTAK"
              image={Wintak}
              details={
                <>
                  Käyttö joukossa WinTAK - vaihe 4: <strong>Tietohuolto</strong>
                  <br />
                </>
              }
            >
              <ServiceTakUsageCard />
            </ServiceInfoCard>
            <UnfoldableCard
              title="1. Liikuta ja tarkastele karttaa"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Palauta WinTAK tehdasasetuksille seuraavasti.
                      <br />
                      <br />
                      Paina kolme päällekkäistä viivaa -symbolia
                      (hampurilaisvalikko) vasemmassa yläkulmassa.
                    </>
                  ),
                  imageSrc: pic61,
                  imageClasses: "m-3 w-[200px]",
                },
                {
                  description: (
                    <>
                      Paina <strong>Roskakori</strong>-kuvaketta (
                      <strong>Clear Content)</strong>.
                    </>
                  ),
                  imageSrc: pic62,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      <>Tee Clear Content-valikossa kuvan mukaiset valinnat:</>
                    </>
                  ),
                  imageSrc: pic63,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      <strong>Clear Now</strong>-nappi ilmestyy, kun{" "}
                      <strong>OFF-</strong>kytkimet on vedetty Locked-asentoon.
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Paina <strong>Clear Now!</strong>.
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Muista poistaa laitteelta käsin viestiperustepakettisi{" "}
                      <em>Nimi.zip</em>.
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Tietohuolto on nyt suoritettu. Muista suorittaa
                      tietohuolto aina operaation päätteeksi.
                    </>
                  ),
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage/win3"
          forwardUrl="/app/services/tak/usage"
          alterForward="Valmis! Palaa takaisin."
        />
      </Layout>
    </div>
  );
}
