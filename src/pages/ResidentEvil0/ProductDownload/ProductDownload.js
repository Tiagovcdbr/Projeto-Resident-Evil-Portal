import React from 'react'
import styles from './ProductDownload.module.scss';

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Ps4LogoIMG from '../../../images/Resident0/otherPlat-ps4.png'
import XboxLogoIMG from '../../../images/Resident0/otherPlat-xboxone.png'
import SteamLogoIMG from '../../../images/Resident0/otherPlat-steam.png'

const ProductDownload = () => {

  useEffect(() => {
    Aos.init({duration: 2500});
  }, []); 

  return (
    <>
      <div data-aos="fade" className={styles.otherplat}>
        <h3 className={styles.otherplat_lead}>Purchase for another platform</h3>
        <div className={styles.product_media_lead}>
          <span>Downloadable Edition</span>
        </div>
        <ul className={styles.otherplat_list}>
          <li className={styles.otherplat_item_ps}>
            <a href='https://store.playstation.com/en-us/product/UP0102-CUSA02337_00-BH0HD00000000001' target='blank'>
              <img src={Ps4LogoIMG} alt='logo ps4' />
            </a>
          </li>
          <li className={styles.otherplat_item_xbox}>
            <a href='https://www.microsoft.com/en-us/p/biohazard-0-hd-remaster/bxhg2gx28l23' target='blank'>
              <img src={XboxLogoIMG} alt='logo ps4' />
            </a>
          </li>
          <li className={styles.otherplat_item_steam}>
            <a href='https://store.steampowered.com/agecheck/app/339340/' target='blank'>
              <img src={SteamLogoIMG} alt='logo ps4' />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ProductDownload;