import React from "react";
import { Link } from "gatsby";

import { HtmlHead, HtmlProvider } from "../../../lib/layouts";
import { stylesHeading, stylesParagraph } from "../../../lib/styles";
import {
  functionState,
  functionGetServerDataOrDemoDataIfDevelopment,
} from "../../../lib/functions";

import { SectionTest } from "../../../lib/sections";
import { BlockTest } from "../../../lib/blocks";

export default function ArticlePage({ blog, article, serverData }) {
  serverData = React.useMemo(
    () =>
      functionGetServerDataOrDemoDataIfDevelopment({
        serverData,
        dataDemo,
        pageState,
      }),
    [serverData],
  );

  console.log(blog, article, process.env.NODE_ENV);
  return (
    <HtmlProvider pageState={pageState}>
      <h1 style={stylesHeading}>
        Article {blog} {article}
      </h1>
      <p style={stylesParagraph}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/blogs">/blogs</Link>
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

export const Head = () => <HtmlHead title={"Article"} />;

const pageState = functionState();
const dataDemo = { message: "Demo data " + new Date().getTime() };
