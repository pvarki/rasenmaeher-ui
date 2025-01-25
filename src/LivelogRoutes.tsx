import { Routes, Route } from "react-router-dom";
import { ServiceLivelogQuickstartView } from "./views/servicelivelog/quickstartguide/ServiceLivelogQuickstartView";
import { ServiceLivelogUsageView } from "./views/servicelivelog/usage/ServiceLivelogUsageView";

const LivelogRoutes = [
    {
        path: "quickstart",
        element: <ServiceLivelogQuickstartView />,
    },
    {
        path: "usage",
        element: <ServiceLivelogUsageView />,
    },
];

export function LivelogRouteWrapper() {
    return (
        <Routes>
            {LivelogRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}
