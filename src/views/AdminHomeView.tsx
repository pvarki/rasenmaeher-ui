import trooper from "../assets/resursoi.png";
import services from "../assets/byod2.png";
import { Card } from "../components/Card";
import { TextCard } from "../components/TextCard";
import { CardsContainer } from "../components/CardsContainer";
import { Layout } from "../components/Layout";

export function AdminHomeView() {
  return (
    <Layout showNavbar={true} navbarTitle="metsa-kota.pvarki.fi">
      <div className="flex flex-col gap-3">
        <CardsContainer>
          <TextCard
            title="Olet kirjautunut adminina."
            details="Tervetuloa joukkosi PVARKI-ympäristöön! Valitse alta <strong>Käyttäjänhallinta</strong> lisätäksesi käyttäjiä ympäristöösi. Valitse <strong>Palvelut</strong> ottaaksesi palvelut käyttöön omalla laitteellasi."
          />
          <Card
            title="Käyttäjähallinta"
            image={trooper}
            url="/app/user-management"
          />
          <Card title="Palvelut" image={services} url="/app/services" />
        </CardsContainer>
      </div>
    </Layout>
  );
}
