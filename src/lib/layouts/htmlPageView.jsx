import React from "react";

const HtmlPageView = React.memo(function ({ maxWidth, stateMain, children }) {
  return (
    <div
      style={{
        maxWidth: `${maxWidth || stateMain["__tmpMaxWidth__"]}px`,
        width: "97vw",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
});

export default HtmlPageView;
