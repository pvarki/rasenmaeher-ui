import { Routes, Route } from "react-router-dom";

import { ServiceTakQuickstartView } from "./views/servicetak/quickstartguide/ServiceTakQuickstartView";
import { TakQuickstartAndroid1 } from "./views/servicetak/quickstartguide/android/TakQuickstartAndroid1";
import { TakQuickstartAndroid2 } from "./views/servicetak/quickstartguide/android/TakQuickstartAndroid2";
import { TakQuickstartAndroid3 } from "./views/servicetak/quickstartguide/android/TakQuickstartAndroid3";
import { TakQuickstartAndroid5 } from "./views/servicetak/quickstartguide/android/TakQuickstartAndroid4";
import { TakQuickstartAndroid4 } from "./views/servicetak/quickstartguide/android/TakQuickstartAndroid5";
import { TakQuickstartIos1 } from "./views/servicetak/quickstartguide/ios/TakQuickstartIos1";
import { TakQuickstartIos2 } from "./views/servicetak/quickstartguide/ios/TakQuickstartIos2";
import { TakQuickstartIos3 } from "./views/servicetak/quickstartguide/ios/TakQuickstartIos3";
import { TakQuickstartIos4 } from "./views/servicetak/quickstartguide/ios/TakQuickstartIos4";
import { TakQuickstartIos5 } from "./views/servicetak/quickstartguide/ios/TakQuickstartIos5";
import { TakQuickstartWin1 } from "./views/servicetak/quickstartguide/wintak/TakQuickstartWin1";
import { TakQuickstartWin2 } from "./views/servicetak/quickstartguide/wintak/TakQuickstartWin2";
import { TakQuickstartWin3 } from "./views/servicetak/quickstartguide/wintak/TakQuickstartWin3";
import { TakQuickstartWin4 } from "./views/servicetak/quickstartguide/wintak/TakQuickstartWin4";

import { ServiceTakUsageView } from "./views/servicetak/usage/ServiceTakUsageView";
import { TakUsageAndroid1 } from "./views/servicetak/usage/android/TakUsageAndroid1";
import { TakUsageAndroid2 } from "./views/servicetak/usage/android/TakUsageAndroid2";
import { TakUsageAndroid3 } from "./views/servicetak/usage/android/TakUsageAndroid3";
import { TakUsageIos1 } from "./views/servicetak/usage/ios/TakUsageIos1";
import { TakUsageWin1 } from "./views/servicetak/usage/wintak/TakUsageWin1";
import { TakUsageWin2 } from "./views/servicetak/usage/wintak/TakUsageWin2";
import { TakUsageWin3 } from "./views/servicetak/usage/wintak/TakUsageWin3";
import { TakUsageWin4 } from "./views/servicetak/usage/wintak/TakUsageWin4";

const TakRoutes = [
  {
    /*As of 1.0 directly integrated to RM UI, instead of html fragment design*/
  },
  {
    path: "quickstart",
    element: <ServiceTakQuickstartView />,
  },
  {
    /*Android quickstart guide views*/
  },
  {
    path: "quickstart/android1",
    element: <TakQuickstartAndroid1 />,
  },
  {
    path: "quickstart/android2",
    element: <TakQuickstartAndroid2 />,
  },
  {
    path: "quickstart/android3",
    element: <TakQuickstartAndroid3 />,
  },
  {
    path: "quickstart/android4",
    element: <TakQuickstartAndroid4 />,
  },
  {
    path: "quickstart/android5",
    element: <TakQuickstartAndroid5 />,
  },
  {
    /*iTAK quickstart guide views*/
  },
  {
    path: "quickstart/ios1",
    element: <TakQuickstartIos1 />,
  },
  {
    path: "quickstart/ios2",
    element: <TakQuickstartIos2 />,
  },
  {
    path: "quickstart/ios3",
    element: <TakQuickstartIos3 />,
  },
  {
    path: "quickstart/ios4",
    element: <TakQuickstartIos4 />,
  },
  {
    path: "quickstart/ios5",
    element: <TakQuickstartIos5 />,
  },
  {
    /*WinTAK quickstart guide views*/
  },
  {
    path: "quickstart/win1",
    element: <TakQuickstartWin1 />,
  },
  {
    path: "quickstart/win2",
    element: <TakQuickstartWin2 />,
  },
  {
    path: "quickstart/win3",
    element: <TakQuickstartWin3 />,
  },
  {
    path: "quickstart/win4",
    element: <TakQuickstartWin4 />,
  },
  {
    /*TAK usage views, aka when set up, how do you use it*/
  },
  {
    path: "usage",
    element: <ServiceTakUsageView />,
  },
  {
    /*Android usage views*/
  },
  {
    path: "usage/android1",
    element: <TakUsageAndroid1 />,
  },
  {
    path: "usage/android2",
    element: <TakUsageAndroid2 />,
  },
  {
    path: "usage/android3",
    element: <TakUsageAndroid3 />,
  },
  {
    /*iTAK usage views*/
  },
  {
    path: "usage/ios1",
    element: <TakUsageIos1 />,
  },
  {
    /*WinTAK usage views*/
  },
  {
    path: "usage/win1",
    element: <TakUsageWin1 />,
  },
  {
    path: "usage/win2",
    element: <TakUsageWin2 />,
  },
  {
    path: "usage/win3",
    element: <TakUsageWin3 />,
  },
  {
    path: "usage/win4",
    element: <TakUsageWin4 />,
  },
];

export function TakRouteWrapper() {
  return (
    <Routes>
      {TakRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
