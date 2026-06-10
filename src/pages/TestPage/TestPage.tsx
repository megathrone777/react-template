import React from "react";

import { Icon } from "@/ui";

import { iconClass, wrapperClass } from "./TestPage.css";

const TestPage: React.FC = () => (
  <>
    <title>React app | Test page</title>

    <div className={wrapperClass}>
      <Icon
        className={iconClass}
        id="car"
      />
    </div>
  </>
);

export { TestPage };
