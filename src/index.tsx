import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { AppProvider } from "@/context";
import { router } from "@/router";
import "@/theme/global.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <AppProvider>
    <RouterProvider {...{ router }} />
  </AppProvider>
);
