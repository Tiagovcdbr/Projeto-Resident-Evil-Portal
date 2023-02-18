import React from 'react'
import styles from '../Art/Art.module.scss'

import SlickListRe3 from '../../../utils/SlickListRe3/SlickListRe3'

function Art() {
  return (
    <div className={styles.conts_art} id="art">
      <h2 className={styles.sec_ttl}>IMAGES</h2>
      <div className={styles.conts_box_inner_art}>
        <div className={styles.slide_box_art}>
          <SlickListRe3 />
        </div>
      </div>
    </div>
  )
}

export default Art