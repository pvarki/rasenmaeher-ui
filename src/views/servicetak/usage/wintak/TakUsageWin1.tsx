import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageCard } from "../helpers/ServiceTakUsageCard";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import Wintak from "../../../../assets/icons/wintak.png";
import pic1 from "../../../../assets/takguides/wintak/Kuva32.png";
import pic2 from "../../../../assets/takguides/wintak/Kuva33.png";
import pic3 from "../../../../assets/takguides/wintak/Kuva34.png";
import pic4 from "../../../../assets/takguides/wintak/Kuva35.png";
import pic5 from "../../../../assets/takguides/wintak/Kuva36.png";
import pic6 from "../../../../assets/takguides/wintak/Kuva37.png";
import pic7 from "../../../../assets/takguides/wintak/Kuva38.png";

export function TakUsageWin1() {
  return (
    <div className="pb-32">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="Käyttö joukossa: WinTAK"
        backUrl="/app/services/tak/usage"
      >
        <StatusBar
          title="Liikuta karttaa ja merkkaa sijaintisi (1/4)"
          progressMax={4}
          progressNow={1}
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
              title="1. Liikuta ja tarkastele karttaa"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Jos PC:ssä ei ole GPS:ää, niin WinTAK määrittää
                      alkupisteeksi 0-koordinatit.
                    </>
                  ),
                  imageSrc: pic1,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      Liikuta <strong>hiirellä</strong> karttapohjaa kohti
                      Suomea. Voit zoomata karttaa hiiren rullalla, plus- ja
                      miinusnäppäimillä ja ruudun painikkeilla.
                    </>
                  ),
                  imageSrc: pic2,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      Klikkaa <strong>kompassikuvaketta</strong> (N)
                      suoristaaksesi kartan.
                    </>
                  ),
                  imageSrc: pic3,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      Muut joukkosi käyttäjät näkyvät erivärisinä kuvakkeina.
                      Kuvakkeiden väri tulee jokaisen itselleen asettamasta
                      väristä.
                    </>
                  ),
                  imageSrc: pic4,
                  imageClasses: "m-3 w-[400px]",
                },
              ]}
            />
            <UnfoldableCard
              title="2. Määritä sijaintisi tarvittaessa käsin"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Määritä oma sijainti manuaalisesti, jos laitteellasi ei
                      ole GPS:ää. Tämä tapahtuu painamalla oikean alakulman
                      punaisen väristä tietokenttää.
                    </>
                  ),
                  imageSrc: pic6,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>Etsi karttapohjalta oma sijainti ja klikkaa sitä.</>
                  ),
                  imageSrc: pic5,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      {" "}
                      Tällöin oma merkkisi ilmestyy kartalle. Se tulee näkyviin
                      myös muille käyttäjille.{" "}
                    </>
                  ),
                },
              ]}
            />
            <UnfoldableCard
              title="3. Muuta käsin määritettyä sijaintiasi"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Kun haluat muuttaa omaa sijaintiasi, klikkaa oikealla omaa
                      merkkiäsi <strong>(nuolisymboli)</strong>
                    </>
                  ),
                },
                {
                  description: (
                    <>Tämän jälkeen voit valita uuden sijainnin klikkaamalla.</>
                  ),
                  imageSrc: pic7,
                  imageClasses: "m-3 w-[400px]",
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage"
          forwardUrl="/app/services/tak/usage/win2"
        />
      </Layout>
    </div>
  );
}
