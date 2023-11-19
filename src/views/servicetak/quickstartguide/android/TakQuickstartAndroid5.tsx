import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import ATAK from "../../../../assets/icons/tak-logo.png";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";

import atakds1 from "../../../../assets/takguides/atak/atakdatasync111.jpg";
import atakds2 from "../../../../assets/takguides/atak/atakdatasync12.jpg";
import atakds3 from "../../../../assets/takguides/atak/atakdatasync13.jpg";
import atakds4 from "../../../../assets/takguides/atak/atakdatasync14.jpg";
import pic1 from "../../../../assets/takguides/atak/atakdatasync1.png";
import pic3 from "../../../../assets/takguides/atak/atakdatasync3.png";
import pic2 from "../../../../assets/takguides/atak/datasyncatak99.png";
import pic4 from "../../../../assets/takguides/atak/atakdatasync4.png";
import pic5 from "../../../../assets/takguides/atak/atakdatasync5.png";

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
          title="Ota käyttöön Data Sync (5/5)"
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
                  <strong>Ota käyttöön Data Sync</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee. Tässä vaiheessa ATAK-sovelluksen tulee olla auki.
                </>
              }
            />
            <UnfoldableCard
              title="1. Avaa Data Sync-valikko"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      a. Päänäkymässä, avaa <strong>hampurilaisvalikko</strong> ja etsi <strong>Plugins.</strong>
                    </>
                  ),
                  imageSrc: atakds1,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      b. Plugins-valikko avautuu. Paina <em>Data Syncin</em> riviltä kohtaa "Status: <strong>Not loaded</strong>."
                    </>
                  ),
                  imageSrc: atakds2,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      c. Sovellus kysyy, ladataanko <em>Data Sync</em> käyttöön. Paina <strong>Load.</strong>
                    </>
                  ),
                  imageSrc: atakds3,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      d. Data Syncin status muuttuu <strong>Loaded</strong>-tilaan.
                    </>
                  ),
                  imageSrc: atakds4,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      Valmis! Voit poistua valikosta.
                    </>
                  )
                },
              ]}
            />
            <UnfoldableCard
            title="2. Ota käyttöön Recon Feed"
            styling="bg-backgroundLight"
            steps={[
              {
                  description: (
                    <>
                      <span>Päänäkymässä, avaa jälleen kolme viivaa-valikko (hampurilaisvalikko).</span>
                    </>
                  ),
                  imageSrc: pic1,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      <span>
                  Etsi valikosta <strong>Data Sync</strong> ja valitse se.
                </span>
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      <span>
                  Avaamalla Data Sync-valikon, avautuu näkymä, jossa palvelimelta saatavilla olevat syötteet
                  (feedit).
                </span>
                    </>
                  )
                },
                {
                  description: (
                    <>
                      <span>
                  Valitse ohjeistettu syöte (kuvassa <strong>RECON</strong>).
                </span>
                    </>
                  ),
                  imageSrc: pic2,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      <span>
                  Valitse aukeavasta ikkunasta <strong> Download & Sync</strong>.
                </span>
                    </>
                  ),
                  imageSrc: pic3,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      <span>
                  <strong>Recon Feed</strong> on nyt käytössä. Saat siitä merkkejä kartallesi komentopaikalta.
                </span>
                    </>
                  ),
                  note: (<>Tarkemmat ohjeet feedin käytöstä <strong>Käyttö joukossa</strong>-ohjeissa.</>)
                }

            ]}
            />
            <UnfoldableCard
            title="3. Aseta Auto Download päälle"
            styling="bg-backgroundLight"
            steps={[
              {
                description: (
                  <>
                    Varmistetaan, että Auto Download on päällä. Palaa
                  hampurilaisvalikon päänäkymään (kolme viivaa oikealla
                  ylhäällä).
                  <br />
                  <br />
                  Etsi <strong>Settings</strong>.
                  </>
                ),
                imageSrc: pic4,
                imageClasses: "m-3 w-[400px]",
              },
              {
                description: (
                  <>
                 Etsi asetus <strong>Auto Download Updates</strong> ja varmistu, että se on päällä.
                  </>
                ),
                imageSrc: pic5,
                imageClasses: "m-3 w-[400px]",
              },
              {
                description: (
                  <>
                 Asetuksesta seuraa, että ATAK lataa automaattisesti päivitykset tilaamiisi feedeihin.
                  </>
                ),

              },




            ]}

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
