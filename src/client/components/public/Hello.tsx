import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom'


export interface HelloProps extends RouteComponentProps { }

const Hello: React.FunctionComponent<HelloProps> = () => {

    const [animate, setAnimate] = useState(false);

    const handleAnimate = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e) {
            setAnimate(!animate);
            if (animate !== true) {
                expandFunc()
                closeLink()
                setTimeout(() => {
                    location.replace('/about')
                }, 2000)

            } else {
                closeFunc()
            }
        }
    }

    const closeLink = () => {
        console.log('dong')
        document.getElementById('hello-link').classList.remove('fastFadeIn')
        setTimeout(() => {
            document.getElementById('hello-link').classList.add('fadeOut')

        }, 1000)
    }

    const expandFunc = () => {
        let slide = document.querySelector('.img-section');
        slide.classList.add('toggled');
        let slide2 = document.querySelector('.first-section-img');
        slide2.classList.add('toggled')
        let slide3 = document.querySelector('.hello-title');
        slide3.classList.add('toggled');
        let slide4 = document.querySelector('.hello-section');
        slide4.classList.add('fadeout');
    }

    const closeFunc = () => {
        let slide = document.querySelector('.img-section');
        slide.classList.remove('toggled');
    }

    const slowShow = () => {
        setTimeout(() => {
            document.getElementById('hello-link').classList.add('showDiv', 'fastFadeIn')
            document.getElementById('hello-link').classList.remove('hideDiv')
        }, 2500)
    }

    return (
        <section className="container-fluid hello-container fastFadeIn">
            <div className="row img-section">
                <img src="images/bham.jpeg" alt="birmingham skyline" className="first-section-img" />
                <div>
                    <div className="hello-title" >
                        <div className=" hello-title-text col m-3">Heather Till</div>
                    </div>
                    <div className="hello-display-div hideDiv" id="hello-link">
                        <div className="middle-layer">
                            <div className="inner-layer">
                                <div className="hello-display" id="circle-text"
                                    onClick={(e: React.MouseEvent<HTMLDivElement>) => handleAnimate(e)}>Click Here</div>
                            </div>
                        </div>
                    </div>
                </div>
                {slowShow()}
            </div>
            <div className="hello-section">
                <div className="hello-intro">Who am I?</div>
                <div className="hello-body">I am a fullstack web developer from Birmingham, Alabama. I strive to create intuitive design and functionality for a superior user experience.</div>
            </div>
        </section>
    );
}

export default Hello;