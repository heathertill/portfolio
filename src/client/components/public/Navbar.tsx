import * as React from 'react';
import { useState, useReducer } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { handleAnimation } from '../../utils/formService';
import { fallDown as Menu } from 'react-burger-menu'

export interface NavbarProps { }

const Navbar: React.FunctionComponent<NavbarProps> = () => {

    const homeId = location.pathname === "/" ? "active-item" : "";
    const aboutId = location.pathname === "/about" ? "active-item" : "";
    const contactId = location.pathname === "/contact" ? "active-item" : "";
    const workId = location.pathname === "/work" ? "active-item" : "";

    return (
        <section className="nav-section sticky-top" >
            <Menu
                disableAutoFocus
                noOverlay
                customCrossIcon={false} >
                <a id={homeId} href="/" className="menu-item" >Home</a>
                <a id={aboutId} href="/about" className="menu-item" >About</a>
                <a id={workId} href="/work" className="menu-item">Work</a>
                <a id={contactId} href="/contact" className="menu-item">Contact</a>
            </Menu>
        </section>
    );
}

export default Navbar;