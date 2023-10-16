import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../../ServiceTakUsageContents";
import { UnfoldableCard } from "../../../../components/ServicesView/UnfoldableCard";


import pic1 from "../../../../assets/takguides/wintak/Kuva1.png";
import pic2 from "../../../../assets/takguides/wintak/Kuva2.png";
import pic3 from "../../../../assets/takguides/wintak/Kuva3.png";
import pic4 from "../../../../assets/takguides/wintak/Kuva4.png";
import pic5 from "../../../../assets/takguides/wintak/Kuva5.png";
import pic6 from "../../../../assets/takguides/wintak/Kuva6.png";
import pic7 from "../../../../assets/takguides/wintak/Kuva7.png";
import pic8 from "../../../../assets/takguides/wintak/Kuva8.png";


export function TakUsageWin1() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="WinTAK pikaohje" backUrl="/app/services/tak/usage">
      <CardsContainer>
        <UnfoldableCard title="Ohjeen kokoonpano" styling='bg-background' initialOpen={false}>
          <ServiceTakUsageContents />
        </UnfoldableCard>
      </CardsContainer>
    <StatusBar title="Työaseman kieleksi englanti" progressMax={3} progressNow={1} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
      
      <GuideSection
          number="1."
          description='WinTAKin toiminta edellyttää, että työaseman kieli on <strong>englanti</strong> ja alueasetus <strong>Yhdysvallat.</strong>
          <br></br>
          Ennen sovelluksen asentamista, hae hakupalkista (vasen alakulma) asetusta <strong>Aika ja kieli</strong>.
          '

          imageSrc={pic1}
          imageClasses="mx-auto pr-12 w-[240px] p-4"
          
          description2='
          Kirjoita hakuun <strong>Aika ja kieli</strong>.'

          image2Src={pic2}
          image2Classes="mx-auto pr-12 w-[240px] p-4"

          description3='Vaihdetaan ensin alueasetus. Valitse Aika ja kieli-valikon sivupalkista <strong>Alue</strong>. 
          '

          image3Src={pic3}
          image3Classes="mx-auto pr-12 w-[400px] p-4"

          description4='Valitse kohtaan maa tai alue <strong>Yhdysvallat</strong>. Varmista, että alueasetuksissa on valittuna myös <strong>englanti (Yhdysvallat).</strong>'
        />
        <GuideSection
          number="2."
          description='Valitse Aika ja kieli -valikon sivupalkista <strong>Kieli.</strong> Vaihdetaan näyttökieli.'

          imageSrc={pic4}
          imageClasses="mx-auto pr-5 w-[400px] p-4"

          description2='Valitse Windowsin näyttökieleksi <strong>englanti (Yhdysvallat)</strong>.' 
          image2Src={pic5}
          image2Classes="mx-auto pr-5 w-[400px] p-4"

          description3='Päätä näyttökielen vaihto kirjautumalla ulos ja uudelleen sisään.'

          image3Src={pic8}
          image3Classes="mx-auto pr-5 w-[400px] p-4"

          description4='<small><em>Mikäli onnistuit nyt asettamaan näyttökieleksi englannin, kieliasetukset ovat valmiit. Ohjeen seuraava askel koskee tilannetta, missä englannin kieli puuttuu näyttökielivalikosta.</em></small>'

       
       
      
        />
        <GuideSection
          number="3."
          description='Jos englannin kieltä ei löydy näyttökielivalikosta, paina <strong>Lisää kieli</strong> ja etsi se.'

          imageSrc={pic6}
          imageClasses="mx-auto pr-5 w-[400px] p-4"

          description2='Paina <strong>Asenna kielipaketti.</strong> Odota kielipaketin asentumista.'

          image2Src={pic7}
          image2Classes="mx-auto pr-5 w-[400px] p-4"

          description3='Tämän jälkeen voit valita näyttökieleksi englannin. 
          <br></br>Päätä näyttökielen vaihto kirjautumalla ulos ja uudelleen sisään.'

          image3Src={pic8}
          image3Classes="mx-auto pr-5 w-[400px] p-4"

          description4='
          Kieliasetukset ovat valmiit. Seuraavaksi asennetaan itse WinTAK-sovellus. '      
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

