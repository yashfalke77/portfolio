import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import './introduction.scss';

const Introduction = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Yash,'];
  const jobArray = [...'oftware enginner'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  return (
    <div className='intro '>
      <div className='intro__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='intro__headingPrimary'>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
&nbsp;
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>&apos;m</span>
&nbsp;
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <img src='https://res.cloudinary.com/dhbiouaym/image/upload/v1663667972/Portfolio/logo-s_fna9e6.png' className='intro__logos' alt='' />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
        </h1>
        <h2 className='intro__headingSecondary'>Full Stack Developer / Software Engineer</h2>
        <Link to='/contact' className='intro__button'>
          Contact Me
        </Link>
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
      <div className='intro__right'>
        <div className='logo__outline'>
          <svg
            id='yash'
            width='49rem'
            height='49.5rem'
            viewBox='0 0 299 295'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M248.278 83.6616L224.712 70.4848L168.887 110.878M85.6047 237.312L62.8238 224.575L100.109 157.891L104.698 3.38086L128.265 16.5576'
              stroke='#FFD700'
              strokeWidth='2'
            />
            <path
              d='M291.52 111.186L294.268 109.376L291.396 107.77L250.548 84.9305L249.437 84.3091L248.403 85.053L166.147 144.274L173.274 43.0404L173.363 41.7739L172.255 41.1543L130.883 18.0217L128.006 16.4127L127.908 19.7081L123.365 173.058L88.0263 236.26L87.0503 238.006L88.7959 238.982L125.455 259.479L127.2 260.455L128.176 258.71L163.516 195.506L291.52 111.186Z'
              stroke='#FFD700'
              strokeWidth='2'
            />
          </svg>
        </div>
        <div className='logo__fill'>
          <svg width='50.2rem' height='49.7rem' viewBox='0 0 287 287' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M263.019 90.5984L134.609 175.189L99.0325 238.819L62.3734 218.323L97.9495 154.693L102.504 0.853027L143.877 23.9848L136.452 129.476L222.17 67.7595L263.019 90.5984Z'
              fill='#FFD700'
            />
            <path
              d='M286.585 103.775L158.175 188.366L122.599 251.995L85.9398 231.499L121.516 167.869L126.071 14.0293L167.443 37.1611L160.018 142.652L245.737 80.9357L286.585 103.775Z'
              fill='#115173'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
