import { useEffect, useState } from "react";

import images from "../../constants/images";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";

import "./footer.scss";

const Footer = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { email, message, name } = formData;

    const handleOnChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        setLoading(true);

        const contact = {
            _type: "contact",
            name,
            message,
            email,
        };
        await client.create(contact);
        setIsFormSubmitted(true);
        setLoading(false);
    };

    return (
        <>
            <h2 className="head-text"> Take a Coffe & Chat with Me</h2>
            <div className="app__footer-cards">
                <div className="app__footer_card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:abdulwadudh5@gmail.com" className="p-text">
                        abdulwadudh5@gmail.com
                    </a>
                </div>
                <div className="app__footer_card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel: +919916877762" className="p-text">
                        +919916877762
                    </a>
                </div>
            </div>

            {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text" type="text" name="name" placeholder="Your Name" value={name} onChange={handleOnChange} />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="text" name="email" placeholder="Your Email" value={email} onChange={handleOnChange} />
                    </div>
                    <div>
                        <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleOnChange} />
                    </div>
                    <button type="button" className="p-text" onClick={handleSubmit}>
                        {loading ? "Sedning" : "Message Sent"}
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">Thank You for getting in Touch!</h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg");
