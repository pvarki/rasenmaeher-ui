import { useEffect, useRef } from "react";
import android from "../../../assets/icons/android.svg";
import sanla from "../../../assets/heroimages/rakennettu3.jpeg";
import apple from "../../../assets/icons/apple.svg";
import windows from "../../../assets/icons/windows.svg";
import { Layout } from "../../../components/Layout";
import { Card } from "../../../components/Card";
import { CardsContainer } from "../../../components/CardsContainer";
import { ServiceInfoCard } from "../../../components/ServiceInfoCard";

export function ServiceTakQuickstartView() {
  const cardContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardContentRef.current) {
      cardContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div className="pb-10">
      <Layout
        showNavbar={true}
        showFooter={true}
        heroImage={sanla}
        navbarTitle="TAK: Käyttö joukossa"
      >
        <div ref={cardContentRef}>
          <CardsContainer>
            <ServiceInfoCard
              title="Ota TAK käyttöön!"
              details={
                <>
                  Valitse käyttöönotto-ohje laitteesi mukaan.
                  <br />
                  <span>
                    Helpoin tapa tehdä käyttöönotto on{" "}
                    <strong>parin kanssa</strong> siten, että toinen taistelija
                    näyttää ohjetta ja toinen tekee.
                  </span>
                </>
              }
            ></ServiceInfoCard>

            <Card
              title="Android"
              image={android}
              url="/app/services/tak/quickstart/android1"
            />
            <Card
              title="iOS"
              image={apple}
              url="/app/services/tak/quickstart/ios1"
            />
            <Card
              title="Windows"
              image={windows}
              url="/app/services/tak/quickstart/win1"
            />
          </CardsContainer>
        </div>
      </Layout>
    </div>
  );
}
