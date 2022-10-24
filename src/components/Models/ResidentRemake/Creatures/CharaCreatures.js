import React from 'react'

import styles from './CharaCreatures.module.scss';
import BgIMG from '../../../../images/ResidentRemake/bow-bg.jpg'
import CharaIMG from '../../../../images/ResidentRemake/bow-chara.png'

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