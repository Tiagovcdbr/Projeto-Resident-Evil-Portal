import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from '../Resident0/Especification.module.scss'
import RateIMG from '../../../images/Resident0/bio0-esrb.png'

function Especification () {

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []); 


  return (
    <div data-aos="fade-right" className={styles.spec}>
      <ul className={styles.spec_list}>
        <li className={styles.spec_item}>
          <div className={styles.spec_item_head}>Release :</div>
          <div className={styles.spec_item_data}>Available Now</div>
        </li>
        <li className={styles.spec_item}>
          <div className={styles.spec_item_head}>Genre :</div>
          <div className={styles.spec_item_data}>Survival Horror</div>
        </li>
        <li className={styles.spec_item}>
          <div className={styles.spec_item_head}>Players :</div>
          <div className={styles.spec_item_data}>1</div>
        </li>
        <li className={styles.spec_item_rating_wrap}>
          <div className={styles.rating_head}>Rating :</div>
          <div className={styles.rating_data}> Mature (17+)</div>
          <div className={styles.rating_image}>
            <img src={RateIMG} alt="Rate Img" />
          </div>
        </li>
      </ul>
      <div className={styles.law_manual_area}>
        <a className={styles.law_manual_btn} href="https://game.capcom.com/manual/bio0/" target="_blank" rel="noreferrer">OFFICIAL WEB MANUAL</a>
      </div>
    </div>
  )
}

export default Especification;