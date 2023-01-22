import React from 'react'
import Header from '../../../ResidentEvil3/Header/Header'
import { InfoCarlos } from '../../data/DataCarlos'
import Carlos from './Carlos'

function Bio() {
  return (
    <>
      <Header />
      <Carlos {...InfoCarlos} />
    </>
  )
}

export default Bio