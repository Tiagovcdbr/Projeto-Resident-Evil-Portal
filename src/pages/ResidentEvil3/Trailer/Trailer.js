/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import SlickList from '../../../utils/SlickList/SlickList'
import styles from '../Topics/Topics.module.scss'

function Trailer() {
  return (
    <div className={styles.conts_box_trailer}>
      <h2 className={styles.sec_ttl_trailer}>NEWS</h2>
        <div className={styles.conts_box_inner_trailer}>
          <SlickList/>
        </div>
    </div>
  )
}

export default Trailer