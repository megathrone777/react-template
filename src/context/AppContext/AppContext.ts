import { createContext } from "react";

import { AppStore } from "./AppStore";

import type { TAppContext } from "./AppContext.types";

const AppContext = createContext<TAppContext>({
  dispatch: (): null => null,
  store: AppStore,
});

export { AppContext };
