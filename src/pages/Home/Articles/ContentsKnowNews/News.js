/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Fade from 'react-reveal/Fade';

import styles from './News.module.scss';
import Card1IMG from '../../../../images/Portal/goods_eyecatch-221021-gl.jpg'
import Card2IMG from '../../../../images/Portal/game_eyecatch-221021-01-gl.jpg'
import Card3IMG from '../../../../images/Portal/game_eyecatch-221021-02-gl.jpg'
import Card4IMG from '../../../../images/Portal/amb-card_en.jpg'

function News() {
  return (
    <div className={styles.know_news}>
      <div className={styles.inner}>
        <Fade bottom duration={2500}>
          <h3>NEWS</h3>
        </Fade>
        <ul className={styles.news_list}>
          <Fade duration={2250}>
          <li className=''>
            <a alt="card1">
              <div className={styles.img_box}>
                <img src={Card1IMG} alt="" />
              </div>
                <p className={styles.list_text}>                
                  New designs featuring
                   "Resident Evil 4," "
                   Resident Evil Village 
                   Gold Edition," and "
                   Resident Evil Re:Verse" 
                   are now available!            
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  Oct.21.2022
                </span>                
                  Goods            
              </p>
            </a>
          </li>
          </Fade>
          <Fade duration={2500}>
          <li className=''>
            <a alt="card2">
              <div className={styles.img_box}>
                <img src={Card2IMG}alt="" />
              </div>
                <p className={styles.list_text}>                  
                  The Resident Evil Village: 
                  Gold Edition Gameplay Demo, 
                  sporting the new Third-Person 
                  Mode, is now available!                         
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  Oct.21.2022
                </span>                
                  Game             
              </p>
            </a>
          </li>
          </Fade>
          <Fade duration={2750}>
          <li className=''>
            <a alt="card3">
              <div className={styles.img_box}>
                <img src={Card3IMG} alt="" />
              </div>
                <p className={styles.list_text}>                
                  Pre-orders for Resident Evil 4 
                  are now available! Check out the 
                  special collector's edition! 
                  It's filled to the brim with 
                  stuff sure to please any fan!             
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  Oct.21.2022
                </span>                
                  Game            
              </p>
            </a>
          </li>
          </Fade>
          <Fade duration={3000}>
          <li className=''>
            <a alt="card4">
              <div className={styles.img_box}>
                <img src={Card4IMG} alt="" />
              </div>
                <p className={styles.list_text}>                
                  [Once a day] Aim for the full 
                  completion! Ambassador Card 
                  Campaign is ongoing!            
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  Oct.17.2022
                </span>                
                  Event・Campaign            
              </p>
            </a>
          </li>
          </Fade>
        </ul>
        <a className={styles.btn} alt="btn">
          MORE
        </a>
      </div>
    </div>
  )
}

export default News