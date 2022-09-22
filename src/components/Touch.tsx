import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLettersFast from './AnimatedlettersFast'
import "./scss/touch.scss"

const Touch = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "Get In Touch".split("")


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-fast-hover")
        }, 4000)
    })
    return (
        <section className='sec'>
            <span className="sectiontag">&lt;section&gt;</span>
            <div className='touch'>

                <label className='touch__label'>04. Whats Next?</label>
                <h1 className="touch__headingPrimary">
                    <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
                </h1>
                <p className='touch__description'>
                    Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
                <Link to="/contact" className="intro__button">
                    Contact Me
                </Link>

            </div>
            <span className="sectiontag">&lt;/section&gt;</span>
        </section>

    )
}

export default Touch