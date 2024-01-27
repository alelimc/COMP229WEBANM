// File name: services.jsx
// Student’s Name: Aleli Macapagal
// StudentID: 301325488
// Date: Jan.27.2024

import webdes from '../src/assets/images/webdes.jpg';
import appdev from '../src/assets/images/appdev.jpg';
import techsupp from '../src/assets/images/techsupp.jpg';
import { Link } from 'react-router-dom';
import '../src/services.css'

//my portfolio services page
export default function Services() {
     return <>
     
     <section id="works">
         {/* display services offered */}
          <h2 className="worksTitle">Services</h2>
          <span className="worksDesc">These are the services that I provide/ 
          I am excited to bring my skills and experience to help your business achieve its goals and create a strong online presence.</span> 
          <div >
                   <img src={webdes} alt="webdes" className="worksImg" />
                   <img src={appdev} alt="appdev" className="worksImg" />
                   <img src={techsupp} alt="techsupp" className="worksImg" />
          </div>

     </section>
    

     </>
    }
    