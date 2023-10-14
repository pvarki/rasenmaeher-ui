import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"

import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";

import Settings10 from "../../../../assets/takguides/atak/10-Settings1.png"
import Callsign11 from "../../../../assets/takguides/atak/11-Callsign1.png"
import Csprefs12 from "../../../../assets/takguides/atak/12-Csprefs1.png"
import Mycallsign13 from "../../../../assets/takguides/atak/13-MyCallsign1.png"
import Omapeite14 from "../../../../assets/takguides/atak/14-OmaPeite1.png"
import MyTeam15 from "../../../../assets/takguides/atak/15-MyTeam1.png"
import MyRole16 from "../../../../assets/takguides/atak/16-MyRole1.png"
import Settings17 from "../../../../assets/takguides/atak/17-settings2.png"
import Settings18 from "../../../../assets/takguides/atak/18-DisplaySettings1.png"
import UnitDisplay19 from "../../../../assets/takguides/atak/19-UnitDisplay1.png"
import Altitude20 from "../../../../assets/takguides/atak/20-Altitude1.png"
import UnitFormat21 from "../../../../assets/takguides/atak/21-UnitFormat1.png"
import Speedunits24 from "../../../../assets/takguides/atak/24-SpeedUnits1.png"
import Meterstokilo25 from "../../../../assets/takguides/atak/25-MetersToKilo1.png"
import Meterskmunits26 from "../../../../assets/takguides/atak/26-10001.png"


export function TakQuickstartAndroid4() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} navbarTitle="TAK-käyttöönotto Android" backUrl="/app/services/tak/quickstart">
    <StatusBar title="Tee asetukset" progressMax={3} progressNow={3} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
      <GuideSection
          number="1."
          description="Paina oikeassa yläkulmassa olevaa <strong> kolmea viivaa </strong> (hampurilaispainike)."
          imageSrc={Settings10}
          imageClasses='m-3 w-[250px]'
          description2="Mene valikon alareunaan, valitse <strong>Settings</strong>"
          />   
        <GuideSection
          number="2."
          description="Valitse <strong>Callsign and Device Preferences.</strong>"
          imageSrc={Callsign11}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="3."
          description="Valitse <strong>Callsign Preferences.</strong>"
          imageSrc={Csprefs12}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="4."
          description="Valitse <strong>My Callsign.</strong>"
          imageSrc={Mycallsign13}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="5."
          description="Anna omaksi tunnukseksi <strong>sinulle käsketty peite,</strong> esimerkiksi <em>Rambo</em>."
          imageSrc={Omapeite14}
          imageClasses='m-3 w-[300px]'
          description2="Paina <strong>OK.</strong>"
        />
        <GuideSection
          number="6."
          description="Valitse <strong>My Team</strong> ja valitse sinulle käsketty väri."
          imageSrc={MyTeam15}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="7."
          description="Valitse <strong>My Role.</strong> Kaikki paitsi komentopaikka käyttävät <strong>Team Member</strong>-roolia."
          imageSrc={MyRole16}
          imageClasses='m-3 w-[300px]'
        />
         <GuideSection
          number="8."
          description="Palaa takaisin <strong>Settings</strong>-päävalikkoon peruuttamalla."
          imageSrc={Settings17}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="9."
          description="Valitse <strong>Display Preferences</strong>."
          imageSrc={Settings18}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="10."
          description="Valitse <strong>Basic Display Preferences</strong>."
          imageSrc={UnitDisplay19}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="11."
          description="Valitse <strong>Unit Display Format Preferences</strong>."
          imageSrc={UnitFormat21}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="12."
          description="Valitse <strong>Altitude Units</strong>."
          imageSrc={Altitude20}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="13."
          description="Vaihda yksiköksi <strong>Meters (m)</strong>."
          imageSrc={UnitFormat21}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="14."
          description="Valitse <strong>Speed Units</strong>. Valitse yksiköksi <strong>KM per Hour (kmph)</strong>"
          imageSrc={Speedunits24}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="15."
          description="Vieritä valikko alas kohtaan <strong>UNIT TRESHOLD</strong>. Valitse yksiköksi <strong>Meters to Kilometers.</strong>"
          imageSrc={Meterstokilo25}
          imageClasses='m-3 w-[300px]'
        />
        <GuideSection
          number="16."
          description="Vaihda arvoksi <strong>1000</strong>. Paina <strong>OK.</strong>"
          imageSrc={Meterskmunits26}
          imageClasses='m-3 w-[300px]'
          description2='Poistu valikosta painamalla back-nappia useita kertoja.'
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

