import { useEffect, useRef } from "react";
import android from "../../assets/icons/qrcode.svg";
import sanla from "../../assets/heroimages/ryhmä.jpeg";
import apple from "../../assets/icons/trooper3.png";
import windows from "../../assets/icons/useredi2.svg";
import kcicon from "../../assets/icons/kclogo.svg";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { CardsContainer } from "../../components/CardsContainer";
import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import { UnfoldableCard } from "../../components/UnfoldableCard2";
import { Trans } from "react-i18next";

export function ManageUsersView() {
  const cardContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 60);
  }, []);

  // Construct the Keycloak URL dynamically:
  // Remove a leading "mtls." from the hostname if present,
  // then add the "kc." prefix, port, and fixed path.
  const currentDomain = window.location.hostname.replace(/^mtls\./, "");
  const keycloakUrl = `https://kc.${currentDomain}:9443/admin/RASENMAEHER/console/`;

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
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="manageUsersView.unfoldableCardDescription1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans
                      i18nKey="manageUsersView.unfoldableCardDescription2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans
                      i18nKey="manageUsersView.unfoldableCardDescription3"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
              ]}
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

            <div className="w-full mt-4">
              <UnfoldableCard
                title={<Trans i18nKey="manageUsersView.keycloakAccess" />}
                styling="bg-backgroundLight w-full"
                steps={[
                  {
                    description: (
                      <Trans
                        i18nKey="manageUsersView.keycloakAccessDesc1"
                        components={{ strong: <strong /> }}
                      />
                    ),
                  },
                  {
                    imageSrc: kcicon,
                    imageClasses: "w-36 h-12 mx-auto",
                    description: (
                      <Trans
                        i18nKey="manageUsersView.keycloakAccessDesc2"
                        components={{ strong: <strong /> }}
                      />
                    ),
                  },
                ]}
                content={
                  <div className="w-full flex justify-center mt-4">
                    <a
                      href={keycloakUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full max-w-[400px] mx-auto text-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition"
                    >
                      <Trans i18nKey="manageUsersView.openKeycloak" />
                    </a>
                  </div>
                }
              />
            </div>
          </CardsContainer>
        </div>
      </Layout>
    </div>
  );
}
