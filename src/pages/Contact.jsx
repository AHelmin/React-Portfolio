import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Contact() {

    const [messageData, setMessageData] = useState()

    async function handleMessageChange() {
        // console.log(messageData)
    }

    async function submitMessage(e) {
        e.preventDefault()
        console.log('click')
    }

    return (
        <>
            <div className="d-flex container-fluid flex-wrap-column flex-column mt-5 ms-5">
                <h2 className="text-left">Contact</h2>
                <div className="col-9">
                    <form className="form">
                        <div className="mb-3">
                            {/* <label className="form-label" htmlFor="name"></label> */}
                            <h3>Name:</h3>
                            <input type="text" name="name" value={messageData?.name || ''} onChange={handleMessageChange} />
                        </div>
                        <div className="mb-3">
                            {/* <label className="form-label" htmlFor="email">Name</label> */}
                            <h3>Email:</h3>
                            <input type="text" name="email" value={messageData?.email || ''} onChange={handleMessageChange} />
                        </div>
                        <div className="mb-3">
                            {/* <label className="form-label" htmlFor="name">Name</label> */}
                            <h3>Message:</h3>
                            <textarea rows="10" cols="80" type="text" name="message" value={messageData?.message || ''} onChange={handleMessageChange} />
                        </div>
                        <button className="btn btn-primary" onClick={submitMessage}>Submit</button>
                    </form>
                </div>
            </div>


        </>
    )
}