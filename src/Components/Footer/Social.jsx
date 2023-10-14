import React from 'react'

const Social = () => {
  return (
        <div className="home__social">
            <a aria-label='instagram logo' href="#"  className="home__social-icon" rel="noreferrer" target = "_blank">
                <i className="uil uil-instagram"></i>
            </a>
            <a aria-label = 'twitter-logo' href="#" className="home__social-icon" rel="noreferrer" target = "_blank">
            <i className="uil uil-twitter"></i>
            </a>
            <a aria-label='github logo' href="#" className="home__social-icon" rel="noreferrer" target = "_blank">
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    )
}

export default Social