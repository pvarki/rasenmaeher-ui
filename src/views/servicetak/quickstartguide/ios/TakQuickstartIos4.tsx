import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic21 from "../../../../assets/takguides/itak/itakquickstart21.png";
import pic22 from "../../../../assets/takguides/itak/itakquickstart22.png";
import pic23 from "../../../../assets/takguides/itak/itakquickstart23.png";
import pic24 from "../../../../assets/takguides/itak/itakqucikstart22.png";

export function TakQuickstartIos4() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="iTAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Aseta mittayksiköt (4/4)"
          progressMax={4}
          progressNow={4}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="iTAK"
              image={ITAK}
              details={
                <>
                  iTAK käyttöönotto - vaihe 4:{" "}
                  <strong>Aseta mittayksiköt</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee. Tässä vaiheessa iTAK-sovelluksen tulee olla auki.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  1. <strong>Avaa</strong> asetukset
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  a. Avaa jälleen <strong>Asetukset</strong> vasemman yläkulman
                  hammasrataskuvakkeesta.
                </>
              }
              image2Src={pic21}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description2={
                <>
                  <br />
                  b. Valitse Settings-päävalikosta <strong>Preferences.</strong>
                </>
              }
              image3Src={pic22}
              image3Classes="mx-auto pr-5 w-[240px] p-4"
              description3={
                <>
                  <br />
                  Asetetaan oikeat mittayksiköt ja koordinattijärjestelmä.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  2. <strong>Aseta</strong> mittayksiköt
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  Valitse <strong>Units of Measure</strong>:
                </>
              }
              description2={
                <>
                  Valitse Coordinate Formatiksi <strong>MGRS</strong>, ja
                  Distance Formatiksi <strong>Meters</strong>.
                  <br />
                </>
              }
              image2Src={pic23}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
            />
            <UnfoldableCard
              title={
                <>
                  3. Halutessasi <strong>vaihda</strong> karttapohja
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  a. Halutessasi vaihda karttapohja Settings-päävalikosta
                  painamalla <strong>Map Sourcea</strong>.
                </>
              }
              image2Src={pic21}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description2={
                <>
                  <br />
                  b. Valitse haluamasi karttapohja. Huom! Saatavuus vaihtelee.
                </>
              }
              image3Src={pic24}
              image3Classes="mx-auto pr-5 w-[240px] p-4"
              description3={
                <>
                  <br />
                  Hienoa! Olet nyt asettanut iTAKin käyttökuntoon.
                  <br />
                  <br />
                  <em>
                    <small>
                      Mikäli sinun tarvitsee tehdä muutoksia peitenimeesi,
                      onnistuu se Settings-valikosta klikkaamalla peitenimeäsi.
                    </small>
                  </em>
                </>
              }
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/ios1"
          forwardUrl="/"
          alterForward="Valmis! Palaa tästä."
        />
      </Layout>
    </div>
  );
}
