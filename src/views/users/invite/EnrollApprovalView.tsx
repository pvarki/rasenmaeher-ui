import { Layout } from "../../../components/Layout";
import { Button } from "../../../components/Button";
import { CardsContainer } from "../../../components/CardsContainer";
import { ServiceInfoCard } from "../../../components/ServiceInfoCard";
import { UnfoldableCard } from "../../../components/UnfoldableCard";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { BackgroundCard } from "../../../components/BackgroundCard";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
  useEnrollmentList,
  EnrollmentState,
} from "../../../hook/api/useEnrollmentList";
import * as Dialog from "@radix-ui/react-dialog";
import { useFormik } from "formik";
import { useApproveUser } from "../../../hook/api/useApproveUser";
import { useRejectUser } from "../../../hook/api/useRejectUser";

interface UserDetails {
  callsign: string;
  approveCode?: string;
}

interface WaitingListAccordionProps {
  onUserClick: (user: UserDetails) => void;
}

export function EnrollApprovalView() {
  const [isApproved, setIsApproved] = useState(false);
  const [isRejected, setIsRejected] = useState(false); // New state to track rejection
  const [rejectionMessage, setRejectionMessage] = useState(""); // New state for rejection message
  const [confirmReject, setConfirmReject] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDetails | null>(null);
  const [approvalMessage, setApprovalMessage] = useState("");
  const location = useLocation();

  const { mutate: approveMutation, reset } = useApproveUser({
    onSuccess: () => {
      setApprovalMessage("Käyttäjä hyväksytty.");
      setIsApproved(true); // Set isApproved to true on success
    },
    onError: (error) => {
      setApprovalMessage(`Approval error: ${error.message}`);
      setIsError(true);
      console.error("Approval error:", error.message);
    },
  });

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

  const query = useMemo(() => new URLSearchParams(location.search), [location]);

  const formik = useFormik({
    initialValues: {
      approvalCode: "",
    },
    onSubmit: (values) => {
      if (selectedUser) {
        void approveMutation({
          callsign: selectedUser.callsign,
          approvalCode: values.approvalCode,
        });
        console.log(
          "Attempting to approve user:",
          selectedUser.callsign,
          "with code:",
          values.approvalCode,
        );
      }
    },
  });

  const openModal = useCallback(
    (user: UserDetails) => {
      setSelectedUser(user);
      setDialogOpen(true);
    },
    [setSelectedUser, setDialogOpen],
  );

  useEffect(() => {
    const callsign = query.get("callsign");
    const approvalCode = query.get("approvalcode");

    if (callsign && approvalCode) {
      const user = { callsign, approveCode: approvalCode };
      openModal(user);
      void formik.setFieldValue("approvalCode", approvalCode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs once on mount

  const handleHyvaksyClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    formik.submitForm().catch((error) => {
      console.error("Error submitting form:", error);
    });
  };

  const closeModal = () => {
    setDialogOpen(false);
    setIsError(false);
    setSelectedUser(null);
    reset();
    setApprovalMessage("");
    setRejectionMessage("");
  };

  const closeRejectionModal = () => {
    setIsRejected(false);
  };

  const DialogButtons = () => {
    if (isApproved || isError) {
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
        <Button
          variant={{ color: "success" }}
          onClick={(event) => handleHyvaksyClick(event)}
        >
          Hyväksy
        </Button>
      </>
    );
  };

  console.log("Is Dialog Open?", isDialogOpen);

  return (
    <Layout
      showNavbar={true}
      navbarTitle="Hyväksy käyttäjiä"
      showFooter={true}
      backUrl="/app/admin/manageusers"
    >
      <CardsContainer>
        <ServiceInfoCard
          title="Hyväksy käyttäjiä"
          details={
            <>Hyväksyntää odottavat käyttäjät näkyvät tässä näkymässä.</>
          }
        >
          <UnfoldableCard
            title="Näin se käy"
            description1={
              <>
                QR-kutsukoodia käyttänyt (tai kutsukoodin palvelun
                login-näkymään syöttänyt) käyttäjä on{" "}
                <em>odottaa hyväksyntää-tilassa</em>.
              </>
            }
            description2={
              <>
                <strong>Hyväksyntätapa 1:</strong>
                <br /> Avaa kamera ja skannaa taistelijan näytöltä QR-koodi.
                Aukeavalla sivulla hyväksyt taistelijan.
              </>
            }
            description3={
              <>
                <strong>Hyväksyntätapa 2:</strong>
                <br />
                Voit hyväksyä käyttäjän tässä näkymässä painamalla tämän
                peitenimeä. Tämän jälkeen sinun on syötettävä hyväksyntäkoodi
                käyttäjän näytöltä.
              </>
            }
          />
        </ServiceInfoCard>
        <BackgroundCard>
          <main className="p-2 flex flex-col gap-1 items-center justify-start h-full">
            <WaitingListAccordion onUserClick={openModal} />
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
              Hyväksy käyttäjä
            </Dialog.Title>
            <Dialog.Description className="text-white mt-4 mb-5 text-md leading-normal">
              {approvalMessage ||
                "Syötä käyttäjän hyväksyntäkoodi ja paina Hyväksy."}
            </Dialog.Description>
            {!isApproved && !isError && (
              <div className="text-white m-0 mb-4 text-md">
                <p>
                  <strong>Peitenimi:</strong> <br />
                  {selectedUser?.callsign}
                </p>
                <form onSubmit={formik.handleSubmit}>
                  <label htmlFor="approvalCode">
                    <strong>Hyväksyntäkoodi:</strong>
                  </label>
                  <input
                    id="approvalCode"
                    name="approvalCode"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.approvalCode}
                    className="text-black bg-gray-100 w-full p-2 rounded-lg"
                  />
                </form>
              </div>
            )}
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
function WaitingListAccordion({ onUserClick }: WaitingListAccordionProps) {
  const { data: userList, isLoading, isError, error } = useEnrollmentList();

  if (isLoading) {
    console.log("Loading user list...");
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error("Error loading user list:", error);
    return <div>Error: {error?.message}</div>;
  }

  const pendingUsers =
    userList?.filter((user) => user.state === EnrollmentState.PENDING) || [];

  if (pendingUsers.length === 0) {
    console.log("No pending users found.");
  } else {
    console.log(`Found ${pendingUsers.length} pending users.`);
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
      <Accordion.Item value="users" className="w-full bg-background rounded-lg">
        <Accordion.Header className="flex w-full">
          <Accordion.Trigger className="text-white w-full items-center outline-none group justify-between py-1 pl-3 pb-5 overflow-hidden flex">
            <small>Odottavat käyttäjät</small>
            <ChevronDownIcon
              className="text-white transition-transform duration-300 group[data-state=open] rotate-180"
              aria-hidden
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="text-mauve11 bg-mauve2 overflow-hidden text-[15px]">
          {pendingUsers.length ? (
            pendingUsers.map((user) => {
              const userDetails: UserDetails = {
                callsign: user.callsign,
                approveCode: user.approvecode,
              };
              return (
                <div
                  key={user.approvecode}
                  className="text-white py-3 px-3 border-t-2 border-[#4B4B4B] flex justify-between items-center cursor-pointer"
                  onClick={() => {
                    try {
                      void handleUserClick(userDetails);
                    } catch (error) {
                      console.error("Error handling user click:", error);
                    }
                  }}
                >
                  {user.callsign}
                  <ChevronRightIcon className="text-white" aria-hidden />
                </div>
              );
            })
          ) : (
            <div className="p-4">Ei hyväksyntää odottavia käyttäjiä.</div>
          )}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
