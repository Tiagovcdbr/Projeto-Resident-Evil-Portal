import React from 'react'

import styles from './CharaJake.module.scss';
import BgIMG from '../../../../images/ResidentEvil6/jake-bg.jpg'
import CharaIMG from '../../../../images/ResidentEvil6/chara-jake.png'
import CharaIMG2 from '../../../../images/ResidentEvil6/chara-shelly.png'

function CharaJake () {
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

export default CharaJake;