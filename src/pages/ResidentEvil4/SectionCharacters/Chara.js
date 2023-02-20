/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "swiper/swiper-bundle.css";

import styles from './Chara.module.scss';
import CharaLeon from '../../../components/Models/Resident4/Leon/CharaLeon'
import CharaAshley from '../../../components/Models/Resident4/Ashley/CharaAshley'
import CharaGanados from '../../../components/Models/Resident4/Ganados/CharaGanados'

function Chara() {

  useEffect(() => {
    Aos.init({duration: 2200});
  }, []); 
  
  return (
    <div className={styles.chara}> 
      <div data-aos="fade-right" className={styles.chara_list_container}>
        <ul className={styles.chara_list}>      
          <li className={styles.chara_item_chris}>            
              <CharaLeon />                                  
            <div className={styles.chara_item_name_chris}>Leon S. Kennedy</div>
          </li>        
          
          <li className={styles.chara_item_jill}>
              <CharaAshley />
            <div className={styles.chara_item_name_jill}>Ashley Graham</div>
          </li>

          <li className={styles.chara_item_creatures}>
              <CharaGanados />
            <div className={styles.chara_item_name_creatures}>The Mysterious Cult</div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Chara;