import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageCard } from "../helpers/ServiceTakUsageCard";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { useTranslation, Trans } from "react-i18next";
import Wintak from "../../../../assets/icons/wintak.png";
import pic1 from "../../../../assets/takguides/wintak/Kuva32.png";
import pic2 from "../../../../assets/takguides/wintak/Kuva33.png";
import pic3 from "../../../../assets/takguides/wintak/Kuva34.png";
import pic4 from "../../../../assets/takguides/wintak/Kuva35.png";
import pic5 from "../../../../assets/takguides/wintak/Kuva36.png";
import pic6 from "../../../../assets/takguides/wintak/Kuva37.png";
import pic7 from "../../../../assets/takguides/wintak/Kuva38.png";

export function TakUsageWin1() {
  const { t } = useTranslation();
  return (
    <div className="pb-32">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={<Trans i18nKey="takUsageWin1.navbarTitle" />}
        backUrl="/app/services/tak/usage"
      >
        <StatusBar
          title={t("takUsageWin1.navbarTitle")}
          progressMax={4}
          progressNow={1}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title={<Trans i18nKey="takUsageWin1.serviceInfoCard.title" />}
              image={Wintak}
              details={
                <Trans
                  i18nKey="takUsageWin1.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            >
              <ServiceTakUsageCard />
            </ServiceInfoCard>
            <UnfoldableCard
              title={<Trans i18nKey="takUsageWin1.unfoldableCard1.title" />}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans i18nKey="takUsageWin1.unfoldableCard1.step1" />
                  ),
                  imageSrc: pic1,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin1.unfoldableCard1.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic2,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin1.unfoldableCard1.step3"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic3,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin1.unfoldableCard1.step4" />
                  ),
                  imageSrc: pic4,
                  imageClasses: "m-3 w-[400px]",
                },
              ]}
            />
            <UnfoldableCard
              title={<Trans i18nKey="takUsageWin1.unfoldableCard2.title" />}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans i18nKey="takUsageWin1.unfoldableCard2.step1" />
                  ),
                  imageSrc: pic6,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin1.unfoldableCard2.step2" />
                  ),
                  imageSrc: pic5,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin1.unfoldableCard2.step3" />
                  ),
                },
              ]}
            />
            <UnfoldableCard
              title={<Trans i18nKey="takUsageWin1.unfoldableCard3.title" />}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin1.unfoldableCard3.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin1.unfoldableCard3.step2" />
                  ),
                  imageSrc: pic7,
                  imageClasses: "m-3 w-[400px]",
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage"
          forwardUrl="/app/services/tak/usage/win2"
        />
      </Layout>
    </div>
  );
}
