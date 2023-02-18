/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../Character/Character.module.scss'

import IMGJill from '../../../images/Resident3Remake/character_img01.jpg'
import IMGCarlos from '../../../images/Resident3Remake/character_img02.jpg'
import IMGMikhail from '../../../images/Resident3Remake/character_img04.jpg'
import IMGNicholai from '../../../images/Resident3Remake/character_img05.jpg'
import IMGNemesis from '../../../images/Resident3Remake/character_img03.jpg'
import IMGNemesisMobile from '../../../images/Resident3Remake/character_img03_sp.jpg'
import { Link } from 'react-router-dom'

function Character() {
  
  return (
    <div className={styles.conts_box_character} id="character">
      <h2 className={styles.sec_ttl_character}>CHARACTER</h2>
        <div className={styles.conts_box_inner_character}>
          <div className={styles.col_box_pc_human_character}>
                     {/* Jill Valentine */}
              <div className={styles.character_jill}>
                <a>
                  <p className={styles.img_jill}>
                    <span className={styles.img_pc_jill}>
                    <Link to={'Jill-Biography'} spy={true} smooth={true} duration={800}>
                      <img src={IMGJill} alt="Jill Valentine" />
                    </Link>
                    </span>
                    <p className={styles.name_jill}>Jill Valentine</p>
                  </p>
                  <div className={styles.ic_open_jill}></div>
                </a>
              </div>
                      {/* Carlos Oliveira */}
              <div className={styles.character_carlos}>
                <a>
                  <p className={styles.img_carlos}>
                    <span className={styles.img_pc_carlos}>
                    <Link to={'Carlos-Biography'} spy={true} smooth={true} duration={800}>
                      <img src={IMGCarlos} alt="Carlos Oliveira" />
                    </Link>
                    </span>
                    <p className={styles.name_carlos}>Carlos Oliveira</p>
                  </p>
                  <div className={styles.ic_open_carlos}></div>
                </a>
              </div>
                      {/* Mikhail Victor */}
              <div className={styles.character_mikhail}>
                <a>
                  <p className={styles.img_mikhail}>
                    <span className={styles.img_pc_mikhail}>
                    <Link to={'Mikhail-Biography'} spy={true} smooth={true} duration={800}>
                      <img src={IMGMikhail} alt="Mikhail Victor" />
                    </Link>
                    </span>
                    <p className={styles.name_mikhail}>Mikhail Victor</p>
                  </p>
                  <div className={styles.ic_open_mikhail}></div>
                </a>
              </div>
                        {/* Nicholai Ginovaef */}
              <div className={styles.character_nicholai}>
                <a>
                  <p className={styles.img_nicholai}>
                    <span className={styles.img_pc_nicholai}>
                    <Link to={'Nicholai-Biography'} spy={true} smooth={true} duration={800}>
                      <img src={IMGNicholai} alt="Nicholai Ginovaef" />
                    </Link>
                    </span>
                    <p className={styles.name_nicholai}>Nicholai Ginovaef</p>
                  </p>
                  <div className={styles.ic_open_nicholai}></div>
                </a>
              </div>
          </div>
                          {/* Nemesis */}
            <div className={styles.inner_creature}>
              <div className={styles.character_nemesis}>
                <a>
                  <p className={styles.img_nemesis}>
                    <span className={styles.img_pc_nemesis}>
                      <Link to={'Nemesis-Biography'} spy={true} smooth={true} duration={800}>
                        <img src={IMGNemesis} alt="Nemesis"/>
                      </Link>
                    </span>

                    <span className={styles.img_sp_nemesis}>
                      <Link to={'Nemesis-Biography'} spy={true} smooth={true} duration={800}>
                        <img src={IMGNemesisMobile} alt="Nemesis"/>
                      </Link>
                    </span>
                    <p className={styles.name_nemesis}>Nemesis</p>
                  </p>
                  <div className={styles.ic_open_nemesis}></div>
                </a>
              </div>
          </div>
        </div>                        
    </div>
  )
}

export default Character