import React from 'react';
import contactMeImage from './Assets/contactme.jpeg';

function Contact() {
  
  const emailAddress = "";

  return (
    <div>
      <h2>Contact Me</h2>
      
      <a href={`mailto:${emailAddress}`} style={{textDecoration: 'none'}}>
        <button type="button">Send Me an Email</button>
      </a>

      <div>
        <img src={contactMeImage} alt="Contact Me" />
      </div>
    </div>
  );
}

export default Contact;
