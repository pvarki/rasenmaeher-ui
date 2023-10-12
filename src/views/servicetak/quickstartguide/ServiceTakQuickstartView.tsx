
import android from "../../../assets/android.svg";
import apple from "../../../assets/apple.svg";
import windows from "../../../assets/windows.svg";
import { Text } from "../../../components/Text"
import { Layout } from "../../../components/Layout"
import { Card } from "../../../components/Card";
import { CardsContainer } from "../../../components/CardsContainer";



export function ServiceTakQuickstartView() {

  return (
    <div className="pb-10">
    <Layout showNavbar={true} navbarTitle="Ohje käyttöönottoon: TAK" backUrl="/app/services/tak">
    <Text
        description="Mitä laitetta käytät?"
      />
    <CardsContainer>
      <Card title="Android" image={android} url="/app/services/tak/quickstart/android1" />
      <Card title="iOS" image={apple} url="/app/services/tak/quickstart/ios1" />
      <Card title="Windows" image={windows} url="/app/services/tak/quickstart/windows1" />
      
    </CardsContainer>
    

    
    </Layout>
    </div>
  );
}

