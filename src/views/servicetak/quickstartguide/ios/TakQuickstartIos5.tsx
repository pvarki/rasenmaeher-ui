import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic26 from "../../../../assets/takguides/itak/itakquickstart26.png";
import pic27 from "../../../../assets/takguides/itak/itakquickstart27.png";
import pic271 from "../../../../assets/takguides/itak/itakquickstart27-1.jpeg";
import pic28 from "../../../../assets/takguides/itak/itakquickstart28.png";

export function TakQuickstartIos5() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="iTAK käyttöönotto"
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
              title="iTAK"
              image={ITAK}
              details={
                <>
                  iTAK käyttöönotto - vaihe 5:{" "}
                  <strong>Ota käyttöön Data Sync</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee. Tässä vaiheessa iTAK-sovelluksen tulee olla auki.
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
                        Päänäkymässä, avaa työkaluvalikosta (alareunassa) <strong>Data Sync</strong> -valikko. Vieritä oikealle löytääksesi valikon.
                    </>
                    ),
                    imageSrc: pic26,
                    imageClasses: "m-3 w-[300px]",
                },
                ]}
            />
            <UnfoldableCard
                title="2. Tilaa feed"
                styling="bg-backgroundLight"
                steps={[
                {
                    description: (
                    <>
                        Data Sync-valikossa paina <strong>Subscribe</strong> -painiketta.
                    </>
                    ),
                    imageSrc: pic271,
                    imageClasses: "m-3 w-[300px]",
                },
                {
                    description: (
                    <>
                        Valitse saatavilla oleva palvelin (Rasenmaeher-palvelun niminen tulee näkyviin.)
                    </>
                    ),
                    imageSrc: pic28,
                    imageClasses: "m-3 w-[300px]",
                },
                {
                    description: (
                    <>
                        Avautuvassa näkymässä, valitse <strong>RECON</strong>-feed. 
                    </>
                    ),
                    note: (<>Huom. Kuva puuttuu toistaiseksi.</>)
                },
                ]}
            />
            <UnfoldableCard
                title="3. Feed käytössäsi"
                styling="bg-backgroundLight"
                steps={[
                {
                    description: (
                    <>
                        Tämän jälkeen käytössäsi on joukkosi komentopaikan luoma <strong>Recon Feed</strong>.
                    </>
                    ),
                    imageSrc: pic27,
                    imageClasses: "m-3 w-[300px]",
                },
                {
                    description: (
                    <>
                       Feed näkyy Data Sync-valikossasi. Feedin käyttöohjeet <strong>Käyttö joukossa-ohjeissa.</strong>
                    </>
                    ),
                },
                ]}
            />

            </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/ios4"
          forwardUrl="/app/services/tak/quickstart"
          alterForward="Valmis! Palaa tästä."
        />
      </Layout>
    </div>
  );
}
