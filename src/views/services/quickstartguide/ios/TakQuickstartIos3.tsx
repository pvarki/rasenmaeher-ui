import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";
import pic21 from "../../../../assets/takguides/itak/itakserver11.png";
import pic22 from "../../../../assets/takguides/itak/itakserver21.png";
import pic23 from "../../../../assets/takguides/itak/itakserver31.png";
import pic24 from "../../../../assets/takguides/itak/itakserver41.png";
import pic25 from "../../../../assets/takguides/itak/itakserver51.png";
import pic26 from "../../../../assets/takguides/itak/itakserver61.png";

export function TakQuickstartIos3() {
  const { t } = useTranslation();

  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartIos3.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartIos3.statusBarTitle")}
          progressMax={5}
          progressNow={3}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="iTAK"
              image={ITAK}
              details={
                <Trans
                  i18nKey="TakQuickstartIos3.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartIos3.unfoldableCard1.title"
                  components={{ strong: <strong /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartIos3.unfoldableCard1.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  note: (
                    <Trans
                      i18nKey="TakQuickstartIos3.unfoldableCard1.step1.note"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic21,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
              ]}
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartIos3.unfoldableCard2.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartIos3.unfoldableCard2.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic22,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartIos3.unfoldableCard2.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic23,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartIos3.unfoldableCard2.step3"
                      components={{ em: <em /> }}
                    />
                  ),
                  imageSrc: pic24,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartIos3.unfoldableCard2.step4"
                      components={{ em: <em /> }}
                    />
                  ),
                  imageSrc: pic25,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartIos3.unfoldableCard2.step5"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic26,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
              ]}
            />
          </div>
        </CardsContainer>

        <NavigateButtons
          backUrl="/app/services/tak/quickstart/ios2"
          forwardUrl="/app/services/tak/quickstart/ios4"
        />
      </Layout>
    </div>
  );
}
