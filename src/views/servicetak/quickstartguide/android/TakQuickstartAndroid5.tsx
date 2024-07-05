import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import ATAK from "../../../../assets/icons/tak-logo.png";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";

import Settings17 from "../../../../assets/takguides/atak/17-settings2.png";
import Settings18 from "../../../../assets/takguides/atak/18-DisplaySettings1.png";
import UnitDisplay19 from "../../../../assets/takguides/atak/19-UnitDisplay1.png";
import Altitude20 from "../../../../assets/takguides/atak/20-Altitude1.png";
import UnitFormat21 from "../../../../assets/takguides/atak/21-UnitFormat1.png";
import Speedunits24 from "../../../../assets/takguides/atak/24-SpeedUnits1.png";
import Meterstokilo25 from "../../../../assets/takguides/atak/25-MetersToKilo1.png";
import Meterskmunits26 from "../../../../assets/takguides/atak/26-10001.png";
import pic07 from "../../../../assets/takguides/atak/07-Kartta1.png";
import pic08 from "../../../../assets/takguides/atak/08-OK1.png";
import Callsign11 from "../../../../assets/takguides/atak/11-Callsign1.png";
import Csprefs12 from "../../../../assets/takguides/atak/12-Csprefs1.png";
import Mycallsign13 from "../../../../assets/takguides/atak/13-MyCallsign1.png";
import Omapeite14 from "../../../../assets/takguides/atak/14-OmaPeite1.png";

export function TakQuickstartAndroid5() {
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartAndroid5.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartAndroid5.statusBarTitle")}
          progressMax={5}
          progressNow={5}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <Trans
                  i18nKey="TakQuickstartAndroid5.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard1.title"
                  components={{ strong: <strong /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard1.description1"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
              image2Src={pic07}
              image2Classes="m-3 w-[300px]"
              description2={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard1.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image3Src={pic08}
              image3Classes="m-3 w-[300px]"
              description3={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard1.description3"
                  components={{ strong: <strong /> }}
                />
              }
              image4Src={pic08}
              image4Classes="m-3 w-[300px]"
              description4={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard1.description4"
                  components={{ strong: <strong /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard2.title"
                  components={{ strong: <strong /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard2.description1"
                  components={{ strong: <strong />, em: <em />, br: <br /> }}
                />
              }
              image2Src={Settings17}
              image2Classes="m-3 w-[300px]"
              description2={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard2.description2"
                  components={{ em: <em /> }}
                />
              }
              image3Src={Settings18}
              image3Classes="m-3 w-[300px]"
              description3={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard2.description3"
                  components={{ em: <em /> }}
                />
              }
              image4Src={UnitDisplay19}
              image4Classes="m-3 w-[300px]"
              description4={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard2.description4"
                  components={{ em: <em /> }}
                />
              }
              image5Src={Altitude20}
              image5Classes="m-3 w-[300px]"
              description5={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard2.description5"
                  components={{ em: <em /> }}
                />
              }
              image6Src={UnitFormat21}
              image6Classes="m-3 w-[300px]"
              description6={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard2.description6"
                  components={{ strong: <strong /> }}
                />
              }
              image7Src={Speedunits24}
              image7Classes="m-3 w-[300px]"
              description7={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard2.description7"
                  components={{ strong: <strong /> }}
                />
              }
              image8Src={Meterstokilo25}
              image8Classes="m-3 w-[300px]"
              description8={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard2.description8"
                  components={{ strong: <strong /> }}
                />
              }
              image9Src={Meterstokilo25}
              image9Classes="m-3 w-[300px]"
              description9={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard2.description9"
                  components={{ strong: <strong /> }}
                />
              }
              imageSrc={Meterskmunits26}
              imageClasses="m-3 w-[300px]"
              description15={
                <Trans i18nKey="TakQuickstartAndroid5.unfoldableCard2.description15" />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard3.title"
                  components={{ strong: <strong /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard3.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={Callsign11}
              image2Classes="m-3 w-[300px]"
              description2={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard3.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image3Src={Csprefs12}
              image3Classes="m-3 w-[300px]"
              description4={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard3.description4"
                  components={{ strong: <strong /> }}
                />
              }
              image5Src={Mycallsign13}
              image5Classes="m-3 w-[300px]"
              description5={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard3.description5"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              image6Src={Omapeite14}
              image6Classes="m-3 w-[300px]"
              description7={
                <Trans
                  i18nKey="TakQuickstartAndroid5.unfoldableCard3.description7"
                  components={{ strong: <strong /> }}
                />
              }
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/android4"
          forwardUrl="/app/services/tak/quickstart"
          alterForward={t("TakQuickstartAndroid5.alterForward")}
        />
      </Layout>
    </div>
  );
}
