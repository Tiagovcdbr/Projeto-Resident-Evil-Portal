/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../FooterGlobal/Footer.module.scss'

import IMGPlaystation from '../../../images/ResidentEvil7/psf_b.png'
import IMGPs4 from '../../../images/ResidentEvil7/ps4_b.png'
import IMGXbox from '../../../images/ResidentEvil7/xboxone_b.png'
import IMGSteam from '../../../images/ResidentEvil7/steam_b.png'
import IMGSLogoBlack from '../../../images/ResidentEvil7/capcom_c_f.png'

function FooterGlobal() {
  return (
    <div className={styles.footer}>
      <div className={styles.title_footer}>
        <ul className={styles.title_footer_platform}>
          <li className={styles.pf_ps}>
            <img src={IMGPlaystation} alt="Playstation" />
          </li>

          <li className={styles.pf_ps4}>
            <img src={IMGPs4} alt="Playstation" />
          </li>

          <li className={styles.pf_xbox}>
            <img src={IMGXbox} alt="Playstation" />
          </li>

          <li className={styles.pf_steam}>
            <img src={IMGSteam} alt="Playstation" />
          </li>
        </ul>

        <ul className={styles.title_footer_platform_copyright}>
          <li>
            "PlayStation" and the "PS" Family logo are 
            registered trademarks and "PS4" is a 
            trademark of Sony Interactive Entertainment Inc.
          </li>

          <li>
            © Valve Corporation. Steam and the Steam logo 
            are trademarks and/or registered trademarks 
            of Valve Corporation in the U.S. and/or other 
            countries.
          </li>
        </ul>

        <ul className={styles.title_footer_menu}>
          <li>
            <a>
              Privacy Policy
            </a>
          </li>
        </ul>

        <ul className={styles.title_footer_capcom}>
          <p className={styles.title_footer_capcom_logo}>
            <a href="https://www.capcom.com/">
              <img src={IMGSLogoBlack} alt="Logo Black" />
            </a>
          </p>
          <small className={styles.title_footer_capcom_copyright}>
            ©CAPCOM CO., LTD. 2017 ALL RIGHTS RESERVED.
          </small>
        </ul> 
      </div>
    </div>
  )
}

export default FooterGlobal