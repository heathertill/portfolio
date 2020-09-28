import * as React from 'react';
import { useState } from 'react';

import Footer from '../public/Footer';

export interface WorkProps { }

const Work: React.FunctionComponent<WorkProps> = () => {

    const [animate, setAnimate] = useState(false);
    const [showShopping, setShowShopping] = useState(false);
    const [showBlog, setShowBlog] = useState(false)

    const handleShoppingAnimate = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e) {
            setAnimate(!animate);
            if (animate !== true) {
                expandFunc('.shopping', 'shop-content')
                fadeOut('.blog')
            } else {
                closeFunc('.shopping', 'shop-content')
                fadeOut('.blog')
            }
        }
    }


    const handleBlogAnimate = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e) {
            setAnimate(!animate);
            if (animate !== true) {
                expandFunc('.blog', 'blog-content')
                fadeOut('.shopping')
            } else {
                closeFunc('.blog', 'blog-content')
                fadeOut('.shopping')
            }
        }
    };

    const expandFunc = (growId: string, showId: string) => {
        let grow = document.querySelector(growId);
        grow.classList.add('toggled');
        showDiv(showId);
    }

    const closeFunc = (growId: string, showId: string) => {
        let grow = document.querySelector(growId);
        grow.classList.remove('toggled');
        hideDiv(showId);
    }

    const fadeOut = (fadeId: string) => {
        if (animate === false) {
            let show = document.querySelector(fadeId);
            show.classList.add('fadeOut');
            show.classList.remove('fadeIn')
        } else if (animate === true) {
            let show = document.querySelector(fadeId);
            show.classList.add('fadeIn')
            show.classList.remove('fadeOut')
        }
    }


    const showDiv = (id: string) => {
        setTimeout(() => {
            document.getElementById(id).classList.add('showDiv');
            document.getElementById(id).classList.remove('hideDiv')
        }, 1500)
    }
    const hideDiv = (id: string) => {
        setTimeout(() => {
            document.getElementById(id).classList.remove('showDiv')
            document.getElementById(id).classList.add('hideDiv');
        }, 500)
    }

    const openApp = (id: string) => {
        window.open(id, "_blank")
    }


    return (
        <section className="work-section fadeIn">
            <img src="images/codeScreen.png" alt="computer code image" className="work-background" />
            <div className="work-over">
                {/* <img src="images/codeScreen.png" alt="computer code image" className="work-background" /> */}
                {/* <div className="work-div"> */}
                <div className="work-intro">
                    <h1 className="work-title">Check out some of my work...</h1>
                </div>
                <div className="row row-cols-2 row-cols-sm-1 work-div">
                    <div className="col-md-4 work-card-div">
                        <div className="card work-card shopping"
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => handleShoppingAnimate(e)} >
                            <img src="images/shopComp.png" alt="shoping app" className="card-img-top" />
                            <div className="card-title work-card-title">Shopping</div>
                            <div className="card-text hideDiv" id="shop-content">
                                <div className="text-myWhite">This is a fullstack shopping app. Users login and add items to the group shopping list. When items are purchased or removed the user who added the item will recieve a text informing them of the items status.</div>                              
                                <button onClick={() => openApp("https://stormy-sea-01231.herokuapp.com")}>See it working!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-1 work-card-div" id="blog">
                        <div className="card work-card blog"
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => handleBlogAnimate(e)} >
                            <img src="images/blogComp.png" alt="blog app" className="card-img card-img-top" />
                            <div className="card-title work-card-title">Blog</div>
                            <div className="hideDiv" id="blog-content">
                                <div className="card-text">Stuff about the app</div>
                                <button className="" onClick={() => openApp("https://limitless-bastion-43539.herokuapp.com")}>See it working!</button>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Work;