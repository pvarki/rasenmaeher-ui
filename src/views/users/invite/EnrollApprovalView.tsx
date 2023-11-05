import { Layout } from "../../../components/Layout";
import { CardsContainer } from "../../../components/CardsContainer";
import { ServiceInfoCard } from "../../../components/ServiceInfoCard";
import { UnfoldableCard } from "../../../components/UnfoldableCard";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { BackgroundCard } from "../../../components/BackgroundCard";
import {
  useEnrollmentList,
  EnrollmentState,
} from "../../../hook/api/useEnrollmentList";

// import { useLocation, useParams } from "react-router-dom";
// import { ErrorMessage, Field, FormikProvider, useFormik }
import { FormikProvider, useFormik } from "formik";

export function EnrollApprovalView() {
  // const { inviteCode } = useParams();

  // const inviteUrl =
  //   window.location.origin + "/login?code=" + (inviteCode ?? "");

  const formik = useFormik({
    initialValues: {
      callsign: "",
      approvalCode: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Layout
      showNavbar={true}
      navbarTitle="Hyväksy käyttäjiä"
      showFooter={true}
      backUrl="/app/admin/manageusers"
    >
      <CardsContainer>
        <FormikProvider value={formik} />
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
            <WaitingListAccordion />
          </main>
        </BackgroundCard>
      </CardsContainer>
    </Layout>
  );
}

function WaitingListAccordion() {
  const { data: userList, isLoading, isError, error } = useEnrollmentList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  const pendingUsers =
    userList?.filter((user) => user.state === EnrollmentState.PENDING) || [];

  return (
    <Accordion.Root
      className="w-full flex flex-col gap-3"
      type="single"
      defaultValue="users"
      collapsible
    >
      <Accordion.Item
        value="users"
        className="w-full bg-background rounded-lg px-5 justify-start"
      >
        <Accordion.Header className="flex w-full">
          <Accordion.Trigger className="text-white w-full items-center outline-none group justify-between py-1 pb-5 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden flex">
            <small>Odottavat käyttäjät</small>
            <ChevronDownIcon
              className="text-white ease-[cubic-bezier(0.87, 0, 0.13, 1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
          {pendingUsers.length ? (
            pendingUsers.map((user) => (
              <div
                key={user.approvecode}
                className="text-white py-3 px-3 border-t-2 border-[#4B4B4B] flex justify-between items-center"
              >
                {user.callsign}
                <a
                  href={`/app/users/${user.callsign}`}
                  className="hover:bg-[#4B4B4B] flex justify-center items-center w-8 h-8 rounded-full"
                >
                  <ChevronRightIcon
                    className="text-white ease-[cubic-bezier(0.87, 0, 0.13, 1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </a>
              </div>
            ))
          ) : (
            <div>Ei hyväksyntää odottavia käyttäjiä.</div>
          )}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
