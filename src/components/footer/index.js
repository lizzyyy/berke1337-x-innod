import * as React from "react"
import Copyright from './copyright';
import Logo from './logo';
import OCF from './ocf';
import Sitemap from './sitemap';
import * as footerStyles from "./footer.module.css"

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.footerBar}></div>
    <div className={footerStyles.footerWrapper}>
      <div className={footerStyles.footerLeft}>
        <Logo />
        <OCF />
        <Copyright />
      </div>

      <div className={footerStyles.divider}></div>
      
      <Sitemap></Sitemap>
    </div>
  </footer>
)

export default Footer;