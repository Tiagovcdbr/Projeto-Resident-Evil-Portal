import React from 'react'
import styles from '../Main/Main.module.scss'
import Re3LogoIMG from '../../../images/Resident3Remake/re3_logo.png'

function Main() {
  return (
    <div className={styles.conts}>
      <div className={styles.conts_box_firstview}>
        <div className={styles.conts_box_inner_firstview}>
          <h1 className={styles.title_logo_firstview}>
            <img src={Re3LogoIMG} alt="Resident Evil 3" />
          </h1>
          <p className={styles.release_firstview}>Available Now</p>
        </div>
      </div>
    </div>
  )
}

export default Main