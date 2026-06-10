import { TActionTypes, type TActionPayloadMap, type TActionUnion } from "./AppContext.types";

const makeAction = <K extends TActionTypes>(type: K) => {
  return (payload: TActionPayloadMap[K]): Extract<TActionUnion, { type: K }> =>
    ({ payload, type }) as Extract<TActionUnion, { type: K }>;
};

const AppActions = {
  setProducts: makeAction(TActionTypes.SET_PRODUCTS),
};

export { AppActions };
