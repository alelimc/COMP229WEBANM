// File name: about.jsx
// Student’s Name: Aleli Macapagal
// StudentID: 301325488
// Date: Jan.27.2024

import React from "react";
import Aleli from '../src/assets/images/Aleli.jpg';
import ts from '../src/assets/techsupport.jpg';
import web from '../src/assets/web.png';
import app from '../src/assets/app.png';
import resumePDF from '../src/assets/files/AleliCV.pdf'; 
import '../src/about.css'

//my portfolio about page
export default function About() {
  return (
     <>
    <section id="about">

      <div style={{ textAlign: 'center' }}>
        <div>
        <br></br>
          <h1 className="skillName"> My name is Aleli Macapagal</h1>
          <h1 className="skillTitle"> I love to build amazing websites.</h1>
               <span className="skillDesc">
                    I'm a passionate and creative website designer with a keen eye for aesthetics and a love for crafting engaging digital experiences. With a background in Software Engineering Technology, I bring a unique blend of technical skills and artistic flair to every project I undertake.
               </span>
               <br></br>
                    <img className="Aleli" src={Aleli} alt="profile" width="200" height="250" />
               <br></br>
               <div style={{ textAlign: 'center' }}>
                    <a href="/contact">
                         Work With Me
                    </a>
                    <br></br>
                    <a href="/project">
                         See My Past Work
                    </a>
                    <br></br>
                    <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                         View My Resume
                    </a>                    
               </div>
        </div>
      </div>

         
          <div className="skillBar">
               <img src={web} alt="WebDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Web Design</h2>
               <p>As a dedicated and innovative Web Designer, I bring a fusion of technical prowess and creative finesse to shape visually captivating and functionally robust websites. </p>
               </div>

          </div>

          <div className="skillBar">
               <img src={app} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>App Design</h2>
               <p>As an enthusiastic App Designer, I bring a blend of creativity and technical proficiency to design intuitive and visually appealing mobile applications. </p>
               </div>


          </div>
          <div className="skillBar">
               <img src={ts} alt="TechSupport" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Technical Support</h2>
               <p>As a dedicated Technical Support Specialist, I bring a wealth of experience and expertise to ensure seamless technology experiences. </p>
               </div>

          </div>
    </section>
    </>
  );
}
