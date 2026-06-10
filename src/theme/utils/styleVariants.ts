import { styleVariants as vanillaStyleVariants, type ComplexStyleRule } from "@vanilla-extract/css";

import { devices, themeVars, type StyleVariants, type ThemeVars } from "@/theme";

const styleVariants: StyleVariants = ((variantMap: unknown, mapFn: unknown): unknown => {
  const vars = { devices, ...themeVars };
  const resolvedMap = (
    typeof variantMap === "function"
      ? (variantMap as (t: ThemeVars) => Record<string, unknown>)(vars)
      : variantMap
  ) as Record<string, ComplexStyleRule | string>;
  const fn = mapFn as (value: unknown, themeVars: ThemeVars) => ComplexStyleRule;

  return vanillaStyleVariants(resolvedMap, (value) => fn(value, vars));
}) as StyleVariants;

export { styleVariants };
