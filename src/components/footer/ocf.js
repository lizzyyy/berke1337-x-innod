import * as React from "react"
import * as footerStyles from "./footer.module.css"

const OCF = () => (
  <div className={footerStyles.ocfWrapper}>
    <div className={footerStyles.ocfImage}>
      <a href="https://www.ocf.berkeley.edu">
        <img src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
        alt="Hosted by the OCF" style={{height: "2.5rem"}}/>
      </a>
    </div>

    <div className={footerStyles.ocfText}>
      We are a student group acting independently of the University of California. 
      We take full responsibility for our organization and this web site.
    </div>
  </div>
)

export default OCF;