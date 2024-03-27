import React from 'react';
import TKH from './Assets/TKH.png';
import Javascript from './Assets/Javascript.png';
import ReactImg from './Assets/React.png';
import HTML from './Assets/HTML.png';
import CSS from './Assets/css.png';
import Vite from './Assets/vite.png';
import Databases from './Assets/databases.png';

const About = () => {
  return (
    <div className="about-section" style={{ textAlign: 'center' }}>
      <h1>About Me</h1>
      <div className="text-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
        <p>Hello! I'm a developer passionate about creating impactful software solutions. With a background in web development, I have a strong foundation in React, JavaScript, and other modern web technologies. I enjoy taking on challenging projects and continuously expanding my skill set.</p>

        <h2>Mission Statement</h2>
        <p>My goal is to provide high-quality web development services that empower businesses and individuals to achieve their digital aspirations. Through innovative solutions, dedication to client satisfaction, and a commitment to quality, I strive to deliver exceptional results that exceed expectations.</p>

        <h2>Expertise and Specialization</h2>
        <p>I specialize in front-end development and mobile app development</p>

        <h2>Technologies and Tools</h2>
        <p>Proficient in JavaScript, APIs React, HTML, CSS, Vite, and MongoDB, I continuously explore and adopt cutting-edge tools to deliver state-of-the-art web solutions.</p>

        <h2>Client Focus</h2>
        <p>My services cater to a broad range of clients, including startups, small businesses, and sectors like e-commerce, healthcare, and education, ensuring their digital presence is impactful and effective.</p>

        <h2>Value Proposition</h2>
        <p>What sets me apart is my meticulous attention to detail, innovative approaches to web development, and unwavering commitment to client satisfaction, ensuring your project stands out in this crowded digital landscape.</p>

        <h2>Commitment to Quality</h2>
        <p>I am dedicated to delivering high-quality, bug-free, and user-friendly websites and applications, adhering to the best practices and quality assurance processes.</p>

        <h2>Client-Centric Approach</h2>
        <p>Understanding and aligning with client needs and vision is paramount in my process, ensuring a collaborative and fulfilling development journey.</p>

        <h2>Education and Certifications</h2>
        <p> I am participating in The Knowledge House Innovation Web Development Fellowship, which is where I am learning about industry tools that power popular apps, from creating beautiful, fast, and responsive interfaces with Meta’s ReactJS to creating powerful APIs with the Express framework.</p>
      </div>
      
      <div className="image-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        <a href="https://www.theknowledgehouse.org/innovation_fellowship/" target="_blank" rel="noopener noreferrer">
          <img src={TKH} alt="The Knowledge House" style={{ maxWidth: '100%', height: 'auto', width: '150px' }} />
        </a>
        <img src={Javascript} alt="Javascript" style={{ maxWidth: '100%', height: 'auto', width: '150px' }} />
        <img src={ReactImg} alt="React" style={{ maxWidth: '100%', height: 'auto', width: '150px' }} />
        <img src={HTML} alt="HTML" style={{ maxWidth: '100%', height: 'auto', width: '150px' }} />
        <img src={CSS} alt="CSS" style={{ maxWidth: '100%', height: 'auto', width: '150px' }} />
        <img src={Vite} alt="Vite" style={{ maxWidth: '100%', height: 'auto', width: '150px' }} />
        <img src={Databases} alt="Databases" style={{ maxWidth: '100%', height: 'auto', width: '150px' }} />
      </div>
      <p>To learn more about me, check out my <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
    </div>
  );
};

export default About;
