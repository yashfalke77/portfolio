import React from 'react'
import "./leftSideBar.scss"

const LeftSideBar = () => {
    return (
        <div className="left">
            <main className="left__main">
                <ul className="left__social">
                    <li className="left__linkItems">
                        <a href='https://www.youtube.com/channel/UCax8or2_bzQCHe0GdSLITOA' className="left__links" target="_blank" rel='noreferrer'>
                            <svg className="left__icon">
                                <use href="icons/symbol-defs.svg#icon-youtube"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="left__linkItems">
                        <a href='https://codepen.io/yashfalke77' className="left__links" target="_blank" rel='noreferrer'>
                            <svg className="left__icon">
                                <use href="/icons/symbol-defs.svg#icon-codepen"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="left__linkItems">
                        <a href='https://github.com/yashfalke77' className="left__links" target="_blank" rel='noreferrer'>
                            <svg className="left__icon">
                                <use href="/icons/symbol-defs.svg#icon-github"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="left__linkItems">
                        <a href='https://www.instagram.com/yashfalke77/' className="left__links" target="_blank" rel='noreferrer'>
                            <svg className="left__icon">
                                <use href="/icons/symbol-defs.svg#icon-instagram"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="left__linkItems">
                        <a href='https://www.linkedin.com/in/yashfalke77/' target="_blank" rel='noreferrer' className="left__links">
                            <svg className="left__icon">
                                <use href="/icons/symbol-defs.svg#icon-linkedin"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className="left__line"></div>
            </main>
        </div>
    )
}

export default LeftSideBar