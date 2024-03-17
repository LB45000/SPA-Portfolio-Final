import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
 const NavBar = () => {
   return (
     <nav className="navbar">
       <ul>
         <li>
           <Link className="link" to="/">Home</Link>
         </li>
         <li>
           <Link to="/about">About</Link>
         </li>
         <li>
           <Link to="/contact">Contact</Link>
         </li>
         <li>
           <Link to="/projects">Projects</Link>
         </li>
       </ul>
     </nav>
   )
 }

 const phoneNumber = "###-###-####";

 return (
   <Router>
     <NavBar />
     <hr />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact phone={phoneNumber}/>} />
       <Route path="/projects" element={<Projects />} />
     </Routes>
   </Router>
 );
};

export default App;
