import React from 'react';
import android from "../../../assets/android.svg";
import apple from "../../../assets/apple.svg";
import windows from "../../../assets/windows.svg";
import { Text } from "../../../components/Text"
import { Layout } from "../../../components/Layout"
import { Card } from "../../../components/Card";
import { CardsContainer } from "../../../components/CardsContainer";
import { NavigateButtons } from "../../../components/NavigateButtons";


export function TakQuickstartAndroid1() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} navbarTitle="Käyttöönotto-ohje TAK" backUrl="/app/services/tak">
    <Text
        title="Mitä laitetta käytät?"
      />
    <CardsContainer>
      <Card title="Android" image={android} url="app/services/tak/quickstartguide/android1" />
      <Card title="iOS" image={apple} url="app/services/tak/quickstartguide/ios1" />
      <Card title="Windows" image={windows} url="app/services/tak/quickstartguide/windows1" />
    </CardsContainer>
    <NavigateButtons />

    
    </Layout>
    </div>
  );
}

