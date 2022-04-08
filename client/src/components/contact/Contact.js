import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="Contact">
            <form method="post" action="" role="presentation">
                <label for="name">NAME</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" pattern="[A-Za-z]" aria-label="Enter your name" required />
                <label for="email">EMAIL</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" aria-label="Enter your email address" required />
                <label for="message">MESSAGE</label>
                <textarea id="message" name="message" rows="10" cols="30" maxlength="250" placeholder="Enter your message" aria-label="Enter your message" required></textarea>
                <input className="Contact__button" type="submit" value="SUBMIT" aria-label="Submit" />
            </form>
        </section>
    );
}

export default Contact;