import { useMemo, useEffect, useContext, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { UserTypeContext } from "../../hook/auth/userTypeFetcher";
import { useCheckCode } from "../../hook/api/useCheckCode";
import { useLoginCodeStore } from "../../store/LoginCodeStore";
import { Button } from "../../components/Button";
import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import { Layout } from "../../components/Layout";
import pvarkiLogo from "../../assets/set/mainlogo.png";
import { CardsContainer } from "../../components/CardsContainer";
import useHealthcheck from "../../hook/helpers/useHealthcheck";
import key from "../../assets/icons/key.svg";
import pencil from "../../assets/icons/pencil.svg";
import { useTranslation } from "react-i18next";

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

export function LoginView() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useQueryParams();
  // Retrieve the code from the URL (if provided)
  const codeFromQuery = params.get("code");
  const { setOtpVerified } = useContext(UserTypeContext);
  const loginCodeStore = useLoginCodeStore();
  const { deployment } = useHealthcheck();
  const [codeNotValid, setCodeNotValid] = useState(false);
  // Prevent auto-submit from running more than once.
  const [hasAutoSubmitted, setHasAutoSubmitted] = useState(false);
  const protocol = window.location.protocol;
  const host = window.location.host;
  const mtlsUrl = `${protocol}//mtls.${host}/app/admin/`;
  const buttonStyle = "min-h-[70px]";

  // Validation schema using Yup.
  const CodeSchema = yup.object().shape({
    code: yup
      .string()
      .required(t("login-code-required"))
      .matches(TOKEN_REGEX, t("code-is-wrong")),
  });

  // If the user arrives with a code in the URL, we want to auto-validate.
  // Otherwise, we disable auto-validation (and error messages) until submit.
  const autoValidate = !!codeFromQuery;

  const formik = useFormik({
    initialValues: {
      code: codeFromQuery ? codeFromQuery.toUpperCase() : "",
    },
    validationSchema: CodeSchema,
    // Only auto-validate if a code came in via the URL.
    validateOnMount: autoValidate,
    validateOnChange: autoValidate,
    validateOnBlur: autoValidate,
    onSubmit: (values) => {
      checkCode(values.code);
    },
  });

  // Destructure useful Formik properties.
  const { values, isValid, submitForm, setFieldValue, submitCount } = formik;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const upperCaseValue = e.target.value.toUpperCase();
    setCodeNotValid(false); // Clear error
    formik.setErrors({}); // Reset all Formik errors when user starts typing
    void setFieldValue("code", upperCaseValue, false);
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
      loginCodeStore.setCode(values.code);
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

  // Auto-submit only if a code is provided in the URL
  useEffect(() => {
    if (
      codeFromQuery && // only auto-submit when arriving via URL
      values.code &&
      isValid &&
      !isLoading &&
      !hasAutoSubmitted
    ) {
      setHasAutoSubmitted(true);
      void submitForm();
    }
  }, [
    codeFromQuery,
    values.code,
    isValid,
    isLoading,
    hasAutoSubmitted,
    submitForm,
  ]);

  return (
    <Layout showNavbar={false} showFooter={false} showPublicFooter={true}>
      <CardsContainer>
        <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
          <h1 className="text-white text-center font-oswald font-bold text-2xl pt-16">
            {t("login-to-service")}
          </h1>
          <img src={pvarkiLogo} alt="Pvarki Logo" className="w-20" />
          <span className="text-white text-center font-oswald font-bold text-3xl">
            {deployment || t("loading")}
          </span>
          <FormikProvider value={formik}>
            <Form className="flex flex-col items-center gap-3 w-full">
              <label className="flex flex-col gap-3 w-full text-white">
                {t("login-input-code") + ":"}
                <Field
                  type="text"
                  name="code"
                  className="bg-gray-100 w-full p-2 rounded-lg text-black font-consolas"
                  onFocus={handleInputFocus}
                  onChange={handleChange}
                />
                <span className="text-red-500">
                  {/*
                    Show Formik's error only after the user has attempted a submission
                  */}
                  {submitCount > 0 && <ErrorMessage name="code" />}
                  {codeNotValid && <div>{t("code-is-wrong")}</div>}
                  {isError && (
                    <div>
                      {(error as ApiError).response?.data?.detail ||
                        t("error-occurred")}
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
                    disabled={!values.code || isLoading}
                    styling={buttonStyle}
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      <img src={pencil} alt="pencil" className="h-5 w-5 mr-2" />
                      {isLoading
                        ? t("login-await-response")
                        : t("login-with-code")}
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
                        {t("login-i-have-keys")}
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
