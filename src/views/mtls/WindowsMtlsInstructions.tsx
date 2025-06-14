import { Trans, useTranslation } from "react-i18next";
import { UnfoldableCard } from "../../components/UnfoldableCard2";
import pic1_en from "../../assets/mtls/en/mtls-windows-1.png";
import pic2_en from "../../assets/mtls/en/mtls-windows-2.png";
import pic3_en from "../../assets/mtls/en/mtls-windows-3.png";
import pic4_en from "../../assets/mtls/en/mtls-windows-4.png";
import pic5_en from "../../assets/mtls/en/mtls-windows-5.png";
import pic6_en from "../../assets/mtls/en/mtls-windows-6.png";
import pic7_en from "../../assets/mtls/en/mtls-windows-7.png";
import pic8_en from "../../assets/mtls/en/mtls-windows-8.png";
import pic1_fi from "../../assets/mtls/fi/mtls-windows-fi-1.png";
import pic2_fi from "../../assets/mtls/fi/mtls-windows-fi-2.png";
import pic3_fi from "../../assets/mtls/fi/mtls-windows-fi-3.png";
import pic4_fi from "../../assets/mtls/fi/mtls-windows-fi-4.png";
import pic5_fi from "../../assets/mtls/fi/mtls-windows-fi-5.png";
import pic6_fi from "../../assets/mtls/fi/mtls-windows-fi-6.png";
import pic7_fi from "../../assets/mtls/fi/mtls-windows-fi-7.png";
import pic8_fi from "../../assets/mtls/fi/mtls-windows-fi-8.png";

export function WindowsInstructions() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language.startsWith("en");

  const pic1 = isEnglish ? pic1_en : pic1_fi;
  const pic2 = isEnglish ? pic2_en : pic2_fi;
  const pic3 = isEnglish ? pic3_en : pic3_fi;
  const pic4 = isEnglish ? pic4_en : pic4_fi;
  const pic5 = isEnglish ? pic5_en : pic5_fi;
  const pic6 = isEnglish ? pic6_en : pic6_fi;
  const pic7 = isEnglish ? pic7_en : pic7_fi;
  const pic8 = isEnglish ? pic8_en : pic8_fi;

  return (
    <main className="flex flex-col w-full gap-3">
      <UnfoldableCard
        title={<Trans i18nKey="windows-instructions.step1.title" />}
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step1.description"
                components={{ strong: <strong />, br: <br /> }}
              />
            ),
            imageSrc: pic1,
            imageClasses: "m-3 w-[300px]",
          },
        ]}
      />
      <UnfoldableCard
        title={<Trans i18nKey="windows-instructions.step2.title" />}
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step2a.description"
                components={{ em: <em />, strong: <strong /> }}
              />
            ),
            imageSrc: pic2,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step2b.description"
                components={{ strong: <strong /> }}
              />
            ),
            imageSrc: pic3,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step2c.description"
                components={{ em: <em />, strong: <strong />, br: <br /> }}
              />
            ),
            imageSrc: pic4,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step2d.description"
                components={{ strong: <strong /> }}
              />
            ),
            imageSrc: pic5,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step2e.description"
                components={{ strong: <strong /> }}
              />
            ),
            imageSrc: pic6,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <Trans i18nKey="windows-instructions.step2f.description" />
            ),
            imageSrc: pic7,
            imageClasses: "m-3 w-[500px]",
          },
        ]}
      />
      <UnfoldableCard
        title={<Trans i18nKey="windows-instructions.step3.title" />}
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step3a.description"
                components={{ em: <em />, strong: <strong /> }}
              />
            ),
            imageSrc: pic8,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <Trans i18nKey="windows-instructions.step3b.description" />
            ),
          },
        ]}
      />
    </main>
  );
}
