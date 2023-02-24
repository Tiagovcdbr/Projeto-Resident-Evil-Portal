import React from 'react'

import styles from './CharaAdversaries.module.scss';
import BgIMG from '../../../../images/ResidentEvil6/creature-bg.jpg'
import CharaIMG from '../../../../images/ResidentEvil6/chara-creature.png'

function CharaAdversaries () {
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

export default CharaAdversaries;