import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { useTranslation, Trans } from "react-i18next";
import Wintak from "../../../../assets/icons/wintak.png";

import pic9 from "../../../../assets/takguides/wintak/Kuva39.png";
import pic10 from "../../../../assets/takguides/wintak/Kuva40.png";
import pic11 from "../../../../assets/takguides/wintak/Kuva41.png";
import pic12 from "../../../../assets/takguides/wintak/Kuva42.png";
import pic13 from "../../../../assets/takguides/wintak/Kuva43.png";
import pic15 from "../../../../assets/takguides/wintak/Kuva45.png";
import pic17 from "../../../../assets/takguides/wintak/Kuva47.png";
import pic18 from "../../../../assets/takguides/wintak/Kuva48.png";
import pic19 from "../../../../assets/takguides/wintak/Kuva49.png";
import pic20 from "../../../../assets/takguides/wintak/Kuva50.png";
import pic23 from "../../../../assets/takguides/wintak/Kuva53.png";
import pic24 from "../../../../assets/takguides/wintak/Kuva54.png";
import pic25 from "../../../../assets/takguides/wintak/Kuva55.png";
import pic26 from "../../../../assets/takguides/wintak/Kuva56.png";
import pic27 from "../../../../assets/takguides/wintak/Kuva57.png";
import pic28 from "../../../../assets/takguides/wintak/Kuva58.png";
import { ProductData } from "../../ProductData";
import { useProductData } from "../../useProductData";
import { ServiceProductUsageCard } from "../helpers/ServiceProductUsageCard";

export function TakUsageWin2() {
  const { t , i18n } = useTranslation();
  const productData : ProductData = useProductData(i18n.language);
  return (
    <div className="pb-32">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={<Trans i18nKey="takUsageWin2.navbarTitle" />}
        backUrl="/app/services/tak/Usage"
      >
        <StatusBar
          title={t("takUsageWin2.navbarTitle")}
          progressMax={4}
          progressNow={2}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title={<Trans i18nKey="takUsageWin2.serviceInfoCard.title" />}
              image={Wintak}
              details={
                <Trans
                  i18nKey="takUsageWin2.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            >
                <ServiceProductUsageCard
                    title={productData.usageCardTitle}
                    content={productData.usageCardContent}
                />
            </ServiceInfoCard>
            <UnfoldableCard
              title={<Trans i18nKey="takUsageWin2.unfoldableCard1.title" />}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard1.step1"
                      components={{
                        strong: <strong />,
                        ul: <ul />,
                        li: <li />,
                      }}
                    />
                  ),
                  imageSrc: pic9,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard1.step2"
                      components={{
                        strong: <strong />,
                        br: <br />,
                        em: <em />,
                        ul: <ul />,
                        li: <li />,
                      }}
                    />
                  ),
                  imageSrc: pic10,
                  imageClasses: "m-3 w-[400px]",
                  note: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard1.note1"
                      components={{ em: <em /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard1.step3"
                      components={{
                        strong: <strong />,
                        ul: <ul />,
                        li: <li />,
                      }}
                    />
                  ),
                  imageSrc: pic11,
                  imageClasses: "m-3 w-[400px]",
                  note: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard1.note2"
                      components={{ em: <em />, strong: <strong /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin2.unfoldableCard1.step4" />
                  ),
                  imageSrc: pic12,
                  imageClasses: "m-3 w-[400px]",
                },
              ]}
            />

            <UnfoldableCard
              title={<Trans i18nKey="takUsageWin2.unfoldableCard2.title" />}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard2.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic12,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard2.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic13,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin2.unfoldableCard2.step3" />
                  ),
                },
              ]}
            />
            <UnfoldableCard
              title={<Trans i18nKey="takUsageWin2.unfoldableCard3.title" />}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans i18nKey="takUsageWin2.unfoldableCard3.step1" />
                  ),
                  imageSrc: pic15,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard3.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic17,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard3.step3"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
              ]}
            />
            <UnfoldableCard
              title={<Trans i18nKey="takUsageWin2.unfoldableCard4.title" />}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard4.step1"
                      components={{
                        strong: <strong />,
                        br: <br />,
                        li: <li />,
                      }}
                    />
                  ),
                  imageSrc: pic18,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard4.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic19,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard4.step3"
                      components={{
                        strong: <strong />,
                        li: <li />,
                        br: <br />,
                      }}
                    />
                  ),
                  note: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard4.note1"
                      components={{ em: <em /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard4.step4"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic20,
                  imageClasses: "mx-auto pr-5 w-[300px] p-4",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard4.step5"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  note: <Trans i18nKey="takUsageWin2.unfoldableCard4.note2" />,
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin2.unfoldableCard4.step6" />
                  ),
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin2.unfoldableCard4.step7" />
                  ),
                  imageSrc: pic25,
                },
              ]}
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="takUsageWin2.unfoldableCardExample.title"
                  components={{ em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCardExample.step1"
                      components={{ em: <em /> }}
                    />
                  ),
                  imageSrc: pic20,
                  imageClasses: "mx-auto pr-5 w-[300px] p-4",
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin2.unfoldableCardExample.step2" />
                  ),
                  imageSrc: pic23,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin2.unfoldableCardExample.step3" />
                  ),
                  imageSrc: pic24,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin2.unfoldableCardExample.step4" />
                  ),
                  imageSrc: pic25,
                },
              ]}
            />
            <UnfoldableCard
              title={<Trans i18nKey="takUsageWin2.unfoldableCard5.title" />}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard5.step1"
                      components={{
                        em: <em />,
                        strong: <strong />,
                        br: <br />,
                      }}
                    />
                  ),
                  note: <Trans i18nKey="takUsageWin2.unfoldableCard5.note1" />,
                },
              ]}
            />
            <UnfoldableCard
              title={<Trans i18nKey="takUsageWin2.unfoldableCard7.title" />}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard7.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic26,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard7.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic27,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin2.unfoldableCard7.step3" />
                  ),
                  imageSrc: pic28,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin2.unfoldableCard7.step4"
                      components={{
                        strong: <strong />,
                        li: <li />,
                        br: <br />,
                      }}
                    />
                  ),
                  imageSrc: pic25,
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin2.unfoldableCard7.step5" />
                  ),
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage/win1"
          forwardUrl="/app/services/tak/usage/win3"
        />
      </Layout>
    </div>
  );
}
