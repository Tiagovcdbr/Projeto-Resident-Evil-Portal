/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Fade from 'react-reveal/Fade';

import styles from './News.module.scss';
import Card1IMG from '../../../../images/Portal/renet-village-ge-en.png'
import Card2IMG from '../../../../images/Portal/renet-reverse-en.png'
import Card3IMG from '../../../../images/Portal/game_eyecatch-221021-01-gl.jpg'
import Card4IMG from '../../../../images/Portal/game_eyecatch-221021-02-gl.jpg'

function News() {
  return (
    <div className={styles.know_news} id="news">
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
                  RE NET supports the Additional 
                  Contents from Gold Edition! 
                  Enjoy Resident Evil Village 
                  even more            
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  Oct.28.2022
                </span>                
                  RE NET            
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
                  et's utilize RE NET to check 
                  your match results and play 
                  info including exclusive 
                  info on the web!                          
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  Oct.28.2022
                </span>                
                  RE NET             
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
          <Fade duration={3000}>
          <li className=''>
            <a alt="card4">
              <div className={styles.img_box}>
                <img src={Card4IMG} alt="" />
              </div>
                <p className={styles.list_text}>                
                  Pre-orders for Resident Evil 4 
                  are now available! Check out 
                  the special collector's edition! 
                  It's filled to the brim with stuff 
                  sure to please any fan!            
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  Oct.17.2022
                </span>                
                  Game            
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