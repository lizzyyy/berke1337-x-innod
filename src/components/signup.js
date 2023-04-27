import * as React from 'react'
import * as CTFStyles from './ctf.module.css'
import FancyButton from './fancybutton'

const CTF = () => {
    return(
        <div className={ CTFStyles.container }>
            <div className={ CTFStyles.left }>
                <div className={CTFStyles.title}>
                    SIGN UP TO TALK
                </div>
                <div className={CTFStyles.text}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
            <div className={ CTFStyles.right }>
                <FancyButton link="https://google.com" text="SIGN UP" />
            </div>
        </div>
    )
}

export default CTF