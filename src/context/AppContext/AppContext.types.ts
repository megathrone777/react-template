import type React from "react";

export interface TAppStore {
  products: object;
}

export enum TActionTypes {
  DEFAULT = "DEFAULT",
  SET_PRODUCTS = "SET_PRODUCTS",
}

export interface TActionPayloadMap {
  [TActionTypes.DEFAULT]: undefined;
  [TActionTypes.SET_PRODUCTS]: object;
}

export type TActionUnion = {
  [K in keyof TActionPayloadMap]: { payload: TActionPayloadMap[K]; type: K };
}[keyof TActionPayloadMap];

export type TAppActions = {
  [K in keyof TActionPayloadMap]: (store: TAppStore, payload: TActionPayloadMap[K]) => TAppStore;
};

export interface TProps {
  children: React.ReactElement | React.ReactElement[];
}

interface TAppContext {
  dispatch: React.Dispatch<TActionUnion>;
  store: TAppStore;
}

export type { TAppContext };
