import React from 'react'
import Header from '../../../ResidentEvil3/Header/Header'
import { InfoNemesis } from '../../../ResidentEvil3/data/DataNemesis'
import Nemesis from './Nemesis'


function Bio() {
  return (
    <>
      <Header />
      <Nemesis {...InfoNemesis} />
    </>
  )
}

export default Bio