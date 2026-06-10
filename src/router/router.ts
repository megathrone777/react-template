import { createBrowserRouter } from "react-router";

import { ErrorBoundary, Layout } from "@/components";
import { HomePage, LoginPage, RegistrationPage, TestPage } from "@/pages";
import { Spinner } from "@/ui";

import { loginAction } from "./actions";
import {
  authMiddleware,
  dashboardMiddleware,
  indexMiddleware,
  logoutMiddleware,
} from "./middleware";

const router = createBrowserRouter([
  {
    children: [
      { index: true, middleware: [indexMiddleware] },

      {
        children: [
          { index: true, middleware: [indexMiddleware] },
          { action: loginAction, Component: LoginPage, path: "login" },
          { Component: RegistrationPage, path: "registration" },
        ],
        Component: Layout.Auth,
        middleware: [authMiddleware],
        path: "auth",
      },

      {
        children: [
          {
            Component: HomePage,
            index: true,
          },
          {
            Component: TestPage,
            path: "test",
          },
        ],
        Component: Layout.Dashboard,
        middleware: [dashboardMiddleware],
        path: "dashboard",
      },

      { middleware: [logoutMiddleware], path: "logout" },
    ],
    ErrorBoundary,
    HydrateFallback: Spinner,
    path: "/",
  },
]);

export { router };
