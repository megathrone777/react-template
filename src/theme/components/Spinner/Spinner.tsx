import React from "react";

import { wrapperClass } from "./Spinner.css";

import type { TProps } from "./Spinner.types";

const Spinner: React.FC<TProps> = ({ size = "normal" }) => <div className={wrapperClass[size]} />;

export { Spinner };
