import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginAsAdmin } from "../../hook/api/firstuser/useLoginAsAdmin";
import { useLoginCodeStore } from "../../store/LoginCodeStore";
import { useInitEnrollment } from "../../hook/api/firstuser/useInitEnrollment";
import { FormikProvider, useFormik, Field, Form } from "formik";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import trooper from "../../assets/icons/trooper3.png";
import { CardsContainer } from "../../components/CardsContainer";

const CALLSIGN_REGEX = /^[a-zA-Z0-9]{3,}$/;

const CallsignSchema = yup.object().shape({
  callsign: yup
    .string()
    .required("Peitenimi on pakollinen")
    .matches(CALLSIGN_REGEX, "Minimipituus 3, Sallitut merkit: a-z, A-Z, 0-9")
    .max(30, "Peitenimen maksimipituus on 30 merkkiä"),
});

export function CallsignSetupStep() {
  const navigate = useNavigate();
  const loginCodeStore = useLoginCodeStore();
  const code = useLoginCodeStore((store) => store.code);

  const { mutate: loginAsAdmin, isLoading } = useLoginAsAdmin({
    onSuccess: (jwt) => {
      localStorage.setItem("token", jwt);
      localStorage.setItem("callsign", formik.values.callsign);
      window.location.reload();
      navigate("/login/createmtls");
    },
    onError: () => {
      loginCodeStore.reset();
      navigate("/login");
    },
  });

  const { mutate: initEnrollment } = useInitEnrollment({
    onSuccess: (data) => {
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("approveCode", data.approvecode);
      localStorage.setItem("callsign", data.callsign);
      window.location.reload();
      navigate("/login/enrollment");
    },
    onError: () => {
      loginCodeStore.reset();
      navigate("/login");
    },
  });

  useEffect(() => {
    if (loginCodeStore.codeType === "unknown") {
      navigate("/login");
    }
  }, [loginCodeStore.codeType, navigate]);

  const formik = useFormik({
    initialValues: {
      callsign: "",
    },
    validationSchema: CallsignSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      if (loginCodeStore.codeType === "admin") {
        loginAsAdmin({ callsign: values.callsign, code: code });
      } else if (loginCodeStore.codeType === "user") {
        console.log("init enrollment");
        initEnrollment({ callsign: values.callsign, invite_code: code });
      }
    },
  });

  return (
    <Layout showNavbar={true} showFooter={true}>
      <CardsContainer>
        <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
          <h1 className="text-white text-center font-oswald font-bold text-2xl pt-2">
            Anna peitenimesi.
          </h1>
          <img src={trooper} alt="Pvarki Logo" className="w-20 p-1" />
          <ServiceInfoCard
            title="Peitenimi?"
            details="Peitenimi on tunnisteesi palveluissa. Anna sinulle käsketyn mukainen peitenimi."
          />
          <FormikProvider value={formik}>
            <Form className="flex flex-col items-center gap-3 w-full">
              <label className="flex flex-col gap-3 w-full text-white">
                Peitenimesi:
                <Field
                  type="text"
                  name="callsign"
                  className="bg-gray-100 w-full p-2 rounded-lg text-black font-consolas"
                />
                {formik.errors.callsign && (
                  <span className="text-red-500">{formik.errors.callsign}</span>
                )}
              </label>
              <div className="flex w-full items-stretch">
                <div className="flex-1 px-1">
                  <Button
                    type="submit"
                    variant={{ color: "primary", width: "full" }}
                    disabled={!formik.isValid || isLoading}
                  >
                    {isLoading ? "Odottaa vastausta..." : "Kirjaudu"}
                  </Button>
                </div>
              </div>
            </Form>
          </FormikProvider>
        </main>
      </CardsContainer>
    </Layout>
  );
}
