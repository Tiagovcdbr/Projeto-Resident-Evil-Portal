/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../Character/Character.module.scss'

import IMGJill from '../../../images/Resident3Remake/character_img01.jpg'
import IMGCarlos from '../../../images/Resident3Remake/character_img02.jpg'
import IMGMikhail from '../../../images/Resident3Remake/character_img04.jpg'
import IMGNicholai from '../../../images/Resident3Remake/character_img05.jpg'

function Character() {
  return (
    <div className={styles.conts_box_character}>
      <h2 className={styles.sec_ttl_character}>CHARACTER</h2>
        <div className={styles.conts_box_inner_character}>
          <div className={styles.col_box_pc_human_character}>
              <div className={styles.character_jill}>
                <a>
                  <p className={styles.img_jill}>
                    <span className={styles.img_pc_jill}>
                      <img src={IMGJill} alt="Jill Valentine" />
                    </span>
                    <p className={styles.name_jill}>Jill Valentine</p>
                  </p>
                  <div className={styles.ic_open_jill}></div>
                </a>
              </div>

              <div className={styles.character_carlos}>
                <a>
                  <p className={styles.img_carlos}>
                    <span className={styles.img_pc_carlos}>
                      <img src={IMGCarlos} alt="Carlos Oliveira" />
                    </span>
                    <p className={styles.name_carlos}>Carlos Oliveira</p>
                  </p>
                  <div className={styles.ic_open_carlos}></div>
                </a>
              </div>

              <div className={styles.character_mikhail}>
                <a>
                  <p className={styles.img_mikhail}>
                    <span className={styles.img_pc_mikhail}>
                      <img src={IMGMikhail} alt="Mikhail Victor" />
                    </span>
                    <p className={styles.name_mikhail}>Mikhail Victor</p>
                  </p>
                  <div className={styles.ic_open_mikhail}></div>
                </a>
              </div>

              <div className={styles.character_nicholai}>
                <a>
                  <p className={styles.img_nicholai}>
                    <span className={styles.img_pc_nicholai}>
                      <img src={IMGNicholai} alt="Nicholai Ginovaef" />
                    </span>
                    <p className={styles.name_nicholai}>Nicholai Ginovaef</p>
                  </p>
                  <div className={styles.ic_open_nicholai}></div>
                </a>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Character