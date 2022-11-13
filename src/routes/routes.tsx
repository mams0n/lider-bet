import { lazy } from "react";

export const PageRoutes = {
  MainPage: {
    route: "/",
    name: "main",
    Component: lazy(() => import("../pages/betmarket")),
    options: {},
    routeProps: {
      exact: true,
    },
  },
};
