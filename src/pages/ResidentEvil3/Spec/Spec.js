/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../Spec/Spec.module.scss'

import IMGReengine from '../../../images/Resident3Remake/reengine_logo.jpg'
import IMGErsb from '../../../images/Resident3Remake/esrb_m.jpg'
import IMGPrivacy from '../../../images/Resident3Remake/esrb_privacy_logo.svg'

function Spec() {
  return (
    <div className={styles.conts_box}>
      <h2 className={styles.sec_ttl}>
        <span className={styles.mark_bracket}>[ </span>
        SPECS
        <span className={styles.mark_bracket}> ]</span>
      </h2>
      <div className={styles.conts_box_inner}>
        <div className={styles.spec_box}>
          <div className={styles.box_title}>
            <p>Resident Evil 3</p>
          </div>
        </div>

        <div className={styles.spec_box}>
          <div className={styles.box_genre}>
            <p>Genre: Survival Horror</p>
          </div>
          <div className={styles.box_release}>
            <p>Release Date: Available Now</p>
          </div>
          <div className={styles.box_players}>
            <p>Number of Players: 1</p>
          </div>
        </div>

        <div className={styles.spec_box}>
          <div className={styles.box_reengine}>
            <p>
              RE ENGINE:
              <img src={IMGReengine} alt="RE Reengine" />
            </p>
          </div>
          <div className={styles.box_rating}>
            <p>
              Rating:
              <span className={styles.rating}>
                <a>
                  <img src={IMGErsb} alt="Ersb" />
                </a>
              </span>
              <span className={styles.visit}>
                <a>
                  <img src={IMGPrivacy} alt="" />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spec