import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../../ServiceTakUsageContents";
import { UnfoldableCard } from "../../../../components/ServicesView/UnfoldableCard";

import pic9 from "../../../../assets/takguides/wintak/Kuva39.png";
import pic10 from "../../../../assets/takguides/wintak/Kuva40.png";
import pic11 from "../../../../assets/takguides/wintak/Kuva41.png";
import pic12 from "../../../../assets/takguides/wintak/Kuva42.png";
import pic13 from "../../../../assets/takguides/wintak/Kuva43.png";






export function TakUsageWin2() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="Käyttö joukossa: WinTAK" backUrl="/app/services/tak/Usage">
      <CardsContainer>
        <UnfoldableCard title="Ohjeen kokoonpano" styling='bg-background' initialOpen={false}>
          <ServiceTakUsageContents />
        </UnfoldableCard>
      </CardsContainer>
    <StatusBar title="Luo ja hallitse Recon Feediä" progressMax={5} progressNow={2} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
      
      <GuideSection
          number="1."
          description='WinTAKin työkalurivillä <strong>Home Tab</strong>issä on Data Sync-työkalut.'

          imageSrc={pic9}
          imageClasses="mx-auto pr-10 w-[230px] p-4"

          description2='Tämä ohje olettaa, että toimit WinTAKilla <strong>komentopaikkana</strong> ja siksi luot tarvittavat feedit. <br></br>Paina <strong>New Feed</strong>.'

          note='Huom. Komentopaikalla <strong>yksi käyttäjä</strong> luo tarvittavat feedit, ja muut ottavat ne käyttöön. <br></br>'
        
          image2Src={pic10}
          image2Classes="mx-auto pr-5 w-[400px] p-4"

          description3='Luo uusi <strong>Feed</strong> seuraavilla tiedoilla:
          <ul>
          <br></br>
          <li><strong>Name</strong>: Recon</li>
          <li><strong>Group</strong>: Public</li>
          <li><strong>Default Role</strong>: Read Only</li>

          '
          note3='<em>(HUOMAA: Groupin oletusasetus pitää vaihtaa asetukseen <strong>Read Only</strong>.)</em>'

          image3Src={pic11}
          image3Classes="mx-auto pr-5 w-[400px] p-4"

          description4='Uusi feed on luotu. Feedin luojalla se näkyy heti tilattuna Data Sync-valikossa.'
          
        />
        <GuideSection
          number="2."
          description='Muut komentopaikan (WinTAKin) käyttäjät tilaavat itselleen luodut feedit, perusmallissa <strong>RECON</stron>-feedin.'

          imageSrc={pic12}
          imageClasses="mx-auto pr-5 w-[400px] p-4"

          description2='Avautuvasta näkymästä valitse <strong>Download and stay synced.</strong>'

          image2Src={pic13}
          image2Classes="mx-auto pr-5 w-[400px] p-4"

          description3='Feed näkyy tällöin käyttäjän Data Sync-valikossa.'

        />
        <GuideSection
          number="3."
          description='Lisää muille komentopaikan käyttäjille muokkausoikeus feediin'

          note='Kesken.'
        />
      
    </CardsContainer>
    </div>
      <NavigateButtons 
        backUrl="/app/services/tak/usage/win1" 
        forwardUrl="/app/services/tak/usage/win3" 
      />

    
    </Layout>
    </div>
  );
}

