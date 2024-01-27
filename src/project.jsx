// File name: project.jsx
// Student’s Name: Aleli Macapagal
// StudentID: 301325488
// Date: Jan.27.2024

import project1 from '../src/assets/project1.jpg';
import project2 from '../src/assets/project2.jpg';
 import project3 from '../src/assets/project3.jpg';
import { Link } from 'react-router-dom';
import '../src/project.css'

//my portfolio project page
export default function Project() {
     return <>
     
     <section id="works">
         
          <h1 className="worksTitle">Projects</h1>
          <div className="worksProj">
          {/* display past projects with description and role */}
                    <p>Web Development</p>
                    <p>Spearheaded the design of a website for a homecare firm. Implemented a 
                         responsive design, improved information architecture, and integrated a 
                         dynamic content management system, resulting in boost in website traffic 
                         and user engagement.</p>
                    <img src={project1} alt="project1" className="worksImg"/>

                    <p>Travel Application Design</p>
                    <p>Contributed to the development of a travel application design, focusing on improving the booking process and integrating personalized recommendations. The redesign resulted in a 20% increase in user bookings and positive customer reviews.</p>
                     <img src={project2} alt="project2" className="worksImg"/>
               
                    <p>Mobile Device Management</p>
                    <p>This project showcases my expertise in user-centric design, collaboration with cross-functional teams, and delivering solutions that align with organizational goals.</p>
               <img src={project3} alt="project3" className="worksImg"/>                  
          </div>

     </section>
    


     </>
    }
    