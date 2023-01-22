import React from 'react'
import Header from '../../../ResidentEvil3/Header/Header'
import { InfoNicholai } from '../../data/DataNicholai'
import Nicholai from './Nicholai'

function Bio() {
  return (
    <>
      <Header />
      <Nicholai {...InfoNicholai} />
    </>
  )
}

export default Bio