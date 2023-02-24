/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import styles from '../Trailer/Trailer.module.scss'
import Video from '../../../videos/Trailer-Launch-RE5.mp4'

function Trailer () {
  return (
    <div className={styles.trailer_container}>
      <div className={styles.trailer_wrapper}>
        <div className={styles.trailer_video}>
          <video
            src={Video}
            autoPlay={true}
            loop 
            muted
            className={styles.video}
            >
        </video>
        </div>
      </div>
    </div>
  )
}

export default Trailer