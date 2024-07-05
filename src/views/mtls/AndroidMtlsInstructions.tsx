import { Trans } from "react-i18next";
import { UnfoldableCard } from "../../components/UnfoldableCard2";
import pic1 from "../../assets/mtls/mtls-android-1.jpg";
import pic2 from "../../assets/mtls/mtls-android-2.jpg";
import pic3 from "../../assets/mtls/mtls-android-3.jpg";
import pic4 from "../../assets/mtls/mtls-android-4.jpg";

export function AndroidInstructions() {
  return (
    <main className="flex flex-col w-full gap-3">
      <UnfoldableCard
        title={<Trans i18nKey="android-instructions.step1.title" />}
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <Trans
                i18nKey="android-instructions.step1.description"
                components={{ strong: <strong />, em: <em />, br: <br /> }}
              />
            ),
            imageSrc: pic1,
            imageClasses: "m-3 w-[200px]",
          },
        ]}
      />
      <UnfoldableCard
        title={<Trans i18nKey="android-instructions.step2.title" />}
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <Trans
                i18nKey="android-instructions.step2.description1"
                components={{ strong: <strong />, em: <em />, br: <br /> }}
              />
            ),
            imageSrc: pic2,
            imageClasses: "m-3 w-[200px]",
          },
          {
            description: (
              <Trans
                i18nKey="android-instructions.step2.description2"
                components={{ strong: <strong />, em: <em />, br: <br /> }}
              />
            ),
            imageSrc: pic3,
            imageClasses: "m-3 w-[200px]",
          },
        ]}
      />
      <UnfoldableCard
        title={<Trans i18nKey="android-instructions.step3.title" />}
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <Trans
                i18nKey="android-instructions.step3.description1"
                components={{ strong: <strong />, em: <em />, br: <br /> }}
              />
            ),
            imageSrc: pic4,
            imageClasses: "m-3 w-[200px]",
          },
          {
            description: (
              <Trans
                i18nKey="android-instructions.step3.description2"
                components={{ strong: <strong />, em: <em />, br: <br /> }}
              />
            ),
          },
        ]}
      />
    </main>
  );
}
