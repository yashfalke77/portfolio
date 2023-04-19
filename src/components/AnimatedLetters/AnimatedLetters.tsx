import React from 'react';
import './animatedLetters.scss';

interface AnimatedLettersprops {
  letterClass: string,
  strArray: string[],
  idx: number,
}

const AnimatedLetters = ({ letterClass, strArray, idx }: AnimatedLettersprops) => (
  <div style={{ display: 'inline' }}>
    {strArray.map((char: string, i: number) => (
      <span key={char + i} className={`${letterClass} _${i + idx}`}>
        {char}
      </span>
    ))}
  </div>
);

export default AnimatedLetters;
