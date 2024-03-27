import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Welcome to my Website</h1>
      <p>My name is Luis Bravo and I'm a passionate developer dedicated to building products that have a real world impact.</p>
      <div style={{ marginTop: '40px' }}>
        <h2>Connect With Me</h2>
        <a href="https://www.instagram.com/" style={{ marginRight: '10px' }}>Instagram</a>
        <a href="https://about.meta.com/" style={{ marginRight: '10px' }}>Facebook</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </div>
  );
}

export default Home;

