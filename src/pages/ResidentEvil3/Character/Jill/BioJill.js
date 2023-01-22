import React from 'react'
import Header from '../../../ResidentEvil3/Header/Header'
import { InfoJill } from '../../data/DataJill'
import Jill from './Jill'

function Bio() {
  return (
    <>
      <Header />
      <Jill {...InfoJill} />
    </>
  )
}

export default Bio