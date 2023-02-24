import React from 'react'

import styles from './CharaLeon.module.scss';
import BgIMG from '../../../../images/ResidentEvil6/leon-bg.jpg'
import CharaIMG from '../../../../images/ResidentEvil6/chara-leon.png'
import CharaIMG2 from '../../../../images/ResidentEvil6/chara-helena.png'


function CharaLeon () {
  return (
    <div className={styles.chara_item_inner}>
      <div className={styles.chara_item_bg}>
          <img src={BgIMG} alt='bg img' />
      </div>
      <div className={styles.chara_item_charaImg}>
        <img src={CharaIMG} alt='chara img' />
      </div> 
      <div className={styles.chara_item_charaImg2}>
        <img src={CharaIMG2} alt='chara img' />
      </div>     
    </div>
  )
}

export default CharaLeon;