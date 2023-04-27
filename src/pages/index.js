import * as React from "react"
import * as index from "./index.module.css"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Whatwedo from "../components/whatwedo"
import Faq from "../components/faq"


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
          <Faq />
        </content>
        
        <Footer />
      </main>
    </body>
  )
}

export default IndexPage