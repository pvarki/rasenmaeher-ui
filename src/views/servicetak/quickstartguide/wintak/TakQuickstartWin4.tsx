import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic28 from "../../../../assets/takguides/wintak/Kuva28.png";
import pic29 from "../../../../assets/takguides/wintak/Kuva29.png";
import pic30 from "../../../../assets/takguides/wintak/Kuva30.png";
import pic31 from "../../../../assets/takguides/wintak/Kuva31.png";


export function TakQuickstartWin4() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="WinTAK käyttöönotto" backUrl="/app/services/tak/quickstart">
    <StatusBar title="Mittayksiköt oikeiksi" progressMax={4} progressNow={4} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
      
        <GuideSection
          number="1."
          description='Tarkista WinTAKin mittayksikköasetukset.<br></br>
          
          Paina vasemmasta yläkulmasta kolmea päällekkäistä viivaa, <strong>hampurilaisvalikkoa</strong>.'

          imageSrc={pic28}
          imageClasses="mx-auto pr-12 w-[200px] p-4" 
          description2='Valitse <strong>Settings</strong>.'
        />
        <GuideSection
          number="2."
          description='Valitse <strong>Display Preferences</strong>.'

          imageSrc={pic29}
          imageClasses="mx-auto pr-5 w-[300px] p-4"
          description2='Display Preferences-valikko avautuu. Valitse <strong>Unit Display Format Preferences</strong>.'

          image2Src={pic30}
          image2Classes="mx-auto pr-5 w-[300px] p-4"
          
          description3='Tarkista, että asetukset ovat kuvan mukaiset. Vaihda tarvittaessa.'

          image3Src={pic31}
          image3Classes="mx-auto pr-5 w-[300px] p-4"

          description4='WinTAK on nyt asetettu! 
          <br></br>Mallin mukaisen käytön ohjeet löydät Rasenmaeherin TAK-valikon etusivulta <strong>Käyttö joukossa</strong>.'

        />
        <GuideSection
          number="3."
          description='TBD: TroubleShoot.'

        />
  
    </CardsContainer>
    </div>
      <NavigateButtons 
        backUrl="/app/services/tak/quickstart/win3" 
        forwardUrl="/app" 
        alterForward="Valmis! Palaa kotinäkymään tästä."
      />

    
    </Layout>
    </div>
  );
}