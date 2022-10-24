/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "swiper/swiper-bundle.css";

import styles from './Chara.module.scss';
import CharaChris from '../../../components/Models/ResidentRemake/Chris/CharaChris';
import CharaJill from '../../../components/Models/ResidentRemake/Jill/CharaJill';
import CharaCreatures from '../../../components/Models/ResidentRemake/Creatures/CharaCreatures'
;
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
            <div className={styles.chara_item_name_chris}>Chris Redfiled</div>
          </li>        
          
          <li className={styles.chara_item_jill}>
              <CharaJill />
            <div className={styles.chara_item_name_jill}>Jill Valentine</div>
          </li>

          <li className={styles.chara_item_creatures}>
              <CharaCreatures />
            <div className={styles.chara_item_name_creatures}>CREATURES</div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Chara;