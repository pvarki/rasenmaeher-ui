import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import Wintak from "../../../../assets/icons/wintak.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";
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

export function TakQuickstartWin3() {
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartWin3.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartWin3.statusBarTitle")}
          progressMax={4}
          progressNow={3}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="WinTAK"
              image={Wintak}
              details={
                <Trans
                  i18nKey="TakQuickstartWin3.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={t("TakQuickstartWin3.unfoldableCard1.title")}
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard1.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic14}
              image2Classes="mx-auto pr-5 w-[90px] p-4"
            />
            <UnfoldableCard
              title={<>2. Hyväksy EULA</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  Hetken kuluttua aukaa <strong>Device Setup Wizard</strong>.
                </>
              }
              image2Src={pic16}
              image2Classes="mx-auto pr-5 w-[300px] p-4"
              description2={
                <>
                  Sen ensimmäisenä askeleena hyväksy <strong>EULA.</strong>
                </>
              }
            />
            <UnfoldableCard
              title={<>3. Muodosta palvelinyhteys</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  Seuraavaksi muodostetaan palvelinyhteys.
                  <br />
                  <br />
                  a. Sovellus kysyy, haluatko tuoda data packagen. Tämä
                  tarkoittaa viestiperustepakettiasi <strong>Nimi.zip.</strong>
                </>
              }
              image2Src={pic17}
              image2Classes="mx-auto pr-5 w-[300px] p-4"
              description2={
                <>
                  b. Valitse <strong>Yes</strong>. <br />
                  <br />
                  Osoita <strong>viestiperustepaketti</strong>{" "}
                  latauskansiostasi/muualta.
                </>
              }
              image3Src={pic18}
              image3Classes="mx-auto pr-5 w-[300px] p-4"
              description3={
                <>
                  Kun olet valinnut paketin ja painanut Open, aukeaa{" "}
                  <strong>Select Import Strategy</strong>.
                </>
              }
              image4Src={pic19}
              image4Classes="mx-auto pr-5 w-[300px] p-4"
              description4={
                <>
                  c. Valitse <strong>UserPreferenceImportStrategy</strong>, ja
                  paina OK.
                </>
              }
            />
            <UnfoldableCard
              title={<>4. Valitse karttapohja</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  Viestiperustepaketin kanssa voi tulla erilaisia{" "}
                  <strong>karttapohjia.</strong>
                </>
              }
              image2Src={pic20}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description2={
                <>
                  Valitse haluamasi karttapohja. Huomaa, että karttapohjaa voi
                  vaihtaa myöhemmin.
                </>
              }
            />
            <UnfoldableCard
              title={<>5. Aseta Callsign</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  Device Setup Wizard kysyy, haluatko määrittää peitenimesi
                  (Callsign).
                </>
              }
              image2Src={pic21}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description2={
                <>
                  Valitse <strong>Yes</strong> ja anna sinulle käsketty
                  peitenimi.
                  <br />
                  <br />
                  Sovellus kysyy ylimääräisiä WMS (kartta)-palvelulähteitä.
                </>
              }
              image3Src={pic23}
              image3Classes="mx-auto pr-5 w-[400px] p-4"
              description3={<>Näitä ei tarvita, tyhjennä ruudut ja paina OK.</>}
            />
            <UnfoldableCard
              title={<>6. Aseta pluginit</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  Sovellus kysyy, asennetaako plugineja. Valitse{" "}
                  <strong>DataSync</strong> ja paina OK.
                </>
              }
              image2Src={pic24}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description2={
                <>
                  Seuraavaksi sovellus kysyy, ladataanko automaattisesti
                  DTED-0-korkeusmallit.
                </>
              }
              image3Src={pic25}
              image3Classes="mx-auto pr-5 w-[400px] p-4"
              description3={
                <>
                  Valitse <strong>Yes</strong>.
                </>
              }
            />
            <UnfoldableCard
              title={<>7. Tarkasta asetukset</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  Nyt WinTAKin perusasetukset on tehty. Tarkastetaan vielä{" "}
                  <strong>My Preferences.</strong>
                </>
              }
              image2Src={pic26}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description2={
                <>
                  Peite (<strong>Callsign</strong>), joukon väri (
                  <strong>My Team</strong>) ja rooli (<strong>My Role</strong>)
                  tulee olla sinulle käsketyn mukaiset.{" "}
                  <strong>My Display Type</strong> on Ground.
                  <br />
                </>
              }
              note={<>Komentopaikkakäyttäjänä roolisi tulee olla HQ.</>}
              image4Src={pic27}
              image4Classes="mx-auto pr-10 w-[200px] p-4"
              description3={
                <>
                  <br />
                  Tarkista myös <strong>TAK Network Status.</strong> Vihreä
                  pilvi tarkoittaa, että palvelinyhteys on OK, punainen, että
                  yhteys on poikki.
                </>
              }
              description4={
                <>
                  Jos yhteys ei ole muodostunut, tarkista ensin, onko
                  internetyhteytesi kunnossa. Jos on, ja TAK Network Status on
                  silti punainen, käynnistä sovellus uudelleen.
                  <br />
                  <br />
                  Vianselvitysapua on tämän ohjeen lopussa.
                </>
              }
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/win2"
          forwardUrl="/app/services/tak/quickstart/win4"
        />
      </Layout>
    </div>
  );
}
