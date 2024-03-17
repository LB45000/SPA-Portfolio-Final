import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Welcome to my Website</h1>
      <p>I'm a passionate developer dedicated to building products that have a real world impact.</p>

      <div style={{ marginTop: '40px' }}>
        <h2>Featured Projects</h2>
        {}
        <p>Check out my <a href="/projects" style={{color: 'skyblue'}}>Projects</a> page to see more.</p>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>Connect With Me</h2>
        {}
        <a href="https://www.instagram.com/" style={{marginRight: '10px'}}>Instagram</a>
        <a href="https://about.meta.com/" style={{marginRight: '10px'}}>Facebook</a>
        <a href="https://twitter.com">Twitter</a>
      </div>

      <div style={{ marginTop: '40px' }}>
        <button style={{padding: '10px 20px', backgroundColor: 'green', color: 'white', borderRadius: '5px'}}>
          <a href="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact Me</a>
        </button>
      </div>
    </div>
  );
}

export default Home;
