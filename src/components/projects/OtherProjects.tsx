import AnimatedLettersFast from 'components/AnimatedlettersFast'
import React, { useState, useEffect } from 'react'
import "./otherProjects.scss"


const OtherProjects = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "Other Projects ".split("")


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-fast-hover")
        }, 4000)
    })

    return (
        <div className='other'>
            <span className="sectiontag">&lt;section&gt;</span>
            <div className="other__container">
                <h1 className="other__headingPrimary">
                    <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
                </h1>
            </div>

            <ul className="other__list">
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="https://github.com/yashfalke77/food-ordering-app" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://youtu.be/Bm6oUdohS9M" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Food Ordering App</div>
                            <p className='other__cardBodyDescription'>
                                Responsive pizza restaurant food ordering app UI design using React | Next.js. Design restaurant app using React Next.js and CSS. Next.js MongoDB restaurant (order food) project using React Redux. Full-stack Next.js APP.                            </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> Material UI &nbsp; Nextjs &nbsp; Mongodb &nbsp; jwt-auth</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="https://github.com/yashfalke77/iNotebook" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://youtu.be/MF7xbfKyaEk" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">INotebook</div>
                            <p className='other__cardBodyDescription'>
                                Notebook is made from the pain of writing all the things in notebook which is very hectic. So we made a online web platform where you can create,edit, upload,delete your notes / information privately and securely without any disturbancee,you can also access your notes anywhere in your world,at anytime time.</p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> Material UI &nbsp; React &nbsp; MongoDB &nbsp; Expressjs</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="https://github.com/yashfalke77/Natours-project" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://codepen.io/yashfalke77/pen/zYpvOBo" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-codepen"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Natours</div>
                            <p className='other__cardBodyDescription'>
                                Natours. An awesome tour booking site built on top of NodeJS. A Web design of tours and travelling usingAdvanced css i.e SCSS / SASS
                            </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> SCSS / SASS &nbsp; UI / UX &nbsp; Nodejs &nbsp; HTML</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="https://github.com/yashfalke77/Ping-Pong-Score-Keeper" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://codepen.io/yashfalke77/pen/KKqpgzN" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-codepen"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Ping Pong Score-Keeper</div>
                            <p className='other__cardBodyDescription'>
                                Ping Pong Score Keeper website built on vanilla javascript and bulma frontend framework
                            </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> Bulma &nbsp; javascript &nbsp; vanilla js</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="https://github.com/pico-india/main-django" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://youtu.be/HI5fYKvuo-8" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Pico - A photo library website</div>
                            <p className='other__cardBodyDescription'>
                                Pico is a website dedicated to sharing stock photography under the Pico license. Pico allows photographers to upload photos to its website, which are then curated by a team of photo editors. In Pico we are aspiring to be one of the largest photography suppliers on the internet.                            </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> Python &nbsp; Django &nbsp; HTML / CSS &nbsp; Javascript</div>
                        </div>
                    </div>
                </li>
            </ul>
            <span className="sectiontag">&lt;/section&gt;</span>
        </div>
    )
}

export default OtherProjects