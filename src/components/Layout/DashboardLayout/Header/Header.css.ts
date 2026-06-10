import { style } from "@/theme";

export const wrapperClass = style({
  height: 80,
  minHeight: 80,
});

export const linkClass = style(({ fonts }) => ({
  fontWeight: fonts.medium,
}));
