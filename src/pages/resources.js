import * as React from "react"

import Navbar from "../components/navbar"
import Footer from "../components/footer/index"
import ResourceSection from "../components/resourcesection"
import * as resourceStyles from "./resources.module.css"

const Resources = () => {
    return (
        <body>
            <div className={resourceStyles.background}>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className={resourceStyles.container}>
                        <div className={ resourceStyles.textContainer}>
                            <h1 className={ resourceStyles.title }>
                                Resources
                            </h1>
                            <div className={ resourceStyles.text }>
                                <p>
                                We hope you'll join us and get to learn more about cybersecurity and its opportunities!                                </p>
                            </div>
                        </div>
                    </section>
                    <div className={resourceStyles.sections}>
                        <ResourceSection
                            title="Research"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                            link=""
                            buttonText="VIEW MORE"
                            imageSrc="http://via.placeholder.com/640x360"
                            idName="research"
                        />
                        <ResourceSection
                            title="News"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                            link=""
                            buttonText="VIEW MORE"
                            imageSrc="http://via.placeholder.com/640x360"
                            idName="news"
                        />
                        <ResourceSection
                            title="Slideshows"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                            link=""
                            buttonText="VIEW MORE"
                            imageSrc="http://via.placeholder.com/640x360"
                            idName="slideshows"
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </body>
    )
}

export default Resources