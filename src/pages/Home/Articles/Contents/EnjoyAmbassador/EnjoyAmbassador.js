/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from '../EnjoyAmbassador/EnjoyAmbassador.module.scss';
import CardIMG from '../../../../../images/Portal/card-sample-en.png';

function EnjoyAmbassador() {
  return (
    <div className={styles.enjoy_ambassador}>
      <div className={styles.inner}>
        <Fade bottom duration={2400}>
          <div className={styles.ambassador_left}>
            <h3>
              AMBASSADOR
              <span>Resident Evil Ambassador program</span>
            </h3>
            <p>
              Share your enthusiasm for Resident Evil with fans around the world!
            </p>
            <a className={styles.btn}>
              MORE
            </a>
          </div> 
        </Fade>

        <Fade duration={2800}>
          <a className={styles.ambassador_card}>
            <p>
              Players who actively share their 
              positive experiences online can 
              get access to special content 
              and opportunities.
            </p>
            <span>
              <img src={CardIMG} alt="Img Card" />
            </span>
          </a>
        </Fade>
      </div>
    </div>
  )
}

export default EnjoyAmbassador