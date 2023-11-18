import { useMemo } from "react";
import { useContext, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { UserTypeContext } from "../../hook/auth/userTypeFetcher";
import { useCheckCode } from "../../hook/api/useCheckCode";
import { useLoginCodeStore } from "../../store/LoginCodeStore";
import { Button } from "../../components/Button";
import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import { Layout } from "../../components/Layout";
import pvarkiLogo from "../../assets/icons/pvarki.png";
import { CardsContainer } from "../../components/CardsContainer";
import useHealthcheck from "../../hook/helpers/useHealthcheck";
import key from "../../assets/icons/key.svg";
import pencil from "../../assets/icons/pencil.svg";

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
  const { deployment } = useHealthcheck();
  const [codeNotValid, setCodeNotValid] = useState(false);
  const protocol = window.location.protocol;
  const host = window.location.host;
  const mtlsUrl = `${protocol}//mtls.${host}/app/admin/`;
  const buttonStyle = "min-h-[70px]";

  const formik = useFormik({
    initialValues: {
      code: params.get("code")?.toUpperCase() ?? "",
    },
    validationSchema: CodeSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      checkCode(values.code);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const upperCaseValue = e.target.value.toUpperCase();
    void formik.setFieldValue("code", upperCaseValue);
  };

  const handleInputFocus = () => {
    setCodeNotValid(false);
  };

  const {
    mutate: checkCode,
    isLoading,
    isError,
    error,
  } = useCheckCode({
    onSuccess: (data) => {
      loginCodeStore.setCode(formik.values.code);
      if (data.isAdminCodeValid) {
        loginCodeStore.setCodeType("admin");
        setOtpVerified(true);
        navigate("/login/callsign");
      } else if (data.isEnrollmentCodeValid) {
        loginCodeStore.setCodeType("user");
        setOtpVerified(true);
        navigate("/login/callsign");
      } else {
        loginCodeStore.setCodeType("unknown");
        setCodeNotValid(true);
      }
    },
    onError: (err: ApiError) => {
      const errorMessage = err.response?.data?.detail || "Unknown error";
      formik.setErrors({ code: errorMessage });
    },
  });

  return (
    <Layout showNavbar={false} showFooter={false} showPublicFooter={true}>
      <CardsContainer>
        <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
          <h1 className="text-white text-center font-oswald font-bold text-2xl pt-16">
            Kirjaudu palveluun:
          </h1>
          <img src={pvarkiLogo} alt="Pvarki Logo" className="w-20" />
          <span className="text-white text-center font-oswald font-bold text-3xl">
            {deployment || "Loading..."}
          </span>
          <FormikProvider value={formik}>
            <Form className="flex flex-col items-center gap-3 w-full">
              <label className="flex flex-col gap-3 w-full text-white">
                Kirjautumiskoodi:
                <Field
                  type="text"
                  name="code"
                  className="bg-gray-100 w-full p-2 rounded-lg text-black"
                  onFocus={handleInputFocus}
                  onChange={handleChange}
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
              <div className="flex w-full items-stretch">
                <div className="flex-1 px-1">
                  <Button
                    variant={{
                      color: isError ? "error" : "primary",
                      width: "full",
                    }}
                    type="submit"
                    disabled={!formik.isValid || isLoading}
                    styling={buttonStyle}
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      <img src={pencil} alt="pencil" className="h-5 w-5 mr-2" />
                      {isLoading ? "Odottaa vastausta..." : "Kirjaudu koodilla"}
                    </div>
                  </Button>
                </div>
                <div className="flex-1 px-1">
                  <Link to={mtlsUrl} className="h-full w-full">
                    <Button
                      variant={{
                        color: "success",
                        width: "full",
                      }}
                      type="button"
                      styling={buttonStyle}
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <img src={key} alt="keys" className="h-5 w-5 mr-2" />
                        Minulla on avaimet
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </Form>
          </FormikProvider>
        </main>
      </CardsContainer>
    </Layout>
  );
}
