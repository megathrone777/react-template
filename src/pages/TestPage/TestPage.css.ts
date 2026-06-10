import { style } from "@/theme";

export const wrapperClass = style(({ colors }) => ({
  backgroundColor: colors.amber,
  color: colors.black,
}));

export const iconClass = style({
  maxHeight: 40,
});
