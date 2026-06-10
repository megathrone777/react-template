import type React from "react";

export interface TProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  iconId?: TIconID;
}
