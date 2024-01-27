// File name: contac.jsx
// Student’s Name: Aleli Macapagal
// StudentID: 301325488
// Date: Jan.27.2024

import '../src/contact.css'

//my portfolio conact me page
export default function Contact() {
     return (
     <>
     <h2 id="contact"><b>Contact Me</b></h2>

     <form id="ffp">
    
    			<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> 
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> 
								
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" />
                    
				<label htmlFor="myMessage"> *Message: </label>
				<input type="text" id="myMessage" name="myMessage" required="required" /> <br /> <br />

				<input type="submit" className="submit" value="Submit" /> <br />
		</form> <br></br>
          <p>Call or Text: <strong> +1111.222.3344 </strong></p>
          <p>Email: <strong> amacapag@my.centennialcollege.ca </strong></p>
          <br /> <br />
          <br /> <br />
     </>

     
     );
     }
    