import React from 'react'
import { InfoRebecca } from '../data/DataRebecca'
import CharacterRebecca from './CharacterRebecca'

function Bio() {
  return (
    <>
      <CharacterRebecca {...InfoRebecca} />
    </>
  )
}

export default Bio