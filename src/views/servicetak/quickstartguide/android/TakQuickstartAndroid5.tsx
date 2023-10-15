import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"

import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";

import pic07 from "../../../../assets/takguides/atak/07-Kartta1.png"
import pic08 from "../../../../assets/takguides/atak/08-OK1.png"
import pic09 from "../../../../assets/takguides/atak/09-GoogleHybrid-1.png"


export function TakQuickstartAndroid5() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="TAK-käyttöönotto Android" backUrl="/app/services/tak/quickstart">
    <StatusBar title="Vaihda karttapohjaa" progressMax={3} progressNow={3} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
      <GuideSection
          number="1."
          description="Valitse työkalurivistä (oikea yläkulma) <strong> Kartat </strong>."
          imageSrc={pic07}
          imageClasses='m-3 w-[250px]'
          description2="Mene valikon alareunaan, valitse <strong>Settings</strong>"
          />   
        <GuideSection
          number="2."
          description="Valitse <strong>Callsign and Device Preferences.</strong>"
          imageSrc={pic08}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="3."
          description="Valitse <strong>Callsign Preferences.</strong>"
          imageSrc={pic08}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="4."
          description="Valitse <strong>My Callsign.</strong>"
          imageSrc={pic09}
          imageClasses='m-3 w-[300px]'
        />
      </CardsContainer>
      </div>
      <NavigateButtons 
        backUrl="/app/services/tak/quickstart/android2" 
        forwardUrl="/app/services/tak/quickstart/android4"
      /> 
    </Layout>
    </div>
  );
}

