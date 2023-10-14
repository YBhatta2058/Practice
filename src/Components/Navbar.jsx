import React, { useEffect, useState } from 'react'
import {HashLink as Link } from 'react-router-hash-link'


const Navbar = () => {
  const [scrollVal,setScrollVal] = useState(0)
  
  useEffect(
    ()=>{
      const backToTop = document.querySelector('.backToTop');
      const navbarSearch =document.querySelector('.navbarSearch')
            const handleScroll = ()=>{
                setScrollVal(window.scrollY);
                if(scrollVal > 450){
                  backToTop.classList.remove('hide')
                  navbarSearch.classList.remove('hide')
                }
                else{
                  backToTop.classList.add('hide')
                  navbarSearch.classList.add('hide')
                }
              }
            window.addEventListener('scroll',handleScroll)
        }
    )
  return (
    <div className="navbar">
      <Link smooth = {true} to = "/#home" className = "backToTop hide">
        <i class="fa-solid fa-angle-up"></i>
      </Link> 
        <a href="/" className="navbar-logo"><span>Campus </span>Fusion Lab</a>
        <input placeholder = "Search" className = "navbarSearch hide"/>
        <ul className="navbar-links">
            <li><Link to = "/">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Our Team</Link></li>
            <li><Link to="#">Top Rated Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt="Avatar" className="avatar" />
        </ul>
    </div>
  )
}

export default Navbar