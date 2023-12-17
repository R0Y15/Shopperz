import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { TiDelete } from "react-icons/ti";
import { useStateContext } from '@/context/StateContext';
import { FiCheckCircle } from "react-icons/fi";

const ContactUs = () => {
    const [result, setResult] = useState(false);
    const { setShowContactUs } = useStateContext();

    const sendEmail = (e) => {
        const ServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const TemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const UserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

        e.preventDefault();

        emailjs.sendForm(ServiceId, TemplateId, e.target, UserId)
            .then((result) => {
                console.log(result.text);
                setResult(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    const done = () => {
        return (
            <div className='email-sent'>
                <div>
                    <span>Sent</span>
                </div>
                <div className='email-sent-icon'>
                    <span><FiCheckCircle /></span>
                </div>
            </div>
        )
    }

    return (
        <div className='contact-us-wrapper'>
            <div className="contact-us-container">
                <div className="contact-us-heading">
                    <h1>Contact Us</h1>
                    <TiDelete onClick={() => setShowContactUs(false)} className='exit' />
                </div>
                <div className="seperator" />
                <div className="contact-us-details">
                    <form className="contact-form" onSubmit={sendEmail}>

                        <input type="hidden" name="to_name" />

                        <label>Name</label>
                        <input type="text" name="from_name" required />

                        <label>Email</label>
                        <input type="email" name="sender_email" required />

                        <label>Message</label>
                        <textarea name="message" required />

                        <button type='submit' value='Send' >
                            {result ? done() : <p> Send Message </p>}
                        </button>
                        {/* <input type="submit" value="Send" /> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;