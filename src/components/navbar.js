import * as React from "react"
import * as navbarStyles from "./navbar.module.css"
import { Link } from "gatsby";
import logo from "../images/logo.png"

const NavBar = () => (
    <div className= { navbarStyles.navbarContainer }>
        <img src={ logo } alt="logo"></img>
        <nav className={ navbarStyles.linkContainer }>
            <Link className= { navbarStyles.regularLink } to="">HOME</Link>
            <Link className= { navbarStyles.regularLink } to="">ABOUT US</Link>
            <Link className= { navbarStyles.regularLink } to="">RESOURCES</Link>
            <Link className= { navbarStyles.regularLink } to="">EVENTS</Link>
            <div>
                <a href="https://www.google.com/">JOIN US</a>
            </div>
        </nav>
    </div>
)

export default NavBar;