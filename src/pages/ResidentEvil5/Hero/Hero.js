import React from 'react'
import styles from '../Hero/Hero.module.scss'
import Audio from '../../../audios/Resident Evil 5 Voice Title.m4a'

import IMGTitleGlobal from '../../../images/ResidentEvil5/firstView-title-global.png'
import IMGSwitch from '../../../images/ResidentEvil5/switch-logo.png'
import IMGOnsale from '../../../images/ResidentEvil5/firstView-platforms-onsale-global.png'

function Hero() {
  return (
    <div className={styles.firstView}>
      <audio
          src={Audio}
          autoPlay={true}
          >
        </audio>
      <div className={styles.firstView_inner}>
          <div className={styles.firstView_inner}></div>
        <h1 className={styles.firstView_title}>
          <img src={IMGTitleGlobal} alt="" />
        </h1>

        <div className={styles.firstView_switch}>
          <div className={styles.firstView_switch_logo}>
            <img src={IMGSwitch} alt="" />
          </div>
          <div className={styles.firstView_switch_info}>
            <div className={styles.firstView_switch_text}>Nintendo Switch™ version</div>
            <div className={styles.firstView_switch_date}>Available Now</div>
          </div>
        </div>

        <div className={styles.firstView_otherPlats}>
          <img src={IMGOnsale} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero