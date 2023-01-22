import React from 'react'
import Header from '../../../ResidentEvil3/Header/Header'
import { InfoMikhail } from '../../data/DataMikhail'
import Mikhail from './Mikhail'

function Bio() {
  return (
    <>
      <Header />
      <Mikhail {...InfoMikhail} />
    </>
  )
}

export default Bio