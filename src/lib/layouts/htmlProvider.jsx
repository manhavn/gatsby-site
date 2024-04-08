import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { stateMain } from "../states";
import { stylesTheme } from "../styles";
import { useWindowSize } from "../hooks";
import { functionChangeTheme } from "../functions";

import HtmlMenu from "./htmlMenu";
import HtmlFooter from "./htmlFooter";
import HtmlHeader from "./htmlHeader";
import HtmlPageView from "./htmlPageView";

import "./htmlProvider.scss";

const menuSize = 50;

const HtmlProvider = React.memo(function ({ pageState, children }) {
  const { light, dark } = stylesTheme;
  const themeProvider = stateMain["__theme__provider__"];
  const [theme, setTheme] = React.useState(themeProvider || light);
  const [maxWidth, setMaxWidth] = React.useState(stateMain["__tmpMaxWidth__"]);
  const size = useWindowSize({ setMaxWidth });

  return (
    maxWidth && (
      <div style={{ ...theme.provider, maxWidth: "100vw" }}>
        <HtmlMenu
          size={size}
          menuSize={menuSize}
          themeProvider={themeProvider}
          pageState={pageState}
        />
        <HtmlPageView maxWidth={maxWidth} stateMain={stateMain}>
          <HtmlHeader
            size={size}
            menuSize={menuSize}
            themeProvider={themeProvider}
          >
            <button
              onClick={() =>
                functionChangeTheme({ theme, light, dark, setTheme })
              }
              style={{
                border: 0,
                padding: 0,
                cursor: "pointer",
                opacity: "1",
                background: "unset",
              }}
            >
              <StaticImage
                style={{ width: "60px" }}
                src="../assets/logo.png"
                alt="logo"
              />
            </button>
          </HtmlHeader>
          {children}
          <HtmlFooter themeProvider={themeProvider} />
        </HtmlPageView>
      </div>
    )
  );
});

export default HtmlProvider;
