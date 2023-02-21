/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "swiper/swiper-bundle.css";

import styles from '../../ResidentEvil4/SectionCharacters/Chara.module.scss'
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
          <li className={styles.chara_item_leon}>            
              <CharaLeon />                                  
            <div className={styles.chara_item_name_leon}>Leon S. Kennedy</div>
          </li>        
          
          <li className={styles.chara_item_ashley}>
              <CharaAshley />
            <div className={styles.chara_item_name_ashley}>Ashley Graham</div>
          </li>

          <li className={styles.chara_item_ganados}>
              <CharaGanados />
            <div className={styles.chara_item_name_ganados}>The Mysterious Cult</div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Chara;