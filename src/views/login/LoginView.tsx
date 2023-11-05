import { useMemo } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserTypeContext } from "../../hook/auth/userTypeFetcher";
import { useCheckCode } from "../../hook/api/useCheckCode";
import { useLoginCodeStore } from "../../store/LoginCodeStore";
import { Button } from "../../components/Button";
import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import { Layout } from "../../components/Layout";
import pvarkiLogo from "../../assets/icons/pvarki.png";
import { CardsContainer } from "../../components/CardsContainer";

const TOKEN_REGEX = /^[A-Z0-9]{8,}$/;

function useQueryParams() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const CodeSchema = yup.object().shape({
  code: yup
    .string()
    .required("Koodi on pakollinen")
    .matches(TOKEN_REGEX, "Koodi on virheellinen"),
});

export function LoginView() {
  const navigate = useNavigate();
  const params = useQueryParams();
  const { setOtpVerified } = useContext(UserTypeContext);
  const loginCodeStore = useLoginCodeStore();

  const formik = useFormik({
    initialValues: {
      code: params.get("code") ?? "",
    },
    validationSchema: CodeSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      checkCode(values.code);
    },
  });

  const { mutate: checkCode, isLoading } = useCheckCode({
    onSuccess: (data) => {
      console.log("loginview: using useCheckCode to determine code type");
      loginCodeStore.setCode(formik.values.code);
      if (data.isAdminCodeValid) {
        console.log("loginview: setting CodeType admin");
        loginCodeStore.setCodeType("admin");
        setOtpVerified(true);
        navigate("/login/callsign");
      } else if (data.isEnrollmentCodeValid) {
        console.log("loginview: setting CodeType user");
        loginCodeStore.setCodeType("user");
        setOtpVerified(true);
        navigate("/login/callsign");
      } else {
        console.log("loginview: this code is bs");
        loginCodeStore.setCodeType("unknown");
      }
    },
  });

  return (
    <Layout
      showNavbar={false}
      navbarTitle="metsa-kota.pvarki.fi"
      showFooter={false}
    >
      <CardsContainer>
        <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
          <h1 className="text-white text-center font-oswald font-bold text-2xl pt-16">
            Kirjaudu palveluun käyttäen kertakäyttökoodia
          </h1>
          <img src={pvarkiLogo} alt="Pvarki Logo" className="w-20" />
          <span className="text-white text-center font-oswald font-bold text-3xl">
            metsa-kota
          </span>
          <FormikProvider value={formik}>
            <Form className="flex flex-col items-center gap-3 w-full">
              <label className="flex flex-col gap-3 w-full text-white">
                Kertakäyttökoodi:
                <Field
                  type="text"
                  name="code"
                  className="bg-gray-100 w-full p-2 rounded-lg text-black"
                />
                <span className="text-red-500">
                  <ErrorMessage name="code" />
                </span>
              </label>
              <Button
                variant={{ color: "primary", width: "full" }}
                type="submit"
                disabled={!formik.isValid || isLoading}
              >
                Kirjaudu
              </Button>
            </Form>
          </FormikProvider>
        </main>
      </CardsContainer>
    </Layout>
  );
}
