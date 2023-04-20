import * as React from "react"
import * as index from "./index.module.css"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Whatwedo from "../components/whatwedo"


const IndexPage = () => {
  return (
    <body>
        <header>
          <Navbar />
        </header>
      <main>
        <content>
          <Hero />
          <Whatwedo />
          <section></section>
          <section></section>
        </content>
        
        <Footer />
      </main>
    </body>
  )
}

export default IndexPage