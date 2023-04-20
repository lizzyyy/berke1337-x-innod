import * as React from "react"

import Navbar from "../components/navbar"
import MeetTheTeam from "../components/meettheteam"
// import CTF from "../components/ctf"
import Footer from "../components/footer/index"

import * as aboutStyles from "./about.module.css"
import * as heroStyles from "../components/hero.module.css"

import AboutUsImage from "../images/AboutUsImage.png"

const AboutUs = () => {
    return (
        <body>
            <div className={aboutStyles.background}>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className={ aboutStyles.container }>
                        <div className={ heroStyles.textContainer}>
                            <h1 className={ aboutStyles.title }>
                                We are UC Berkeley's
                                <br></br>
                                first cybersecurity club.
                            </h1>
                            <div className={ aboutStyles.text }>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </div>
                        <div className={aboutStyles.imgContainer}>
                            <img src={AboutUsImage}></img>
                        </div>
                    </section>
                    <section>
                        <MeetTheTeam />
                    </section>
                    <section>
                        {/* <CTF /> */}
                    </section>
                </main>
                <Footer />
            </div>
        </body>
    )
}

export default AboutUs