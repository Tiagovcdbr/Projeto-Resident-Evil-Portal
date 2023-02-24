import React from 'react'

import styles from './CharaAda.module.scss';
import BgIMG from '../../../../images/ResidentEvil6/ada-bg.jpg'
import CharaIMG from '../../../../images/ResidentEvil6/chara-ada.png'

function CharaAda () {
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

export default CharaAda;