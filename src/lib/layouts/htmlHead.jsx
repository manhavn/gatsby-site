import React from "react";

import favicon from "../assets/favicon.png";

const HtmlHead = React.memo(function ({ title }) {
  return (
    <>
      <link rel="icon" href={favicon || ""} />
      <style>{`body{ font-family: "-apple-system, Roboto, sans-serif, serif";}`}</style>
      <title>{title}</title>
    </>
  );
});

export default HtmlHead;
