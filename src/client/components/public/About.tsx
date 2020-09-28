import * as React from 'react';
import { Link } from 'react-router-dom'

import Footer from '../public/Footer';

export interface AboutProps { }

const About: React.FunctionComponent<AboutProps> = () => {





    return (
        <section className="about fastFadeIn">
            <div className="">
                <div className="row mx-0">
                    <div className="about-left col-md">
                        <div className="about-img-div">
                            <img className="about-image" src="/images/Heather11.jpg" alt="family" />
                        </div>
                    </div>
                    <div className="about-right col-md">
                        <div className="about-text">
                            <div className="about-text-heading">Heather Till</div>
                            <div className="about-text-content">I am a fullstack web developer. I am a problem solver. I love intuitive design and functionalily.</div>
                            <div className="button-div">
                                <Link className="contact-button" to="/Contact">Contact Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills-section p-3">
                <div className="skills-title">My Skills</div>
                <div className="row about-skills py-3 mx-5">
                    <div className="col-md">
                        <ul className="skill-list">
                            <li>ReactJS</li>
                            <li>React Native</li>
                            <li>JQuery</li>
                            <li>DOM</li>
                            <li>MySQL</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <ul className="skill-list">
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Socket.io</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <ul className="skill-list">
                            <li>JSON</li>
                            <li>GitHub</li>
                            <li>VSCode</li>
                            <li>Stripe</li>
                            <li>TWilio</li>
                            <li>Mailgun</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </section>

    );
}

export default About;