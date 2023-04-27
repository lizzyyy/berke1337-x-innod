import * as React from "react"
import * as styles from "./resourcesection.module.css"
import FancyButton from "./fancybutton"

const ResourceSection = ({ title, text, link, buttonText, imageSrc, idName }) => {
    return (
        <div className={styles.customizableComponent} id={idName}>
          <div className={styles.contentLeft}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
            <div className={styles.button}>
                <FancyButton 
                    link={link}
                    text={buttonText}
                />
            </div>
            </div>
            <div className={styles.contentRight}>
                <img className={styles.image} src={imageSrc} alt="very sad"/>
            </div>
        </div>
    );
}

export default ResourceSection