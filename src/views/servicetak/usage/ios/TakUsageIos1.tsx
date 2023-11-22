import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic26 from "../../../../assets/takguides/itak/itakusage1.png";
import pic27 from "../../../../assets/takguides/itak/itakusage2.png";
import pic271 from "../../../../assets/takguides/itak/itakusage31.png";
import pic28 from "../../../../assets/takguides/itak/itakusage4.png";
import pic29 from "../../../../assets/takguides/itak/itakusage5.png";
import pic30 from "../../../../assets/takguides/itak/itakusage6.png";

export function TakUsageIos1() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="iTAK käyttö joukossa"
        backUrl="/app/services/tak/usage"
      >
        <StatusBar title="Lähetä merkkejä" progressMax={1} progressNow={1} />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="iTAK"
              image={ITAK}
              details={
                <>
                  iTAK käyttö joukossa :
                  <strong>Tee ja lähetä havaintoja</strong>
                  <br />
                </>
              }
            />
            <UnfoldableCard
              title="1. Luo merkki"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: <>Voit luoda havaintomerkin seuraavasti.</>,
                },
                {
                  description: (
                    <>
                      Paina kohtaa, johon haluat merkin, kartalla pitkään.
                      Syntyy merkki.
                    </>
                  ),
                  imageSrc: pic26,
                  imageClasses: "m-3 w-[400px]",
                },
              ]}
            />
            <UnfoldableCard
              title="2. Täydennä tiedot"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Täydennä luomaasi merkkiin haluamaasi tietoa: mahdollisia{" "}
                      <strong>liitteitä</strong> ja vähintään tietoa.
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Painamalla <strong>Attachments</strong> voit lisätä mm.
                      kuvia.
                    </>
                  ),
                  imageSrc: pic27,
                  imageClasses: "m-3 w-[300px]",
                },
                {
                  description: (
                    <>
                      Painamalla <strong>Remarks</strong> voit lisätä merkinnät.
                    </>
                  ),
                  imageSrc: pic271,
                  imageClasses: "m-3 w-[300px]",
                  note: <>Tärkeää! Muista lisätä kuvaus merkkiin.</>,
                },
              ]}
            />

            <UnfoldableCard
              title="3. Lähetä merkki komentopaikalle"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Lähetä merkki komentopaikalla painamalla sen symbolia
                      kartalla ensin pitkään.
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Aukeavassa näkymässä paina <strong>Share.</strong>
                    </>
                  ),
                  imageSrc: pic28,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      Valitse <strong>Share to Contacts.</strong>
                    </>
                  ),
                  imageSrc: pic29,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      Valitse Contacts-ruudusta (huom. kuvassa tyhjänä) sinulle
                      käsketty <strong>komentopaikan tunnus</strong>, esim.
                      KARHU1. Lähetä
                    </>
                  ),
                  imageSrc: pic30,
                  imageClasses: "m-3 w-[400px]",
                  note: (
                    <>
                      Muista, että merkki ei ole koskaan riittävä ilmoitus.
                      Lähetä lisäksi aina sanoma käsketyllä menetelmällä
                      havainnostasi.
                    </>
                  ),
                },
              ]}
            />
            <UnfoldableCard
              title="4. Vastaanota merkkejä Recon Feedistä"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Jos olet käyttöönotto-ohjeen sivun 5 mukaisesti ottanut
                      käyttöön Data Syncillä <strong>Recon Feedin</strong>,
                      päivittyy sen sisältö automaattisesti kartallesi.
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Tutki Recon Feedistä saamaasi tilannekuvaan kuuluvia
                      merkkejä painamalla niitä.
                    </>
                  ),
                  imageSrc: pic28,
                  imageClasses: "m-3 w-[400px]",
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage"
          forwardUrl="/app/services/tak/usage"
          alterForward="Valmis! Palaa tästä."
        />
      </Layout>
    </div>
  );
}
