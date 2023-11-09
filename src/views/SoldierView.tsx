import { BookmarkRemainder } from "../components/BookmarkRemainder";
import { Layout } from "../components/Layout";
import { CardsContainer } from "../components/CardsContainer";
import { TextCard } from "../components/TextCard";
import { ServiceTak } from "./servicetak/ServiceTak";
import taistelija from "../assets/heroimages/taistelija.jpeg";

export function SoldierView() {
  return (
    <Layout showNavbar={true} heroImage={taistelija} showFooter={true}>
      <CardsContainer>
        <TextCard
          title={<>Kirjautunut käyttäjänä [user]</>}
          details={
            <>
              Joukkosi käytössä olevat palvelut ovat ohessa. Avaa palvelun{" "}
              <strong>kortti</strong> ottaaksesi sen käyttöön omalla
              laitteellasi.
            </>
          }
        />
      </CardsContainer>
      <ServiceTak />
      <CardsContainer>
        <BookmarkRemainder />
      </CardsContainer>
    </Layout>
  );
}
