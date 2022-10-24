/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import styles from '../Aside/Aside.module.scss';
import Fade from 'react-reveal/Fade';

function Aside() {
  return (
    <div className={styles.nav_top}>
      <ul>
        <li className={styles.box_aside}>        
          <a className={styles.N_Btn}>
          <Fade left duration={2000}>                   
              <span className={styles.link_title}>NEWS</span>
          </Fade>
          </a>        
        </li>

        <li className={styles.box_aside}>
          <a className={styles.H_Btn}>
          <Fade left duration={2200}>
            <span className={styles.link_title}>HISTORY</span>
          </Fade>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.T_Btn}>
          <Fade left duration={2400}>
            <span className={styles.link_title}>TITLE LINEUP</span>
          </Fade>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.C_Btn}>
          <Fade left duration={2600}>
            <span className={styles.link_title}>CONTENTS</span>
          </Fade>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.P_Btn}>
          <Fade left duration={2800}>
            <span className={styles.link_title}>PLAY DATA</span>
          </Fade>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.A_Btn}>
          <Fade left duration={3000}>
            <span className={styles.link_title}>AMBASSADOR</span>
          </Fade>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Aside