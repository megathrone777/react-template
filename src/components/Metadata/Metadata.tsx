import React from "react";

import type { TProps } from "./Metadata.types";

const Metadata: React.FC<TProps> = ({ description, keywords, title }) => (
  <>
    <title>{`${title}`}</title>

    {description && description.length > 0 && (
      <meta
        content={description}
        name="description"
      />
    )}

    {keywords && keywords.length > 0 && (
      <meta
        content={keywords}
        name="keywords"
      />
    )}
  </>
);

export { Metadata };
