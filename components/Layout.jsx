// File name: Layout.jsx
// Student’s Name: Aleli Macapagal
// StudentID: 301325488
// Date: Jan.27.2024

import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/images/anmlogo.jpg';
import '../src/index.css'

//my portfolio layout/nav bar
export default function Layout() {
    
 return (
  <>
   < img src={football1}alt="anmlogo" className="img" width="80px" height="80px"/>  
    <nav>
       <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/project">Project</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact Me</Link>
    </nav>
    <br/>
   <hr />
   {/* my portfolio footer */}
   <div class="footer">
      <p>Created by Aleli Macapagal &copy; 2024</p>
   </div> 
  </> 
  
 );

}
