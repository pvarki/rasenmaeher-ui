import { CardsContainer } from "./CardsContainer";
import { ButtonFoldableCard } from "./ButtonFoldableCard";
import { useTranslation } from "react-i18next";

interface ServiceUsageCardProps {
  children?: React.ReactNode;
}

export function ServiceUsageCard({ children }: ServiceUsageCardProps) {
  const { t } = useTranslation();
  return (
    <div>
      <CardsContainer>
        <ButtonFoldableCard title={t("serviceTakUsageView.usageModel")}>
          <div className="flex flex-col items-center justify-center p-5">
            {children}
          </div>
        </ButtonFoldableCard>
      </CardsContainer>
    </div>
  );
}
