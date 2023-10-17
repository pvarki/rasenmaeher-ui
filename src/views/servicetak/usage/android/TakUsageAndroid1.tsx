import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { UnfoldableCard } from "../../../../components/ServicesView/UnfoldableCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../helpers/ServiceTakUsageContents";

import pic27 from "../../../../assets/takguides/atak/27-BaseMap.png"
import pic28 from "../../../../assets/takguides/atak/28-Map.png"
import frame1 from "../../../../assets/takguides/atak/Frame-1.png"
import frame2 from "../../../../assets/takguides/atak/Frame-2.png"
import frame3 from "../../../../assets/takguides/atak/Frame-3.png"
import frame4 from "../../../../assets/takguides/atak/Frame-4.png"
import frame5 from "../../../../assets/takguides/atak/Frame-5.png"
import frame from "../../../../assets/takguides/atak/Frame.png"


export function TakUsageAndroid1() {

  return (
    <div className="pb-20">
    <Layout showNavbar={true} showFooter={false} navbarTitle="ATAK: Käyttö joukossa" backUrl="/app/services/tak/Usage">
      <CardsContainer>
        <UnfoldableCard title="Ohjeen kokoonpano" styling='bg-background' initialOpen={true}>
          <ServiceTakUsageContents />
        </UnfoldableCard>
      </CardsContainer>
    <StatusBar title="Liikuta karttaa ja näe omat" progressMax={4} progressNow={1} />
    
    <CardsContainer>
    
    <GuideSection
          number="1."
          description="<strong>Navigaationapit</strong> ovat vasemmassa yläkulmassa:"
          imageSrc={pic27}
          imageClasses='m-3 w-[300px]'
          />   
        <GuideSection
          number="2."
          description="Liikuta karttapohjaa <strong>sormella.</strong>"
          imageSrc={frame}
          imageClasses='align-right w-[50px]'
        />    
        <GuideSection
          number="3."
          description="Zoomaa karttaa <strong>nipistysotteella.</strong>"
          imageSrc={frame1}
          imageClasses='align-right w-[35px]'
        />   
        <GuideSection
          number="4."
          description="Käännä karttapohjaa <strong>kahdella sormella.</strong>"
          imageSrc={frame2}
          imageClasses='align-right w-[50px]'
        />
        <GuideSection
          number="5."
          description="Oma sijaintisi näkyy <strong>nuolenpäänä.</strong>"
          imageSrc={frame3}
          imageClasses='align-right w-[40px]'
        />
        <GuideSection
          number="6."
          description="Muiden käyttäjien peitenimet alkavat näkyä zoomatessa."
          imageSrc={frame4}
          imageClasses='align-right w-[50px]'
        />
        <GuideSection
          number="7."
          description="Muiden käyttäjien pallokuvakkeen väri kuvaa joukkueen väriä (tai muuta käskettyä merkitystä)."
          imageSrc={frame5}
          imageClasses='align-right w-[50px]'
          image2Src={pic28}
          image2Classes='w-[300px]'
        />
      <NavigateButtons 
        backUrl="/app/services/tak/Usage" 
        forwardUrl="/app/services/tak/Usage/android2" 
      />
    </CardsContainer>
    </Layout>
    </div>
  );
}

