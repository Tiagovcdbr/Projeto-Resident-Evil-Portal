/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "swiper/swiper-bundle.css";

import styles from './Chara.module.scss';

import CharaChris from 'components/Models/Resident5/Chris/CharaChris';
import CharaSheva from 'components/Models/Resident5/Sheva/CharaSheva';
import CharaAdversaries from 'components/Models/Resident5/Adversaries/CharaAdversaries';



function Chara() {

  useEffect(() => {
    Aos.init({duration: 2200});
  }, []); 
  
  return (
    <div className={styles.chara}> 
      <div data-aos="fade-right" className={styles.chara_list_container}>
        <ul className={styles.chara_list}>      
          <li className={styles.chara_item_chris}>            
              <CharaChris />                                  
            <div className={styles.chara_item_name_chris}>Chris Redfield</div>
          </li>        
          
          <li className={styles.chara_item_sheva}>
              <CharaSheva />
            <div className={styles.chara_item_name_sheva}>Sheva Alomar</div>
          </li>

          <li className={styles.chara_item_adversaries}>
              <CharaAdversaries />
            <div className={styles.chara_item_name_adversaries}>Adversaries</div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Chara;