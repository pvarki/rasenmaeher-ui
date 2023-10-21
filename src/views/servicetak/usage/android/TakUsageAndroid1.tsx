import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { GuideSection } from "../../../../components/TakGuides/GuideSection";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../helpers/ServiceTakUsageContents";

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
        <CardsContainer>
          <UnfoldableCard
            title="Sisältö"
            styling="bg-background"
            initialOpen={true}
          >
            <ServiceTakUsageContents />
          </UnfoldableCard>
        </CardsContainer>
        <StatusBar
          title="Liikuta karttaa ja näe omat"
          progressMax={4}
          progressNow={1}
        />

        <CardsContainer>
          <GuideSection
            number="1."
            description={
              <span>
                <strong>Navigaationapit</strong> ovat vasemmassa yläkulmassa:
              </span>
            }
            imageSrc={pic27}
            imageClasses="m-3 w-[300px]"
          />
          <GuideSection
            number="2."
            description={
              <span>
                Liikuta karttapohjaa <strong>sormella.</strong>
              </span>
            }
            imageSrc={frame}
            imageClasses="align-right w-[50px]"
          />
          <GuideSection
            number="3."
            description={
              <span>
                Zoomaa karttaa <strong>nipistysotteella.</strong>
              </span>
            }
            imageSrc={frame1}
            imageClasses="align-right w-[35px]"
          />
          <GuideSection
            number="4."
            description={
              <span>
                Käännä karttapohjaa <strong>kahdella sormella.</strong>
              </span>
            }
            imageSrc={frame2}
            imageClasses="align-right w-[50px]"
          />
          <GuideSection
            number="5."
            description={
              <span>
                Oma sijaintisi näkyy <strong>nuolenpäänä.</strong>
              </span>
            }
            imageSrc={frame3}
            imageClasses="align-right w-[40px]"
          />
          <GuideSection
            number="6."
            description={
              <span>
                Muiden käyttäjien peitenimet alkavat näkyä zoomatessa.
              </span>
            }
            imageSrc={frame4}
            imageClasses="align-right w-[50px]"
          />
          <GuideSection
            number="7."
            description={
              <span>
                Muiden käyttäjien pallokuvakkeen väri kuvaa joukkueen väriä (tai
                muuta käskettyä merkitystä).
              </span>
            }
            imageSrc={frame5}
            imageClasses="align-right w-[50px]"
            image2Src={pic28}
            image2Classes="w-[300px]"
          />
          <NavigateButtons
            backUrl="/app/services/tak/Usage"
            forwardUrl="/app/services/tak/Usage/android2"
          />
        </CardsContainer>
      </Layout>
    </div>
  );
}
