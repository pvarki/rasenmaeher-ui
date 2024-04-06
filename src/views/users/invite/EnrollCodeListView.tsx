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
import { useTranslation, Trans } from "react-i18next";

export function EnrollCodeListView() {
  const navigate = useNavigate();
  const { openDialog } = useAlertDialog();
  const { t } = useTranslation();

  const { mutate: createInviteCode } = useCreateInviteCode({
    onSuccess: (inviteCode) => {
      navigate("/app/admin/user-management/code-list/" + inviteCode);
    },
  });

  const onCreateInviteCode = () => {
    openDialog({
      title: t("enrollCodeListView.createNewCode.title"),
      description: t("enrollCodeListView.createNewCode.description"),
      cancelLabel: t("go-back"),
      confirmLabel: t("enrollCodeListView.createNewCode.confirmButton"),
      onConfirm: () => createInviteCode(undefined),
      confirmColor: "primary",
    });
  };

  const { data: inviteCodeList } = useInviteCodeList();

  return (
    <Layout
      showNavbar={true}
      navbarTitle={t("enrollCodeListView.navbarTitle")}
      showFooter={true}
      backUrl="/app/admin/manageusers"
    >
      <CardsContainer>
        <ServiceInfoCard
          title={t("enrollCodeListView.serviceInfoCardTitle")}
          details={
            <Trans
              i18nKey="enrollCodelistView.serviceInfoCardDetails"
              components={{
                strong: <strong />,
                em: <em />,
                li: <li />,
                br: <br />,
              }}
            />
          }
        >
          <UnfoldableCard
            title={t("manageUsersView.unfoldableCardTitle")}
            description1={
              <Trans
                i18nKey="enrollCodeListView.howToDescription1"
                components={{
                  strong: <strong />,
                  em: <em />,
                  li: <li />,
                  br: <br />,
                }}
              />
            }
            description2={
              <Trans
                i18nKey="enrollCodeListView.howToDescription2"
                components={{
                  strong: <strong />,
                  em: <em />,
                  li: <li />,
                  br: <br />,
                }}
              />
            }
            description3={
              <Trans
                i18nKey="enrollCodeListView.howToDescription3"
                components={{
                  strong: <strong />,
                  em: <em />,
                  li: <li />,
                  br: <br />,
                }}
              />
            }
            description4={
              <Trans
                i18nKey="enrollCodeListView.howToDescription4"
                components={{
                  strong: <strong />,
                  em: <em />,
                  li: <li />,
                  br: <br />,
                }}
              />
            }
          />
          <div className="mt-4 mb-4 w-full">
            <Button variant={{ width: "full" }} onClick={onCreateInviteCode}>
              {t("enrollCodeListView.createNewCode.createButton")}
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
              placeholder={t("enrollCodeListView.codes.inputField")}
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
  const { t } = useTranslation();
  const statusLabelColorClass = active ? "text-green-800" : "text-gray-500";
  const statusLabelText = active
    ? t("enrollCodeListView.codes.codeIsActive")
    : t("enrollCodeListView.codes.codeIsDeactivated");

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
      title: (
        <Trans
          i18nKey="enrollCodeListView.codes.deleteModalTitle"
          components={{
            strong: <strong />,
            em: <em />,
            li: <li />,
            br: <br />,
          }}
        />
      ),
      description: (
        <Trans
          i18nKey="enrollCodeListView.codes.deleteModalDescriptions"
          components={{
            strong: <strong />,
            em: <em />,
            li: <li />,
            br: <br />,
          }}
        />
      ),
      cancelLabel: <Trans i18nKey="go-back" />,
      confirmLabel: (
        <Trans i18nKey="enrollCodeListView.codes.deleteModalConfimButton" />
      ),
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
      title: <Trans i18nKey="enrollCodeListView.codes.deactivateModalTitle" />,
      description: (
        <Trans
          i18nKey="enrollCodeListView.codes.deactivateModalDescription"
          components={{
            strong: <strong />,
            em: <em />,
            li: <li />,
            br: <br />,
          }}
        />
      ),
      cancelLabel: <Trans i18nKey="go-back" />,
      confirmLabel: (
        <Trans i18nKey="enrollCodeListView.codes.deactivateModalConfimButton" />
      ),
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
      title: <Trans i18nKey="enrollCodeListView.codes.activateModalTitle" />,
      description: (
        <Trans
          i18nKey="enrollCodeListView.codes.activateModalDescription"
          components={{
            strong: <strong />,
            em: <em />,
            li: <li />,
            br: <br />,
          }}
        />
      ),
      cancelLabel: <Trans i18nKey="go-back" />,
      confirmColor: "primary",
      confirmLabel: (
        <Trans i18nKey="enrollCodeListView.codes.activateModalConfimButton" />
      ),
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
          <ActionItem
            label={
              <Trans i18nKey="enrollCodeListView.codes.showQRCodeButton" />
            }
            onClick={onShowQRCode}
          />

          {isActive ? (
            <ActionItem
              label={
                <Trans i18nKey="enrollCodeListView.codes.deactivateModalConfimButton" />
              }
              onClick={onDeactivate}
            />
          ) : (
            <ActionItem
              label={
                <Trans i18nKey="enrollCodeListView.codes.activateModalConfimButton" />
              }
              onClick={onReactivate}
            />
          )}
          <ActionItem
            label={
              <Trans i18nKey="enrollCodeListView.codes.deleteModalConfimButton" />
            }
            onClick={onDelete}
          />
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
  label: React.ReactNode;
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
