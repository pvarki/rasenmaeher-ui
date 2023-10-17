import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../helpers/ServiceTakUsageContents";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";


import pic1 from "../../../../assets/takguides/wintak/Kuva32.png";
import pic2 from "../../../../assets/takguides/wintak/Kuva33.png";
import pic3 from "../../../../assets/takguides/wintak/Kuva34.png";
import pic4 from "../../../../assets/takguides/wintak/Kuva35.png";
import pic5 from "../../../../assets/takguides/wintak/Kuva36.png";
import pic6 from "../../../../assets/takguides/wintak/Kuva37.png";
import pic7 from "../../../../assets/takguides/wintak/Kuva38.png";

export function TakUsageWin1() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="Käyttö joukossa: WinTAK" backUrl="/app/services/tak/usage">
      <CardsContainer>
        <UnfoldableCard title="Ohjeen kokoonpano" styling='bg-background' initialOpen={false}>
          <ServiceTakUsageContents />
        </UnfoldableCard>
      </CardsContainer>
    <StatusBar title="Liikuta karttaa ja merkkaa sijaintisi" progressMax={6} progressNow={1} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
      
      <GuideSection
          number="1."
          description='Jos PC:ssä ei ole GPS:ää, niin WinTAK määrittää alkupisteeksi 0-koordinatit.
          '
          imageSrc={pic1}
          imageClasses="mx-auto pr-12 w-[400px] p-4"
          
          description2='
          Liikuta hiirellä karttapohjaa kohti Suomea. Voit zoomata karttaa hiiren rullalla, plus- ja miinusnäppäimillä ja ruudun painikkeilla.'

          image2Src={pic2}
          image2Classes="mx-auto pr-12 w-[400px] p-4"

          description3='Klikkaa kompassikuvaketta (N) suoristaaksesi kartan. 
          '

          image3Src={pic3}
          image3Classes="mx-auto pr-12 w-[400px] p-4"

          description4='Muut joukkosi käyttäjät näkyvät erivärisinä kuvakkeina. Kuvakkeiden väri tulee jokaisen itselleen asettamasta väristä.'
        />
        <GuideSection
          number="2."
          description='Määritä oma sijainti manuaalisesti, jos laitteellasi ei ole GPS:ää. Tämä tapahtuu painamalla oikean alakulman punaisen väristä tietokenttää.'

          imageSrc={pic4}
          imageClasses="mx-auto pr-5 w-[200px] p-4"

          description2='Etsi karttapohjalta oma sijainti ja klikkaa sitä.' 
          image2Src={pic5}
          image2Classes="mx-auto pr-5 w-[400px] p-4"

          description3='Tällöin oma merkkisi ilmestyy kartalle. Se tulee näkyviin myös muille käyttäjille.'
          
        />
        <GuideSection
          number="3."
          description='Kun haluat muuttaa omaa sijaintiasi, klikkaa oikealla omaa merkkiäsi (nuoli)'

          imageSrc={pic6}
          imageClasses="mx-auto pr-5 w-[400px] p-4"

          image2Src={pic7}
          image2Classes="mx-auto pr-5 w-[400px] p-4"


          description2='Tämän jälkeen voit valita uuden sijainnin klikkaamalla.'
        />
      
    </CardsContainer>
    </div>
      <NavigateButtons 
        backUrl="/app/services/tak/usage" 
        forwardUrl="/app/services/tak/usage/win2" 
      />

    
    </Layout>
    </div>
  );
}

