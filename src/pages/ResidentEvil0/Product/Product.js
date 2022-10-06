import React from 'react'
import styles from './Product.module.scss';

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import BgIMG from "../../../images/Resident0/package-image-global.jpg";
import PromoLogoIMG from "../../../images/Resident0/icons/bio-remaster-set-global.png";
import DownloadIMG from "../../../images/Resident0/download-global.jpg";

const Product = () => {

  useEffect(() => {
    Aos.init({duration: 3500});
  }, []); 

  return (
    <div id="product" className={styles.product_wrap}>
      <div data-aos="fade" className={styles.product}>
        <div className={styles.product_ttlset}>
          <h3 className={styles.product_ttl}>PRODUCT</h3>
          <h2 className={styles.product_ttl_main}>Nintendo Switch™</h2>
          <ul className={styles.spec_note_list}>
            <li className={styles.spec_note_item}>
              Extra content may differ from previous platforms.</li>
          </ul>
        </div>
        <div className={styles.product_package}>
          <div className={styles.product_media_lead}>
              <span>Physical Edition</span>
          </div>
          <div className={styles.product_flexwrap}>
            <div className={styles.product_descr}>
              <div className={styles.product_lead}>
                  Get the full story of the Mansion Incident: 
                  pick up the Resident Evil Origins Collection 
                  and get two titles in one set!
              </div>
              <div className={styles.product_set_title}>
                  <img src={PromoLogoIMG} alt="Logo Promo" />
              </div>
              <div className={styles.product_package_notes}>
                <p className={styles.product_package_notes_strong}>
                  This package contains the game card for                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                  Resident Evil 0 HD Remaster and a download 
                  code for Resident Evil HD Remaster.
                </p>
                <p className={styles.with_indent}>
                  An internet connection and Nintendo 
                  Account are also required to download 
                  the game.
                </p>
              </div>
            </div>
            <div className={styles.product_image}>
              <img src={BgIMG} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.product_download}>
          <div className={styles.product_media_lead}>
            <span>Downloadable Edition</span>
          </div>
          <div className={styles.product_flex_wrap}>
            <div className={styles.product_image_download}>
              <img src={DownloadIMG} alt="" />
            </div>
            <div className={styles.product_descr}>
              <div className={styles.product_download_lead}></div>
              <a className={styles.product_btn} href="https://www.nintendo.com/games/detail/resident-evil-0-switch"
                target="blank">
                <span>Buy Now</span>
              </a>
              <ul className={styles.product_notes}>
                <li className={styles.product_notes_item}>
                  (Only available as a download)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;