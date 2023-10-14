import React, { useEffect, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Zoom} from 'react-slideshow-image'

const Home = () => {
    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1513563207136-862366d468ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1433477155337-9aea4e790195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2120&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80',
        }
    ]

    const divstyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }

    return (
        <div className="slide-container" id = "home">
            <Zoom duration = {2000}>
                {slideImages.map((image, index) => {
                    return (
                        <div key={index}>
                            <div className="search-container" style={{ ...divstyle, backgroundImage: `url(${image.url})` }}>
                                <input type="text" className="search-bar" />
                                <div className="search-options">
                                    <span>Search by:</span>
                                    <label for="collegeName"><input type="radio" id="collegeName" name="searchOption" /> College Name</label>
                                    <label for="mentor"><input type="radio" id="mentor" name="searchOption" /> Mentor</label>
                                    <label for="projectName"><input type="radio" id="projectName" name="searchOption" /> Project Name</label>
                                    <label for="projectTitle"><input type="radio" id="projectTitle" name="searchOption" /> Project Title</label>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Zoom>
        </div>
    )
}

export default Home