/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import SlickList from '../../../utils/SlickList/SlickList'
import styles from '../Topics/Topics.module.scss'

function Topics() {
  return (
    <div className={styles.conts_box_topics}>
      <h2 className={styles.sec_ttl_topics}>NEWS</h2>
        <div className={styles.conts_box_inner_topics}>
          <SlickList/>
          <div className={styles.link_btn_topics}>
            <div className={styles.btn_topics}>
              <a>
                <span>Update information</span>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topics