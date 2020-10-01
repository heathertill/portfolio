import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export interface FooterProps { }

const Footer: React.FunctionComponent<FooterProps> = () => {


    return (
        <section className="footer-main container">
                <div className="icon-div">
                    <div className="footer-icons px-4">
                        <a className="text-myWhite" href="https://www.linkedin.com/in/heather-till/">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                    </div>
                    <div className="footer-icons px-4">
                        <a className="text-myWhite" href="https://github.com/heathertill">
                            <FontAwesomeIcon icon={['fab', 'github-square']} />
                        </a>
                    </div>
                    <div className="footer-icons px-4">
                        <a className="text-myWhite" href="https://www.facebook.com/heather.h.till">
                            <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                        </a>
                    </div>
                </div>
                <div className="row legend mx-3">
                    <div>
                        <a className="text-myWhite px-4" href="/">Home</a>
                    </div>
                    <div>
                        <a className="text-myWhite px-4" href="/about">About</a>
                    </div>
                    <a className="text-myWhite px-4" href="/work">Work</a>
                    <a className="text-myWhite px-4" href="/contact">Contact</a>
                </div>
        </section>
    );
}

export default Footer;