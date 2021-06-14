import React from 'react';

const Contact = () => {
return(
    <div>
        <h3>Contact us</h3>
        <form action="/action_page.php">
            <label for="fname">Nameame:</label>
            <input type="text" id="fname" name="fname"></input><br></br>
            <label for="lname">Email:</label>
            <input type="text" id="lname" name="lname"></input><br></br>
            <input type="submit" value="Submit"></input><br></br>
            <textarea name="comment" form="usrform">Enter text here...</textarea>
        </form>
    </div>
    
)
}
export default Contact;