import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";

import { GuideSection } from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../helpers/ServiceTakUsageContents";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";

import pic1 from "../../../../assets/takguides/atak/atakusage1.png";
import pic3 from "../../../../assets/takguides/atak/atakusage3.png";
import pic31 from "../../../../assets/takguides/atak/atakusage3-1.png";
import pic4 from "../../../../assets/takguides/atak/atakusage4.png";
import pic5 from "../../../../assets/takguides/atak/atakusage5.png";
import pic6 from "../../../../assets/takguides/atak/atakusage6.png";
import pic7 from "../../../../assets/takguides/atak/atakusage7.png";
import pic8 from "../../../../assets/takguides/atak/atakusage8.png";
import pic9 from "../../../../assets/takguides/atak/atakusage9.png";

export function TakUsageAndroid3() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="Käyttö joukossa: ATAK"
        backUrl="/app/services/tak/Usage"
      >
        <CardsContainer>
          <UnfoldableCard
            title="Ohjeen kokoonpano"
            styling="bg-background"
            initialOpen={false}
          >
            <ServiceTakUsageContents />
          </UnfoldableCard>
        </CardsContainer>
        <StatusBar
          title="Tee havaintoja merkein: Point Dropper"
          progressMax={4}
          progressNow={3}
        />
        <div className="flex justify-center items-center w-full">
          <CardsContainer>
            <GuideSection
              number="1."
              description="ATAKissa havaintoja voi tehdä kahdella eri tavalla: <strong>Point Dropper</strong> ja <strong>Quick Pic</strong>. Point Dropperilla merkitään havainto, johon voi liittää liitteitä, ml. kuvia laitteen galleriasta. Quick Picillä otetaan kuva suoraan TAKiin ja täydennetään tietoja.
          <br></br>
          Tarkastellaan ensin Point Dropperia."
              imageSrc={pic1}
              imageClasses="m-3 w-[300px]"
              description2="Avaa kolme viivaa-valikko (hampurilaisvalikko), valitse <strong>Point Dropper</strong>. 
          <br></br>Tai paina haluamaasi kohtaa kartalla pitkään ja valitse Point Dropperin symboli avautuvasta ympyrävalikosta."
            />
            <GuideSection
              number="2."
              description="Valitse lisättävän merkin tyyppi: havainto <strong>keltainen</strong> merkki. "
              imageSrc={pic3}
              imageClasses="m-3 w-[300px]"
              description2="Jos valitsit Point Dropperin hampurilaisvalikosta, täppää karttaa valitaksesi havainnolle sijainnin."
              image2Src={pic31}
              image2Classes="m-3 w-[300px]"
              description3="Havaintomerkki ilmestyy kartalle."
            />
            <GuideSection
              number="3."
              description="Poista valinta merkistä täppäämällä karttaa.
         
          Täppää merkkiä uudelleen, jotta ympyrävalikko aukeaa."
              imageSrc={pic4}
              imageClasses="m-3 w-[300px]"
              description2="<strong>Muokkaa</strong> merkin tietoja painamalla ympyrävalikossa roskakorin oikealla puolella olevaa <strong>edit</strong>-kuvaketta."
              description3="Aukeaa Havainnon tiedot-näkymä. Kelaa sen pohjalle. Alimmaisena on kenttä <strong>Remarks</strong>, jonne voi syöttää tekstiä painamalla <strong>kynäsymbolia</strong>."
              image2Src={pic5}
              image2Classes="m-3 w-[300px]"
              description4="Syötä tekstiä."
              image3Src={pic6}
              image3Classes="m-3 w-[300px]"
            />
            <GuideSection
              number="3."
              description="Samassa Havainnon tiedot -valikossa painamalla <strong>klemmari</strong>-kuvaketta näet havainnon liitteet."
              imageSrc={pic7}
              imageClasses="m-3 w-[300px]"
              description2="Lisää uusia liitteitä painamalla <strong>+</strong> -kuvaketta valikon ylärivistä:"
              image2Src={pic8}
              image2Classes="m-3 w-[300px]"
              description3="Valitse haluamasi liitetyyppi."
            />
            <GuideSection
              number="4."
              description="Kun olet täydentänyt havainnon tiedot, lähetä se <strong>Send</strong>-napilla HQ:lle:"
              imageSrc={pic9}
              imageClasses="m-3 w-[300px]"
              description2="Tämän ohjeen opastaman perusmallin mukaisesti lähettämällä HQ:lle, HQ-käyttäjät (komentopaikalla) vastaanottavat merkin.<br></br>Tämän jälkeen komentopaikka <strong>vahvistaa ja tulkitsee</strong> ilmoituksen, ja lisää sen <strong>RECON-feediin</strong>. Havainto tulee näin osaksi joukon tiedustelutilannekuvaa.<br></br>"
              note2="Muista, että merkki ei ole koskaan riittävä ilmoitus. Varmenna lähettämällä käsketyllä tavalla sanoma."
            />
          </CardsContainer>
        </div>
        <NavigateButtons
          backUrl="/app/services/tak/usage/android2"
          forwardUrl="/app/services/tak/usage/android4"
        />
      </Layout>
    </div>
  );
}
