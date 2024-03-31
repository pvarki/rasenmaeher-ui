import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import Wintak from "../../../../assets/icons/wintak.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";
import pic14 from "../../../../assets/takguides/wintak/Kuva14.png";
import pic16 from "../../../../assets/takguides/wintak/Kuva16.png";
import pic17 from "../../../../assets/takguides/wintak/Kuva17.png";
import pic18 from "../../../../assets/takguides/wintak/Kuva18.png";
import pic19 from "../../../../assets/takguides/wintak/Kuva19.png";
import pic20 from "../../../../assets/takguides/wintak/Kuva20.png";
import pic21 from "../../../../assets/takguides/wintak/Kuva21.png";
import pic23 from "../../../../assets/takguides/wintak/Kuva23.png";
import pic24 from "../../../../assets/takguides/wintak/Kuva24.png";
import pic25 from "../../../../assets/takguides/wintak/Kuva25.png";
import pic26 from "../../../../assets/takguides/wintak/Kuva26.png";
import pic27 from "../../../../assets/takguides/wintak/Kuva27.png";

export function TakQuickstartWin3() {
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartWin3.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartWin3.statusBarTitle")}
          progressMax={4}
          progressNow={3}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="WinTAK"
              image={Wintak}
              details={
                <Trans
                  i18nKey="TakQuickstartWin3.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard1.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard1.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic14}
              image2Classes="mx-auto pr-5 w-[90px] p-4"
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard2.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard2.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic16}
              image2Classes="mx-auto pr-5 w-[300px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard2.description2"
                  components={{ strong: <strong /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard3.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard3.description1"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
              image2Src={pic17}
              image2Classes="mx-auto pr-5 w-[300px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard3.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image3Src={pic18}
              image3Classes="mx-auto pr-5 w-[300px] p-4"
              description3={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard3.description3"
                  components={{ strong: <strong /> }}
                />
              }
              image4Src={pic19}
              image4Classes="mx-auto pr-5 w-[300px] p-4"
              description4={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard3.description4"
                  components={{ strong: <strong /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard4.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard4.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic20}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description2={
                <Trans i18nKey="TakQuickstartWin3.unfoldableCard4.description2" />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard5.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard5.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic21}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard5.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image3Src={pic23}
              image3Classes="mx-auto pr-5 w-[400px] p-4"
              description3={
                <Trans i18nKey="TakQuickstartWin3.unfoldableCard5.description3" />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard6.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard6.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic24}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description2={
                <Trans i18nKey="TakQuickstartWin3.unfoldableCard6.description2" />
              }
              image3Src={pic25}
              image3Classes="mx-auto pr-5 w-[400px] p-4"
              description3={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard6.description3"
                  components={{ strong: <strong /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard7.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans i18nKey="TakQuickstartWin3.unfoldableCard7.description1" />
              }
              image2Src={pic26}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartWin3.unfoldableCard7.description2"
                  components={{ strong: <strong /> }}
                />
              }
              note={t("TakQuickstartWin3.unfoldableCard7.note")}
              image4Src={pic27}
              image4Classes="mx-auto pr-10 w-[200px] p-4"
              description3={
                <Trans i18nKey="TakQuickstartWin3.unfoldableCard7.description3" />
              }
              description4={
                <Trans i18nKey="TakQuickstartWin3.unfoldableCard7.description4" />
              }
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/win2"
          forwardUrl="/app/services/tak/quickstart/win4"
        />
      </Layout>
    </div>
  );
}
