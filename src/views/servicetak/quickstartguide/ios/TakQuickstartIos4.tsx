import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic21 from "../../../../assets/takguides/itak/itakquickstart21.png";
import pic22 from "../../../../assets/takguides/itak/itakquickstart22.png";
import pic23 from "../../../../assets/takguides/itak/itakquickstart23.png";
import pic24 from "../../../../assets/takguides/itak/itakqucikstart22.png";


export function TakQuickstartIos4() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="iTAK Quickstart" backUrl="/app/services/tak/quickstart">
    <StatusBar title="Aseta mittayksiköt" progressMax={4} progressNow={4} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
      
      <GuideSection
          number="1."
          description='Avaa jälleen <strong>Asetukset</strong> vasemman yläkulman hammasrataskuvakkeesta.'

          imageSrc={pic21}
          imageClasses="mx-auto pr-5 w-[240px] p-4"

          description2='Valitse Settings-päävalikosta <strong>Preferences.</strong>'

          image2Src={pic22}
          image2Classes="mx-auto pr-5 w-[240px] p-4"

          description3='Asetetaan oikeat mittayksiköt ja koordinattijärjestelmä.'
          
        />
        <GuideSection
          number="2."
          description='Valitse <strong>Units of Measure</strong>.'

      
          description2='Valitse Coordinate Formatiksi <strong>MGRS</strong>, ja Distance Formatiksi <strong>Meters</strong>.
          <br></br>'
          imageSrc={pic23}
          imageClasses="mx-auto pr-5 w-[240px] p-4"
          

        />
        <GuideSection
          number="3."
          description='Halutessasi vaihda karttapohja Settings-päävalikosta painamalla <strong>Map Sourcea</strong>.'
          
          imageSrc={pic21}
          imageClasses="mx-auto pr-5 w-[240px] p-4"

          description2='Valitse haluamasi karttapohja. Huom! Saatavuus vaihtelee.
          '

          image2Src={pic24}
          image2Classes="mx-auto pr-5 w-[240px] p-4"

          description3='Hienoa! Olet nyt asettanut iTAKin käyttökuntoon.
          <br></br> 
          <em><small>Mikäli sinun tarvitsee tehdä muutoksia peitenimeesi, onnistuu se Settings-valikosta klikkaamalla peitenimeäsi.</small></em>'

        />
      
    </CardsContainer>
    </div>
      <NavigateButtons 
        backUrl="/app/services/tak/quickstart/ios1" 
        forwardUrl="/app"
        alterForward="Valmis! Palaa kotiin tästä." 
      />

    
    </Layout>
    </div>
  );
}

