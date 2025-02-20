//add content to contact page
import { useState } from "react"


export default function Contact() {

    const defaultData = { name: '', email: '', message: '' }

    const [messageData, setMessageData] = useState(defaultData)
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isValidName, setIsValidName] = useState(true)
    const [isValidMessage, setIsValidMessage] = useState(true)

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
    }

    async function submitMessage(e) {
        console.log('click');
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
                            <input type="text" name="email" value={messageData.email} onChange={handleMessageChange} onBlur={handleBlurEmail} />
                        </div>
                        <div className="mb-3">
                            {/* <label className="form-label" htmlFor="name">Name</label> */}
                            <h3>Message:</h3>
                            <textarea className="flex" rows="10" cols="80" type="text" name="message" value={messageData.message || ''} onChange={handleMessageChange} onBlur={handleBlurMessage} />
                        </div>
                        {!isValidEmail && <div>{messageData.email ? 'You must enter a valid email.' : 'You must enter an email'}</div>}
                        {!isValidName && <div>You must enter a name.</div>}
                        {!isValidMessage && <div>You must enter a message.</div>}
                        <button className="btn btn-primary" onClick={submitMessage}>Submit</button>
                    </form>
                </div>
            </div>


        </>
    )
}