import { useEffect } from "react";
import { ServiceView } from "../../products/ServiceView";

export function ServiceLivelogUsageView() {
    useEffect(() => {
        window.scrollTo(0, 60);
    }, []);
    return (
        <ServiceView name={'ServiceLivelogUsage'} />
    );
}
