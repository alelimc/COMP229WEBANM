// File name: Home.jsx
// Student’s Name: Aleli Macapagal
// StudentID: 301325488
// Date: Jan.27.2024

import anme from '../src/assets/images/anme.jpg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

//my portfolio Home page
export default function Home() {    
  return <>
    <section className="home">
      <h2>Welcome to My Portfolio</h2>
      <p></p>
    </section> 
        <div style={{ display: 'flex' }}>
            <div className="image">
                <img className="image" src={anme} alt="profile" width="150" height="250" />      
            </div>
            <div style={{ marginLeft: '20px' }}>
                <h1>
                    Hello! I'm <span className="introName">Aleli</span>
                </h1>
                <h1>I'm a Website Developer</h1>
                <br/>
                <span className="introPara">
                  "My mission is to reach the goal of my clients, create a web site that is suitable for their needs
                  and strive for a modern website layout and high organic search engine rankings."
                </span>
                <div className="button">
                <Link to="/about">
                  <button >
                    <img src={hire} alt="Hire me" width="100px" height="80px" />
                  </button>
                </Link>
             </div>          
          </div>   
 
     </div>

     </>

}
    