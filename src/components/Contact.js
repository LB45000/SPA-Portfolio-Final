import React from 'react';
import contactMeImage from './Assets/contactme.jpeg';

function Contact() {
  
  const emailAddress = "l7476767@gmail.com";

  return (
    <div>
      <h2>Contact Me</h2>
      
      <a href={`mailto:${emailAddress}`} style={{textDecoration: 'none'}}>
        <button type="button">Send Me an Email</button>
      </a>

      <div>
        <img src={contactMeImage} alt="Contact Me" />
        <div style={{marginTop: '10px'}}>
          <a href="https://www.linkedin.com/in/luis-bravo-075373177/" 
             target="_blank" 
             rel="noopener noreferrer" 
             style={{textDecoration: 'none'}}>
            Connect with me on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
