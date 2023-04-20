import * as React from "react"
import * as style from './sitemap.module.css'
import { Link } from "gatsby";

const Sitemap = () => {
  const links = {
    'Home': '/',
    'About Us': '/',
    'CTF Team': '/',
    'Resources': '/',
    'Research': '/',
    'News': '/',
    'Slides': '/',
    'Events': '/',
    'Calendar': '/',
    'Sign Up To Speak': '/'
  };

  const sitemap = [
    ['Home'],
    ['About Us', 'CTF Team'],
    ['Resources', 'Research', 'News', 'Slides'],
    ['Events', 'Calendar', 'Sign Up To Speak'],
  ];

  
  return (
    <div className={style.sitemap}>
      {
        sitemap.map(column => (
          <div className={style.column}>
            { 
              column.map(entry => <Link to={links[entry]}>{entry}</Link>)
            }
          </div>
        ))
      }
    </div>
  )
}

export default Sitemap;