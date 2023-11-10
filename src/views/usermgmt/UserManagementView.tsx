import { useMemo, useState, useCallback } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useUsers } from "../../hook/api/useUsers";
import { Layout } from "../../components/Layout";
import { BackgroundCard } from "../../components/BackgroundCard";
import { CardsContainer } from "../../components/CardsContainer";
import { useRejectUser } from "../../hook/api/useRejectUser";
import { useQueryClient } from "react-query";
import { Button } from "../../components/Button";
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

  const { mutate: rejectMutation } = useRejectUser({
    onSuccess: () => {
      setRejectionMessage("Käyttäjän hylkääminen onnistui.");
      setIsRejected(true);
      setDialogOpen(false);
    },
    onError: (error) => {
      setRejectionMessage(`Hylkääminen epäonnistui: ${error.message}`);
      setIsError(true);
    },
  });

  const handleReject = () => {
    if (selectedUser) {
      void rejectMutation({ callsign: selectedUser.callsign });
    }
    setConfirmReject(false);
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
    if (isError) {
      return (
        <Button variant={{ color: "success" }} onClick={closeModal}>
          OK
        </Button>
      );
    }
    if (isRejected) {
      return (
        <Button variant={{ color: "success" }} onClick={closeRejectionModal}>
          OK
        </Button>
      );
    }
    return (
      <>
        <Dialog.Close asChild>
          <Button variant={{ color: "tertiary" }} onClick={closeModal}>
            Peruuta
          </Button>
        </Dialog.Close>
        <Button
          variant={{ color: "error" }}
          onClick={() => setConfirmReject(true)}
        >
          Hylkää
        </Button>
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

  console.log("Is Dialog Open?", isDialogOpen);

  return (
    <Layout
      showNavbar={true}
      showFooter={true}
      navbarTitle="Hallitse käyttäjiä"
      backUrl="/app/admin/manageusers"
    >
      <CardsContainer>
        <BackgroundCard
          title="Hallitse käyttäjiä"
          details={
            <>
              Listaa ja hallitse käyttäjiä. <strong>Adminit</strong> kykenevät
              lisämään uusia käyttäjiä.<strong>Taistelijat</strong> ovat
              peruskäyttäjiä, jotka pääsevät käyttämään palveluitasi.
            </>
          }
        >
          <main className="p-4 flex flex-col gap-1 items-center justify-start h-full">
            <UserListAccordian onUserClick={openModal} />
          </main>
        </BackgroundCard>
      </CardsContainer>
      <Dialog.Root
        open={isDialogOpen}
        onOpenChange={(open) => {
          console.log("Dialog onOpenChange called, open:", open);
          setDialogOpen(open);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black opacity-60 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-white m-0 text-lg text-bold font-medium">
              Hallitse käyttäjää
            </Dialog.Title>
            <Dialog.Description className="text-white mt-4 mb-5 text-md leading-normal">
              Mitä haluat tehdä käyttäjälle?
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
              Oletko varma?
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-white">
              Tämä toimintoa ei voi peruuttaa.
            </Dialog.Description>
            <div className="mt-4 flex justify-end gap-3">
              <Dialog.Close asChild>
                <Button variant={{ color: "tertiary" }}>Peruuta</Button>
              </Dialog.Close>
              <Button variant={{ color: "error" }} onClick={handleReject}>
                Olen, hylkää
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
              Hylkääminen onnistui
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-white">
              {rejectionMessage}
            </Dialog.Description>
            <div className="mt-4 flex justify-end gap-3">
              <Button
                variant={{ color: "success" }}
                onClick={closeRejectionModal}
              >
                OK
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
              <>
                <small>Adminit </small>
              </>
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
                className="text-white py-3 px-3 border-t-2 border-[#4B4B4B] flex justify-between items-center"
                onClick={() => {
                  try {
                    void handleUserClick(userDetails);
                  } catch (error) {
                    console.error("Error handling user click:", error);
                  }
                }}
              >
                {user.callsign}
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
              <>
                <small>Taistelijat</small>
              </>
            }
            <ChevronDownIcon
              className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
          {basicUserList.map((user) => {
            const userDetails: UserDetails = {
              callsign: user.callsign,
            };
            return (
              <div
                key={user.callsign}
                className="text-white py-3 px-3 border-t-2 border-[#4B4B4B] flex justify-between items-center"
                onClick={() => {
                  try {
                    void handleUserClick(userDetails);
                  } catch (error) {
                    console.error("Error handling user click:", error);
                  }
                }}
              >
                {user.callsign}
                <ChevronRightIcon
                  className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </div>
            );
          })}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
