
import android from "../../../assets/android.svg";
import sanla from "../../../assets/heroimages/kiikarit.jpeg";
import apple from "../../../assets/apple.svg";
import windows from "../../../assets/windows.svg";
import { Layout } from "../../../components/Layout"
import { Card } from "../../../components/Card";
import { CardsContainer } from "../../../components/CardsContainer";
import { ServiceInfoCard } from "../../../components/ServiceInfoCard";
import { ServiceUsageCard } from "../../../components/ServiceUsageCard";
import { ServiceTakUsageCard } from "./helpers/ServiceTakUsageCard";
import { ServiceTakUsageAtCPCard } from "./helpers/ServiceTakUsageAtCPCard";
import { ServiceTakUsageByFighterCard } from "./helpers/ServiceTakUsageByFighterCard";
import { ServiceTakUsageFlowCard } from "./helpers/ServiceTakUsageFlowCard";



export function ServiceTakUsageView() {

  return (
    <div className="pb-10">
    <Layout showNavbar={true} showFooter={true} heroImage={sanla} navbarTitle="TAK: Käyttö joukossa" backUrl="/app">
    <div className="flex flex-col flex-shrink-0">

    <CardsContainer>
      <ServiceInfoCard
        title="TAK - Käyttö joukossa"
        details="Ohjeet perusmallin mukaiseen käyttöön kullekin alustalle alla. Alustat ovat yhteensopivia, eli joukkosi ATAK, iTAK ja WinTAK -käyttäjät toimivat yhdessä."
        >
      </ServiceInfoCard>
      </CardsContainer>

      <ServiceUsageCard>
        <ServiceTakUsageCard/>
        <ServiceTakUsageFlowCard />
        <ServiceTakUsageByFighterCard />
        <ServiceTakUsageAtCPCard />
      </ServiceUsageCard>

      <CardsContainer>
      <Card title="Android" image={android} url="/app/services/tak/usage/android1" />
      <Card title="iOS" image={apple} url="/app/services/tak/usage/ios1" />
      <Card title="Windows" image={windows} url="/app/services/tak/usage/win1" />
      
    </CardsContainer>
    </div>
    

    
    </Layout>
    </div>
  );
}

