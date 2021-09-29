import React from 'react';

const Home = () => {
    return (<>
        <div className="page-heading">
            <h1>
            Contact
            </h1>
        </div>
        <div className="contact-form">
            <form>
             <div id="enquiry-table" className="container-fluid">
                <label className="contact-title">First Name:</label>
                <input type="text" name="first_name" className="contact-filling" />
                <label className="contact-title">Last Name:</label>
                <input type="text" name="last_name" className="contact-filling" />
                <label className="contact-title">Organisation:</label>
                <input type="text" name="organisation" className="contact-filling" />
                <label className="contact-title">Email:</label>
                <input type="email" name="email" className="contact-filling" />
                <label className="contact-title">Phone:</label>
                <input type="tel" name="phone_number" className="contact-filling" />
                <label id="enquiry-content" className="contact-title">Enquiry:</label>
                <input type="text" name="description" className="contact-filling6"/>
                <button id="button">Submit</button>
             </div>
            </form>
        </div>
        </>
    )
}

export default Home