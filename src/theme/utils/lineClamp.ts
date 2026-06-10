import type { StyleArg } from "@/theme";

const lineClamp = (lines: number): StyleArg => ({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: lines,
});

export { lineClamp };
