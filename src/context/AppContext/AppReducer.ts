import {
  TActionTypes,
  type TAppActions,
  type TActionUnion,
  type TAppStore,
} from "./AppContext.types";

import type React from "react";

const actions: TAppActions = {
  [TActionTypes.DEFAULT]: (store) => store,

  [TActionTypes.SET_PRODUCTS]: (store, products) => ({
    ...store,
    products,
  }),
};

const AppReducer: React.Reducer<TAppStore, TActionUnion> = (store, { payload, type }) =>
  (actions[type] as (store: TAppStore, payload: never) => TAppStore)(store, payload as never);

export { AppReducer };
