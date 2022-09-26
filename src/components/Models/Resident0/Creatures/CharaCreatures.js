import React from 'react'

import styles from './CharaCreatures.module.scss';
import BgIMG from '../../../../images/Resident0/bow-bg.jpg'
import CharaIMG from '../../../../images/Resident0/creatures-chara.png'

function CharaCreatures() {
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

export default CharaCreatures;