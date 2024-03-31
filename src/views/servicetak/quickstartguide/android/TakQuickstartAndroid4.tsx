import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import ATAK from "../../../../assets/icons/tak-logo.png";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";

import atakds1 from "../../../../assets/takguides/atak/atakdatasync111.jpg";
import atakds2 from "../../../../assets/takguides/atak/atakdatasync12.jpg";
import atakds3 from "../../../../assets/takguides/atak/atakdatasync13.jpg";
import atakds4 from "../../../../assets/takguides/atak/atakdatasync14.jpg";
import pic1 from "../../../../assets/takguides/atak/atakdatasync1.png";
import pic3 from "../../../../assets/takguides/atak/atakdatasync3.png";
import pic2 from "../../../../assets/takguides/atak/datasyncatak99.png";
import pic4 from "../../../../assets/takguides/atak/atakdatasync4.png";
import pic5 from "../../../../assets/takguides/atak/atakdatasync5.png";

export function TakQuickstartAndroid4() {
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartAndroid4.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartAndroid4.statusBarTitle")}
          progressMax={5}
          progressNow={4}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <Trans
                  i18nKey="TakQuickstartAndroid4.serviceInfoCard.details"
                  components={{
                    strong: <strong />,
                    br: <br />,
                  }}
                />
              }
            />
            <UnfoldableCard
              title={t("TakQuickstartAndroid4.unfoldableCard1.title")}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartAndroid4.unfoldableCard1.step1"
                      components={{
                        strong: <strong />,
                      }}
                    />
                  ),
                  imageSrc: atakds1,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartAndroid4.unfoldableCard1.step2"
                      components={{
                        em: <em />,
                        strong: <strong />,
                      }}
                    />
                  ),
                  imageSrc: atakds2,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartAndroid4.unfoldableCard1.step3"
                      components={{
                        em: <em />,
                        strong: <strong />,
                      }}
                    />
                  ),
                  imageSrc: atakds3,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartAndroid4.unfoldableCard1.step4"
                      components={{
                        strong: <strong />,
                      }}
                    />
                  ),
                  imageSrc: atakds4,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: t("TakQuickstartAndroid4.unfoldableCard1.step5"),
                },
              ]}
            />
            <UnfoldableCard
              title={t("TakQuickstartAndroid4.unfoldableCard2.title")}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: t("TakQuickstartAndroid4.unfoldableCard2.step1"),
                  imageSrc: pic1,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartAndroid4.unfoldableCard2.step2"
                      components={{
                        strong: <strong />,
                      }}
                    />
                  ),
                },
                {
                  description: t("TakQuickstartAndroid4.unfoldableCard2.step3"),
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartAndroid4.unfoldableCard2.step4"
                      components={{
                        strong: <strong />,
                      }}
                    />
                  ),
                  imageSrc: pic2,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartAndroid4.unfoldableCard2.step5"
                      components={{
                        strong: <strong />,
                      }}
                    />
                  ),
                  imageSrc: pic3,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartAndroid4.unfoldableCard2.step6"
                      components={{
                        strong: <strong />,
                      }}
                    />
                  ),
                  note: (
                    <Trans
                      i18nKey="TakQuickstartAndroid4.unfoldableCard2.note"
                      components={{
                        strong: <strong />,
                      }}
                    />
                  ),
                },
              ]}
            />
            <UnfoldableCard
              title={t("TakQuickstartAndroid4.unfoldableCard3.title")}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartAndroid4.unfoldableCard3.step1"
                      components={{
                        br: <br />,
                        strong: <strong />,
                      }}
                    />
                  ),
                  imageSrc: pic4,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartAndroid4.unfoldableCard3.step2"
                      components={{
                        strong: <strong />,
                      }}
                    />
                  ),
                  imageSrc: pic5,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: t("TakQuickstartAndroid4.unfoldableCard3.step3"),
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/android3"
          forwardUrl="/app/services/tak/quickstart/android5"
        />
      </Layout>
    </div>
  );
}
