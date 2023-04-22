/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../Wrapper/Wrapper.module.scss'
import Main from '../Main/Main'

function Wrapper() {

  return (
    <div className={styles.wrapper}>
      <Main />
    </div>
  )
}

export default Wrapper