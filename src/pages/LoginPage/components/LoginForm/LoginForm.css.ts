import { rgba, style } from "@/theme";

export const formClass = style({
  justifySelf: "stretch",
});

export const loadingClass = style(({ colors }) => ({
  alignItems: "center",
  backgroundColor: rgba(colors.white, 0.9),
  display: "grid",
  height: "100%",
  inset: 0,
  justifyContent: "center",
  position: "absolute",
  width: "100%",
  zIndex: 1,
}));
