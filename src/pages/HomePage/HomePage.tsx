import React from "react";

const pageTitle: string = "Home page";

const HomePage: React.FC = () => (
  <>
    <title>{`React app | ${pageTitle}`}</title>
    <h1>{pageTitle}</h1>
  </>
);

export { HomePage };
