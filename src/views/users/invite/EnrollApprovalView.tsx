import { Button } from "../../../components/Button";
import { Layout } from "../../../components/Layout";
import hero from "../../../assets/heroimages/ryhmä.jpeg";

// import { useLocation, useParams } from "react-router-dom";
import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";

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
      heroImage={hero}
      showFooter={true}
      backUrl="/app/admin/user-management/code-list"
    >
      <FormikProvider value={formik}>
        <div className="flex flex-col items-center gap-5">
          <Button variant={{ width: "full" }}>Skannaa kameralla</Button>
          <label className="flex flex-col gap-3 w-full text-white">
            Käyttäjän peitenimi
            <Field
              type="text"
              name="callsign"
              className="bg-gray-100 w-full p-2 rounded-lg text-black"
            />
            <span className="text-red-500">
              <ErrorMessage name="callsign" />
            </span>
          </label>
          <label className="flex flex-col gap-3 w-full text-white">
            Hyväksyntä koodi
            <Field
              type="text"
              name="approvalCode"
              className="bg-gray-100 w-full p-2 rounded-lg text-black"
            />
            <span className="text-red-500">
              <ErrorMessage name="approvalCode" />
            </span>
          </label>
          <Button variant={{ width: "full", color: "success" }} type="submit">
            Hyväksy
          </Button>

          <span className="p-3 bg-backgroundLight rounded-lg text-white text-center">
            Hyväksyntää odottavat käyttäjät näkyvät tässä. Taistelija näkee
            näytöllään hyväksyntäkoodin. Voit tunnistaa käyttäjän peitenimen ja
            hyväksyntäkoodin perusteella.{" "}
          </span>
        </div>
      </FormikProvider>
    </Layout>
  );
}
