import * as React from "react"
import * as whatwedoStyles from "./whatwedo.module.css"
import Learn from "../images/LearnButton.png"
import Hack from "../images/HackButton.png"
import Compete from "../images/CompeteButton.png"

const Whatwedo = () => (
    <section>
        <div className={ whatwedoStyles.textContainer }>
            <h2>What We Do</h2>
            <p>Lorem Ipsum is simply dummy text of  the printing and typesetting industry.</p>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className={whatwedoStyles.imgContainer}>
            <div className={ whatwedoStyles.hoverContainer }>
                <img className={whatwedoStyles.image} src={ Learn }></img>
                <div className={ whatwedoStyles.overlay }></div>
                <div>
                    <p className={ whatwedoStyles.text }>PLACE TEXT</p>
                </div> 
            </div>
            <div className={ whatwedoStyles.hoverContainer }>
                <img className={whatwedoStyles.image} src={ Hack }></img>
                <div className={ whatwedoStyles.overlay }></div>
                <div>
                    <p className={ whatwedoStyles.text }>PLACE TEXT</p>
                </div> 
            </div>
            <div className={ whatwedoStyles.hoverContainer }>
                <img className={whatwedoStyles.image} src={ Compete }></img>
                <div className={ whatwedoStyles.overlay }></div>
                <div>
                    <p className={ whatwedoStyles.text }>PLACE TEXT</p>
                </div> 
            </div>
        </div>
        <a className={ whatwedoStyles.noUnderline } href="https://www.google.com/">
            <div className={ whatwedoStyles.link }>
                <div className={whatwedoStyles.outline} >
                    <div className={whatwedoStyles.inside} >
                        LEARN MORE
                    </div>
                </div>
            </div>
        </a>
    </section>
)

export default Whatwedo