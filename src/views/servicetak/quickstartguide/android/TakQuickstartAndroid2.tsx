import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import data2 from "../../../../assets/takguides/atak/02-DataPackage.png";
import etsi3 from "../../../../assets/takguides/atak/03-EtsiKansio.png";
import done4 from "../../../../assets/takguides/atak/04-Done.png";
import ilmo5 from "../../../../assets/takguides/atak/05-SaatIlmoituksen.png";
import yhteys6 from "../../../../assets/takguides/atak/06-VarmistaYhteys.png";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { Trans, useTranslation } from "react-i18next";
import ATAK from "../../../../assets/icons/tak-logo.png";

export function TakQuickstartAndroid2() {
  const { t } = useTranslation();

  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartAndroid2.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartAndroid2.statusBarTitle")}
          progressMax={5}
          progressNow={2}
        />

        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <Trans
                  i18nKey="TakQuickstartAndroid2.serviceInfoCard.details"
                  components={{
                    strong: <strong />,
                    br: <br />,
                  }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartAndroid2.unfoldableCard1.title"
                  components={{
                    strong: <strong />,
                    em: <em />,
                    br: <br />,
                  }}
                />
              }
              styling="bg-backgroundLight"
              image2Classes="m-3 w-[300px]"
              description1={
                <Trans
                  i18nKey="TakQuickstartAndroid2.unfoldableCard1.description1"
                  components={{
                    strong: <strong />,
                    em: <em />,
                    br: <br />,
                  }}
                />
              }
              image2Src={data2}
              description2={
                <Trans
                  i18nKey="TakQuickstartAndroid2.unfoldableCard1.description2"
                  components={{
                    strong: <strong />,
                    em: <em />,
                    br: <br />,
                  }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartAndroid2.unfoldableCard2.title"
                  components={{
                    strong: <strong />,
                    em: <em />,
                  }}
                />
              }
              styling="bg-backgroundLight"
              imageSrc={etsi3}
              imageClasses="m-3 w-[300px]"
              description2={
                <Trans
                  i18nKey="TakQuickstartAndroid2.unfoldableCard2.description2"
                  components={{
                    strong: <strong />,
                    br: <br />,
                    em: <em />,
                  }}
                />
              }
              description3={
                <Trans
                  i18nKey="TakQuickstartAndroid2.unfoldableCard2.description3"
                  components={{
                    strong: <strong />,
                    em: <em />,
                    br: <br />,
                  }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartAndroid2.unfoldableCard3.title"
                  components={{
                    strong: <strong />,
                    em: <em />,
                  }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartAndroid2.unfoldableCard3.description1"
                  components={{
                    strong: <strong />,
                    em: <em />,
                    br: <br />,
                  }}
                />
              }
              image2Src={done4}
              image2Classes="m-3 w-[300px]"
              description2={
                <Trans
                  i18nKey="TakQuickstartAndroid2.unfoldableCard3.description2"
                  components={{
                    strong: <strong />,
                    em: <em />,
                    br: <br />,
                  }}
                />
              }
              image3Src={ilmo5}
              image3Classes="m-3 w-[300px]"
              description3={
                <Trans
                  i18nKey="TakQuickstartAndroid2.unfoldableCard3.description3"
                  components={{
                    strong: <strong />,
                    em: <em />,
                    br: <br />,
                  }}
                />
              }
              image4Src={yhteys6}
              image4Classes="m-3 w-[300px]"
              description4={
                <Trans
                  i18nKey="TakQuickstartAndroid2.unfoldableCard3.description4"
                  components={{
                    strong: <strong />,
                    em: <em />,
                    br: <br />,
                  }}
                />
              }
            />
          </div>
        </CardsContainer>

        <NavigateButtons
          backUrl="/app/services/tak/quickstart/android1"
          forwardUrl="/app/services/tak/quickstart/android3"
        />
      </Layout>
    </div>
  );
}
