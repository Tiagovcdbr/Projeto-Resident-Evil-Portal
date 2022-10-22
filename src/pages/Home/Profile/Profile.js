/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

import styles from '../Profile/Profile.module.scss';

function Profile() {

  return (
    <div className={styles.contents}>
      <sections className={styles.contents_profile}>
        <div className={styles.inner}>
          <h2>MY PROFILE</h2>
            <p className={styles.contents_profile_text}>
              Get the most out of your experience
              by personalizing your profile page!
            </p>
            <p className={styles.btn}>
              MY PROFILE
            </p>
        </div>
      </sections>
    </div>
  )
}

export default Profile;