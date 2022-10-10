/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './ContentsEnjoy.module.scss';

import ContentIMG from '../../../../images/Portal/umbrella_logo.png'
import Content2IMG from '../../../../images/Portal/logo_orchestra-en.png'
import List1IMG from '../../../../images/Portal/1-27_list_img-en.jpg'
import List2IMG from '../../../../images/Portal/content_orchestra.jpg'

function ContentsEnjoy() {
  return (
    <div className={styles.contents_enjoy}>
      <div className={styles.contents_enjoy_fancontents}>
        <div className={styles.inner}>
          <h3>CONTENTS
            <span>Send out contents to enjoy Resident Evil more!</span>
          </h3>
          <div className={styles.fancontents_list}>
            <h4>
              <img src={ContentIMG} alt="content1" loading="lazy" />
              <span>A Space to Share Memories</span>
            </h4>
            <div className={styles.slide_area}>
              <ul className={styles.slide_area_list}>
                <li className=''>
                  <a>
                    <img src={List1IMG} alt="list1" loading='lazy'/>
                    <p className={styles.list_text}>
                      Shinji Mikami and Jun Takeuchi Looking 
                      Back on 25 Years of Resident Evil (Extra)
                    </p>
                    <p className={styles.list_category}>
                      <span className={styles.list_date}>
                        Sep.02.2022
                      </span>
                        UNDER THE UMBRELLA
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.fancontents_list_orchestra}>
            <h4>
              <img src={Content2IMG} alt="content2" loading="lazy" />
            </h4>
            <div className={styles.slide_area_orchestra}>
              <ul className={styles.slide_area_list_orchestra}>
                <li className=''>
                  <a>
                    <img src={List2IMG} alt="list2" loading='lazy'/>
                    <p className={styles.list_text_orchestra}>
                      Shinji Mikami and Jun Takeuchi Looking 
                      Back on 25 Years of Resident Evil (Extra)
                    </p>
                    <p className={styles.list_category_orchestra}>
                      <span className={styles.list_date_orchestra}>
                        Sep.02.2022
                      </span>
                        UNDER THE UMBRELLA
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContentsEnjoy