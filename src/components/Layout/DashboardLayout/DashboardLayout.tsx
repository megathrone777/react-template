import React from "react";
import { useOutlet } from "react-router";

import { Header } from "./Header";

import { wrapperClass } from "./DashboardLayout.css";

const DashboardLayout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <div className={wrapperClass}>
      <Header />
      <div>{outlet}</div>
    </div>
  );
};

export { DashboardLayout };
