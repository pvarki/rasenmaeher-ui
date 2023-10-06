import QRCode from "react-qr-code";
import { Navbar } from "../../../components/Navbar";
import { Button } from "../../../components/Button";

import React, { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
  CheckIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  CropIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import * as Checkbox from "@radix-ui/react-checkbox";
import { useAlertDialog } from "../../../components/AlertDialogService";
import { InviteCodeItem, useInviteCodeList } from "../../../hook/api/inviteCode/useInviteCodeList";
import { useCreateInviteCode } from "../../../hook/api/inviteCode/useCreateInviteCode";
import { useNavigate } from "react-router-dom";
import { useDeleteInviteCode } from "../../../hook/api/inviteCode/useDeleteInviteCode";

export function EnrollCodeListView() {
  const navigate = useNavigate()
  const {openDialog} = useAlertDialog()

  const { mutate: createInviteCode } = useCreateInviteCode({
    onSuccess: (inviteCode) => {
      navigate('/app/users/invite/code-list/' + inviteCode)
    },
  })

  const onCreateInviteCode = () => {
    openDialog({
      title: 'Luo uusi kutsukoodi',
      description: 'Kutsukoodi on kertakäyttöinen.',
      cancelLabel: 'Peruuta',
      confirmLabel: 'Luo kutsukoodi',
      onConfirm: () => createInviteCode(undefined),
      confirmColor: 'primary',
    })
  }

  const { data: inviteCodeList } = useInviteCodeList();

  return (
    <div className="flex flex-col items-center gap-3">
      <Navbar title="Kutsu koodit" backUrl="/app/user-management" />
      <Button variant={{width: 'full'}} onClick={onCreateInviteCode}>Luo uusi Kutsukoodi</Button>
      <Button variant={{width: 'full'}} onClick={() => navigate('/app/user-management/approval')}>Hyväksyntä sivu</Button>
      <div className="relative gap-3 flex flex-row items-center w-full bg-backgroundLight p-3 rounded-lg text-white">
        <MagnifyingGlassIcon width={24} height={24} className="text-white" />
        <input
          className="bg-backgroundLight w-full rounded-lg text-white"
          placeholder="Suodata kutsukoodeja"
        />
      </div>
      {inviteCodeList?.map((i) => {
        return <InviteCodeRow key={i.invitecode} inviteCode={i.invitecode} />;
      })}
    </div>
  );
}

function InviteCodeRow({inviteCode}: {inviteCode: string}) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/app/user-management/code-list/' + inviteCode)} className="bg-backgroundLight w-full p-3 rounded-lg flex items-center justify-between gap-5">
      <span className="text-white">{inviteCode}</span>
      <DropdownMenuDemo inviteCode={inviteCode}/>
    </div>
  );
}

const DropdownMenuDemo = ({inviteCode}: {inviteCode: string}) => {

  const { openDialog } = useAlertDialog();

  const { mutate: deleteInviteCode } = useDeleteInviteCode();

  const onDelete = () => {
    openDialog({
      title: "Olet poistamassa kutsukoodia",
      description:
        "Koodin poistaminen estää sen käytön. Koodi ei kuitenkaan poistu käyttäjien tileiltä.",
      cancelLabel: "Peruuta",
      confirmLabel: "Poista koodi",
      onConfirm: () => {
        deleteInviteCode(inviteCode)
      },
    });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="text-white rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 hover:bg-background  outline-none">
          <DotsVerticalIcon height={20} width={20} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-[#444] flex flex-col gap-2 text-white rounded-md p-2 will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
          collisionPadding={12}
        >
          <ActionItem
            label={"Näytä QR"}
            onClick={() => console.log("poista")}
          />
          <ActionItem
            label={"Poista käytöstä"}
            onClick={() => console.log("poista")}
          />
          <ActionItem label={"Poista koodi"} onClick={onDelete} />
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

function ActionItem({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <DropdownMenu.Item
      onClick={onClick}
      className="py-3 group leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
    >
      {label}
    </DropdownMenu.Item>
  );
}
