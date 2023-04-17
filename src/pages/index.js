import * as React from "react"
import * as index from "./index.module.css"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Hero from "../components/hero"


const IndexPage = () => {
  return (
    <body>
      <main>
        <header>
          <Navbar />
        </header>
        
        <content>
          <Hero />
          <section></section>
          <section></section>
        </content>
        
        <Footer />
      </main>
    </body>
  )
}

export default IndexPage