import { useRef } from "react";
import emailjs from '@emailjs/browser';

import constactstyle from "../styles/contactstyle.module.css"

import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gmzc0bi', 'template_ruy6ds9', form.current, 'Zmd1mse9A9KmBkXmK')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Error sending email. Please try again later.');
        });

        e.target.reset();
    };

    return (
        <>
            <ScrollToTop />
            <div className={constactstyle.formWrapper}>
                <form ref={form} onSubmit={sendEmail}>
                    <h2>Contact Us</h2>
                    <fieldset>
                        <label htmlFor="name">Name:
                            <input type="text" name="user_name" id="name" placeholder="Johndoe*" required />
                        </label>

                        <label htmlFor="email">Email:
                            <input type="email" name="user_email" id="email" placeholder="@email.com*" required />
                        </label>

                        <label htmlFor="phone">Phone:
                            <input type="number" name="phone_number" id="phone" placeholder="000-000-0000" required />
                        </label>

                        <div className={constactstyle.checkboxWrapper}>
                            <label htmlFor="prospective">Prospective Guest:
                                <input type="checkbox" name="prospectiveGuest" id="prospective" />
                            </label>
                            <label htmlFor="current">Current Guest:
                                <input type="checkbox" name="currentGuest" id="current" />
                            </label>
                        </div>

                        <label htmlFor="clientmessage"></label>
                        <textarea name="message" id="clientmessage" cols="30" rows="10" placeholder="Tell us about what we can do to support you"></textarea>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>  
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default ContactUs;
