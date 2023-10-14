import React from 'react'
import Social from './Social'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer__section">
            <div className="footer__container">
                <div className="footer__box">
                    <Social className = "footer__socials"/>
                    <div className="nav__section">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Top Rated Projects</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="copyrights">
                        <div className="logo">
                            <span>Campus </span>Fusion Lab
                        </div>
                        <p>
                            Copyright © Campus Fusion Lab | 2023 | All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer