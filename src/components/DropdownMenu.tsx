import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

interface DropdownItem {
  label: string;
  value: string; // Added to uniquely identify the item
}

interface DropdownMenuProps {
  triggerLabel: string;
  items: DropdownItem[];
  onSelect: (value: string) => void; // Centralized callback for item selection
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  triggerLabel,
  items,
  onSelect,
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
              onSelect={() => onSelect(item.value)} // Use the passed onSelect with item's value
            >
              {item.label}
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};
