import { Button } from "../../../components/Button";
import { Layout } from "../../../components/Layout";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsVerticalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useAlertDialog } from "../../../components/AlertDialogService";
import { useInviteCodeList } from "../../../hook/api/inviteCode/useInviteCodeList";
import { useCreateInviteCode } from "../../../hook/api/inviteCode/useCreateInviteCode";
import { useNavigate } from "react-router-dom";
import { useDeleteInviteCode } from "../../../hook/api/inviteCode/useDeleteInviteCode";
import { useDeactivateInviteCode } from "../../../hook/api/inviteCode/useDeactivateInviteCode";
import { useReactivateInviteCode } from "../../../hook/api/inviteCode/useReactivateInviteCode";
import { CardsContainer } from "../../../components/CardsContainer";
import { ServiceInfoCard } from "../../../components/ServiceInfoCard";
import { UnfoldableCard } from "../../../components/UnfoldableCard";
import { useQueryClient } from "react-query";

export function EnrollCodeListView() {
  const navigate = useNavigate();
  const { openDialog } = useAlertDialog();

  const { mutate: createInviteCode } = useCreateInviteCode({
    onSuccess: (inviteCode) => {
      navigate("/app/admin/user-management/code-list/" + inviteCode);
    },
  });

  const onCreateInviteCode = () => {
    openDialog({
      title: "Luo uusi kutsukoodi",
      description:
        "Jaa kutsukoodi käyttäjille, tai näytä heille kutsukoodin sisältävää QR-koodia.",
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
        <ServiceInfoCard
          title="Lisää käyttäjiä kutsukoodilla"
          details={
            <>
              Avaa luotu kutsukoodi QR-koodinäkymään <strong>painamalla</strong>{" "}
              koodia tai luo uusi kutsukoodi.
            </>
          }
        >
          <UnfoldableCard
            title="Näin se käy"
            description1={
              <>
                <strong>Luo</strong> uusi kutsukoodi painamalla nappia tai käytä
                aktiivista aiemmin luotua.
              </>
            }
            description2={
              <>
                <strong>Avaa</strong> kutsukoodi QR-koodinäkymään{" "}
                <strong>painamalla</strong> koodia.{" "}
                <strong>Näytä koodia</strong> käyttäjillesi.
              </>
            }
            description3={
              <>
                QR-koodilinkistä käyttäjä pääsee kirjautumaan ja syöttämään
                peitenimensä.
              </>
            }
            description4={
              <>
                Tämän jälkeen käyttäjäsi odottaa <strong>hyväksyntää</strong>.
                Näet hänet hyväksyntääsi odottavien listassa.
              </>
            }
          />
          <div className="mt-4 mb-4 w-full">
            <Button variant={{ width: "full" }} onClick={onCreateInviteCode}>
              Luo uusi Kutsu
            </Button>
          </div>
          <div className="relative gap-3 flex flex-row items-center w-full bg-backgroundLight p-3 rounded-lg text-white">
            <MagnifyingGlassIcon
              width={24}
              height={24}
              className="text-white"
            />
            <input
              className="bg-backgroundLight w-full rounded-lg text-white font-consolas"
              placeholder="Suodata kutsukoodeja"
            />
          </div>
          {inviteCodeList?.map((i) => {
            return (
              <InviteCodeRow
                key={i.invitecode}
                inviteCode={i.invitecode}
                active={i.active}
              />
            );
          })}
        </ServiceInfoCard>
      </CardsContainer>
    </Layout>
  );
}

function InviteCodeRow({
  inviteCode,
  active,
}: {
  inviteCode: string;
  active: boolean;
}) {
  const navigate = useNavigate();
  const statusLabelColorClass = active ? "text-green-800" : "text-gray-500";
  const statusLabelText = active ? "Aktiivinen" : "Deaktivoitu";

  return (
    <div
      onClick={() =>
        navigate("/app/admin/user-management/code-list/" + inviteCode)
      }
      className="bg-backgroundLight w-full p-3 rounded-lg flex items-center justify-between gap-5"
    >
      <span className={`text-white font-consolas`}>
        {inviteCode} -{" "}
        <span className={statusLabelColorClass}>{statusLabelText}</span>
      </span>
      <DropdownMenuDemo inviteCode={inviteCode} isActive={active} />
    </div>
  );
}

const DropdownMenuDemo = ({
  inviteCode,
  isActive,
}: {
  inviteCode: string;
  isActive: boolean;
}) => {
  const { openDialog } = useAlertDialog();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteInviteCode } = useDeleteInviteCode();
  const { mutate: deactivateInviteCode } = useDeactivateInviteCode();
  const { mutate: reactivateInviteCode } = useReactivateInviteCode();
  const onShowQRCode = () => {
    navigate("/app/admin/user-management/code-list/" + inviteCode);
  };

  const onDelete = () => {
    openDialog({
      title: "Olet poistamassa kutsukoodia",
      description:
        "Koodin poistaminen estää sen käytön lopullisesti. Käyttäjät, jotka ovat jo kirjautuneet tällä koodilla, eivät kuitenkaan menetä pääsyään palveluun.",
      cancelLabel: "Peruuta",
      confirmLabel: "Poista koodi",
      onConfirm: () => {
        deleteInviteCode(inviteCode, {
          onSuccess: () => {
            void queryClient.invalidateQueries("inviteCodeList");
          },
        });
      },
    });
  };

  const onDeactivate = () => {
    openDialog({
      title: "Olet deaktivoimassa kutsukoodia",
      description: (
        <div>
          {
            <>
              Koodin deaktivointi estää sen käytön, kun koodi on deaktivoituna.
              Käyttäjät, jotka ovat jo kirjautuneet tällä koodilla, eivät
              kuitenkaan menetä pääsyään palveluun. <br /> <br /> Koodilla
              kirjautumista yrittävä henkilö saa virheilmoitukseksi 'Koodi
              väärin.'
            </>
          }
        </div>
      ),
      cancelLabel: "Peruuta",
      confirmLabel: "Deaktivoi koodi",
      onConfirm: () => {
        deactivateInviteCode(inviteCode, {
          onSuccess: () => {
            void queryClient.invalidateQueries("inviteCodeList");
          },
        });
      },
    });
  };

  const onReactivate = () => {
    openDialog({
      title: "Olet aktivoimassa kutsukoodia",
      description: (
        <div>
          {
            <>
              {" "}
              Haluatko aktivoida kutsukoodin uudelleen? Kun koodi on aktivoitu,
              voi sillä jälleen kirjautua palveluun hyväksyntää odottavaksi
              käyttäjäksi.{" "}
            </>
          }
        </div>
      ),
      cancelLabel: "Peruuta",
      confirmColor: "primary",
      confirmLabel: "Aktivoi koodi",
      onConfirm: () => {
        reactivateInviteCode(inviteCode, {
          onSuccess: () => {
            void queryClient.invalidateQueries("inviteCodeList");
          },
        });
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
          <ActionItem label={"Näytä QR"} onClick={onShowQRCode} />

          {isActive ? (
            <ActionItem label={"Deaktivoi koodi"} onClick={onDeactivate} />
          ) : (
            <ActionItem label={"Aktivoi koodi"} onClick={onReactivate} />
          )}
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
      onClick={(event) => {
        event.stopPropagation();
        if (onClick) onClick();
      }}
      className="py-3 group leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
    >
      {label}
    </DropdownMenu.Item>
  );
}
