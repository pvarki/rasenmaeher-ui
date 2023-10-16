import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic14 from "../../../../assets/takguides/wintak/Kuva14.png";
import pic16 from "../../../../assets/takguides/wintak/Kuva16.png";
import pic17 from "../../../../assets/takguides/wintak/Kuva17.png";
import pic18 from "../../../../assets/takguides/wintak/Kuva18.png";
import pic19 from "../../../../assets/takguides/wintak/Kuva19.png";
import pic20 from "../../../../assets/takguides/wintak/Kuva20.png";
import pic21 from "../../../../assets/takguides/wintak/Kuva21.png";
import pic23 from "../../../../assets/takguides/wintak/Kuva23.png";
import pic24 from "../../../../assets/takguides/wintak/Kuva24.png";
import pic25 from "../../../../assets/takguides/wintak/Kuva25.png";
import pic26 from "../../../../assets/takguides/wintak/Kuva26.png";
import pic27 from "../../../../assets/takguides/wintak/Kuva27.png";





export function TakUsageWin3() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="WinTAK pikaohje" backUrl="/app/services/tak/Usage">
    <StatusBar title="Aseta WinTAK" progressMax={4} progressNow={3} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
      
        <GuideSection
          number="1."
          description='Avaa <strong>WinTAK</strong>-sovellus työpöydältä.'

          imageSrc={pic14}
          imageClasses="mx-auto pr-5 w-[90px] p-4" 
        />
        <GuideSection
          number="2."
          description='Hetken kuluttua aukaa <strong>Device Setup Wizard</strong>.
          <br></br>
          Sen ensimmäisenä askeleena hyväksy <strong>EULA.</strong>'

          imageSrc={pic16}
          imageClasses="mx-auto pr-5 w-[300px] p-4"
        />
        <GuideSection
          number="3."
          description='Seuraavaksi muodostetaan palvelinyhteys.
          <br></br>
          Sovellus kysyy, haluatko tuoda data packagen.'

          imageSrc={pic17}
          imageClasses="mx-auto pr-5 w-[300px] p-4"

          description2='
          Tämä tarkoittaa viestiperustepakettiasi <strong>Nimi.zip.</strong> Valitse <strong>Yes</strong>, ja osoita sovellukselle paketti latauskansiostasi/muualta.'

          image2Src={pic18}
          image2Classes="mx-auto pr-5 w-[300px] p-4"
          note2='Huomaa, että tässä vaiheessa sinulla tulee olla viestiperustetiedosto <strong>Nimi.zip</strong> ladattuna puhelimeesi. 
          <br></br>
          Mikäli et jo ladannut sitä, lataat viestiperustepakettisi Rasenmaeherin TAK-päävalikosta napista <strong>Lataa viestiperusteesi</strong>. Palaa tämän jälkeen tähän vaiheeseen.<br></br>'
          description3='Kun olet valinnut paketin ja painanut Open, aukeaa <strong>Select Import Strategy</strong>.'

          image3Src={pic19}
          image3Classes="mx-auto pr-5 w-[300px] p-4"

          description4='Valitse <strong>UserPreferenceImportStrategy</strong>, ja paina OK.'
        />
        <GuideSection
          number="4."
          description='Viestiperustepaketin kanssa voi tulla erilaisia karttapohjia.'
        
          imageSrc={pic20}
          imageClasses="mx-auto pr-5 w-[400px] p-4"
        
          description2='Valitse haluamasi karttapohja. Huomaa, että karttapohjaa voi vaihtaa myöhemmin.'        
        />
        <GuideSection
          number="5."
          description='Device Setup Wizard kysyy, haluatko määrittää peitenimesi (Callsign).'
        
          imageSrc={pic21}
          imageClasses="mx-auto pr-5 w-[400px] p-4"
        
          description2='Valitse <strong>Yes</strong> ja anna sinulle käsketty peitenimi.
          <br></br>
          Sovellus kysyy ylimääräisiä WMS (kartta)-palvelulähteitä. Näitä ei tarvita, tyhjennä ruudut ja paina OK.' 
          
          image2Src={pic23}
          image2Classes="mx-auto pr-5 w-[400px] p-4"

          description3='Valitse <strong>Yes</strong> ja anna sinulle käsketty peitenimi.'
        />
        <GuideSection
          number="6."
          description='Sovellus kysyy, asennetaako plugineja. Valitse <strong>DataSync</strong> ja paina OK.'
        
          imageSrc={pic24}
          imageClasses="mx-auto pr-5 w-[400px] p-4"
        
          description2='Seuraavaksi sovellus kysyy, ladataanko automaattisesti DTED-0-korkeusmallit. Paina <strong>Yes</strong>.' 
          
          image2Src={pic25}
          image2Classes="mx-auto pr-5 w-[400px] p-4"

          description3='Valitse <strong>Yes</strong> ja anna sinulle käsketty peitenimi.'
        />
        <GuideSection
          number="7."
          description='Nyt WinTAKin perusasetukset on tehty. Tarkastetaan vielä My Preferences.'
        
          imageSrc={pic26}
          imageClasses="mx-auto pr-5 w-[400px] p-4"
        
          description2='Peite (<strong>Callsign</strong>), joukon väri (<strong>My Team</strong>) ja rooli (<strong>My Role</strong>) tulee olla käsketyt. <strong>My Display Type</strong> on Ground.
          
          <br></br>
          Tarkista <strong>TAK Network Status.</strong> Vihreä pilvi tarkoittaa, että palvelinyhteys on OK, punainen, että yhteys on poikki.'

          note='Komentopaikkakäyttäjänä roolisi tulee olla HQ.<br></br>'
          
          image2Src={pic27}
          image2Classes="mx-auto pr-10 w-[200px] p-4"

          description3='Jos yhteys ei ole muodostunut, tarkista ensin, onko internetyhteytesi kunnossa. Jos on, ja TAK Network Status on silti punainen, käynnistä sovellus uudelleen.
          <br></br>
          Vianselvitysapua on tämän ohjeen lopussa.
        '
        />
      
    </CardsContainer>
    </div>
      <NavigateButtons 
        backUrl="/app/services/tak/Usage/win2" 
        forwardUrl="/app/services/tak/Usage/win4" 
      />

    
    </Layout>
    </div>
  );
}
