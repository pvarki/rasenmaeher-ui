import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import ATAK from "../../../../assets/icons/tak-logo.png";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";
import Settings10 from "../../../../assets/takguides/atak/10-Settings1.png";
import MyTeam15 from "../../../../assets/takguides/atak/15-MyTeam1.png";
import MyRole16 from "../../../../assets/takguides/atak/16-MyRole1.png";

export function TakQuickstartAndroid3() {
  const { t } = useTranslation();

  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartAndroid3.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartAndroid3.statusBarTitle")}
          progressMax={5}
          progressNow={3}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <Trans
                  i18nKey="TakQuickstartAndroid3.serviceInfoCard.details"
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
                  i18nKey="TakQuickstartAndroid3.unfoldableCard1.title"
                  components={{ strong: <strong /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartAndroid3.unfoldableCard1.description1"
                  components={{
                    strong: <strong />,
                    em: <em />,
                    br: <br />,
                  }}
                />
              }
              imageSrc={Settings10}
              imageClasses="m-3 w-[250px]"
              description2={
                <Trans
                  i18nKey="TakQuickstartAndroid3.unfoldableCard1.description2"
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
                  i18nKey="TakQuickstartAndroid3.unfoldableCard2.title"
                  components={{ strong: <strong /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartAndroid3.unfoldableCard2.description1"
                  components={{
                    strong: <strong />,
                    em: <em />,
                    br: <br />,
                  }}
                />
              }
              image2Src={MyTeam15}
              image2Classes="m-3 w-[300px]"
              description2={
                <Trans
                  i18nKey="TakQuickstartAndroid3.unfoldableCard2.description2"
                  components={{
                    strong: <strong />,
                    em: <em />,
                    br: <br />,
                  }}
                />
              }
              image3Src={MyRole16}
              image3Classes="m-3 w-[300px]"
              description3={
                <Trans
                  i18nKey="TakQuickstartAndroid3.unfoldableCard2.description3"
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
          backUrl="/app/services/tak/quickstart/android2"
          forwardUrl="/app/services/tak/quickstart/android4"
        />
      </Layout>
    </div>
  );
}
