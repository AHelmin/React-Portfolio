import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {

    const defaultData = { name: '', email: '', message: '' };

    const [messageData, setMessageData] = useState(defaultData);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidMessage, setIsValidMessage] = useState(true);
    const [captchaToken, setCaptchaToken] = useState(null);

    const API_URL = 'https://jfpgw7f0ag.execute-api.us-east-2.amazonaws.com/dev/contact/';


    //function to validate email
    function validateEmail(email) {
        const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return regex.test(email.toLowerCase())
    };

    //handle email check when email field is no longer in focus
    function handleBlurEmail() {
        setIsValidEmail(validateEmail(messageData.email))
    }

    //handle name check on blur
    function handleBlurName() {
        if (messageData.name === '') {
            setIsValidName(false)
        } else {
            setIsValidName(true)
        }
    }

    //handle message check on blur
    function handleBlurMessage() {
        if (messageData.message === '') {
            setIsValidMessage(false)
        } else {
            setIsValidMessage(true)
        }
    }

    async function handleMessageChange(e) {
        // console.log(messageData)
        e.preventDefault();
        setMessageData({ ...messageData, [e.target.name]: e.target.value })
    };

    //Handle captcha change
    function handleCaptchaChange(token) {
        setCaptchaToken(token)
    };

    async function submitMessage(e) {
        // console.log('click');
        e.preventDefault();

        if (!captchaToken) {
            alert('Please verify the reCAPTCHA before submitting.');
            return;
        }

        //Create POST data
        const formData = {
            ...messageData,
            captchaToken,
        };

        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data);
        setMessageData(defaultData)
    }

    return (
        <>
            <div className="d-flex container-fluid flex-wrap-column flex-column mt-5 ms-5">
                <h2 className="text-left mb-5">Contact</h2>
                <div className="col-9">
                    <form className="form">
                        <div className="mb-3">
                            {/* <label className="form-label" htmlFor="name"></label> */}
                            <h3>Name:</h3>
                            <input className="input-flex" type="text" name="name" value={messageData.name || ''} onChange={handleMessageChange} onBlur={handleBlurName} />
                        </div>
                        <div className="mb-3">
                            {/* <label className="form-label" htmlFor="email">Name</label> */}
                            <h3>Email:</h3>
                            <input type="text" name="email" value={messageData.email || ''} onChange={handleMessageChange} onBlur={handleBlurEmail} />
                        </div>
                        <div className="mb-3">
                            {/* <label className="form-label" htmlFor="name">Name</label> */}
                            <h3>Message:</h3>
                            <textarea className="flex" rows="10" cols="80" type="text" name="message" value={messageData.message || ''} onChange={handleMessageChange} onBlur={handleBlurMessage} />
                        </div>
                        {!isValidEmail && <div>{messageData.email ? 'You must enter a valid email.' : 'You must enter an email'}</div>}
                        {!isValidName && <div>You must enter a name.</div>}
                        {!isValidMessage && <div>You must enter a message.</div>}

                        <ReCAPTCHA
                            sitekey = "6LdsvuQqAAAAAOu2LBWvieVkVo2OjJMeKJ1lgLFH"
                            onChange={handleCaptchaChange}
                        />

                        <button className="btn btn-primary" onClick={submitMessage}>Submit</button>
                    </form>
                </div>
            </div>


        </>
    )
}