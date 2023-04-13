import * as React from "react"
import Copyright from './copyright';
import Logo from './logo';
import OCF from './ocf';
import Sitemap from './sitemap';
import * as footerStyles from "./footer.module.css"

const Footer = () => (
  <footer className={footerStyles.footerWrapper}>
    <div className={footerStyles.footerLeft}>
      <Logo />
      <OCF />
      <Copyright></Copyright>
    </div>

    <div></div>

    <div>
      <Sitemap></Sitemap>
    </div>
  </footer>
)

export default Footer;