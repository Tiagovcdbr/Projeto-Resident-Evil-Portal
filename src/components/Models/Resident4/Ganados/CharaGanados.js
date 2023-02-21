import React from 'react'

import styles from './CharaGanados.module.scss';
import BgIMG from '../../../../images/ResidentEvil4/ganados-bg.jpg'
import CharaIMG from '../../../../images/ResidentEvil4/chara-ganados.png'

function CharaGanados () {
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

export default CharaGanados;