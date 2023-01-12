import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { Divide } from "hamburger-react";
import { useState } from "react";

const ContactUs = () => {
    const form = useRef();
    const [modal, setModal] = useState(false);
    const user_name = "";

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

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

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
                    <input
                        id="send"
                        onClick={toggleModal}
                        type="submit"
                        value="Envoyer"
                    />
                </div>
            </form>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <p>Votre message a bien été envoyé.</p>
                        <button className="close-modal" onClick={toggleModal}>
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUs;
