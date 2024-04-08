import React from "react";
import { Link } from "gatsby";

import { HtmlHead } from "../lib/layouts";
import { stylesHeading, stylesParagraph } from "../lib/styles";

export default function NotFoundPage() {
  return (
    <>
      <h1 style={stylesHeading}>Page not found</h1>
      <p style={stylesParagraph}>
        Sorry 😔, we couldn’t find what you were looking for. {` `}
        <Link to="/">Go home</Link>.
      </p>
    </>
  );
}

export const Head = () => <HtmlHead title={"404 Not found"} />;
