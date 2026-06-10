import { style } from "@/theme";

export const wrapperClass = style({
  alignItems: "center",
  display: "grid",
  gridAutoFlow: "row",
  justifyItems: "center",
  minHeight: "100dvh",
  paddingInline: 12,
  textAlign: "center",
});

export const layoutClass = style({
  maxWidth: 600,
  position: "relative",
  width: "100%",
});
