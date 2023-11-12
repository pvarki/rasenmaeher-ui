import { useMemo } from "react";
import { useContext, useState } from "react";
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
import useFetchFqdn from "../../hook/helpers/useFetchFqdn";

const TOKEN_REGEX = /^[A-Z0-9]{8,}$/;

interface ApiError extends Error {
  response?: {
    data?: {
      detail?: string;
    };
  };
}

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
  const fqdn = useFetchFqdn();
  const subdomain = useMemo(() => fqdn.split(".")[0], [fqdn]);
  const [codeNotValid, setCodeNotValid] = useState(false);

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

  const {
    mutate: checkCode,
    isLoading,
    isError,
    error,
  } = useCheckCode({
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
        setCodeNotValid(true);
      }
    },
    onError: (err: ApiError) => {
      // Now TypeScript knows what `err` is and that `err.response` might be there
      const errorMessage = err.response?.data?.detail || "Unknown error";
      formik.setErrors({ code: errorMessage });
    },
  });

  return (
    <Layout showNavbar={false} showFooter={false}>
      <CardsContainer>
        <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
          <h1 className="text-white text-center font-oswald font-bold text-2xl pt-16">
            Kirjaudu palveluun käyttäen kirjautumiskoodia
          </h1>
          <img src={pvarkiLogo} alt="Pvarki Logo" className="w-20" />
          <span className="text-white text-center font-oswald font-bold text-3xl">
            {subdomain || "Loading..."}
          </span>
          <FormikProvider value={formik}>
            <Form className="flex flex-col items-center gap-3 w-full">
              <label className="flex flex-col gap-3 w-full text-white">
                Kirjautumiskoodi:
                <Field
                  type="text"
                  name="code"
                  className="bg-gray-100 w-full p-2 rounded-lg text-black"
                />
                <span className="text-red-500">
                  <ErrorMessage name="code" />
                  {codeNotValid && <div>Koodi väärin.</div>}
                  {isError && (
                    <div>
                      {(error as ApiError).response?.data?.detail ||
                        "An error occurred"}
                    </div>
                  )}
                </span>
              </label>
              <Button
                variant={{
                  color: isError ? "error" : "primary",
                  width: "full",
                }}
                type="submit"
                disabled={!formik.isValid || isLoading}
              >
                {isLoading ? "Odottaa vastausta..." : "Kirjaudu"}
              </Button>
            </Form>
          </FormikProvider>
        </main>
      </CardsContainer>
    </Layout>
  );
}
