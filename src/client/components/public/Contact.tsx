import * as React from 'react';
import { useState } from 'react';
import { email } from '../../utils/mailgun';
import Swal from 'sweetalert2';
import Footer from '../public/Footer';


export interface ContactProps { }

const Contact: React.FunctionComponent<ContactProps> = () => {

    const [name, setName] = useState('')
    const [emailAd, setEmailAd] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [saveStatus, setSaveStatus] = useState('');

    const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newMessage = name + " \n \n " + message;
        let body = {
            from: emailAd,
            subject,
            message: newMessage
        }
        try {
            if (name && body.from) {
                console.log('body', body)
                email(body)
                setSaveStatus('success')
                history.back()
            } else {
                setSaveStatus('error')
                handleConfirm()
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleConfirm = () => {
        if (saveStatus === 'error') {
            Swal.fire({ title: 'Please check required fields', backdrop: `rgb(239, 239, 239)` })
            setSaveStatus('')
        }
    };



    return (
        <section className="contact-section fadeIn">
            <form className="form-group email-form"
                onSubmit={(e) => handleEmail(e)} >
                <div className="title-div">
                    <div className="contact-title">Contact</div>
                </div>
                <div className="input-div">
                <div className="email-div m-3">
                    <label className="">Full Name (required)</label>
                    <input type="text" value={name} className="input-style input-group p-2 px-4"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                </div>
                <div className="email-div m-3">
                    <label className="">Email (required)</label>
                    <input type="text" value={emailAd} className="input-style input-group p-2 px-4"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailAd(e.target.value)} />
                </div>
                <div className="subject-div m-3">
                    <label className="">Subject</label>
                    <input type="text" value={subject} className="input-style input-group p-2 px-4"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)} />
                </div>
                <div className="message-div m-3">
                    <label className="">Message</label>
                    <textarea rows={4} value={message} className="input-style input-group p-2 px-4"
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} />
                </div>
                <div className="button-div">
                    <button type="submit" className="btn btn-block btn-myMidnight rounded-pill m-3">Send</button>
                </div>
                </div>
                {handleConfirm()}
            </form>
            <Footer />
        </section>
    );
}

export default Contact;