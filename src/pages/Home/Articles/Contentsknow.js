import React from 'react'
import styles from './ContentsKnow.module.scss';
import News from './ContentsKnowNews/News';

function Contentsknow() {
  return (
    <div className={styles.contents_know}>
      <News />
    </div>
  )
}

export default Contentsknow