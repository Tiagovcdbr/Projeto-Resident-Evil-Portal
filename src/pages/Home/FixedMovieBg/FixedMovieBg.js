import React from 'react'

import styles from './FixedMovieBg.module.scss';
import Video from '../../../videos/video-portal-background.mp4';

function FixedMovieBg() {
  return (
    <div className={styles.movie_wrap}>
      <div className={styles.background_movie}>
        <video
        src={Video}
        autoPlay={true}
        loop 
        className={styles.video}
        ></video>
      </div>
    </div>
  )
}

export default FixedMovieBg