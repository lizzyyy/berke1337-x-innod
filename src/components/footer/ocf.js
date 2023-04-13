import * as React from "react"
import * as footerStyles from "./footer.module.css"

const OCF = () => (
  <div>
    <div className={footerStyles.ocfWrapper}>
      <a href="https://www.ocf.berkeley.edu">
        <img src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
        alt="Hosted by the OCF" />
      </a>
    </div>

    <div>
      We are a student group acting independently of the University of California. 
      We take full responsibility for our organization and this web site.
    </div>
  </div>
)

export default OCF;