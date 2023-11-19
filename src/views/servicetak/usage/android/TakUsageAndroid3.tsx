import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { ServiceTakUsageCard } from "../helpers/ServiceTakUsageCard";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../helpers/ServiceTakUsageContents";
import ATAK from "../../../../assets/icons/tak-logo.png";
import pic1 from "../../../../assets/takguides/atak/atakusage10.png";
import pic2 from "../../../../assets/takguides/atak/atakusage11.png";
import pic3 from "../../../../assets/takguides/atak/atakusage12.png";
import pic4 from "../../../../assets/takguides/atak/atakusage13.png";
import pic5 from "../../../../assets/takguides/atak/atakusage14.png";
import pic6 from "../../../../assets/takguides/atak/atakusage15.png";
import pic7 from "../../../../assets/takguides/atak/atakusage16.png";

export function TakUsageAndroid3() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="Käyttö joukossa: ATAK"
        backUrl="/app/services/tak/Usage"
      >
        <StatusBar title="Quick Pic (3/3)" progressMax={3} progressNow={2} />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <>
                  Käyttö joukossa ATAK - vaihe 3:{" "}
                  <strong>Tee havaintoja: Quick Pic</strong>
                  <br />
                </>
              }
            >
              <ServiceTakUsageCard />
            </ServiceInfoCard>
            <UnfoldableCard
              title="1. ATAKin havaintotyökalut"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      ATAKissa havaintoja voi tehdä kahdella eri tavalla:{" "}
                      <strong>Point Dropper</strong> ja{" "}
                      <strong>Quick Pic</strong>
                      . <br /> <br /> <strong>Point Dropperilla</strong>{" "}
                      merkitään havainto, johon voi liittää liitteitä, ml. kuvia
                      laitteen galleriasta. <strong>Quick Picillä</strong>{" "}
                      otetaan kuva suoraan TAKiin ja täydennetään tietoja.
                      <br />
                      <br />
                      Tarkastellaan ensin Point Dropperia.
                    </>
                  ),
                },
              ]}
            />
            <UnfoldableCard
              title="2. Tee havaintoja Quick Picillä"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      a. Avaa kolme viivaa-valikko (hampurilaisvalikko), valitse{" "}
                      <strong>Quick Pic</strong> (kameran kuvake).
                    </>
                  ),
                  imageSrc: pic1,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: <>b. Kamera avautuu. Ota kuva ja hyväksy se.</>,
                  imageSrc: pic2,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: <>c. Olet nyt tehnyt Quick Pic-havainnon.</>,
                },
              ]}
            />
            <UnfoldableCard
              title="3. Muokkaa Quick Pic-havaintoa"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      a, Paina kartalle tullutta havaintoa, jolloin se muuttuu
                      aktiiviseksi ja ympyrävalikko aukeaa.
                    </>
                  ),
                  imageSrc: pic3,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <>
                      Tällöin se muuttuu aktiiviseksi, ja ympyrävalikko aukeaa.
                    </>
                  ),
                  imageSrc: pic4,
                  imageClasses: "m-3 w-[500px]",
                },

                {
                  description: (
                    <>
                      <strong>Muokkaa</strong> merkin tietoja painamalla
                      ympyrävalikossa roskakorin oikealla puolella olevaa{" "}
                      <strong>edit</strong>-kuvaketta.
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Kuvan yläpuolella oikealla on{" "}
                      <strong>Edit caption</strong>
                      -symboli <strong>(kynä)</strong>. Paina sitä syöttääksesi
                      tekstiä.
                    </>
                  ),
                  imageSrc: pic5,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: <>Syötä tekstiä.</>,
                },
                {
                  description: (
                    <>
                      Kun olet täydentänyt tiedot, lähetä se oikean alakulman{" "}
                      <strong>Send</strong>
                      -napilla HQ:lle (Send oikeassa alakulmassa).
                    </>
                  ),
                  imageSrc: pic6,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <>
                      Valitse aukeavasta valikosta <strong>Contact</strong>.
                    </>
                  ),
                  imageSrc: pic7,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <>
                      Valitse vastaanottajaksi <strong>HQ</strong> ja lähetä.
                      <br />
                      <br />
                      Hienoa! Tunnet nyt ATAK-sovelluksen käytön
                      perustoimintamallin mukaisesti.
                    </>
                  ),
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage/android2"
          forwardUrl="/app/services/tak/usage"
          alterForward="Valmis! Palaa takaisin."
        />
      </Layout>
    </div>
  );
}
