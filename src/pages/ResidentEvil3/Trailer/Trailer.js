/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import SlideList from '../../../utils/SlideList/SlideList'
import styles from '../Trailer/Trailer.module.scss'

function Trailer() {
  return (
    <div className={styles.conts_box_trailer}>
      <h2 className={styles.sec_ttl_trailer}>TRAILER</h2>
        <div className={styles.conts_box_inner_trailer}>
          <SlideList/>
        </div>
    </div>
  )
}

export default Trailer

