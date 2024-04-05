import React, { useState, useEffect } from "react";
import { DropdownMenu } from "../DropdownMenu";

interface DropdownOsSelectorProps {
  initialOS: string;
  osOptions: { label: string; value: string }[];
  onOSChange: (selectedOS: string) => void;
}

const DropdownOsSelector: React.FC<DropdownOsSelectorProps> = ({
  initialOS,
  osOptions,
  onOSChange,
}) => {
  const [selectedOS, setSelectedOS] = useState(initialOS);

  useEffect(() => {
    onOSChange(selectedOS);
  }, [selectedOS, onOSChange]);

  const triggerStyle =
    "p-2 bg-primary-800 rounded-md hover:bg-primary-900 cursor-pointer";
  const contentStyle =
    "flex flex-col text-white bg-background rounded-md text-xl shadow-lg rounded";

  return (
    <DropdownMenu
      triggerLabel={
        osOptions.find((option) => option.value === selectedOS)?.label ||
        "Select OS"
      }
      items={osOptions}
      onSelect={setSelectedOS}
      triggerStyle={triggerStyle}
      contentStyle={contentStyle}
    />
  );
};

export default DropdownOsSelector;
