import { useEffect } from "react";
import { ServiceView } from "../../products/ServiceView";

export function ServiceTakQuickstartView() {
  useEffect(() => {
    window.scrollTo(0, 60);
  }, []);
  return (
      <ServiceView name={'ServiceTakQuickstart'} />
  );
}
