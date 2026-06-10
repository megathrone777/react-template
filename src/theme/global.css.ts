import { globalStyle } from "@/theme";

globalStyle("h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
  textWrap: "balance",
});

globalStyle("canvas, img, picture, video, svg", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("button, input, select, textarea", {
  font: "inherit",
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("b", ({ fonts }) => ({
  fontWeight: fonts.bold,
}));

globalStyle("button", {
  cursor: "pointer",
});

globalStyle("ol, ul", {
  listStyle: "none",
});

globalStyle("p", {
  overflowWrap: "break-word",
  textWrap: "pretty",
});

globalStyle("::-webkit-scrollbar", {
  backgroundColor: "white",
  width: 5,
});

globalStyle("::-webkit-scrollbar-thumb", ({ colors }) => ({
  backgroundColor: colors.amber,
}));

globalStyle("html", {
  overflowY: "scroll",
});

globalStyle("body", ({ colors }) => ({
  color: colors.black,
  MozOsxFontSmoothing: "grayscale",
  WebkitFontSmoothing: "antialiased",
}));

globalStyle("#root", {
  isolation: "isolate",
  minWidth: 340,
});
