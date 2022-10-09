import React from 'react'
import styles from './ContentsKnow.module.scss';
import About from './ContentsKnowAbout/About';
import News from './ContentsKnowNews/News';

function Contentsknow() {
  return (
    <div className={styles.contents_know}>
      <News />
      <About />
    </div>
  )
}

export default Contentsknow