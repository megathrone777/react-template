import { style as vanillaStyle } from "@vanilla-extract/css";

import { devices, themeVars, type StyleArg, type ThemeVars } from "@/theme";

const resolveStyle = (styleArg: StyleArg, vars: ThemeVars): string =>
  vanillaStyle(typeof styleArg === "function" ? styleArg(vars) : styleArg);

const style = (arg: StyleArg): string => resolveStyle(arg, { devices, ...themeVars });

export { style };
