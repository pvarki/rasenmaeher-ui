import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

interface DropdownItem {
  label: string;
  onSelect: () => void; // Callback function when an item is selected
}

interface DropdownMenuProps {
  triggerLabel: string;
  items: DropdownItem[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  triggerLabel,
  items,
}) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className="underline cursor-pointer">
        {triggerLabel}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content className="flex flex-col text-xl text-white bg-backgroundLight shadow-lg rounded">
          {items.map((item, index) => (
            <DropdownMenuPrimitive.Item
              key={index}
              className="p-2 hover:bg-primary-800 cursor-pointer"
              onSelect={item.onSelect}
            >
              {item.label}
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};
