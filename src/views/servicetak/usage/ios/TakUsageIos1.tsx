import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { GuideSection } from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { ServiceTakUsageContents } from "../helpers/ServiceTakUsageContents";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";

export function TakUsageIos1() {
  return (
    <div className="pb-32">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="iTAK pikaohje"
        backUrl="/app/services/tak/usage"
      >
        <CardsContainer>
          <UnfoldableCard
            title="Ohjeen kokoonpano"
            styling="bg-background"
            initialOpen={false}
          >
            <ServiceTakUsageContents />
          </UnfoldableCard>
        </CardsContainer>
        <StatusBar title="Asenna sovellus" progressMax={4} progressNow={1} />
        <div className="flex justify-center items-center w-full">
          <CardsContainer>
            <GuideSection
              number="1."
              description="iTAK käyttö joukossa -ohjeet matkalla."
            />
          </CardsContainer>
        </div>
      </Layout>
    </div>
  );
}
