import React from 'react'

import styles from './CharaRebecca.module.scss';
import BgIMG from '../../../../images/Resident0/rebecca-bg.jpg'
import CharaIMG from '../../../../images/Resident0/rebecca-chara.png'

function CharaRebecca() {
  return (
    <div className={styles.chara_item_inner}>
      <div className={styles.chara_item_bg}>
          <img src={BgIMG} alt='bg img' />
      </div>      
      <div className={styles.chara_item_charaImg}>           
          <img src={CharaIMG} alt='chara img' />       
      </div>
    </div>
  )
}

export default CharaRebecca;