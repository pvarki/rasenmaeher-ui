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
import { useQueryClient } from "react-query";
import { useTranslation, Trans } from "react-i18next";
import LoadingComponent from "../../../components/Loading/LoadingComponent";

interface UserDetails {
  callsign: string;
  approveCode?: string;
}

interface WaitingListAccordionProps {
  onUserClick: (user: UserDetails) => void;
}

type ApprovalState =
  | "initial"
  | "approved"
  | "rejected"
  | "rejecting"
  | "approving";

export function EnrollApprovalView() {
  const [approvalState, setApprovalState] = useState<ApprovalState>("initial");
  const [rejectionMessage, setRejectionMessage] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDetails | null>(null);
  const [approvalMessage, setApprovalMessage] = useState("");
  const queryClient = useQueryClient();
  const location = useLocation();
  const { t } = useTranslation();

  const { mutate: approveMutation } = useApproveUser({
    onMutate: () => {
      setApprovalState("approving");
    },
    onSuccess: () => {
      setApprovalMessage("Käyttäjä hyväksytty.");
      setApprovalState("approved");
      void queryClient.invalidateQueries(["enrollmentList"]);
    },
    onError: (error) => {
      setApprovalMessage(`Approval error: ${error.message}`);
      setApprovalState("initial");
      console.error("Approval error:", error.message);
    },
  });

  const { mutate: rejectMutation } = useRejectUser({
    onSuccess: () => {
      setRejectionMessage("Käyttäjän hylkääminen onnistui.");
      setApprovalState("rejected");
      void queryClient.invalidateQueries(["enrollmentList"]);
    },
    onError: (error) => {
      setRejectionMessage(`Hylkääminen epäonnistui: ${error.message}`);
      setApprovalState("initial");
    },
  });

  const handleReject = () => {
    if (selectedUser) {
      setApprovalState("rejecting");
      rejectMutation(
        { callsign: selectedUser.callsign },
        {
          onSuccess: () => {
            setRejectionMessage("Käyttäjän hylkääminen onnistui.");
            setApprovalState("rejected");
          },
          onError: (error) => {
            setRejectionMessage(`Hylkääminen epäonnistui: ${error.message}`);
            setApprovalState("initial");
          },
        },
      );
    }
  };

  const handleApprove = (values: { approvalCode: string }) => {
    if (selectedUser) {
      setApprovalState("approving");
      approveMutation({
        callsign: selectedUser.callsign,
        approvalCode: values.approvalCode,
      });
    }
  };

  const query = useMemo(() => new URLSearchParams(location.search), [location]);

  const formik = useFormik({
    initialValues: {
      approvalCode: "",
    },
    onSubmit: handleApprove,
  });

  const openModal = useCallback(
    (user: UserDetails) => {
      setSelectedUser(user);
      setDialogOpen(true);
      setApprovalState("initial");
      setApprovalMessage("");
      setRejectionMessage("");
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
    return () => {
      closeModal();
      setApprovalState("initial");
      setSelectedUser(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs once on mount

  const closeModal = () => {
    setDialogOpen(false);
    setSelectedUser(null);
    setApprovalState("initial");
    setApprovalMessage("");
    setRejectionMessage("");
    formik.resetForm();
  };

  const DialogButtons = () => {
    switch (approvalState) {
      case "initial":
        return (
          <>
            <Dialog.Close asChild>
              <Button variant={{ color: "tertiary" }} onClick={closeModal}>
                {t("go-back")}
              </Button>
            </Dialog.Close>
            <Button
              variant={{ color: "error" }}
              onClick={() => setApprovalState("rejecting")}
            >
              {t("enrollApprovalView.rejectButton")}
            </Button>
            <Button
              variant={{ color: "success" }}
              onClick={() => void formik.submitForm()}
            >
              {t("enrollApprovalView.acceptButton")}
            </Button>
          </>
        );
      case "approved":
        return (
          <Button variant={{ color: "success" }} onClick={closeModal}>
            {t("OK")}
          </Button>
        );
      case "rejecting":
        return (
          <>
            <Button
              variant={{ color: "tertiary" }}
              onClick={() => setApprovalState("initial")}
            >
              {t("go-back")}
            </Button>
            <Button variant={{ color: "error" }} onClick={handleReject}>
              {t("enrollApprovalView.confirmRejectButton")}
            </Button>
          </>
        );
      case "rejected":
        return (
          <Button variant={{ color: "success" }} onClick={closeModal}>
            {t("OK")}
          </Button>
        );
      case "approving":
        return (
          <LoadingComponent
            text={t("enrollApprovalView.loadingComponentAccepting")}
          />
        );
      default:
        return null; // Handle other states if necessary
    }
  };

  const renderDialogContent = () => {
    switch (approvalState) {
      case "initial":
        return (
          <>
            <Dialog.Description className="text-white mt-4 mb-5 text-md leading-normal">
              {approvalMessage || t("enrollApprovalView.acceptModal.InputCode")}
            </Dialog.Description>
            <div className="text-white m-0 mb-4 text-md">
              <p>
                <Trans
                  i18nKey="enrollApprovalView.acceptModal.callsign"
                  components={{
                    strong: <strong />,
                  }}
                />{" "}
                <br />
                {selectedUser?.callsign}
              </p>
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="approvalCode">
                  <Trans
                    i18nKey="enrollApprovalView.acceptModal.code"
                    components={{
                      strong: <strong />,
                    }}
                  />
                </label>
                <input
                  id="approvalCode"
                  name="approvalCode"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.approvalCode}
                  className="text-black font-consolas bg-gray-100 w-full p-2 rounded-lg"
                />
              </form>
            </div>
            <div className="flex justify-end pt-6 gap-[10px]">
              <DialogButtons />
            </div>
          </>
        );
      case "approving":
        return <LoadingComponent text="Hyväksytään käyttäjää..." />;
      case "approved":
        return (
          <div className="text-white mt-2 text-md">
            <Dialog.Description className="text-white">
              {t("enrollApprovalView.acceptModal.approved")}
            </Dialog.Description>
            <div className="mt-8 flex justify-end">
              <Button variant={{ color: "success" }} onClick={closeModal}>
                {t("OK")}
              </Button>
            </div>
          </div>
        );
      case "rejecting":
        return (
          <div className="text-white mt-2 text-md">
            <Dialog.Description className="text-white">
              {t("enrollApprovalView.acceptModal.rejectDescription")}
            </Dialog.Description>
            <div className="mt-8 flex justify-end">
              <Button
                variant={{ color: "tertiary" }}
                onClick={() => setApprovalState("initial")}
              >
                {t("go-back")}
              </Button>
              <Button variant={{ color: "error" }} onClick={handleReject}>
                {t("enrollApprovalView.confirmRejectButton")}
              </Button>
            </div>
          </div>
        );
      case "rejected":
        return (
          <div className="text-white mt-2 text-md">
            <Dialog.Description className="text-white">
              {rejectionMessage}
            </Dialog.Description>
            <div className="mt-4 flex justify-end">
              <Button variant={{ color: "success" }} onClick={closeModal}>
                {t("OK")}
              </Button>
            </div>
          </div>
        );
      default:
        return null; // For 'initial' state or any unexpected state
    }
  };

  return (
    <Layout
      showNavbar={true}
      navbarTitle={t("enrollApprovalView.navbarTitle")}
      showFooter={true}
      backUrl="/app/admin/manageusers"
    >
      <CardsContainer>
        <ServiceInfoCard
          title={t("enrollApprovalView.navbarTitle")}
          details={
            <Trans
              i18nKey="enrollApprovalView.howToDescription1"
              components={{
                strong: <strong />,
                em: <em />,
                br: <br />,
              }}
            />
          }
        >
          <UnfoldableCard
            title={t("manageUsersView.unfoldableCardTitle")}
            description1={
              <Trans
                i18nKey="enrollApprovalView.howToDescription2"
                components={{
                  strong: <strong />,
                  em: <em />,
                  br: <br />,
                }}
              />
            }
            description2={
              <Trans
                i18nKey="enrollApprovalView.howToDescription3"
                components={{
                  strong: <strong />,
                  em: <em />,
                  br: <br />,
                }}
              />
            }
            description3={
              <Trans
                i18nKey="enrollApprovalView.howToDescription3"
                components={{
                  strong: <strong />,
                  em: <em />,
                  br: <br />,
                }}
              />
            }
          />
        </ServiceInfoCard>
        <BackgroundCard>
          <main className="p-2 flex flex-col gap-1 items-center justify-start h-full">
            <WaitingListAccordion onUserClick={openModal} />
          </main>
        </BackgroundCard>
      </CardsContainer>
      <Dialog.Root open={isDialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black opacity-60 fixed inset-0" />
          <Dialog.Content className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-8 bg-background rounded-lg shadow-lg">
            <Dialog.Title className="text-lg text-white font-bold">
              {approvalState === "approved"
                ? t("enrollApprovalView.acceptedModal.dialogTitle")
                : approvalState === "rejecting"
                ? t("enrollApprovalView.rejectModal.dialogTitle")
                : approvalState === "approving"
                ? null
                : approvalState === "rejected"
                ? t("enrollApprovalView.rejectedModal.dialogTitle")
                : t("enrollApprovalView.acceptModal.dialogTitle")}
            </Dialog.Title>
            {renderDialogContent()}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Layout>
  );
}
function WaitingListAccordion({ onUserClick }: WaitingListAccordionProps) {
  const { data: userList, isLoading, isError, error } = useEnrollmentList();
  const { t } = useTranslation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
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
            <Trans
              i18nKey="enrollApprovalView.list.waitingUsers"
              components={{
                small: <small />,
              }}
            />
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
            <div className="p-4">
              {t("enrollApprovalView.list.noWaitingUsers")}
            </div>
          )}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
