import { Layout } from "../../../components/Layout"
import wait from "../../../assets/takguides/atak/wait.png"
import { GuideSection} from "../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../components/CardsContainer";
import { NavigateButtons } from "../../../components/NavigateButtons";


export function TakQuickstartAndroid1() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} navbarTitle="TAK-käyttöönotto Android" backUrl="/app/services/tak/quickstart">
    <CardsContainer>
      <GuideSection
          number="1."
          description="Lataa ATAK-CIV sovellus Play Storesta ja asenna se."
          imageSrc=""/>
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
    <NavigateButtons />

    
    </Layout>
    </div>
  );
}

