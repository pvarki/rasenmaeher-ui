import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageCard } from "../helpers/ServiceTakUsageCard";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import ATAK from "../../../../assets/icons/tak-logo.png";
import pic27 from "../../../../assets/takguides/atak/27-BaseMap.png";
import pic28 from "../../../../assets/takguides/atak/28-Map.png";
import frame1 from "../../../../assets/takguides/atak/Frame-1.png";
import frame2 from "../../../../assets/takguides/atak/Frame-2.png";
import frame3 from "../../../../assets/takguides/atak/Frame-3.png";
import frame4 from "../../../../assets/takguides/atak/Frame-4.png";
import frame5 from "../../../../assets/takguides/atak/Frame-5.png";
import frame from "../../../../assets/takguides/atak/Frame.png";

export function TakUsageAndroid1() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="ATAK: Käyttö joukossa"
        backUrl="/app/services/tak/Usage"
      >
        <StatusBar
          title="Liikuta karttaa ja näe omat (1/4)"
          progressMax={4}
          progressNow={1}
        />

        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <>
                  Käyttö joukossa ATAK - vaihe 1:{" "}
                  <strong>liikuta karttaa ja näe omat</strong>
                  <br />
                </>
              }
            >
              <ServiceTakUsageCard />
            </ServiceInfoCard>
            <UnfoldableCard
              title="1. Liikuta karttaa"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      <strong>Navigaationapit</strong> ovat vasemmassa
                      yläkulmassa:
                    </>
                  ),
                  imageSrc: pic27,
                  imageClasses: "m-3 w-[300px]",
                },
                {
                  description: (
                    <>
                      <span>
                        a. Liikuta karttapohjaa <strong>sormella.</strong>
                      </span>
                    </>
                  ),
                  imageSrc: frame,
                  imageClasses: "align-right w-[50px]",
                },
                {
                  description: (
                    <>
                      <span>
                        b. Zoomaa karttaa <strong>nipistysotteella.</strong>
                      </span>
                    </>
                  ),
                  imageSrc: frame1,
                  imageClasses: "align-right w-[35px]",
                },
                {
                  description: (
                    <>
                      <span>
                        c. Käännä karttapohjaa{" "}
                        <strong>kahdella sormella.</strong>
                      </span>
                    </>
                  ),
                  imageSrc: frame2,
                  imageClasses: "align-right w-[50px]",
                },
              ]}
            />
            <UnfoldableCard
              title="2. Oma ja muiden sijainti"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      <span>
                        a. Oma sijaintisi näkyy <strong>nuolenpäänä.</strong>
                      </span>
                    </>
                  ),
                  imageSrc: frame3,
                  imageClasses: "align-right w-[40px]",
                },
                {
                  description: (
                    <>
                      <span>
                        b. Muiden käyttäjien peitenimet alkavat näkyä
                        zoomatessa.
                      </span>
                    </>
                  ),
                  imageSrc: frame4,
                  imageClasses: "align-right w-[50px]",
                },
                {
                  description: (
                    <>
                      <span>
                        c. Muiden käyttäjien pallokuvakkeen väri kuvaa joukkueen
                        väriä (tai muuta käskettyä merkitystä).
                      </span>
                    </>
                  ),
                  imageSrc: frame5,
                  imageClasses: "align-right w-[50px]",
                },
                {
                  imageSrc: pic28,
                  imageClasses: "w-[300px]",
                },
              ]}
            />
            <NavigateButtons
              backUrl="/app/services/tak/Usage"
              forwardUrl="/app/services/tak/Usage/android2"
            />
          </div>
        </CardsContainer>
      </Layout>
    </div>
  );
}
