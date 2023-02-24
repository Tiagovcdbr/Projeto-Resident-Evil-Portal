/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "swiper/swiper-bundle.css";

import styles from './Chara.module.scss';

import CharaLeon from 'components/Models/Resident6/Leon/CharaLeon';
import CharaChris from 'components/Models/Resident6/Chris/CharaChris';
import CharaJake from 'components/Models/Resident6/Jake/CharaJake';
import CharaAda from 'components/Models/Resident6/Ada/CharaAda';
import CharaAdversaries from 'components/Models/Resident6/Adversaries/CharaAdversaries';

function Chara() {

  useEffect(() => {
    Aos.init({duration: 2200});
  }, []); 
  
  return (
    <div className={styles.chara}> 
      <div data-aos="fade-right" className={styles.chara_list_container}>
        <ul className={styles.chara_list}>      
          <li className={styles.chara_item_leon}>            
              <CharaLeon />                                  
            <div className={styles.chara_item_name_leon}>
            Leon Scott Kennedy
            <br>
            </br>
            Helena Harper
            </div>
          </li>        
          
          <li className={styles.chara_item_chris}>
              <CharaChris />
            <div className={styles.chara_item_name_chris}>
            Chris Redfield
            <br>
            </br>
            Piers Nivans
            </div>
          </li>

          <li className={styles.chara_item_jake}>
              <CharaJake />
            <div className={styles.chara_item_name_jake}>
            Jake Muller
            <br>
            </br>
            Sherry Birkin
            </div>
          </li>

          <li className={styles.chara_item_ada}>
              <CharaAda />
            <div className={styles.chara_item_name_ada}>
            Ada Wong
            </div>
          </li>

          <li className={styles.chara_item_adversaries}>
              <CharaAdversaries />
            <div className={styles.chara_item_name_adversaries}>
            Adversaries
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Chara;