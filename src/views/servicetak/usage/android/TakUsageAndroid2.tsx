import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { GuideSection } from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../helpers/ServiceTakUsageContents";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";

import pic1 from "../../../../assets/takguides/atak/atakdatasync1.png";
import pic2 from "../../../../assets/takguides/atak/atakdatasync2.png";
import pic3 from "../../../../assets/takguides/atak/atakdatasync3.png";
import pic4 from "../../../../assets/takguides/atak/atakdatasync4.png";
import pic5 from "../../../../assets/takguides/atak/atakdatasync5.png";

export function TakUsageAndroid2() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="ATAK pikaohje"
        backUrl="/app/services/tak/usage"
      >
        <CardsContainer>
          <UnfoldableCard
            title="Ohjeen kokoonpano"
            styling="bg-background"
            initialOpen={false}
          >
            <ServiceTakUsageContents />
          </UnfoldableCard>
        </CardsContainer>
        <StatusBar
          title="Ota käyttöön Recon Feed"
          progressMax={4}
          progressNow={2}
        />
        <div className="flex justify-center items-center w-full">
          <CardsContainer>
            <GuideSection
              number="1."
              imageClasses="m-3 w-[300px]"
              description={<span>Avaa kolme viivaa-valikko (hampurilaisvalikko).</span>}
              imageSrc={pic1}
              description2={<span>Etsi valikosta <strong>Data Sync</strong> ja valitse se.</span>}
            />
            <GuideSection
              number="2."
              imageSrc={pic2}
              imageClasses="m-3 w-[300px]"
              description={<span>Avautuu näkymä, jossa palvelimelta saatavilla olevat syötteet (feed).</span>}
              description2={<span>Valitse ohjeistettu syöte (kuvassa <strong>RECON</strong>).</span>}
              image2Src={pic3}
              image2Classes="m-3 w-[300px]"
              description3={<span>Valitse aukeavasta ikkunasta <strong> Download & Sync</strong>.</span>}
            />
            <GuideSection
              number="3."
              description={
                <>
                  Varmistetaan, että Auto Download on päällä. Palaa hampurilaisvalikon päänäkymään (kolme viivaa oikealla ylhäällä).
                  <br />
                  <br />
                  Etsi <strong>Settings</strong>.
                </>
              }
              imageSrc={pic4}
              imageClasses="m-3 w-[300px]"
              description2={<span>Varmista avautuvasta valikosta, että <strong>Auto Download Updates</strong> on päällä.</span>}
              image2Src={pic5}
              image2Classes="m-3 w-[300px]"
              description4={
                <>
                  Nyt käytössäsi on käsketyt syötteet (feedit). <br />
                  <span>Perusmallissa komentopaikka (HQ) tuottaa feedien sisällön joukon ilmoitusten perusteella. </span>
                  <br />
                  <ul>
                    <small>
                      HUOMAA: Tämä ohje kuvaa perustoimintamallin. Siinä RECON-feed sisältää tiedustelutilannekuvan, joka muodostuu näin:
                      <br />
                      <li>Lähetät ilmoituksesi komentopaikalle (HQ)</li>
                      <li>HQ tulkitsee, varmistaa ja lisää RECON-feediin</li>
                      <li> Lopputulos: Havainto tiedustelutilannekuvassa.</li>
                    </small>
                  </ul>
                </>
              }
            />
          </CardsContainer>
        </div>
        <NavigateButtons
          backUrl="/app/services/tak/usage/android1"
          forwardUrl="/app/services/tak/usage/android3"
        />
      </Layout>
    </div>
  );
}



