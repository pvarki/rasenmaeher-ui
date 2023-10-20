import taklogo from "../assets/taklogo.png";
import { Card } from "../components/Card";
import { TextCard } from "../components/TextCard";
import { CardsContainer } from "../components/CardsContainer";
import { Layout } from "../components/Layout";

export function SoldierServicesView() {
  return (
    <Layout
      showNavbar={true}
      navbarTitle="Palvelut"
      backUrl="/app/users/:callsign"
    >
      <div className="flex flex-col gap-3">
        <CardsContainer>
          <TextCard
            title="Palvelusi ohessa."
            details="Napauta kuvaketta ottaaksesi palvelun käyttöön laitteellasi ja lukeaksesi ohjeistusta."
          />
          <Card
            title="TAK"
            image={taklogo}
            url="/app/users/:callsign/services/tak"
          />
        </CardsContainer>
      </div>
    </Layout>
  );
}
