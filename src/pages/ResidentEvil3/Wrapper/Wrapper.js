import React from 'react'
import styles from '../Wrapper/Wrapper.module.scss'
import Main from '../../ResidentEvil3/Main/Main'
import Audio from '../../../audios/Resident Evil 3 - Free From Fear (Save Room Theme) (Cut _ Looped).m4a'

function Wrapper() {
  return (
    <div className={styles.Wrapper}>
      <audio
        src={Audio}
        autoplay='1'
        loop                
      />
      <Main />
    </div>
  )
}

export default Wrapper