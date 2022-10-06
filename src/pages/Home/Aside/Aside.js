/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import styles from '../Aside/Aside.module.scss';

function Aside() {
  return (
    <div className={styles.nav_top}>
      <ul>
        <li className={styles.box_aside}>
          <a className={styles.N_Btn}>
            <span className={styles.link_title}>NEWS</span>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.H_Btn}>
            <span className={styles.link_title}>HISTORY</span>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.T_Btn}>
            <span className={styles.link_title}>TITLE LINEUP</span>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.C_Btn}>
            <span className={styles.link_title}>CONTENTS</span>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.P_Btn}>
            <span className={styles.link_title}>PLAY DATA</span>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.A_Btn}>
            <span className={styles.link_title}>AMBASSADOR</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Aside