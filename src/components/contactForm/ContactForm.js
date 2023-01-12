import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { Divide } from "hamburger-react";

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_w33qoxg",
                "template_bcfyxuw",
                form.current,
                "ADPLh12r98Rl3Gtgt"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact-component-container">
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>Nom</label>
                </div>
                <div>
                    <input type="text" name="user_name" />
                </div>
                <div>
                    <label>Email</label>
                </div>
                <div>
                    <input type="email" name="user_email" />
                </div>
                <div>
                    <label>Message</label>
                </div>
                <div>
                    <textarea name="message" />
                </div>
                <div>
                    <input id="send" type="submit" value="Envoyer" />
                </div>
            </form>
        </div>
    );
};

export default ContactUs;
