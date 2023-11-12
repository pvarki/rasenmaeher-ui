import { Layout } from "../components/Layout";
import { ServiceInfoCard } from "../components/ServiceInfoCard";
import { Button } from "../components/Button";
import { CardsContainer } from "../components/CardsContainer";
import { Link } from "react-router-dom";

export function NotFoundView() {
  return (
    <Layout showNavbar={false} showFooter={false}>
      <div className="flex flex-col flex-shrink-0 gap-3">
        <CardsContainer>
          <ServiceInfoCard
            title="404 - Sivua ei löytynyt"
            details="Palaa alta sovellukseen."
          />
          <Link to="/">
            <Button
              type="submit" 
              variant={{ color: "primary", width: "full" }}
            >
              Palaa sovellukseen
            </Button>
          </Link>
        </CardsContainer>
      </div>
    </Layout>
  );
}
