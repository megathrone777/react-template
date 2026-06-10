import React from "react";
import { useOutlet } from "react-router";

import { layoutClass, wrapperClass } from "./AuthLayout.css";

const AuthLayout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <div className={wrapperClass}>
      <div className={layoutClass}>{outlet}</div>
    </div>
  );
};

export { AuthLayout };
