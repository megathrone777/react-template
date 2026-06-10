import React from "react";

import { Metadata } from "@/components";
import { Icon } from "@/ui";

import { iconClass, wrapperClass } from "./TestPage.css";

const TestPage: React.FC = () => (
  <>
    <Metadata
      description="qwe"
      title="React App | Test page"
    />

    <div className={wrapperClass}>
      <Icon
        className={iconClass}
        id="car"
      />
    </div>
  </>
);

export { TestPage };
