import React from 'react'

import styles from "./StoryWrapper.module.scss";
import SystemIMG from "../../../images/Resident0/system1.jpg"

function StoryWrapper() {
  return (
    <div className={styles.system_story_wrapper}>
        <div className={styles.system}>
          <div className={styles.system_image}>
                <img src={SystemIMG} alt="System 1" />
                <div className={styles.system_image_overlay}></div>                
          </div>
          <div className={styles.system_descr}>
              <div className={styles.system_descr_bg}></div>
                <div className={styles.system_descr_inner}>
                <h3 className={styles.system_lead}>
                  Unearth the fate of S.T.A.R.S. Bravo Team, 
                  before the events of Resident Evil.
                </h3>
                <div className={styles.system_detail}>
                  RE0 details the events aboard the Ecliptic Express, 
                  which led up to the Mansion Incident depicted in RE1. 
                  This ambitious prequel featured various mechanics that 
                  were new to the series, including the partner zapping 
                  system which allows players to switch between the two 
                  protagonists on the fly.
                <br>
                </br>
                <br>
                </br>
                  Wesker Mode* lets you experience the game in a whole 
                  new way by introducing series antagonist Albert Wesker 
                  as a playable character, complete with his superhuman 
                  powers.                
                </div>
              </div>
            </div>            
        </div>
    </div>
  )
}

export default StoryWrapper;