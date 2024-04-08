import React from "react";

import MenuVertical from "./menuVertical";
import MenuHorizontal from "./menuHorizontal";

const HtmlMenu = React.memo(function ({
  size,
  menuSize,
  themeProvider,
  pageState,
}) {
  return size > 4 ? (
    <MenuVertical
      menuSize={menuSize}
      themeProvider={themeProvider}
      pageState={pageState}
    />
  ) : (
    <MenuHorizontal
      menuSize={menuSize}
      size={size}
      themeProvider={themeProvider}
      pageState={pageState}
    />
  );
});

export default HtmlMenu;
