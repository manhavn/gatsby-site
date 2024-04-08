import React from "react";

import { stylesMenuHorizontal } from "../styles";

const MenuHorizontal = React.memo(function ({
  menuSize,
  themeProvider,
  pageState,
}) {
  const serverData = React.useMemo(
    () => pageState["serverData"] || {},
    [pageState],
  );
  return (
    <div
      style={{
        ...stylesMenuHorizontal,
        ...themeProvider.menu,
        height: `${menuSize}px`,
      }}
    >
      {serverData.message}
    </div>
  );
});

export default MenuHorizontal;
