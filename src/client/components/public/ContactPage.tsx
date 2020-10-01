import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export interface ContactPageProps { }

const ContactPage: React.FunctionComponent<ContactPageProps> = () => {

    return (
        <section className="contact-page-container fastFadeIn container-fluid">
            <div className="contact-image-div">
                <img className="contact-img" src="images/Heather20.jpg" alt="Heather working" />
                <div className="contact-link-div">
                    <div className="contact-link">
                        <h2>Contact me by email</h2>
                        <div className="icon-div">
                            <div className="footer-icons px-4">
                                <a className="text-myBlue" href="/contact">
                                    <FontAwesomeIcon icon={['fas', 'envelope-square']} />
                                </a>
                            </div>
                        </div>

                    </div>
                    <h3 className="text-center">Look for me here...</h3>
                    <div>
                        <div className="icon-div">
                            <div className="footer-icons px-4">
                                <a className="text-myBlue" href="https://www.linkedin.com/in/heather-till/">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                </a>
                            </div>
                            <div className="footer-icons px-4">
                                <a className="text-myBlue" href="https://github.com/heathertill">
                                    <FontAwesomeIcon icon={['fab', 'github-square']} />
                                </a>
                            </div>
                            <div className="footer-icons px-4">
                                <a className="text-myBlue" href="https://www.facebook.com/heather.h.till">
                                    <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default ContactPage;