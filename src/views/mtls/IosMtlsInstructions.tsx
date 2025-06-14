import { Trans } from "react-i18next";
import { UnfoldableCard } from "../../components/UnfoldableCard2";
import pic1 from "../../assets/mtls/fi/mtls-ios-1.png";
import pic2 from "../../assets/mtls/fi/mtls-ios-2.png";
import pic3 from "../../assets/mtls/fi/mtls-ios-3.png";
import pic4 from "../../assets/mtls/fi/mtls-ios-4.png";
import pic5 from "../../assets/mtls/fi/mtls-ios-5.png";
import pic6 from "../../assets/mtls/fi/mtls-ios-6.png";
import pic7 from "../../assets/mtls/fi/mtls-ios-7.png";
import pic8 from "../../assets/mtls/fi/mtls-ios-8.png";
import pic9 from "../../assets/mtls/fi/mtls-ios-9.png";

export function IosInstructions() {
  return (
    <main className="flex flex-col w-full gap-3">
      <UnfoldableCard
        title={<Trans i18nKey="ios-instructions.step1.title" />}
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <Trans
                i18nKey="ios-instructions.step1.description1"
                components={{ strong: <strong />, br: <br /> }}
              />
            ),
            imageSrc: pic1,
            imageClasses: "p-6",
          },
          {
            description: (
              <Trans i18nKey="ios-instructions.step1.description2" />
            ),
            imageSrc: pic2,
            imageClasses: "p-6",
          },
        ]}
      />
      <UnfoldableCard
        title={<Trans i18nKey="ios-instructions.step2.title" />}
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <Trans
                i18nKey="ios-instructions.step2.description1"
                components={{ strong: <strong />, em: <em /> }}
              />
            ),
            imageSrc: pic3,
            imageClasses: "p-6",
          },
          {
            description: (
              <Trans
                i18nKey="ios-instructions.step2.description2"
                components={{ strong: <strong /> }}
              />
            ),
            imageSrc: pic4,
            imageClasses: "p-6",
          },
        ]}
      />
      <UnfoldableCard
        title={<Trans i18nKey="ios-instructions.step3.title" />}
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <Trans i18nKey="ios-instructions.step3.description1" />
            ),
            imageSrc: pic5,
            imageClasses: "p-6",
          },
          {
            description: (
              <Trans
                i18nKey="ios-instructions.step3.description2"
                components={{ strong: <strong /> }}
              />
            ),
            imageSrc: pic6,
            imageClasses: "p-6",
          },
          {
            description: (
              <Trans
                i18nKey="ios-instructions.step3.description3"
                components={{ strong: <strong /> }}
              />
            ),
            imageSrc: pic7,
            imageClasses: "p-6",
          },
          {
            description: (
              <Trans
                i18nKey="ios-instructions.step3.description4"
                components={{ strong: <strong /> }}
              />
            ),
            imageSrc: pic8,
            imageClasses: "p-6",
          },
          {
            description: (
              <Trans
                i18nKey="ios-instructions.step3.description5"
                components={{ strong: <strong /> }}
              />
            ),
            imageSrc: pic9,
            imageClasses: "p-6",
          },
          {
            description: (
              <Trans
                i18nKey="ios-instructions.step3.description6"
                components={{ strong: <strong />, em: <em />, br: <br /> }}
              />
            ),
          },
        ]}
      />
    </main>
  );
}
