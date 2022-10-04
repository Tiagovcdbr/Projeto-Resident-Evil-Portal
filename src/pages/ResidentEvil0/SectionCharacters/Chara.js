/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "swiper/swiper-bundle.css";

import styles from './Chara.module.scss';
import CharaRebecca from '../../../components/Models/Resident0/Rebecca/CharaRebecca';
import CharaBilly from '../../../components/Models/Resident0/Billy/CharaBilly';
import CharaCreatures from '../../../components/Models/Resident0/Creatures/CharaCreatures';

function Chara() {

  useEffect(() => {
    Aos.init({duration: 2500});
  }, []); 
  
  return (
    <div className={styles.chara}>
      <div data-aos="fade-right" className={styles.chara_list_container}>
        <ul className={styles.chara_list}>
          <li className={styles.chara_item_rebecca}>
              <CharaRebecca />
            <div className={styles.chara_item_name_rebecca}>Rebecca Chambers</div>
          </li>

          <li className={styles.chara_item_billy}>
              <CharaBilly />
            <div className={styles.chara_item_name_billy}>Billy Coen</div>
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