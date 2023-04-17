import * as React from "react"
import * as heroStyles from "./hero.module.css"
import heroart from "../images/heroart.png"

const Hero = () => (
    <section className={ heroStyles.container }>
        <div className={ heroStyles.textContainer}>
            <h1 className={ heroStyles.logo }>BERKE1337</h1>
            <div className={ heroStyles.text }>
                <p>[berk-leet] (noun)</p>
                <p>UC Berkeley's student-run cybersecurity club</p>
            </div>
        </div>
        <div className={heroStyles.imgContainer}>
            <img className={heroStyles.heroArt} src={heroart}></img>
        </div>
    </section>
)

export default Hero