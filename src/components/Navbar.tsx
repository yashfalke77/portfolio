import React from 'react'
// import logo from "../static/images/logo.png"
import { Link } from "react-router-dom"
import "./scss/navbar.scss"

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="navbar__left">
                <Link to="/" className="navbar__link">
                    <img alt='logo' src="https://res.cloudinary.com/dhbiouaym/image/upload/v1663667966/Portfolio/logo_qny4vm.png" className="navbar__img" />
                </Link>
            </div>
            <div className="navbar__right">
                <ul className="navbar__list">
                    <li className="navbar__items">
                        <a href="/#about" className="navbar__itemsLink"><span className="navbar__itemsLinkNumeric">01.</span>.about()</a>
                    </li>
                    <li className="navbar__items">
                        <a href="/#about" className="navbar__itemsLink"><span className="navbar__itemsLinkNumeric">02.</span>.skills()</a>
                    </li>
                    <li className="navbar__items">
                        <a href="/#about" className="navbar__itemsLink"><span className="navbar__itemsLinkNumeric">03.</span>.work()</a>
                    </li>
                    <li className="navbar__items">
                        <a href="/#about" className="navbar__itemsLink"><span className="navbar__itemsLinkNumeric">04.</span>.contact()</a>
                    </li>
                </ul>
                <a href="https://drive.google.com/file/d/1SArkoqiFxn9qevyzhdjTVBb6oJnRb6F_/view?usp=sharing" target="_blank" rel='noreferrer' className="navbar__button">Resume</a>
            </div>
        </nav>
    )
}

export default Navbar