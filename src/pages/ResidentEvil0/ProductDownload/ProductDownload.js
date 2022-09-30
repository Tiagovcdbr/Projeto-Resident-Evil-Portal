import React from 'react'
import styles from '../ProductDownload.module.scss';

const ProductDownload = () => {
  return (
    <div className={styles.other_plat}>
      <h3 className={styles.other_plat_lead}>Purchase for another platform</h3>
      <div className={styles.product_media_lead}>
        <span>Downloadable Edition</span>
      </div>
    </div>
  )
}

export default ProductDownload;