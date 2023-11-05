import { Button } from "../../../components/Button";
import { Layout } from "../../../components/Layout";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsVerticalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useAlertDialog } from "../../../components/AlertDialogService";
import { useInviteCodeList } from "../../../hook/api/inviteCode/useInviteCodeList";
import { useCreateInviteCode } from "../../../hook/api/inviteCode/useCreateInviteCode";
import { useNavigate } from "react-router-dom";
import { useDeleteInviteCode } from "../../../hook/api/inviteCode/useDeleteInviteCode";
import { CardsContainer } from "../../../components/CardsContainer";
import { BackgroundCard } from "../../../components/BackgroundCard";

export function EnrollCodeListView() {
  const navigate = useNavigate();
  const { openDialog } = useAlertDialog();

  const { mutate: createInviteCode } = useCreateInviteCode({
    onSuccess: (inviteCode) => {
      navigate("/app/admin/users/invite/code-list/" + inviteCode);
    },
  });

  const onCreateInviteCode = () => {
    openDialog({
      title: "Luo uusi kutsukoodi",
      description: "Kutsukoodi on kertakäyttöinen.",
      cancelLabel: "Peruuta",
      confirmLabel: "Luo kutsukoodi",
      onConfirm: () => createInviteCode(undefined),
      confirmColor: "primary",
    });
  };

  const { data: inviteCodeList } = useInviteCodeList();

  return (
    <Layout
      showNavbar={true}
      navbarTitle="Lisää käyttäjiä"
      showFooter={true}
      backUrl="/app/admin/manageusers"
    >
      <CardsContainer>
        <BackgroundCard
          title="Hallitse kutsukoodeja"
          details={
            <>
              Taistelija tarvitsee aktiivisen <strong>kutsukoodin</strong>{" "}
              liittyäkseen palveluusi. Luo uusi kutsukoodi painamalla nappia.
              Avaa luotu kutsukoodi QR-koodinäkymään <strong>painamalla</strong>{" "}
              koodia.
            </>
          }
        >
          <div className="flex bg-backgroundLight flex-col items-center gap-3 px-4 pt-2 pb-2">
            <div className="relative gap-3 flex flex-row items-center w-full bg-backgroundLight p-3 rounded-lg text-white">
              <MagnifyingGlassIcon
                width={24}
                height={24}
                className="text-white"
              />
              <input
                className="bg-backgroundLight w-full rounded-lg text-white"
                placeholder="Suodata kutsukoodeja"
              />
              <Button variant={{ width: "full" }} onClick={onCreateInviteCode}>
                Luo uusi Kutsukoodi
              </Button>
            </div>
            {inviteCodeList?.map((i) => {
              return (
                <InviteCodeRow key={i.invitecode} inviteCode={i.invitecode} />
              );
            })}
          </div>
        </BackgroundCard>
      </CardsContainer>
    </Layout>
  );
}

function InviteCodeRow({ inviteCode }: { inviteCode: string }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate("/app/admin/user-management/code-list/" + inviteCode)
      }
      className="bg-backgroundLight w-full p-3 rounded-lg flex items-center justify-between gap-5"
    >
      <span className="text-white">{inviteCode}</span>
      <DropdownMenuDemo inviteCode={inviteCode} />
    </div>
  );
}

const DropdownMenuDemo = ({ inviteCode }: { inviteCode: string }) => {
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
        deleteInviteCode(inviteCode);
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
