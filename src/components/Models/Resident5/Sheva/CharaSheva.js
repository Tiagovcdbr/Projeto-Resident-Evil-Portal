import React from 'react'

import styles from './CharaSheva.module.scss';
import BgIMG from '../../../../images/ResidentEvil5/sheva-bg.jpg'
import CharaIMG from '../../../../images/ResidentEvil5/chara-sheva.png'

function CharaSheva() {
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

export default CharaSheva;