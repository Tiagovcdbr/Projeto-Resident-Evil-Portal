import React from 'react'
import styles from '../MovieBg/MovieBg.module.scss'
import Video from '../../../videos/Re3RemakeBg/bg.mp4'

function MovieBg() {
  return (
    <div className={styles.movie_bg}>
      <div className={styles.video_loadanime}>
        <video
          src={Video}
          autoPlay={true}
          loop 
          className={styles.video}
        >
        </video>
      </div>
      <div className={styles.mv}>
        <div className={styles.img} ></div>
      </div>
    </div>    
  )
}

export default MovieBg