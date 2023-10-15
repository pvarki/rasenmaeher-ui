import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic1 from "../../../../assets/takguides/wintak/Kuva1.png";
import pic2 from "../../../../assets/takguides/wintak/Kuva2.png";
import pic3 from "../../../../assets/takguides/wintak/Kuva3.png";
import pic4 from "../../../../assets/takguides/wintak/Kuva4.png";
import pic5 from "../../../../assets/takguides/wintak/Kuva5.png";
import pic6 from "../../../../assets/takguides/wintak/Kuva6.png";
import pic7 from "../../../../assets/takguides/wintak/Kuva7.png";
import pic8 from "../../../../assets/takguides/wintak/Kuva8.png";







export function TakQuickstartWin1() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="WinTak pikaohje" backUrl="/app/services/tak/quickstart">
    <StatusBar title="Valitse kieleksi englanti" progressMax={4} progressNow={1} />
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
          Valitse <strong>Aika ja kieli</strong>.'

          image2Src={pic2}
          image2Classes="mx-auto pr-12 w-[240px] p-4"

          description3='Valitse ensin sivupalkista valikko <strong>Alue</strong>. 
          '

          image3Src={pic3}
          image3Classes="mx-auto pr-12 w-[400px] p-4"

          description4='Valitse kohtaan maa tai alue <strong>Yhdysvallat</strong>. Varmista, että alueasetuksissa on valittuna myös <strong>englanti (Yhdysvallat)</strong>'
        />
        <GuideSection
          number="2."
          description='Valitse Aika ja kieli -valikon sivupalkista <strong>Kieli.</strong> Vaihdetaan näyttökieli.'

          imageSrc={pic4}
          imageClasses="mx-auto pr-5 w-[400px] p-4"

          description2='Valitse Windowsin näyttökieleksi <strong>englanti (Yhdysvallat)</strong>.' 
          image2Src={pic5}
          image2Classes="mx-auto pr-5 w-[400px] p-4"
          description3='Jos tätä ei löydy näyttökielivalikosta, paina Lisää kieli ja etsi se.'
          image3Src={pic6}
          image3Classes="mx-auto pr-5 w-[400px] p-4"
          description4='Paina <strong>Asenna kielipaketti.</strong> Odota kielipaketin asentumista.'
      
        />
        <GuideSection
          number="3."
          description='Täytä <strong>Team Settings:</strong>'

          imageSrc={pic3}
          imageClasses="mx-auto pr-5 w-[240px] p-4"

          description2='<ul>
          Valitse <strong>Select Team</strong>-kenttään rullavalikosta joukkosi (käsketty) väri.
          <br></br>
           Valitse <strong>Select Team Role</strong>-kenttään rullavalikosta rooli <strong>Team Member</strong>, ellei muuta ole käsketty.
          <br></br>
          <small><em>Komentopaikkakäyttäjät asettavat roolin HQ.</em></small>
          <br></br>
          Paina lopuksi <strong>Next.</strong>
          '
        />
      
    </CardsContainer>
    </div>
      <NavigateButtons 
        backUrl="/app/services/tak/quickstart" 
        forwardUrl="/app/services/tak/quickstart/win2" 
      />

    
    </Layout>
    </div>
  );
}

