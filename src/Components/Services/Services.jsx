import React from 'react'
import './services.css'
import { useEffect } from 'react'

const Services = () => {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                let mainService = document.querySelector('.service__main');
                let nodeArray = mainService.children;
                for (let i = 0; i < nodeArray.length; i++) {
                    if (i % 2 !== 0) {
                        nodeArray[i].querySelector('.service__image').style.order = '1';
                        nodeArray[i].querySelector('.service__image').style.clipPath =
                            'polygon(100% 0%, 100% 51%, 100% 100%, 0 100%, 8% 50%, 0 0)';
                        nodeArray[i].querySelector('.service__image').style.borderRadius = '0 12px 12px 0';
                    }
                }
            } else {
                let mainService = document.querySelector('.service__main');
                let nodeArray = mainService.children;
                for (let i = 0; i < nodeArray.length; i++) {
                    if (i % 2 !== 0) {
                        nodeArray[i].querySelector('.service__image').style.order = 'unset';
                        nodeArray[i].querySelector('.service__image').style.clipPath = 'none';
                        nodeArray[i].querySelector('.service__image').style.borderRadius = '12px';
                    }
                }
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div class="service_section" id = "services">
            <div className="service__container" id="service">
                <h1>Other Information</h1>
                <div className="service__main">
                    <div className="service__box">
                        <div className="service__image">
                            <img src= "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"
                                alt="frontend optimize" />
                        </div>
                        <div className="service__content">
                            <div className="content__title">
                                <h2>
                                    Frontend Optimization and Performance Improvement
                                </h2>
                            </div>
                            <div className="content__para">
                                <p>
                                    I can analyze and optimize existing React applications, enhancing performance, loading speed, and user experience.
                                    By identifying and resolving bottlenecks,
                                    implementing code splitting, lazy loading, and other techniques, I optimize rendering and reduce load times.
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className="service__box">
                        <div className="service__image">
                            <img src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg" alt="frontend" />
                        </div>
                        <div className="service__content">
                            <div className="content__title">
                                <h2>
                                    Front end development
                                </h2>
                            </div>
                            <div className="content__para">
                                <p>I can create responsive and interactive web applications using React.js. This includes designing and
                                    developing
                                    user interfaces, implementing complex functionality, and integrating APIs and backend services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="service__box">
                        <div className="service__image">
                            <img src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80"
                                alt="sp application" />
                        </div>
                        <div className="service__content">
                            <div className="content__title">
                                <h2>
                                    Single Page Application (SPAs) Development
                                </h2>
                            </div>
                            <div className="content__para">
                                <p> I specialize in building dynamic and seamless SPAs using React. With expertise in routing, state management,
                                    and asynchronous data fetching, I create engaging applications that deliver a smooth user experience.</p>
                            </div>
                        </div>
                    </div>


                    <div className="service__box">
                        <div className="service__image">
                            <img src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80"
                                alt="API" />
                        </div>
                        <div className="service__content">
                            <div className="content__title">
                                <h2>
                                    Third Party API Integration
                                </h2>
                            </div>
                            <div className="content__para">
                                <p>I can help client  seamlessly integrate APIs in React such as payment gateways, social media platforms, ensuring efficient communication with external services for clients' web applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Services