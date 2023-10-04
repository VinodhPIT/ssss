import React ,{useState} from 'react'
import styles from "@/components/styles/listing.module.css";
import TattooSearchModalPopup from "@/utils/modalUtils";
import { useModal } from "@/utils/modalUtils";
import useTranslation from "next-translate/useTranslation";


export default function Offer() {

  const { t } = useTranslation();

  const { isPopupOpen, openPopup, closePopup } = useModal();



  return (
    <div className={styles.custom_adv_block_3}>
    <div className={styles.custom_adv_wrap}>
      <div className={styles.custom_adv_content}>
        <h6>{t("common:offers")}</h6>
        <span className={styles.adv_price}>{t("common:chf")}</span>
        
        <p>{t("common:nextTattoo")}</p>
        <span className={styles.adv_btn_wrap}>
          <a   onClick={openPopup}
                    target="_blank"   className={styles.btn_secondary}>
           {t("common:refer")}
          </a>
        </span>
        <img
          src="/shutterstock_2068639577-1.png"
          alt="Tattoo now Pay later"
        />
      </div>
    </div>
         <TattooSearchModalPopup
            className="custom-modal"
            isOpen={isPopupOpen}
            closeModal={closePopup}
          />


  </div>
  )
}
