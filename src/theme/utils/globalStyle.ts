import { globalStyle as vanillaGlobalStyle } from "@vanilla-extract/css";

import { devices, themeVars, type GlobalStyleArg } from "@/theme";

const globalStyle = (selector: string, rule: GlobalStyleArg): void => {
  vanillaGlobalStyle(selector, typeof rule === "function" ? rule({ devices, ...themeVars }) : rule);
};

export { globalStyle };
