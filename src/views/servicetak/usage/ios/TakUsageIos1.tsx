import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";


export function TakUsageIos1() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="iTAK pikaohje" backUrl="/app/services/tak/usage">
    <StatusBar title="Asenna sovellus" progressMax={4} progressNow={1} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
      
      <GuideSection
          number="1."
          description='Lataa sovellus <strong>iTAK</strong> App Storesta ja asenna se.
          
          <a href="https://apps.apple.com/us/app/itak/id1561656396" style="color: SteelBlue; text-decoration: underline;">iTAK - Paina tästä ladataksesi App Storesta</a>
          <br></br>'
    

          description3="Olet nyt ladannut tarvittavan sovelluksen."
        />
        <GuideSection
          number="2."
          description="Lataa viestiperusteesi valmiiksi Palvelut/TAK-sivulta. Tallenna .zip-tiedosto."
          note="HUOMAA! Tiedostoa ei saa purkaa!"
        />
      
    </CardsContainer>
    </div>
      <NavigateButtons 
        backUrl="/app/services/tak/usage" 
        forwardUrl="/app/services/tak/usage/ios2" 
      />

    
    </Layout>
    </div>
  );
}
