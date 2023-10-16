import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../../ServiceTakUsageContents";
import { UnfoldableCard } from "../../../../components/ServicesView/UnfoldableCard";

import pic9 from "../../../../assets/takguides/wintak/Kuva9.png";
import pic10 from "../../../../assets/takguides/wintak/Kuva10.png";
import pic11 from "../../../../assets/takguides/wintak/Kuva11.png";
import pic12 from "../../../../assets/takguides/wintak/Kuva12.png";
import pic13 from "../../../../assets/takguides/wintak/Kuva13.png";
import pic14 from "../../../../assets/takguides/wintak/Kuva13-1.png";




export function TakUsageWin2() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="WinTAK pikaohje" backUrl="/app/services/tak/Usage">
      <CardsContainer>
        <UnfoldableCard title="Ohjeen kokoonpano" styling='bg-background' initialOpen={false}>
          <ServiceTakUsageContents />
        </UnfoldableCard>
      </CardsContainer>
    <StatusBar title="Lataa ja asenna WinTAK" progressMax={4} progressNow={2} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
      
      <GuideSection
          number="1."
          description='Ladataan <strong>WinTAK</strong>-sovellus.
          <br></br>
          WinTAK-sovelluksen käytettävä versio <strong> Puolustusvoimien osoittamasta paikasta</strong>.
          <br></br>
          <a href="https://arkipublic.blob.core.windows.net/ohjelmistot/WinTAK-CIV-latest.zip" style="color: SteelBlue; text-decoration: underline;">WinTAK - Lataa tästä WinTAK Puolustusvoimien jakelupisteestä.</a>
          <br></br>'
          note='Tärkeää! Lataa Windows-sovelluksia vain ohjeistetusta paikasta.'
          description2='<small><em><br></br>WinTAK-sovelluksen toimittaja jakelee sovellusta tak.gov -sivustolta, mikä edellyttää kirjautumista. </em></small>'
        />
        <GuideSection
          number="2."
          description='Etsi latamaasi sovellus latauskansiosta.'

          imageSrc={pic9}
          imageClasses="mx-auto pr-5 w-[290px] p-4"

          description2='Avaa sovellus. Aukeaa asennusohjelma.'
      
        />
        <GuideSection
          number="3."
          description='Asenna WinTAK käyttäen Setup Wizardia.'

          imageSrc={pic10}
          imageClasses="mx-auto pr-5 w-[300px] p-4"

          description2='Paina <strong>Next</strong>. Valitse sovelluksen asennuskansio.'

          image2Src={pic11}
          image2Classes="mx-auto pr-5 w-[300px] p-4"

          description3='Vaihda halutessasi asennuskansiota <strong>Browse</strong>-napin kautta. Paina <strong>Next</strong>.'

        />
        <GuideSection
          number="4."
          description='Valitse Setup Wizardissa asennettavat lisäosat.
          <br></br>
          Valitse ainakin seuraavat lisäosat:
          <ul>
          <li>- <strong>Data Sync</strong> </li>
          </ul>'

          imageSrc={pic12}
          imageClasses="mx-auto pr-5 w-[300px] p-4"

          description2='
          Paina <strong>Next</strong>. Wizard on valmis aloittamaan asennuksen, paina <strong>Install</strong>. '

          image2Src={pic13}
          image2Classes="mx-auto pr-5 w-[300px] p-4"
          description3='Paina <strong>Next</strong>.'

          image3Src={pic14}
          image3Classes="mx-auto pr-5 w-[300px] p-4"

          description4='Sovellus on nyt asennettu.
          <br></br>
          Seuraavaksi avataan asennettu sovellus.'
        />
      
    </CardsContainer>
    </div>
      <NavigateButtons 
        backUrl="/app/services/tak/Usage/win1" 
        forwardUrl="/app/services/tak/Usage/win3" 
      />

    
    </Layout>
    </div>
  );
}

