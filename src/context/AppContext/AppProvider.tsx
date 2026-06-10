import React, { useReducer } from "react";

import { AppContext } from "./AppContext";
import { AppReducer } from "./AppReducer";
import { AppStore } from "./AppStore";

import type { TProps } from "./AppContext.types";

const AppProvider: React.FC<TProps> = ({ children }) => {
  const [store, dispatch] = useReducer(AppReducer, AppStore);

  return (
    <AppContext
      value={{
        dispatch,
        store,
      }}
    >
      {children}
    </AppContext>
  );
};

export { AppProvider };
