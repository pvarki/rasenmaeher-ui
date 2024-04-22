import { useState, useCallback } from "react";
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
import { useTranslation } from "react-i18next";

interface StatusCodeError extends Error {
  statusCode?: number;
}
export function CallsignSetupStep() {
  const navigate = useNavigate();
  const { code, codeType } = useLoginCodeStore();
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const CallsignSchema = yup.object().shape({
    callsign: yup
      .string()
      .required(t("callsignsetup-callsign-required"))
      .min(3, t("callsignsetup-callsign-min"))
      .matches(/^[a-zA-Z0-9]{3,30}$/, t("callsignsetup-callsign-allowed-chars"))
      .max(30, t("callsignsetup-callsign-max")),
  });

  const handleCommonError = (error: StatusCodeError) => {
    setIsSubmitting(false);
    if (error.statusCode === 400) {
      setErrorMessage(t("errors.callsign_in_use"));
    } else {
      setErrorMessage(t("errors.unexpected_error"));
    }
  };

  const { mutate: loginAsAdmin, isLoading: isLoadingAdmin } = useLoginAsAdmin({
    onSuccess: (jwt) => {
      localStorage.setItem("token", jwt);
      localStorage.setItem("callsign", formik.values.callsign);
      window.location.reload();
      navigate("/login/createmtls");
    },
    onError: handleCommonError,
  });

  const { mutate: initEnrollment, isLoading: isLoadingEnrollment } =
    useInitEnrollment({
      onSuccess: (data) => {
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("approveCode", data.approvecode);
        localStorage.setItem("callsign", data.callsign);
        window.location.reload();
        navigate("/login/enrollment");
      },
      onError: handleCommonError,
    });

  const formik = useFormik({
    initialValues: { callsign: "" },
    validationSchema: CallsignSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      setErrorMessage(""); // Clear previous error messages
      if (codeType === "admin") {
        loginAsAdmin({ callsign: values.callsign, code });
      } else if (codeType === "user") {
        initEnrollment({ callsign: values.callsign, invite_code: code });
      }
    },
  });

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setErrorMessage(""); // Clear the error message when user edits the form
      formik.handleChange(event); // You still need Formik to handle the change
    },
    [formik],
  );

  return (
    <Layout showNavbar={true} showFooter={true}>
      <CardsContainer>
        <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
          <h1 className="text-white text-center font-oswald font-bold text-2xl pt-2">
            {t("callsignsetup-give-your-callsign")}
          </h1>
          <img src={trooper} alt="Pvarki Logo" className="w-20 p-1" />
          <ServiceInfoCard
            title={t("callsignsetup-enter-callsign-title")}
            details={t("callsignsetup-enter-callsign-detail")}
          />
          <FormikProvider value={formik}>
            <Form className="flex flex-col items-center gap-3 w-full">
              <label className="flex flex-col gap-3 w-full text-white">
                {t("callsignsetup-your-callsign")}:
                <Field
                  type="text"
                  name="callsign"
                  className="bg-gray-100 w-full p-2 rounded-lg text-black font-consolas"
                  onChange={handleInputChange} // Bind the custom change handler
                />
                {formik.errors.callsign && (
                  <span className="text-red-500">{formik.errors.callsign}</span>
                )}
                {errorMessage && (
                  <span className="text-red-500">{errorMessage}</span>
                )}
              </label>
              <Button
                type="submit"
                variant={{ color: "primary", width: "full" }}
                disabled={
                  !formik.isValid ||
                  isSubmitting ||
                  isLoadingAdmin ||
                  isLoadingEnrollment
                }
              >
                {isSubmitting || isLoadingAdmin || isLoadingEnrollment
                  ? t("awaiting-response")
                  : t("login")}
              </Button>
            </Form>
          </FormikProvider>
        </main>
      </CardsContainer>
    </Layout>
  );
}
