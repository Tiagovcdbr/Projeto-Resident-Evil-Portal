import React from 'react'

import styles from './CharaBilly.module.scss';
import BgIMG from '../../../../images/Resident0/billy-bg.jpg'
import CharaIMG from '../../../../images/Resident0/billy-chara.png'

function CharaBilly() {
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

export default CharaBilly;