import React from 'react'
import styles from '../UpdateMotion/UpdateMotion.module.scss'

import IMGUpdate from '../../../images/ResidentEvil5/update-joycon.jpg'

function UpdateMotion() {
  return (
    <div className={styles.update}>
      <div className={styles.update_imageWrap}>
        <div className={styles.update_image_overlay}></div>
          <img className={styles.update_image} src={IMGUpdate} alt="" />
      </div>
      <div className={styles.update_descr}>
        <div className={styles.update_descr_inner}>
          <div className={styles.update_lead}>
            New Update Enables Motion Controls with the Joy-Con™!
          </div>
          <div className={styles.update_detail}>
            Do you want more than the standard controls? 
            With this update, you can now access 
            motion controls via the Joy-Con™!
            <br>
            </br>
            Aim with a weapon, perform a knife 
            attack, reload ammo, and shake free 
            from enemies!
          </div>
          <ul className={styles.additional_content_notesList}>
            <li className={styles.additional_content_notesItem}>
              Note: These Joy-Con™ functions are only 
              compatible with dual-controller grip.
            </li>
            <li className={styles.additional_content_notesItem}>
              However, aiming with a weapon is available 
              when using handheld mode, a Nintendo Switch™ 
              Lite, Joy-Con™ solo horizontal grip, or the 
              Nintendo Switch Pro Controller.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UpdateMotion