import * as React from 'react';
import { fallDown as Menu } from 'react-burger-menu'

export interface NavbarProps { }

const Navbar: React.FunctionComponent<NavbarProps> = () => {

    const homeId = location.pathname === "/" ? "active-item" : "";
    const aboutId = location.pathname === "/about" ? "active-item" : "";
    const contactPageId = location.pathname === "/contactPage" ? "active-item" : "";
    const contactId = location.pathname === "/contact" ? "active-item" : "";
    const workId = location.pathname === "/work" ? "active-item" : "";

    return (
        <section className="nav-section" >
            <Menu
                disableAutoFocus
                noOverlay
                customCrossIcon={false} >
                <a id={homeId} href="/" className="menu-item" >Home</a>
                <a id={aboutId} href="/about" className="menu-item" >About</a>
                <a id={workId} href="/work" className="menu-item">Work</a>
                <a id={contactPageId} href="/contactPage" className="menu-item">Contact</a>
            </Menu>
        </section>
    );
}

export default Navbar;