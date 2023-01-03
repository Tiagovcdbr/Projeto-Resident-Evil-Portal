import React from 'react'
import SlickList from '../../../utils/SlickList/SlickList'
import styles from '../Topics/Topics.module.scss'

function Topics() {
  return (
    <div className={styles.conts_box_topics}>
      <h2 className={styles.sec_ttl_topics}>NEWS</h2>
        <div className={styles.conts_box_inner_topics}>
          <SlickList />
        </div>
    </div>
  )
}

export default Topics