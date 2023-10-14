import { BookmarkRemainder } from "../components/BookmarkRemainder";
import { Layout } from "../components/Layout";
import { CardsContainer } from "../components/CardsContainer";
import { TextCard } from "../components/TextCard";
import { Card } from "../components/Card";
import services from "../assets/byod2.png";

export function SoldierView() {
  return (
    <Layout showNavbar={true} navbarTitle="metsa-kota.pvarki.fi">
      <CardsContainer>
        <TextCard
          title="Kirjautunut käyttäjänä [user]"
          details="Tervetuloa joukkosi PVARKI-ympäristöön! Valitse <strong>Palvelut</strong> ottaaksesi palvelut käyttöön omalla laitteellasi."
        />
        <Card
          title="Palvelut"
          image={services}
          url="/app/users/:callsign/services"
        />
        <BookmarkRemainder />
      </CardsContainer>
    </Layout>
  );
}
