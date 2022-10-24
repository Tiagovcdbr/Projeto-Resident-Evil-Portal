import React from 'react'

import styles from './CharaJill.module.scss';
import BgIMG from '../../../../images/ResidentRemake/jill-bg.jpg'
import CharaIMG from '../../../../images/ResidentRemake/firstView-jill.png'

function CharaJill() {
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

export default CharaJill;