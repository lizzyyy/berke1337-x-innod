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
            <img className={whatwedoStyles.image} src={ Learn }></img>
            <img className={whatwedoStyles.image} src={ Hack }></img>
            <img className={whatwedoStyles.image} src={ Compete }></img>
        </div>
    </section>
)

export default Whatwedo