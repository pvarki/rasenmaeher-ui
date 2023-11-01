import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginAsAdmin } from "../../hook/api/firstuser/useLoginAsAdmin";
import { useLoginCodeStore } from "../../store/LoginCodeStore";
import { useInitEnrollment } from "../../hook/api/firstuser/useInitEnrollment";
import { FormikProvider, useFormik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import { Button } from "../../components/Button";

const CALLSIGN_REGEX = /^[a-zA-Z0-9]{3,}$/;

const CallsignSchema = yup.object().shape({
  callsign: yup
    .string()
    .required("Koodinimi on pakollinen")
    .matches(CALLSIGN_REGEX, "Koodinimi on virheellinen"),
});

export function CallsignSetupStep() {
  const navigate = useNavigate();

  const loginCodeStore = useLoginCodeStore();
  const code = useLoginCodeStore((store) => store.code);

  const { mutate: loginAsAdmin, isLoading } = useLoginAsAdmin({
    onSuccess: (jwt) => {
      localStorage.setItem("token", jwt);
      localStorage.setItem("callsign", formik.values.callsign);
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
    <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
      <h1 className="text-white text-center font-oswald font-bold text-2xl">
        Olet käyttämässä kertakäyttösen kirjautumiskoodin. Jatketaanko
        kirjautumista?
      </h1>
      <span className="text-white text-center font-oswald font-bold text-3xl">
        metsa-kota
      </span>
      <FormikProvider value={formik}>
        <Form className="flex flex-col items-center gap-3 w-full">
          <label className="flex flex-col gap-3 w-full text-white">
            Käyttäjätunnus:
            <Field
              type="text"
              name="callsign"
              className="bg-gray-100 w-full p-2 rounded-lg text-black"
            />
            <span className="text-red-500">
              <ErrorMessage name="callsign" />
            </span>
          </label>
          <Button
            type="submit"
            variant={{ color: "primary", width: "full" }}
            disabled={!formik.isValid || isLoading}
          >
            Kirjaudu
          </Button>
        </Form>
      </FormikProvider>
    </main>
  );
}
