import { useEffect } from "react";
import { ServiceView } from "../../products/ServiceView";

export function ServiceLivelogQuickstartView() {
    useEffect(() => {
        window.scrollTo(0, 60);
    }, []);
    return (
        <ServiceView name={'ServiceLivelogQuickstart'} />
    );
}
