import React, { useState, useEffect } from 'react'
import "./project.scss"
import LazyLoad from 'react-lazyload';

import AnimatedLettersFast from 'components/AnimatedlettersFast';

const Project = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "02. My Projects".split("")


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-fast-hover")
        }, 4000)

    })
    return (
        <div className="project">
            <span className="sectiontag">&lt;section&gt;</span>
            <h1 className="about__headingPrimary">
                <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
            </h1>

            {/* ----------------------------------------- for desktops -------------------------- */}

            <LazyLoad once height={400}>
                <section className='project__section'>
                    <div className="project__left">
                        <img className='project__img' src="https://res.cloudinary.com/dhbiouaym/image/upload/q_auto:eco/v1663667979/Portfolio/project1_tsgzck.png" alt="color palette" />
                    </div>
                    <div className="project__right">
                        <h3 className='project__headingTertiary'>Featured Project</h3>
                        <a href="https://github.com/yashfalke77/Color-palette-Project" target='_blank' rel="noreferrer" className='project__headingSecondary'><h2 >Colors.co</h2></a>
                        <div className="project__descriptionContainer">
                            <p className='project__description'>
                                Coolors is the essential tool for creating and collecting color palettes. It allows you to generate perfect matching colors in seconds. Even if you are not so skilled in design!. You may use a variety of color spaces, including RGB, CMYK, LAB etc.
                            </p>
                            <div className='project__tags'> Next.js &nbsp; React.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Express.js &nbsp; SCSS/SASS</div>
                            <div className="project__icons">
                                <a href="https://github.com/yashfalke77/Color-palette-Project" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://github.com/yashfalke77/Color-palette-Project" target='_blank' rel='noreferrer'>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </LazyLoad>
            <LazyLoad once height={400}>
                <section className='project__section'>
                    <div className="project__left1">
                        <h3 className='project__headingTertiary'>Featured Project</h3>
                        <a href="https://arcane-retreat-14101.herokuapp.com/" target="_blank" rel="noreferrer" className='project__headingSecondary'><h2 >YelpCamp Campgrounds</h2></a>
                        <div className="project__descriptionContainer project__descriptionContainer1">
                            <p className='project__description'>
                                A camping sites web app project that enables
                                you to add, update, and delete campgrounds as
                                well as view campgrounds added by other users
                                and receive comments and ratings from other
                                users. </p>
                            <div className='project__tags'>React.js &nbsp;
                                Express.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Cloudinary &nbsp; ejs </div>
                            <div className="project__icons project__icons1">
                                <a href="https://github.com/yashfalke77/YelpCamp-Campgrounds" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://arcane-retreat-14101.herokuapp.com/" target='_blank' rel='noreferrer'>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project__right">
                        <img className='project__img' src="https://res.cloudinary.com/dhbiouaym/image/upload/q_auto:eco/v1663667984/Portfolio/project2_dazq0o.png" alt="yelpcap campgrounds" />
                    </div>
                </section>
            </LazyLoad>
            <LazyLoad once height={400}>
                <section className='project__section project__section3'>
                    <div className="project__left">
                        <img className='project__img' src="https://res.cloudinary.com/dhbiouaym/image/upload/q_auto:eco/v1663667991/Portfolio/project3_rw9d06.jpg" alt="online grocery store" />
                    </div>
                    <div className="project__right">
                        <h3 className='project__headingTertiary'>Featured Project</h3>
                        <a href="https://youtu.be/5oOiJrRQenw" target='_blank' rel='noreferrer' className='project__headingSecondary'><h2 >Online Grocery store</h2></a>
                        <div className="project__descriptionContainer">
                            <p className='project__description'>
                                The project entailed creating an ecommerce
                                website with everyday necessities and food as
                                its products.<br /><br />
                                An Django application with email based
                                authentication and uses cookies - sessions
                            </p>
                            <div className='project__tags'> Python &nbsp; Django &nbsp; Bootstrap &nbsp; HTML/CSS &nbsp; javascript</div>
                            <div className="project__icons">
                                <a href="https://github.com/yashfalke77/Online-Grocery-Store" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://youtu.be/5oOiJrRQenw" target='_blank' rel='noreferrer'>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </LazyLoad>

            {/* --------------------------------------------------- for Mobiles ----------------------------------------------------------------- */}


            <ul className="projectResp__list">
                <li className="projectResp__items projectResp__items1">
                    <div className="projectResp__card">
                        <div className="projectResp__cardTop">
                            <svg className="projectResp__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='projectResp__cardLink'>
                                <a href="https://github.com/yashfalke77/food-ordering-app" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://youtu.be/Bm6oUdohS9M" target='_blank' rel='noreferrer'>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="projectResp__cardBody">
                            <div className="projectResp__cardBodyHeading">Colors.co</div>
                            <p className='projectResp__cardBodyDescription'>
                                Coolors is the essential tool for creating and collecting color palettes. It allows you to generate perfect matching colors in seconds. Even if you are not so skilled in design!. You may use a variety of color spaces, including RGB, CMYK, LAB etc.
                            </p>                        </div>
                        <div className="projectResp__cardFooter">
                            <div className='projectResp__tags'> Next.js &nbsp; React.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Express.js &nbsp; SCSS/SASS</div>
                        </div>
                    </div>
                </li>
                <li className="projectResp__items  projectResp__items2">
                    <div className="projectResp__card">
                        <div className="projectResp__cardTop">
                            <svg className="projectResp__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='projectResp__cardLink'>
                                <a href="https://github.com/yashfalke77/iNotebook" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://youtu.be/MF7xbfKyaEk" target='_blank' rel='noreferrer'>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="projectResp__cardBody">
                            <div className="projectResp__cardBodyHeading">YelpCamp Campgrounds</div>
                            <p className='projectResp__cardBodyDescription'>
                                A camping sites web app project that enables
                                you to add, update, and delete campgrounds as
                                well as view campgrounds added by other users
                                and receive comments and ratings from other
                                users.
                            </p>
                        </div>
                        <div className="projectResp__cardFooter">
                            <div className='projectResp__tags'> React.js &nbsp;
                                Express.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Cloudinary &nbsp; ejs</div>
                        </div>
                    </div>
                </li>
                <li className="projectResp__items projectResp__items3">
                    <div className="projectResp__card">
                        <div className="projectResp__cardTop">
                            <svg className="projectResp__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='projectResp__cardLink'>
                                <a href="https://github.com/yashfalke77/Natours-project" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://codepen.io/yashfalke77/pen/zYpvOBo" target='_blank' rel='noreferrer'>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-codepen"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="projectResp__cardBody">
                            <div className="projectResp__cardBodyHeading">Online Grocery store</div>
                            <p className='projectResp__cardBodyDescription'>
                                The project entailed creating an ecommerce
                                website with everyday necessities and food as
                                its products.<br /><br />
                                An Django application with email based
                                authentication and uses cookies - sessions</p>
                        </div>
                        <div className="projectResp__cardFooter">
                            <div className='projectResp__tags'> Python &nbsp; Django &nbsp; Bootstrap &nbsp; HTML/CSS &nbsp; javascript</div>
                        </div>
                    </div>
                </li>
            </ul>



            <span className="sectiontag">&lt;/section&gt;</span>

        </div>
    )
}

export default Project