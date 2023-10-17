import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../helpers/ServiceTakUsageContents";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";

import pic61 from "../../../../assets/takguides/wintak/Kuva61.png";
import pic62 from "../../../../assets/takguides/wintak/Kuva62.png";
import pic63 from "../../../../assets/takguides/wintak/Kuva63.png";

export function TakUsageWin5() {

  return (
    <div className="pb-20">
    <Layout showNavbar={true} showFooter={false} navbarTitle="Käyttö joukossa: WinTAK" backUrl="/app/services/tak/Usage">
      <CardsContainer>
        <UnfoldableCard title="Ohjeen kokoonpano" styling='bg-background' initialOpen={false}>
          <ServiceTakUsageContents />
        </UnfoldableCard>
      </CardsContainer>
    <StatusBar title="Tietohuolto" progressMax={6} progressNow={6} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
  
        <GuideSection
          number="1."
          description='Palauta WinTAK tehdasasetuksille seuraavasti.<br></br>Paina kolme päällekkäistä viivaa -symbolia (hampurilaisvalikko) vasemmassa yläkulmassa.'

          imageSrc={pic61}
          imageClasses="mx-auto pr-10 w-[200px] p-4"
        

          description2='Paina <strong>Roskakori</strong>-kuvaketta (<strong>Clear Content)</strong>.'
        />

        <GuideSection
          number="2."
          description='Tee Clear Content-valikossa kuvan mukaiset valinnat:'

          imageSrc={pic62}
          imageClasses="mx-auto pr-5 w-[400px] p-4"

          description2='<strong>Clear Now</strong>-nappi ilmestyy, kun <strong>OFF-</strong>kytkimet on vedetty Locked-asentoon.'
          
          image2Src={pic63}
          image2Classes="mx-auto pr-5 w-[400px] p-4"

          description3='Paina <strong>Clear Now!</strong>.'

          note3='Muista poistaa laitteelta <strong>käsin</strong> viestiperustepakettisi <strong>Nimi.zip</strong>.'
        />
      
    </CardsContainer>
    </div>
      <NavigateButtons 
        backUrl="/app/services/tak/usage/win5" 
        forwardUrl="/app/services/tak/usage" 
        alterForward="Valmis! Palaa takaisin."
      />

    
    </Layout>
    </div>
  );
}
