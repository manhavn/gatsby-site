import React from "react";

import { stylesHtmlHeader } from "../styles";

const HtmlHeader = React.memo(function ({
  size,
  menuSize,
  themeProvider,
  children,
}) {
  return (
    <div
      style={{
        ...stylesHtmlHeader,
        ...themeProvider.header,
        marginTop: `${size > 4 ? 0 : 8 + menuSize}px`,
      }}
    >
      {children}
    </div>
  );
});

export default HtmlHeader;
