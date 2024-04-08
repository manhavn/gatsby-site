import React from "react";
import { Link } from "gatsby";

import { HtmlHead, HtmlProvider } from "../../lib/layouts";
import { stylesHeading, stylesParagraph } from "../../lib/styles";
import {
  functionState,
  functionGetServerDataOrDemoDataIfDevelopment,
} from "../../lib/functions";

import { SectionTest } from "../../lib/sections";
import { BlockTest } from "../../lib/blocks";

export default function IndexBlogsPage({ serverData }) {
  serverData = React.useMemo(
    () =>
      functionGetServerDataOrDemoDataIfDevelopment({
        serverData,
        dataDemo,
        pageState,
      }),
    [serverData],
  );

  return (
    <HtmlProvider pageState={pageState}>
      <h1 style={stylesHeading}>Blogs</h1>
      <p style={stylesParagraph}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/blogs/aa">/blogs/aa</Link>
      </p>
      {serverData.message}
      <br />
      <SectionTest>
        <BlockTest pageState={pageState} pageStateKey="text" />
        <BlockTest pageState={pageState} pageStateKey="text2" />
      </SectionTest>
    </HtmlProvider>
  );
}

export const Head = () => <HtmlHead title={"Blogs"} />;

const pageState = functionState();
const dataDemo = { message: "Demo data " + new Date().getTime() };
