/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../PageBuy/PageBuy.module.scss'

function PageBuy() {
  return (
    <div className={styles.page_buy_btn}>
      <div className={styles.btn_anchor}>
        <a>
          <span className={styles.btn_inner}>BUY</span>
          <span className={styles.btn_bg}></span>
        </a>
      </div>
    </div>
  )
}

export default PageBuy