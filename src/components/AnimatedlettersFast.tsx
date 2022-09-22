import React from 'react'
import "./scss/animatedLettersFast.scss"

interface AnimatedLettersFastprops {
    letterClass: string,
    strArray: string[],
    idx: number,
}

const AnimatedLettersFast = ({ letterClass, strArray, idx }: AnimatedLettersFastprops) => {
    return (
        <div style={{ display: "inline" }}>
            {strArray.map((char: string, i: number) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </div>
    )
}

export default AnimatedLettersFast