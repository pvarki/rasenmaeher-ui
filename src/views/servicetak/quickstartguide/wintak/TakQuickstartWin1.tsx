import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import Wintak from "../../../../assets/icons/wintak.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
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
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="WinTAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Työaseman kieleksi englanti (1/4)"
          progressMax={4}
          progressNow={1}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="WinTAK"
              image={Wintak}
              details={
                <>
                  WinTAK käyttöönotto - vaihe 1:{" "}
                  <strong>työaseman kieli</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee.
                </>
              }
            />
            <UnfoldableCard
              title={<>1. Alueasetukseksi Yhdysvallat</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  WinTAKin toiminta edellyttää, että työaseman kieli on{" "}
                  <strong>englanti</strong> ja alueasetus{" "}
                  <strong>Yhdysvallat.</strong>
                  <br />
                  <br />
                  Ennen sovelluksen asentamista, hae hakupalkista (vasen
                  alakulma) asetusta <strong>Aika ja kieli</strong>.
                </>
              }
              image2Src={pic1}
              image2Classes="mx-auto pr-12 w-[240px] p-4"
              description2={
                <>
                  <br />
                  Kirjoita hakuun <strong>Aika ja kieli</strong>.
                </>
              }
              image3Src={pic2}
              image3Classes="mx-auto pr-12 w-[240px] p-4"
              description3={
                <>
                  <br />
                  Vaihdetaan ensin alueasetus. Valitse Aika ja kieli-valikon
                  sivupalkista <strong>Alue</strong>.
                </>
              }
              image4Src={pic3}
              image4Classes="mx-auto pr-12 w-[400px] p-4"
              description4={
                <>
                  <br />
                  Valitse kohtaan maa tai alue <strong>Yhdysvallat</strong>.
                  Varmista, että alueasetuksissa on valittuna myös{" "}
                  <strong>englanti (Yhdysvallat).</strong>
                </>
              }
            />
            <UnfoldableCard
              title={<>2. Kieleksi englanti (US)</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  Valitse Aika ja kieli -valikon sivupalkista{" "}
                  <strong>Kieli.</strong> Vaihdetaan näyttökieli.
                </>
              }
              image2Src={pic4}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description2={
                <>
                  <br />
                  Valitse Windowsin näyttökieleksi{" "}
                  <strong>englanti (Yhdysvallat)</strong>.
                </>
              }
              image3Src={pic5}
              image3Classes="mx-auto pr-5 w-[400px] p-4"
              description3={
                <>
                  <br />
                  Päätä näyttökielen vaihto kirjautumalla ulos ja uudelleen
                  sisään.
                </>
              }
              image4Src={pic8}
              image4Classes="mx-auto pr-5 w-[400px] p-4"
              description4={
                <>
                  <small>
                    <br />
                    <em>
                      Mikäli onnistuit nyt asettamaan näyttökieleksi englannin,
                      kieliasetukset ovat valmiit. Ohjeen seuraava askel koskee
                      tilannetta, missä englannin kieli puuttuu
                      näyttökielivalikosta.
                    </em>
                  </small>
                </>
              }
            />
            <UnfoldableCard
              title={<>3. Tarvittaessa lisää kielipaketti (englanti)</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  Jos englannin kieltä ei löydy näyttökielivalikosta, paina{" "}
                  <strong>Lisää kieli</strong> ja etsi se.
                </>
              }
              image2Src={pic6}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description2={
                <>
                  Paina <strong>Asenna kielipaketti.</strong> Odota kielipaketin
                  asentumista.
                </>
              }
              image3Src={pic7}
              image3Classes="mx-auto pr-5 w-[400px] p-4"
              description3={
                <>
                  Tämän jälkeen voit valita näyttökieleksi englannin{" "}
                  <strong>ohjeen kohdan 2 mukaisesti</strong>o
                  <br />
                  <br />
                  Päätä näyttökielen vaihto kirjautumalla ulos ja uudelleen
                  sisään.
                </>
              }
              image4Src={pic8}
              image4Classes="mx-auto pr-5 w-[400px] p-4"
              description4={
                <>
                  <br />
                  Kieliasetukset ovat valmiit. Seuraavaksi asennetaan itse
                  WinTAK-sovellus.
                </>
              }
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart"
          forwardUrl="/app/services/tak/quickstart/win2"
        />
      </Layout>
    </div>
  );
}
