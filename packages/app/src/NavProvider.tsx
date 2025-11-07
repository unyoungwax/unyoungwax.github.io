import { createHashRouter, Navigate, RouterProvider } from "react-router";
import { Pathname } from "./entity/Pathname";
import { App } from "./view/App/App";

const router = createHashRouter([{
  path: "/",
  element: <App />,
  children: [{
    index: true,
    element: <Navigate to={Pathname.Base} />,
  }, {
    path: Pathname.Base,
    lazy: () => import("./view/Base/Component"),
  }, {
    path: Pathname.Solana,
    lazy: () => import("./view/Solana/Component"),
  }, {
    path: Pathname.Time,
    lazy: () => import("./view/Time/Component"),
  }, {
    path: Pathname.Window,
    lazy: () => import("./view/Window/Component"),
  }, {
    path: "*",
    lazy: () => import("./view/PageNotFound/Component"),
  }],
}]);

export function NavProvider() {
  return <RouterProvider router={router} />;
}
