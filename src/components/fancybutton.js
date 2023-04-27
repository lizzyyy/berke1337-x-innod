import * as React from "react"
import * as fancyButtonStyles from "./fancybutton.module.css"

const FancyButton = ( { link, text } ) => (
    <a className={ fancyButtonStyles.specialLink } href={link} target="_blank" rel="noreferrer">
        <div className={ fancyButtonStyles.specialLinkInside }>
            {text}
        </div>
    </a>
)

export default FancyButton;