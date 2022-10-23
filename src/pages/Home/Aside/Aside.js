/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import styles from '../Aside/Aside.module.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import News from '../Articles/ContentsKnowNews/News';

function Aside() {
  return (
    <div className={styles.nav_top}>
      <ul>
        <li className={styles.box_aside}>        
          <a className={styles.N_Btn}>
          <Fade top duration={2000}>
            <Link to={ News } spy={true} smooth={true}>         
              <span className={styles.link_title}>NEWS</span>
            </Link>
          </Fade>
          </a>        
        </li>

        <li className={styles.box_aside}>
          <a className={styles.H_Btn}>
          <Fade top duration={2200}>
            <span className={styles.link_title}>HISTORY</span>
          </Fade>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.T_Btn}>
          <Fade top duration={2400}>
            <span className={styles.link_title}>TITLE LINEUP</span>
          </Fade>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.C_Btn}>
          <Fade top duration={2600}>
            <span className={styles.link_title}>CONTENTS</span>
          </Fade>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.P_Btn}>
          <Fade top duration={2800}>
            <span className={styles.link_title}>PLAY DATA</span>
          </Fade>
          </a>
        </li>

        <li className={styles.box_aside}>
          <a className={styles.A_Btn}>
          <Fade top duration={3000}>
            <span className={styles.link_title}>AMBASSADOR</span>
          </Fade>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Aside