import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageCard } from "../helpers/ServiceTakUsageCard";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import ATAK from "../../../../assets/icons/tak-logo.png";
import pic1 from "../../../../assets/takguides/atak/atakusage1.png";
import pic3 from "../../../../assets/takguides/atak/atakusage3.png";
import pic31 from "../../../../assets/takguides/atak/atakusage3-1.png";
import pic4 from "../../../../assets/takguides/atak/atakusage4.png";
import pic5 from "../../../../assets/takguides/atak/atakusage5.png";
import pic6 from "../../../../assets/takguides/atak/atakusage6.png";
import pic7 from "../../../../assets/takguides/atak/atakusage7.png";
import pic8 from "../../../../assets/takguides/atak/atakusage8.png";
import pic9 from "../../../../assets/takguides/atak/atakusage9.png";

export function TakUsageAndroid2() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="Käyttö joukossa: ATAK"
        backUrl="/app/services/tak/Usage"
      >
        <StatusBar
          title="Point Dropper (2/3)"
          progressMax={3}
          progressNow={2}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <>
                  Käyttö joukossa ATAK - vaihe 2:{" "}
                  <strong>Tee havaintoja merkein: Point Dropper</strong>
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
              title="2. Tee havaintoja Point Dropperilla"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      a. Avaa kolme viivaa-valikko (hampurilaisvalikko), valitse{" "}
                      <strong>Point Dropper</strong>.
                      <br />
                      <br />
                      Tai paina haluamaasi kohtaa kartalla pitkään ja valitse
                      Point Dropperin symboli avautuvasta ympyrävalikosta.
                    </>
                  ),
                  imageSrc: pic1,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <>
                      b. Valitse lisättävän merkin tyyppi: havainto, eli
                      <strong>keltainen</strong> merkki.
                    </>
                  ),
                  imageSrc: pic3,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <>
                      c. Jos valitsit Point Dropperin hampurilaisvalikosta,
                      täppää karttaa valitaksesi havainnolle sijainnin.
                      <br />
                      <br />
                      Havaintomerkki ilmestyy kartalle.
                    </>
                  ),
                  imageSrc: pic31,
                  imageClasses: "m-3 w-[500px]",
                },
              ]}
            />
            <UnfoldableCard
              title="3. Point Dropper: Muokkaa"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      a. Jos aiot muokata heti merkin lisäämisen jälkeen, poista
                      ensinvalinta merkistä täppäämällä karttaa.{" "}
                      <strong>Paina</strong> merkkiä, jotta ympyrävalikko
                      aukeaa.
                    </>
                  ),
                  imageSrc: pic4,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <>
                      b. Muokkaa merkin tietoja painamalla ympyrävalikossa
                      roskakorin oikealla puolella olevaa <strong>edit</strong>
                      -kuvaketta.
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      c. Aukeaa Havainnon tiedot-näkymä. Kelaa sen pohjalle.
                      Alimmaisena on kenttä <strong>Remarks</strong>, jonne voi
                      syöttää tekstiä painamalla <strong>kynäsymbolia</strong>.
                    </>
                  ),
                  imageSrc: pic5,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: <>d. Syötä tekstiä.</>,
                  imageSrc: pic6,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <>
                      e. Samassa Havainnon tiedot -valikossa painamalla{" "}
                      <strong>klemmari</strong>-kuvaketta näet havainnon
                      liitteet.
                    </>
                  ),
                  imageSrc: pic7,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <>
                      f. Lisää uusia liitteitä painamalla <strong>+</strong>{" "}
                      -kuvaketta valikon ylärivistä:
                    </>
                  ),
                  imageSrc: pic8,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <>
                      g. Kun olet täydentänyt havainnon tiedot, lähetä se{" "}
                      <strong>Send</strong>-napilla HQ:lle:
                    </>
                  ),
                  imageSrc: pic9,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <>
                      Tämän ohjeen opastaman perusmallin mukaisesti lähettämällä
                      HQ:lle, HQ-käyttäjät (komentopaikalla) vastaanottavat
                      merkin.
                      <br />
                      Tämän jälkeen komentopaikka{" "}
                      <strong>vahvistaa ja tulkitsee</strong> ilmoituksen, ja
                      lisää sen <strong>RECON-feediin</strong>. Havainto tulee
                      näin osaksi joukon tiedustelutilannekuvaa.
                      <br />
                    </>
                  ),
                  note: (
                    <>
                      Muista, että merkki ei ole koskaan riittävä ilmoitus.
                      Varmenna lähettämällä käsketyllä tavalla sanoma.
                    </>
                  ),
                },
              ]}
            />

            <NavigateButtons
              backUrl="/app/services/tak/usage/android1"
              forwardUrl="/app/services/tak/usage/android3"
            />
          </div>
        </CardsContainer>
      </Layout>
    </div>
  );
}
