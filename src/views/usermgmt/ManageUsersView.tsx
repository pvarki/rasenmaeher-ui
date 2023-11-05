import { useEffect, useRef } from "react";
import android from "../../assets/icons/android.svg";
import sanla from "../../assets/heroimages/rakennettu3.jpeg";
import apple from "../../assets/icons/apple.svg";
import windows from "../../assets/icons/windows.svg";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { CardsContainer } from "../../components/CardsContainer";
import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import { UnfoldableCard } from "../../components/UnfoldableCard";

export function ManageUsersView() {
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
              title="Käyttäjienhallinta"
              details={
                <>
                  <strong>Lisää</strong>, <strong>hyväksy</strong> ja <strong>hallitse</strong> käyttäjiä. 
                </>
              }
              >

            <UnfoldableCard 
                title="Näin se käy"
                description1={<>
                    <strong>Luo</strong> ja avaa QR-kutsukoodi lisätäksesi käyttäjiä.</>} 
                description2={<> 
                    <strong>Hyväksy</strong> koodilla kirjautuneet käyttäjät mukaan palveluusi.</>}
                description3={<> 
                    <strong>Hallitse</strong> nostamalla uusia admineja tai poistamalla käyttäjiä palvelustasi.</>}
             />
            </ServiceInfoCard>

            <Card
              title="Lisää käyttäjiä"
              image={android}
              url="/app/admin/user-management/quickstart/android1"
            />
            <Card
              title="Hyväksy"
              image={apple}
              url="/app/services/tak/quickstart/ios1"
            />
            <Card
              title="Hallitse"
              image={windows}
              url="/app/services/tak/quickstart/win1"
            />
          </CardsContainer>
        </div>
      </Layout>
    </div>
  );
}
