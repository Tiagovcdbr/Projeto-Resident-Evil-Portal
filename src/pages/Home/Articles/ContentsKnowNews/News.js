import React from 'react'

import styles from './News.module.scss';
import Card1IMG from '../../../../images/Portal/event_en_eyecatch-220912-a.png'
import Card2IMG from '../../../../images/Portal/renet-info.jpg'
import Card3IMG from '../../../../images/Portal/MicrosoftTeams-image-20.png'
import Card4IMG from '../../../../images/Portal/collaboration_eyecatch-220831-gl.jpg'

function News() {
  return (
    <div className={styles.know_news}>
      <div className={styles.inner}>
        <h3>NEWS</h3>
        <ul className={styles.news_list}>
          <li className=''>
            <a href="news-2513.html">
              <div className={styles.img_box}>
                <img src={Card1IMG} alt="" />
              </div>
                <p className={styles.list_text}>                
                  Autographed card gift campaign to 
                  commemorate Shinji Mikami x Jun 
                  Takeuchi talks            
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  Sep.12.2022
                </span>                
                  Event・Campaign            
              </p>
            </a>
          </li>
          <li className=''>
            <a href="news-2513.html">
              <div className={styles.img_box}>
                <img src={Card2IMG}alt="" />
              </div>
                <p className={styles.list_text}>                  
                  [Restoration] Malfunction regarding 
                  the Account link process                        
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  Sep.08.2022
                </span>                
                  RE NET             
              </p>
            </a>
          </li>
          <li className=''>
            <a href="news-2513.html">
              <div className={styles.img_box}>
                <img src={Card3IMG} alt="" />
              </div>
                <p className={styles.list_text}>                
                  UNDER THE UMBRELLA 『Shinji Mikami
                  and Jun Takeuchi Looking Back on 
                  25 Years of Resident Evil』is out now!             
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  Sep.12.2022
                </span>                
                  Event・Campaign            
              </p>
            </a>
          </li>
          <li className=''>
            <a href="news-2513.html">
              <div className={styles.img_box}>
                <img src={Card4IMG} alt="" />
              </div>
                <p className={styles.list_text}>                
                  Dead by Daylight: Resident Evil: 
                  PROJECT W. New Chapter is now 
                  available            
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  Aug.31.2022
                </span>                
                  Collaboration            
              </p>
            </a>
          </li>
        </ul>
        <a className={styles.btn} href='news.html'>
          MORE
        </a>
      </div>
    </div>
  )
}

export default News