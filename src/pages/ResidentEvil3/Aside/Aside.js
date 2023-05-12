/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styles from '../Aside/Aside.module.scss'

import IMGRe2Logo from '../../../images/Resident3Remake/re2_logo.png'
import IMGCapStoreLogo from '../../../images/Resident3Remake/capstore_logo.png'

function Aside() {
  return (
    <div className={styles.conts}>
      <div className={styles.conts_box}>
        <div className={styles.links_box}>
          <div className={styles.links_renet}>
            <div className={styles.link_btn}>
              <div className={styles.btn}>
                <a>RESIDENT EVIL.NET</a>
              </div>
            </div>
          </div>

          <div className={styles.links_manual}>
            <div className={styles.link_btn}>
              <div className={styles.btn}>
                <a>Official Web Manual</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.links_sns}>
          <div className={styles.sns_link}>
            <p className={styles.label}>
              <span className={styles.mark_bracket}>[</span>
                OFFICIAL ACCOUNTS
              <span className={styles.mark_bracket}>]</span>
            </p>
            
            <ul className={styles.link_list}>
              <li className={styles.btn}>
                <a>
                  <span className={styles.ic_yt}></span>
                </a>
              </li>

              <li className={styles.btn}>
                <a>
                  <span className={styles.ic_tw}></span>
                </a>
              </li>

              <li className={styles.btn}>
                <a>
                  <span className={styles.ic_fb}></span>
                </a>
              </li>

              <li className={styles.btn}>
                <a>
                  <span className={styles.ic_insta}></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.links_page}>
          <div className={styles.page_link}>
            <p className={styles.label}>
              <span className={styles.mark_bracket}>[ </span>
                LINKS
              <span className={styles.mark_bracket}> ]</span>
            </p>

            <ul className={styles.link_list}>
              <li className={styles.btn}>
                <a>
                  <img src={IMGRe2Logo} alt="" />
                </a>
              </li>

              <li className={styles.btn}>
                <a>
                  <img src={IMGCapStoreLogo} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.links_portal}>
          <div className={styles.portal_link}>
            <div className={styles.link_btn}>
              <div className={styles.btn}>
                <a>
                    Resident Evil 3
                  <small>TOP</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside