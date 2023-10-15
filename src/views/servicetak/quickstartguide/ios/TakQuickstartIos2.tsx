import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import wait from "../../../../assets/takguides/atak/wait.png"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic1 from "../../../../assets/takguides/itak/itakquickstart1.png";
import pic2 from "../../../../assets/takguides/itak/itakquickstart2.png";
import pic3 from "../../../../assets/takguides/itak/itakquickstart3.png";
import pic4 from "../../../../assets/takguides/itak/itakquickstart4.png";
import pic5 from "../../../../assets/takguides/itak/itakquickstart5.png";
import pic6 from "../../../../assets/takguides/itak/itakquickstart6.png";





export function TakQuickstartIos2() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="iTAK Quickstart" backUrl="/app/services/tak/quickstart">
    <StatusBar title="Tee perusasetukset" progressMax={5} progressNow={2} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
      
      <GuideSection
          number="1."
          description='Avaa <strong>iTAK</strong>-sovellus.'

          imageSrc={pic1}
          imageClasses="mx-auto pr-5 w-[240px] p-4"

          description2='Kun sovellus kysyy: <em>"iTAK haluaa etsiä lähiverkossa..."</em>, valitse <strong>Älä salli</strong>.'
        />
        <GuideSection
          number="2."
          description='Täytä <strong>Profile Settings</strong>:'

          imageSrc={pic2}
          imageClasses="mx-auto pr-5 w-[240px] p-4"

          description2='<ul>
          <li> - Anna <strong>Callsign-kenttään</strong> oma peitteesi,
          esimerkiksi <em>Rambo</em>.</li>
          <li> - Phone-kenttää <strong>ei täytetä</strong>
          </li></ul>'

          description3='
          Paina lopuksi <strong>Next.</strong>'
      
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
        <GuideSection
          number="4."
          description='Aseta  <strong>Privacy Settings</strong> sallimaan ilmoitukset (notifications) ja sijainnin (location services.)'

          imageSrc={pic4}
          imageClasses="mx-auto pr-5 w-[240px] p-4"

          description2='
          iOS kysyy tämän jälkeen, sallitko iTAKin lähettävän sinulle <strong>ilmoituksia</strong> ja <strong>käyttää sijaintiasi</strong>.
          '
          image2Src={pic5}
          image2Classes="mx-auto pr-5 w-[240px] p-4"

          description3='Valitse ilmoituksiin <strong>Salli</strong>.'

          image3Src={pic6}
          image3Classes="mx-auto pr-5 w-[240px] p-4"

          description4='Valitse sijaintiin <strong>Salli käytettäessä</strong>.'
        />
      
    </CardsContainer>
    </div>
      <NavigateButtons 
        backUrl="/app/services/tak/quickstart" 
        forwardUrl="/app/services/tak/quickstart/android2" 
      />

    
    </Layout>
    </div>
  );
}

