import { useState, useEffect } from "react";
import { getOperatingSystem } from "../hook/helpers/getOperatingSystem";

export function BookmarkReminder() {
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    const os = getOperatingSystem();

    switch (os) {
      case "iOS":
        setInstructions('Paina "Jaa" sen jälkeen "Lisää Koti-näkymään."');
        break;
      case "Android":
        setInstructions('Paina "Jaa" "ja sen jälkeen "Lisää Koti-näkymään."');
        break;
      case "MacOS":
        setInstructions("Paina Cmd + D ja lisää sivu suosikkeihisi.");
        break;
      case "Windows":
        setInstructions("Paina Ctrl + D ja lisää sivu suosikkeihisi.");
        break;
      case "Linux":
        setInstructions("Paina Ctrl + D ja lisää sivu suosikkeihisi.");
        break;
      default:
        setInstructions("Lisää sivu suosikkeihin nopeaa pääsyä varten.");
        break;
    }
  }, []);

  return (
    <div className="bg-[#ffc929] px-3 py-2 flex justify-between">
      <span>{instructions}</span>
    </div>
  );
}
