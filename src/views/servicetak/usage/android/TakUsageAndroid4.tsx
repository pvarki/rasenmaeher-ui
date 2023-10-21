import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";

import { GuideSection } from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../helpers/ServiceTakUsageContents";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";

import pic1 from "../../../../assets/takguides/atak/atakusage10.png";
import pic2 from "../../../../assets/takguides/atak/atakusage11.png";
import pic3 from "../../../../assets/takguides/atak/atakusage12.png";
import pic4 from "../../../../assets/takguides/atak/atakusage13.png";
import pic5 from "../../../../assets/takguides/atak/atakusage14.png";
import pic6 from "../../../../assets/takguides/atak/atakusage15.png";
import pic7 from "../../../../assets/takguides/atak/atakusage16.png";

export function TakUsageAndroid4() {
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
            title="Sisältö"
            styling="bg-background"
            initialOpen={false}
          >
            <ServiceTakUsageContents />
          </UnfoldableCard>
        </CardsContainer>
        <StatusBar
          title="Tee havaintoja merkein: Quick Pic"
          progressMax={4}
          progressNow={4}
        />
        <div className="flex justify-center items-center w-full">
          <CardsContainer>
            <GuideSection
              number="1."
              description={(
                <>
                ATAKissa havaintoja voi tehdä kahdella eri tavalla: <strong>Point Dropper</strong> ja <strong>Quick Pic</strong>. <br /> <br /> <strong>Point Dropperilla</strong> merkitään havainto, johon voi liittää liitteitä, ml. kuvia laitteen galleriasta. <strong>Quick Picillä</strong> otetaan kuva suoraan TAKiin ja täydennetään tietoja.
                    <br />
                    <br />
                Tarkastellaan toiseksi Point Dropperia.
               </>)}

              imageSrc={pic1}
              imageClasses="m-3 w-[300px]"

              description2={(
                <>
                Avaa kolme viivaa-valikko (hampurilaisvalikko), valitse <strong>Quick Pic</strong> (kameran kuvake).
                </>
              )}
            />
            <GuideSection
              number="2."

              description={(
                <>
                Kamera avautuu. Ota kuva ja hyväksy se.
                </>
              )}

              imageSrc={pic2}
              imageClasses="m-3 pl-10 w-[200px]"
            />
            <GuideSection
              number="3."
              description={(
                <>
                Täppää kartalle tullutta havaintoa, jolloin se muuttuu aktiiviseksi ja ympyrävalikko aukeaa.
                </>
              )}

              imageSrc={pic3}
              imageClasses="m-3 w-[300px]"

              description2={(
              <>
              <strong>Muokkaa</strong> merkin tietoja painamalla ympyrävalikossa roskakorin oikealla puolella olevaa <strong>edit</strong>-kuvaketta.
              </>
              )}

              description3={(
                <>
                Kuvan yläpuolella oikealla on <strong>Edit caption</strong>-symboli <strong>(kynä)</strong>. Paina sitä syöttääksesi tekstiä.
              </>
              )}
              image2Src={pic4}
              image2Classes="m-3 w-[300px]"
              description4={(
                <>
                Syötä tekstiä.
                </>
              )}
              image3Src={pic5}
              image3Classes="m-3 w-[300px]"
            />
            <GuideSection
              number="3."
              description={(
                <>
                Kun olet täydentänyt tiedot, lähetä se <strong>Send</strong>-napilla HQ:lle (Send oikeassa alakulmassa).
                </>
              )}
              imageSrc={pic6}
              imageClasses="m-3 w-[300px]"
              description2={(
                <>
                Valitse aukeavasta valikosta <strong>Contact</strong>.
                </>
              )}
              image2Src={pic7}
              image2Classes="m-3 w-[300px]"
              description3={(
                <>
                Valitse vastaanottajaksi <strong>HQ</strong> ja lähetä.    
              <br />
              <br />
              Hienoa! Tunnet nyt ATAK-sovelluksen käytön perustoimintamallin mukaisesti.
          </>
              )}
            />
          </CardsContainer>
        </div>
        <NavigateButtons
          backUrl="/app/services/tak/usage/android2"
          forwardUrl="/app/services/tak/usage"
          alterForward="Valmis! Palaa takaisin."
        />
      </Layout>
    </div>
  );
}
