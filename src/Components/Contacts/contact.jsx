import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section  className="contactSection section container contact__section" id = "contact">
        <div  className="contact">
            <h3>Contact Us</h3>
            <p>We would really love to have your feedbacks. If you have any queries regarding my services, You can contact me with the help of details provided below.</p>
        </div>

        <div  className="section__container">
            <div  className="contactInfo">
                <div  className="infoBox">
                    <div  className="icon">
                        <i  className="fas fa-map-marker-alt"></i>
                    </div>
                    <div  className="text">
                        <h3>Address</h3>
                        <p>Bangalore, Karnataka, India</p>
                    </div>
                </div>

                <div  className="infoBox">
                    <div  className="icon">
                        <i  className="fas fa-envelope"></i>
                    </div>
                    <div  className="text">
                        <h3>Email</h3>
                        <p>campusfusionlab@gmail.com</p>
                    </div>
                </div>

                <div  className="infoBox">
                    <div  className="icon">
                        <i  className="fas fa-phone"></i>
                    </div>
                    <div  className="text">
                        <h3>Phone</h3>
                        <p>+977 9840936543</p>
                        <p>+91 8197310214</p>
                    </div>
                </div>
            </div>
            <div  className="contactForm">
                <form action="#" method = "POST">
                    <h2>Feedback or Queries</h2>
                    <div  className="inputBox">
                        <input 
                        type="text"
                         name = "name"
                         required = "required" 
                        placeholder="Full Name" />
                        
                    </div>
                    <div  className="inputBox">
                        <input type="email"
                         name = "email" 
                         required = "required" 
                         placeholder="Email Address" />
                        
                    </div>
                    <div  className="inputBox">
                        <textarea type="text" 
                        name = "message" 
                         placeholder="Message" />
                    </div>
                    <div  className="inputBox" >
                        <input type="submit" value = "Send" name = "submit" />
                    </div>
                </form>
            </div>
           
            
        </div>

    </section>
  )
}

export default Contact