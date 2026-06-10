import { styleVariants } from "@/theme";

export const wrapperClass = styleVariants(
  {
    normal: {
      borderWidth: 10,
      height: 60,
      width: 60,
    },

    small: {
      borderWidth: 6,
      height: 25,
      width: 25,
    },
  },

  (template, { animations, colors }) => [
    {
      animationDuration: ".5s",
      animationIterationCount: "infinite",
      animationName: animations.spin,
      animationTimingFunction: "linear",
      borderColor: colors.amber,
      borderRadius: "50%",
      borderStyle: "solid",
      borderTopColor: "transparent",
      insetInline: 0,
      marginInline: "auto",
      position: "absolute",
      top: "50%",
    },
    template,
  ],
);
