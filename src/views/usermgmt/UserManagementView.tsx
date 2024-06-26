import { useMemo, useState, useCallback } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useUsers } from "../../hook/api/useUsers";
import { Layout } from "../../components/Layout";
import { BackgroundCard } from "../../components/BackgroundCard";
import { CardsContainer } from "../../components/CardsContainer";
import { useDeleteUser } from "../../hook/api/useDeleteUser";
import { usePromoteUser } from "../../hook/api/usePromoteUser";
import { useDemoteUser } from "../../hook/api/useDemoteUser";
import { useQueryClient } from "react-query";
import { Button } from "../../components/Button";
import { UnfoldableCard } from "../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import { useTranslation, Trans } from "react-i18next";
import fightericon from "../../assets/icons/jager.svg";
import adminicon from "../../assets/icons/alikessu.svg";
import * as Dialog from "@radix-ui/react-dialog";

interface UserDetails {
  callsign: string;
}

interface UserListAccordionProps {
  onUserClick: (user: UserDetails) => void;
}

export function UserManagementView() {
  const [isRejected, setIsRejected] = useState(false);
  const [rejectionMessage, setRejectionMessage] = useState("");
  const [confirmReject, setConfirmReject] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const queryClient = useQueryClient();
  const [selectedUser, setSelectedUser] = useState<UserDetails | null>(null);
  const [confirmPromote, setConfirmPromote] = useState(false);
  const [confirmDemote, setConfirmDemote] = useState(false);
  const { t } = useTranslation();
  const { data: userList } = useUsers();
  const adminList = useMemo(
    () => userList?.filter((user) => user.roles.includes("admin")) ?? [],
    [userList],
  );

  const { mutate: deleteMutation } = useDeleteUser({
    onSuccess: () => {
      setRejectionMessage(t("userManagement.rejectionSuccessMessage"));
      setIsRejected(true);
      void queryClient.invalidateQueries(["enrollmentList"]);
      setDialogOpen(false);
    },
    onError: (error) => {
      setRejectionMessage(
        `${t("userManagement.rejectionFailedMessage")}: ${error.message}`,
      );
      setIsError(true);
    },
  });

  const handleReject = () => {
    if (selectedUser) {
      void deleteMutation(selectedUser.callsign);
    }
    setConfirmReject(false);
  };

  const { mutate: promoteMutation } = usePromoteUser({
    onSuccess: () => {
      setDialogOpen(false);
      void queryClient.invalidateQueries(["enrollmentList"]);
    },
  });

  const { mutate: demoteMutation } = useDemoteUser({
    onSuccess: () => {
      setDialogOpen(false);
      void queryClient.invalidateQueries(["enrollmentList"]);
    },
  });

  const handlePromote = () => {
    if (selectedUser) {
      void promoteMutation({ callsign: selectedUser.callsign });
    }
  };

  const handleDemote = () => {
    if (selectedUser) {
      void demoteMutation({ callsign: selectedUser.callsign });
    }
  };

  const handleConfirmPromote = () => {
    if (selectedUser) {
      void promoteMutation({ callsign: selectedUser.callsign });
    }
    setConfirmPromote(false);
  };

  const handleConfirmDemote = () => {
    if (selectedUser) {
      void demoteMutation({ callsign: selectedUser.callsign });
    }
    setConfirmDemote(false);
  };

  const closeModal = () => {
    setDialogOpen(false);
    setIsError(false);
    setSelectedUser(null);
    setRejectionMessage("");
  };

  const closeRejectionModal = () => {
    setIsRejected(false);
    void queryClient.invalidateQueries(["enrollmentList"]);
  };

  const DialogButtons = () => {
    const isAdmin = adminList.some(
      (user) => user.callsign === selectedUser?.callsign,
    );
    if (isError) {
      return (
        <Button variant={{ color: "success" }} onClick={closeModal}>
          {t("OK")}
        </Button>
      );
    }
    if (isRejected) {
      return (
        <Button variant={{ color: "success" }} onClick={closeRejectionModal}>
          {t("OK")}
        </Button>
      );
    }
    return (
      <>
        <Dialog.Close asChild>
          <Button variant={{ color: "tertiary" }} onClick={closeModal}>
            {t("go-back")}
          </Button>
        </Dialog.Close>
        <Button
          variant={{ color: "error" }}
          onClick={() => setConfirmReject(true)}
        >
          {t("userManagement.revoke.revokeButton")}
        </Button>
        {!isAdmin && (
          <Button
            variant={{ color: "success" }}
            onClick={() => setConfirmPromote(true)}
          >
            {t("userManagement.promote.promoteButton")}
          </Button>
        )}
        {isAdmin && (
          <Button
            variant={{ color: "primary" }}
            onClick={() => setConfirmDemote(true)}
          >
            {t("userManagement.demote.demoteButton")}
          </Button>
        )}
      </>
    );
  };

  const openModal = useCallback(
    (user: UserDetails) => {
      setSelectedUser(user);
      setDialogOpen(true);
    },
    [setSelectedUser, setDialogOpen],
  );

  return (
    <Layout
      showNavbar={true}
      showFooter={true}
      navbarTitle={<Trans i18nKey="manageUsersView.manageUsers" />}
      backUrl="/app/admin/manageusers"
    >
      <CardsContainer>
        <ServiceInfoCard
          title={<Trans i18nKey="manageUsersView.manageUsers" />}
          details={
            <Trans
              i18nKey="userManagement.serviceInfoCard.details"
              components={{ strong: <strong /> }}
            />
          }
        >
          <UnfoldableCard
            title={<Trans i18nKey="manageUsersView.unfoldableCardTitle" />}
            steps={[
              {
                description: (
                  <Trans
                    i18nKey="userManagement.howItWorks.whatPromote"
                    components={{ strong: <strong /> }}
                  />
                ),
              },
              {
                description: (
                  <Trans
                    i18nKey="userManagement.howItWorks.whatRemove"
                    components={{ strong: <strong /> }}
                  />
                ),
              },
            ]}
          />
        </ServiceInfoCard>
        <BackgroundCard>
          <main className="p-4 flex flex-col gap-1 items-center justify-start h-full w-full">
            <UserListAccordian onUserClick={openModal} />
          </main>
        </BackgroundCard>
      </CardsContainer>
      <Dialog.Root
        open={isDialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black opacity-60 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-white m-0 text-lg text-bold font-medium">
              {t("userManagement.mainDialogTitle")}
            </Dialog.Title>
            <Dialog.Description className="text-white mt-4 mb-5 text-md leading-normal">
              {t("userManagement.mainDialogQuestion")}
            </Dialog.Description>
            <div className="flex justify-end pt-6 gap-[10px]">
              <DialogButtons />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root open={confirmReject} onOpenChange={setConfirmReject}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-md p-8 bg-backgroundLight rounded-md transform -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-lg text-white font-bold">
              {t("userManagement.revoke.areYouSure")}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-white">
              {t("userManagement.revoke.cantRollback")}
            </Dialog.Description>
            <div className="mt-4 flex justify-end gap-3">
              <Dialog.Close asChild>
                <Button variant={{ color: "tertiary" }}>{t("go-back")}</Button>
              </Dialog.Close>
              <Button variant={{ color: "error" }} onClick={handleReject}>
                {t("userManagement.revoke.yesIAmSure")}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root open={isRejected} onOpenChange={setIsRejected}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-md p-8 bg-backgroundLight rounded-md transform -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-lg text-white font-bold">
              {t("userManagement.revoke.success")}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-white">
              {rejectionMessage}
            </Dialog.Description>
            <div className="mt-4 flex justify-end gap-3">
              <Button
                variant={{ color: "success" }}
                onClick={closeRejectionModal}
              >
                {t("OK")}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root open={confirmPromote} onOpenChange={setConfirmPromote}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-md p-8 bg-background rounded-md transform -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-lg text-white font-bold">
              {t("userManagement.promote.dialogTitle")}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-white">
              {t("userManagement.promote.areYouSure")}
            </Dialog.Description>
            <div className="mt-4 flex justify-end gap-3">
              <Dialog.Close asChild>
                <Button variant={{ color: "tertiary" }}>{t("go-back")}</Button>
              </Dialog.Close>
              <Button
                variant={{ color: "success" }}
                onClick={handleConfirmPromote}
              >
                {t("userManagement.promote.promoteButton")}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-md p-8 bg-backgroundLight rounded-md transform -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-lg text-white font-bold">
              {t("userManagement.promote.dialogTitle")}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-white">
              {t("userManagement.promote.areYouSure")}
            </Dialog.Description>
            <div className="mt-4 flex justify-end gap-3">
              <Dialog.Close asChild>
                <Button variant={{ color: "tertiary" }}>{t("go-back")}</Button>
              </Dialog.Close>
              <Button variant={{ color: "success" }} onClick={handlePromote}>
                {t("userManagement.promote.promoteButton")}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-md p-8 bg-background rounded-md transform -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-lg text-white font-bold">
              {t("userManagement.demote.dialogTitle")}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-white">
              {t("userManagement.demote.areYouSure")}
            </Dialog.Description>
            <div className="mt-4 flex justify-end gap-3">
              <Dialog.Close asChild>
                <Button variant={{ color: "tertiary" }}>{t("go-back")}</Button>
              </Dialog.Close>
              <Button variant={{ color: "error" }} onClick={handleDemote}>
                {t("userManagement.demote.demoteButton")}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root open={confirmDemote} onOpenChange={setConfirmDemote}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-md p-8 bg-background rounded-md transform -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-lg text-white font-bold">
              {t("userManagement.demote.dialogTitle")}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-white">
              {t("userManagement.demote.areYouSure")}
            </Dialog.Description>
            <div className="mt-4 flex justify-end gap-3">
              <Dialog.Close asChild>
                <Button variant={{ color: "tertiary" }}>{t("go-back")}</Button>
              </Dialog.Close>
              <Button
                variant={{ color: "error" }}
                onClick={handleConfirmDemote}
              >
                {t("userManagement.demote.demoteButton")}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Layout>
  );
}

function UserListAccordian({ onUserClick }: UserListAccordionProps) {
  const { data: userList, isLoading, isError, error } = useUsers();
  const AdminIcon = () => (
    <span>
      <img src={adminicon} className="h-5 w-5 mr-2" />
    </span>
  );
  const UserIcon = () => (
    <span>
      <img src={fightericon} className="h-5 w-5 mr-2" />
    </span>
  );

  const adminList = useMemo(
    () => userList?.filter((user) => user.roles.includes("admin")) ?? [],
    [userList],
  );
  const basicUserList = useMemo(
    () => userList?.filter((user) => !user.roles.includes("admin")) ?? [],
    [userList],
  );

  if (isLoading) {
    console.log("Loading user list...");
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error("Error loading user list:", error);
    return <div>Error: {error?.message}</div>;
  }

  const handleUserClick = (user: UserDetails): void => {
    console.log("User clicked:", user);
    onUserClick(user);
  };

  return (
    <Accordion.Root
      className="w-full flex flex-col gap-3"
      type="single"
      defaultValue="users"
      collapsible
    >
      <Accordion.Item
        value="admins"
        className="w-full bg-background rounded-lg px-5 justify-start"
      >
        <Accordion.Header className="flex w-full">
          <Accordion.Trigger className="text-white w-full items-center outline-none group justify-between py-0 pb-5 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden flex">
            {
              <Trans
                i18nKey="userManagement.list.admins"
                components={{ strong: <strong />, small: <small /> }}
              />
            }
            <ChevronDownIcon
              className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
          {adminList.map((user) => {
            const userDetails: UserDetails = {
              callsign: user.callsign,
            };
            return (
              <div
                key={user.callsign}
                className="text-white py-0 px-3 border-t-2 border-[#4B4B4B] flex justify-between items-center"
                onClick={() => {
                  try {
                    void handleUserClick(userDetails);
                  } catch (error) {
                    console.error("Error handling user click:", error);
                  }
                }}
              >
                <div className="flex items-center">
                  <AdminIcon />
                  {user.callsign}
                </div>
                <ChevronRightIcon
                  className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </div>
            );
          })}
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item
        value="users"
        className="w-full bg-background rounded-lg px-5"
      >
        <Accordion.Header className="flex w-full">
          <Accordion.Trigger className="text-white w-full items-center outline-none group justify-between py-0 pb-5 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden flex">
            {
              <Trans
                i18nKey="userManagement.list.fighters"
                components={{ strong: <strong />, small: <small /> }}
              />
            }
            <ChevronDownIcon
              className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
          {basicUserList.length > 0 ? (
            basicUserList.map((user) => {
              const userDetails: UserDetails = {
                callsign: user.callsign,
              };
              return (
                <div
                  key={user.callsign}
                  className="text-white py-0 px-3 border-t-2 border-[#4B4B4B] flex justify-between items-center"
                  onClick={() => {
                    try {
                      void handleUserClick(userDetails);
                    } catch (error) {
                      console.error("Error handling user click:", error);
                    }
                  }}
                >
                  <div className="flex items-center">
                    <UserIcon />
                    {user.callsign}
                  </div>
                  <ChevronRightIcon
                    className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </div>
              );
            })
          ) : (
            <div className="text-white py-3 px-3 border-t-2 border-[#4B4B4B]">
              {<Trans i18nKey="userManagement.list.nothingToList" />}
            </div>
          )}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
