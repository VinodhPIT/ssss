import React from 'react'
import styles from "@/components/styles/listing.module.css";
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";




export default function ArtistAdd() {
  const { t } = useTranslation();

  return (
    <div className={styles.custom_adv_block_1}>
    <div className={styles.custom_adv_wrap}>
      <div className={styles.custom_adv_content}>
        <h6>
         
          {t("common:findArtist")}
         
        </h6>
        <span className={styles.adv_btn_wrap}>
          <Link  href={`/search?term=${""}&category=${"artist"}`} className={styles.btn_secondary}>
          {t("common:viewArtist")}
          </Link>
        </span>
        <img
          src="/pexels-cottonbro-studio-5320059-3.png"
          alt="View Artists"
        />
      </div>
    </div>
  </div>
  )
}
