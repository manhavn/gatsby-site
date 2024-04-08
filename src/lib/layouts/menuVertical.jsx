import React from "react";

import { stylesMenuVertical } from "../styles";

const MenuVertical = React.memo(function ({
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
        ...stylesMenuVertical,
        ...themeProvider.menu,
        width: `${menuSize}px`,
      }}
    >
      {serverData.message}
    </div>
  );
});

export default MenuVertical;
