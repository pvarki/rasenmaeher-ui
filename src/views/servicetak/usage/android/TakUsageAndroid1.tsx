import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import wait from "../../../../assets/takguides/atak/wait.png"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { UnfoldableCard } from "../../../../components/ServicesView/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageCard } from "../../ServiceTakUsageCard";

export function TakUsageAndroid1() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="Käyttö joukossa - ATAK" backUrl="/app/services/tak/Usage">
    <CardsContainer>
      <UnfoldableCard title="Ohjeen kokoonpano" styling='bg-background' initialOpen={true}>
        <ServiceInfoCard
          title = 'Ohjeen osat'
          details ='<ul>
          <li>Liikuta karttaa ja näe omat</li>
          <li>Ota käyttöön Data Sync</li>
          <li>Tee havaintoja</li>
          <li>Vastaanota Recon Feed</li>'
          >
          <ServiceTakUsageCard />
        </ServiceInfoCard>
      </UnfoldableCard>
    </CardsContainer>
    <StatusBar title="Ota käyttöön Data Sync" progressMax={4} progressNow={1} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
    
      <GuideSection 
      description=''

      />
      <GuideSection
          number="1."
          description='Lataa ATAK-CIV sovellus Play Storesta ja asenna se.
          
          <a href="https://play.google.com/store/apps/details?id=com.atakmap.app.civ" style="color: SteelBlue; text-decoration: underline;">ATAK-CIV - Paina tästä ladataksesi Google Playsta</a>
          <br></br>'
      
          description2='Tämän jälkeen lataa ATAK Data Sync-plugin, ja asenna se.
         
          <a href="https://play.google.com/store/apps/details?id=com.atakmap.android.datasync.plugin" style="color: SteelBlue; text-decoration: underline;">ATAK Datasync Plugin - Paina tästä ladataksesi Google Playsta</a>
          <br></br>'

          description3="Olet nyt ladannut tarvittavat sovellukset."
        />
        <GuideSection
          number="2."
          description="Lataa viestiperusteesi Palvelut/TAK-sivulta. Tallenna .zip-tiedosto."
          note="HUOMAA! Tiedostoa ei saa purkaa!"
        />
        <GuideSection
          number="3."
          description="Avaa sovellus. Anna kaikki oikeudet, mitä applikaatio pyytää."
          imageSrc={wait}         
          imageClasses='m-3 w-[200px]'
          description2='<em>Jos applikaatio antaa virheilmoituksen, valitse Wait. </em>'     
        />
      
    </CardsContainer>
    </div>
      <NavigateButtons 
        backUrl="/app/services/tak/Usage" 
        forwardUrl="/app/services/tak/Usage/android2" 
      />

    
    </Layout>
    </div>
  );
}

