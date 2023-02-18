/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../Product/Product.module.scss'

import IMGPs4 from '../../../images/Resident3Remake/ps4_b.png'
import IMGXbox from '../../../images/Resident3Remake/xboxone_b.png'
import IMGSteam from '../../../images/Resident3Remake/steam_b.png'
import IMGFlame from '../../../images/Resident3Remake/img_flame.png'

import IMGCapcomStore from '../../../images/Resident3Remake/capcomstore_logo.jpg'
import IMGGameStopStore from '../../../images/Resident3Remake/gamestop_logo.jpg'
import IMGAmazonStore from '../../../images/Resident3Remake/amazon_logo.jpg'
import IMGBestBuyStore from '../../../images/Resident3Remake/bestbuy_logo.jpg'
import IMGWalMartStore from '../../../images/Resident3Remake/walmart_logo.jpg'
import IMGTargetStore from '../../../images/Resident3Remake/target_logo.jpg'

import RacconCityIMG from '../../../images/Resident3Remake/bundle_bnr.jpg'

function Product() {
  return (
    <div className={styles.conts_box} id="information">
      <div className={styles.conts_box_inner}>
        <h2 className={styles.sec_ttl}>PRODUCT INFORMATION</h2>
        <div className={styles.product_box}>
          <ul className={styles.pf_list}>

            <li className={styles.pf_ps4}>
              <p className={styles.pf_logo}>
                <img src={IMGPs4} alt="logo ps4" />
              </p>
              <ul className={styles.fmt_list}>
                <li className={styles.fmt}>
                  <span className={styles.mh}>Physical</span>
                </li>
                <li className={styles.fmt}>
                  <span className={styles.mh}>Digital</span>
                </li>
              </ul>
            </li>

            <li className={styles.pf_xbox}>
              <p className={styles.pf_logo}>
                <img src={IMGXbox} alt="logo xbox" />
              </p>
              <ul className={styles.fmt_list}>
                <li className={styles.fmt}>
                  <span className={styles.mh}>Physical</span>
                </li>
                <li className={styles.fmt}>
                  <span className={styles.mh}>Digital</span>
                </li>
              </ul>
            </li>

            <li className={styles.pf_steam}>
              <p className={styles.pf_logo}>
                <img src={IMGSteam} alt="logo steam" />
              </p>
              <ul className={styles.fmt_list_full}>
                <li className={styles.fmt_dl}>
                  <span className={styles.mh}>Digital</span>
                </li>
              </ul>
            </li>
          </ul>

          <div className={styles.product_detail}>
            <ul className={styles.ed_list}>
              <li className={styles.ed_normal}>
                <span>Standard Edition</span>
              </li>
              <li className={styles.ed_collectors}>
                <span>Collector's Edition</span>
              </li>
            </ul>

            <div className={styles.product_box_inner}>
              <h3 className={styles.product_name}>
                  PlayStation®4
                <span className={styles.icon}>|</span>
                  Physical
                <span className={styles.icon}>|</span>
                  Standard Edition
              </h3>

              <div className={styles.product_img}>
                <div className={styles.img_box}>
                  <a>
                    <p className={styles.img}>
                      <img src={IMGFlame} alt='' />
                    </p>
                  </a>
                </div>
              </div>

              <div className={styles.product_buy}>
                <h4 className={styles.product_buy_ttl}>
                  Available at these retailers:(Prices may vary)
                </h4>
                <div className={styles.product_buy_inner}>
                  <div className={styles.btn_ps4}>
                    <ul className={styles.store_list}>

                      <li className={styles.store_capcom}>
                        <div className={styles.btn_normal}>
                          <a>
                            <img src={IMGCapcomStore} alt='' />
                          </a>
                        </div>
                      </li>

                      <li className={styles.store_gamestop}>
                        <div className={styles.btn_normal}>
                          <a>
                            <img src={IMGGameStopStore} alt='' />
                          </a>
                        </div>
                      </li>

                      <li className={styles.store_amazon}>
                        <div className={styles.btn_normal}>
                          <a>
                            <img src={IMGAmazonStore} alt='' />
                          </a>
                        </div>
                      </li>

                      <li className={styles.store_bestbuy}>
                        <div className={styles.btn_normal}>
                          <a>
                            <img src={IMGBestBuyStore} alt='' />
                          </a>
                        </div>
                      </li>

                      <li className={styles.store_walmart}>
                        <div className={styles.btn_normal}>
                          <a>
                            <img src={IMGWalMartStore} alt='' />
                          </a>
                        </div>
                      </li>

                      <li className={styles.store_target}>
                        <div className={styles.btn_normal}>
                          <a>
                            <img src={IMGTargetStore} alt='' />
                          </a>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.product_note}>
                <p className={styles.product_note_list_ttl}>Note:</p>
                <ul className={styles.product_note_list}>
                  <li>
                    Resident Evil 3 also includes Resident Evil Resistance.
                  </li>

                  <li>
                    Images are used for illustrative purposes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.link_bnr}>
          <div className={styles.bnr}>
            <a href=''>
              <span className={styles.img_pc}>
                <img src={RacconCityIMG} alt='Raccon City' />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product