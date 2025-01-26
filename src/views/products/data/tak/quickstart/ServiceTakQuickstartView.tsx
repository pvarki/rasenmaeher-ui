import { useEffect } from "react";
import { ServiceView } from "../../../ServiceView";

export function ServiceTakQuickstartView() {
  useEffect(() => {
    window.scrollTo(0, 60);
  }, []);
  return (
      <ServiceView serviceName={'tak'} viewName={'ServiceTakQuickstart'} />
  );
}
