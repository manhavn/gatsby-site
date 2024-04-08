import React from "react";
import { Link } from "gatsby";

import { HtmlHead, HtmlProvider } from "../lib/layouts";
import { stylesHeading, stylesParagraph } from "../lib/styles";
import {
  functionState,
  functionGetServerDataOrDemoDataIfDevelopment,
} from "../lib/functions";

import { SectionTest } from "../lib/sections";
import { BlockTest } from "../lib/blocks";

export default function IndexPage({ serverData }) {
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
      <h1 style={stylesHeading}>Home</h1>
      <p style={stylesParagraph}>
        <Link to="/blogs">Blogs</Link>
        <br />
        <Link to="/about">About</Link>
      </p>
      {serverData?.message}
      <br />
      <SectionTest>
        <BlockTest pageState={pageState} pageStateKey="text" />
        <BlockTest pageState={pageState} pageStateKey="text2" />
      </SectionTest>
    </HtmlProvider>
  );
}

export const Head = () => <HtmlHead title={"Home"} />;

const pageState = functionState();
const dataDemo = { message: "Demo data " + new Date().getTime() };
