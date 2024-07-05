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
import { Trans } from "react-i18next";

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
        navbarTitle={<Trans i18nKey="manageUsersView.navbarTitle" />}
        backUrl="/app/admin"
      >
        <div ref={cardContentRef}>
          <CardsContainer>
            <ServiceInfoCard
              title={<Trans i18nKey="manageUsersView.serviceInfoCardTitle" />}
              details={
                <Trans
                  i18nKey="manageUsersView.serviceInfoCardDetails"
                  components={{ strong: <strong /> }}
                />
              }
            />

            <UnfoldableCard
              title={<Trans i18nKey="manageUsersView.unfoldableCardTitle" />}
              description1={
                <Trans
                  i18nKey="manageUsersView.unfoldableCardDescription1"
                  components={{ strong: <strong /> }}
                />
              }
              description2={
                <Trans
                  i18nKey="manageUsersView.unfoldableCardDescription2"
                  components={{ strong: <strong /> }}
                />
              }
              description3={
                <Trans
                  i18nKey="manageUsersView.unfoldableCardDescription3"
                  components={{ strong: <strong /> }}
                />
              }
            />

            <Card
              title={<Trans i18nKey="manageUsersView.addUsers" />}
              image={android}
              url="/app/admin/user-management/code-list"
            />
            <Card
              title={<Trans i18nKey="manageUsersView.approveUsers" />}
              image={apple}
              url="/app/admin/user-management/approval"
            />
            <Card
              title={<Trans i18nKey="manageUsersView.manageUsers" />}
              image={windows}
              url="/app/admin/user-management"
            />
          </CardsContainer>
        </div>
      </Layout>
    </div>
  );
}
