import React from "react";
import { Link } from "gatsby";

import { stylesHtmlFooter } from "../styles";

const HtmlFooter = React.memo(function ({ themeProvider, children }) {
  return (
    <div style={{ ...stylesHtmlFooter, ...themeProvider.footer }}>
      <Link style={{ ...themeProvider.footerLink, padding: "10px" }} to="/">
        Home
      </Link>
      <Link
        style={{ ...themeProvider.footerLink, padding: "10px" }}
        to="/blogs"
      >
        Blogs
      </Link>
      <Link
        style={{ ...themeProvider.footerLink, padding: "10px" }}
        to="/policies/privacy-policy"
      >
        Privacy Policy
      </Link>
      <Link
        style={{ ...themeProvider.footerLink, padding: "10px" }}
        to="/policies/terms-of-service"
      >
        Terms of Service
      </Link>
      <Link
        style={{ ...themeProvider.footerLink, padding: "10px" }}
        to="/about"
      >
        About
      </Link>
      {children}
    </div>
  );
});

export default HtmlFooter;
