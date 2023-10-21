import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { GuideSection } from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic15 from "../../../../assets/takguides/itak/itakquickstart15.png";
import pic16 from "../../../../assets/takguides/itak/itakquickstart16.png";
import pic17 from "../../../../assets/takguides/itak/itakquickstart17.png";
import pic18 from "../../../../assets/takguides/itak/itakquickstart18.png";
import pic19 from "../../../../assets/takguides/itak/itakquickstart19.png";
import pic12 from "../../../../assets/takguides/itak/itakquickstart12.png";
import pic20 from "../../../../assets/takguides/itak/itakquickstart20.png";
import pic43 from "../../../../assets/takguides/itak/itakquickstart43.png";

export function TakQuickstartIos3() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="iTAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Muodosta palvelinyhteys"
          progressMax={4}
          progressNow={3}
        />
        <div className="flex justify-center items-center w-full">
          <CardsContainer>
            <GuideSection
              number="1."
              description="Avaa <strong>Asetukset</strong>. Asetusten kuvake, hammasratas, sijaitsee iTAKin ruudun oikeassa yläkulmassa."
              imageSrc={pic15}
              imageClasses="mx-auto pr-5 w-[90px] p-4"
            />
            <GuideSection
              number="2."
              description="Valitse <strong>Network</strong>."
              imageSrc={pic16}
              imageClasses="mx-auto pr-5 w-[240px] p-4"
              description2="Valitse <strong>Servers</strong>."
              image2Src={pic17}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description3='Avautuu tyhjä ruutu "Servers." Muodostetaan palvelinyhteys lisäämällä viestiperusteesi tähän.'
            />
            <GuideSection
              number="4."
              description="Paina <strong>Plus</strong>-symbolia <em>(Add TAK Server)</em> oikeassa alakulmassa."
              imageSrc={pic18}
              imageClasses="mx-auto pr-5 w-[240px] p-4"
              description2="
          Sovellus kysyy, miten palvelin lisätään. Valitse <strong>Upload Server Package</strong>.
          "
              image2Src={pic19}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              note3="Huomaa, että tässä vaiheessa sinulla tulee olla viestiperustetiedosto <strong>Nimi.zip</strong> ladattuna puhelimeesi. 
          <br></br>
          Mikäli et jo ladannut sitä, lataat viestiperustepakettisi Rasenmaeherin TAK-päävalikosta napista <strong>Lataa viestiperusteesi</strong>."
              description3="Aukeaa Selaa-valikko. Etsi kansio, johon latasit viestiperustetiedostosi <strong>Nimi.zip</strong>. "
              image3Src={pic12}
              image3Classes="mx-auto pr-5 w-[240px] p-4"
            />
            <GuideSection
              number="5."
              description="Kun viestiperustepaketti on latautunut, palvelimen ja vihreä merkkivalo tulee näkyviin."
              imageSrc={pic20}
              imageClasses="mx-auto pr-5 w-[240px] p-4"
              description2="
          Palaa karttanäkymään ylhäältä vasemmalta paluunuolilla.
          "
              image2Src={pic43}
              image2Classes="mx-auto pr-5 w-[150px] p-4"
              description3="<small><em>Karttanäkymässä oikealla alhaalla tulee vihreä merkkivalo ja teksti CONNECTED.</em></small>
          <br></br>
          Seuraavaksi muutetaan sovelluksen koordinaatti- ja mittayksikköasetukset."
            />
          </CardsContainer>
        </div>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/ios2"
          forwardUrl="/app/services/tak/quickstart/ios4"
        />
      </Layout>
    </div>
  );
}
