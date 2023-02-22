import React from 'react'
import styles from '../AdditionalContent/AdditionalContent.module.scss'

import IMGAdditional from '../../../images/ResidentEvil5/additional-content3.jpg'

function AdditionalContent() {
  return (
    <div className={styles.additional_content}>
      <div className={styles.additional_content_imageWrap}>
        <div className={styles.additional_content_image_overlay}>
        </div>
          <img className={styles.additional_content_image} src={IMGAdditional} alt="" />
      </div>

      <div className={styles.additional_content_descr}>
        <div className={styles.additional_content_descr_inner}>
          <div className={styles.additional_content_lead}>
            This game contains the following additional content:
          </div>
          <div className={styles.additional_content_sublead}>
            -The Mercenaries United
            <br>
            </br>
            -Lost in Nightmares
            <br>
            </br>
            -Desperate Escape
            <br>
            </br>
            -Versus Mode
            <br>
            </br>
            -Additional Costumes
          </div>
          <div className={styles.additional_content_detail}></div>
          <ul className={styles.additional_content_notesList}>
            <li className={styles.additional_content_notesItem}>
              *The Mercenaries United is a combination of 
              ”The Mercenaries” and ”The Mercenaries Reunion”. 
              It does not contain new content.
            </li>
            <li className={styles.additional_content_notesItem}></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdditionalContent