import { useTranslation } from "react-i18next";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function LanguageDropdown() {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    void i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="underline cursor-pointer">
        <span>Language</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="flex flex-col text-xl bg-background border border-gray-300 shadow-lg rounded">
          <DropdownMenu.Item
            className="p-2 text-white hover:bg-gray-800"
            onSelect={() => changeLanguage("en")}
          >
            English
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="p-2 text-white hover:bg-gray-800"
            onSelect={() => changeLanguage("fi")}
          >
            Suomi
          </DropdownMenu.Item>
          {/* Add more languages as needed */}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
