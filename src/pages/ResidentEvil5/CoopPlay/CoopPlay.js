import React from 'react'
import styles from '../CoopPlay/CoopPlay.module.scss'

import IMGCoopPlay from '../../../images/ResidentEvil5/coopplay-image5.jpg'

function CoopPlay() {
  return (
    <div className={styles.coopPlay}>
      <div className={styles.coopPlay_imageWrap}>
        <div className={styles.coopPlay_image_overlay}>
          <img  className={styles.coopPlay_image} src={IMGCoopPlay} alt="" />
        </div>
      </div>

      <div className={styles.coopPlay_descr}>
        <div className={styles.coopPlay_descr_inner}>
          <div className={styles.coopPlay_lead}>Team Up in Co-Op!</div>
          <div className={styles.coopPlay_detail}>
            In the Nintendo Switch™ downloadable 
            version, team up with a partner in co-op 
            on Nintendo Switch™ Online! What's 
            more, you can also play split screen co-op 
            using a local connection! Try various 
            playing styles such as using two consoles 
            or sharing Nintendo Switch™ Joy-Con™ 
            controllers between two players!
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoopPlay