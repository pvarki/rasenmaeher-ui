import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic21 from "../../../../assets/takguides/itak/itakserver11.png";
import pic22 from "../../../../assets/takguides/itak/itakserver21.png";
import pic23 from "../../../../assets/takguides/itak/itakserver31.png";
import pic24 from "../../../../assets/takguides/itak/itakserver41.png";
import pic25 from "../../../../assets/takguides/itak/itakserver51.png";
import pic26 from "../../../../assets/takguides/itak/itakserver61.png";

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
          title="Muodosta palvelinyhteys (3/5)"
          progressMax={5}
          progressNow={3}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="iTAK"
              image={ITAK}
              details={
                <>
                  iTAK käyttöönotto - vaihe 3:{" "}
                  <strong>muodosta palvelinyhteys</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee. Tässä vaiheessa iTAK-sovelluksen tulee olla auki.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  1. <strong>Avaa</strong> Packages-valikko
                </>
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      a. Mene karttanäkymään ja rullaa työkaluriviä oikealle,
                      kunnes löydät <strong>Package</strong>-kuvakkeen.
                    </>
                  ),
                  imageSrc: pic21,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
              ]}
            />
            <UnfoldableCard
              title={
                <>
                  2. <strong>Lisää</strong> viestiperustepakettisi iTAKiin
                </>
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      b. Packages-valikko aukeaa, se on tyhjä. Paina oikeasta
                      alakulmasta <strong>plus</strong>-symbolia lisätäksesi
                      viestiperustepakettisi.
                    </>
                  ),
                  imageSrc: pic22,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <>
                      c. Valitse <strong>Local Device</strong>.
                    </>
                  ),
                  imageSrc: pic23,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <>
                      d. Valitse pakettisi. Se on zip-tiedosto{" "}
                      <em>Peitenimesi.zip.</em>
                    </>
                  ),
                  imageSrc: pic24,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <>
                      e. Onnistumisen merkiksi Packages-valikon listalle nousee{" "}
                      <em>palvelimen peitenimi</em> ja vihreä merkkivalo. Palaa
                      karttanäkymään.
                    </>
                  ),
                  imageSrc: pic25,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <>
                      Palvelinyhteys on nyt muodostettu. Sen merkkinä kartan
                      oikeassa alakulmassa lukee vihreällä{" "}
                      <strong>Connected.</strong>
                    </>
                  ),
                  imageSrc: pic26,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
              ]}
            />
          </div>
        </CardsContainer>

        <NavigateButtons
          backUrl="/app/services/tak/quickstart/ios2"
          forwardUrl="/app/services/tak/quickstart/ios4"
        />
      </Layout>
    </div>
  );
}
