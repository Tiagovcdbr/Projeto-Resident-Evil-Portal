import React from 'react'
import Header from '../../../../components/other/Header/Header'
import { InfoRebecca } from '../data/DataRebecca'
import CharacterRebecca from './CharacterRebecca'

function Bio() {
  return (
    <>
      <Header />
      <CharacterRebecca {...InfoRebecca} />
    </>
  )
}

export default Bio