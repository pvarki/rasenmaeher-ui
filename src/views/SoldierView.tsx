import { BookmarkReminder } from "../components/BookmarkRemainder";
import { Layout } from "../components/Layout";
import { CardsContainer } from "../components/CardsContainer";
import { TextCard } from "../components/TextCard";
import { ServiceTak } from "./servicetak/ServiceTak";
import { useUserType } from "../hook/auth/useUserType";
import taistelija from "../assets/heroimages/taistelija.jpeg";

export function SoldierView() {
  const { callsign } = useUserType();
  return (
    <Layout showNavbar={true} heroImage={taistelija} showFooter={true}>
      <CardsContainer>
        <TextCard
          title={
            <>
              Tervetuloa, <em>{callsign && `${callsign}`}.</em>{" "}
            </>
          }
          details={
            <>
              Joukkosi käytössä olevat palvelut ovat ohessa. Paina palvelun{" "}
              <strong>kuvaketta</strong> ottaaksesi sen käyttöön omalla
              laitteellasi.
            </>
          }
        />
      </CardsContainer>
      <ServiceTak />
      <CardsContainer>
        <BookmarkReminder />
      </CardsContainer>
    </Layout>
  );
}
