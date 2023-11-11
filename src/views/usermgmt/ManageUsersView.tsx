import { useEffect, useRef } from "react";
import android from "../../assets/icons/qrcode.svg";
import sanla from "../../assets/heroimages/ryhmä.jpeg";
import apple from "../../assets/icons/trooper3.png";
import windows from "../../assets/icons/useredi2.svg";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { CardsContainer } from "../../components/CardsContainer";
import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import { UnfoldableCard } from "../../components/UnfoldableCard";

export function ManageUsersView() {
  const cardContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 60);
  }, []);

  return (
    <div className="pb-10">
      <Layout
        showNavbar={true}
        showFooter={true}
        heroImage={sanla}
        navbarTitle="Käyttäjienhallinta"
        backUrl="/app/admin"
      >
        <div ref={cardContentRef}>
          <CardsContainer>
            <ServiceInfoCard
              title="Käyttäjienhallinta"
              details={
                <>
                  <strong>Lisää</strong>, <strong>hyväksy</strong> ja{" "}
                  <strong>hallitse</strong> käyttäjiä.
                </>
              }
            >
              <UnfoldableCard
                title="Näin se käy"
                description1={
                  <>
                    <strong>Luo</strong> ja avaa QR-kutsukoodi lisätäksesi
                    käyttäjiä.
                  </>
                }
                description2={
                  <>
                    <strong>Hyväksy</strong> koodilla kirjautuneet käyttäjät
                    mukaan palveluusi.
                  </>
                }
                description3={
                  <>
                    <strong>Hallitse</strong> nostamalla uusia admineja tai
                    poistamalla käyttäjiä palvelustasi.
                  </>
                }
              />
            </ServiceInfoCard>

            <Card
              title="Lisää käyttäjiä"
              image={android}
              url="/app/admin/user-management/code-list"
            />
            <Card
              title="Hyväksy käyttäjiä"
              image={apple}
              url="/app/admin/user-management/approval"
            />
            <Card
              title="Hallitse käyttäjiä"
              image={windows}
              url="/app/admin/user-management"
            />
          </CardsContainer>
        </div>
      </Layout>
    </div>
  );
}
