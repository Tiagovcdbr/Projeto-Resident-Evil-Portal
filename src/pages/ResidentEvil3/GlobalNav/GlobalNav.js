/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../GlobalNav/GlobalNav.module.scss'
import ResistenceIMG from '../../../images/Resident3Remake/resistance_bnr.jpg'

function GlobalNav() {
  return (
    <div className={styles.global_nav}>
      <div className={styles.global_nav_box}>
        <ul className={styles.global_nav_list}>
          <li className={styles.nav_firstview}>
            <a>TOP</a>
          </li>
          <li className={styles.nav_topics}>
            <a>NEWS</a>
          </li>
          <li className={styles.nav_trailer}>
            <a>TRAILER</a>
          </li>
          <li className={styles.nav_about}>
            <a>ABOUT</a>
          </li>
          <li className={styles.nav_character}>
            <a>CHARACTER</a>
          </li>
          <li className={styles.nav_art}>
            <a>IMAGES</a>
          </li>
          <li className={styles.nav_product}>
            <a>PRODUCT INFORMATION</a>
          </li>
          <li className={styles.nav_mutual_link}>
            <img src={ResistenceIMG} alt='resistence' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GlobalNav