import * as React from "react"
import * as navbarStyles from "./navbar.module.css"
import { Link } from "gatsby";
import logo from "../images/logo.png"
import discord from "../images/discord.png"

const NavBar = () => (
    <div className= { navbarStyles.navbarContainer }>
        <img className= { navbarStyles.logo } src={ logo } alt="logo"></img>
        <nav className={ navbarStyles.linkContainer }>
            <Link className={ navbarStyles.regularLink } to="">HOME</Link>
            <Link className={ navbarStyles.regularLink } to="">ABOUT US</Link>
            <Link className={ navbarStyles.regularLink } to="">RESOURCES</Link>
            <Link className={ navbarStyles.regularLink } to="">EVENTS</Link>
            <a className={ navbarStyles.specialLink } href="https://www.google.com/" target="_blank" rel="noreferrer">
                <div className={ navbarStyles.specialLinkInside }>
                    <img className={ navbarStyles.discordLogo } src={ discord } alt="logo"></img>
                    JOIN US
                </div>
            </a>
        </nav>
    </div>
)

export default NavBar;