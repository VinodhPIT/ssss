import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./custom.module.css";
import { APP_LINK_APPLE, APP_LINK_GOOGLE ,blurDataURL} from "@/constants/constants";
import useTranslation from "next-translate/useTranslation";


export default function Tattooartists() {


  const { t } = useTranslation();



  return (
    <>
      <main>
        <div className="page-wrapper">
          <div className={styles.banner_block}>
            <div className={styles.banner_wrap}>
              <div className={styles.banner_item}>
                <div className={styles.banner}>
                  <div className={styles.banner_inner}>


                  <Image
                    src="/istockphoto-1367127235-1024x1024-6-tatoo-banner.png"
                    alt="Boost your business with inckd"
                  fill
                  blurDataURL={blurDataURL}
                  placeholder="blur"
                  priority
                  objectFit="cover"
                  className="mob_hidden"
                />

              <Image
                      src="/istockphoto-1367127235-1024x1024 6-mob.png"
                      alt="Boost your business with inckd"
                  fill
                  blurDataURL={blurDataURL}
                  placeholder="blur"
                  priority
                  objectFit="cover"
                  className="desk_hidden"
                /> 
               </div>
                </div>
                <div className={styles.banner_content}>
                  <div className={styles.banner_content_wrap}>
                    <div className={styles.banner_caption}>
                      <h1 class="color_white">
                        <span>
                        {t("common:forArtistPage.bannerContent1")}
                        </span>
                      </h1>
                      <p>

                      {t("common:forArtistPage.bannerContent2")}
                      </p>
                    </div>
                    <ul className={styles.download_app}>
                      <li className={styles.download_app_title}>
                        <h6>Download our app from</h6>
                      </li>
                      <li>
                        <Link href={APP_LINK_APPLE} target="_blank">
                          <img src="/app-store.svg" alt="apple store" />
                        </Link>
                      </li>
                      <li>
                        <Link href={APP_LINK_GOOGLE} target="_blank">
                          <img src="/g-play.svg" alt="google play" />
                        </Link>
                      </li>
                    </ul>
                    <div className={styles.trend_list_wrap}>
                      <ul className={styles.trend_list}>
                        <li className={styles.list_inline_item}>
                          <img src="/hourglass-icon.svg" alt="Easy setup" />
                          <span>
                          {t("common:forArtistPage.easySetup")}
                          </span>
                        </li>
                        <li className={styles.list_inline_item}>
                          <img src="/heart-icon.svg" alt="Free to use" />
                          <span>
                          {t("common:forArtistPage.free-to-use")}
                          </span>
                        </li>
                        <li className={styles.list_inline_item}>
                          <img src="/card-icon.svg" alt="Easy payments" />
                          <span>{t("common:forArtistPage.easy-payments")}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="img_text_banner_box">
            <div className="col_full">
              <div className="img_text_box_wrapper fortattoo_artists">
                <div class="text_box_wrap right block_bg_black">
                  <div class="img_text_box_inner">
                    <div class="text_box_content justify_content_start">
                      <div class="text_box_content_inner m_pr_0 tattoo_art_mgt_mob">
                        <h2>{t("common:forArtistPage.title1")}</h2>
                        <ul class="custom-listing">
                          <li>
                            <img
                              src="/heart-icon.svg"
                              alt="Free to use & no subscpriptions"
                            />
                            {t("common:forArtistPage.nosubscpriptions")}
                          </li>
                          <li>
                            <img
                              src="/hourglass-icon.svg"
                              alt="Easy to set up and manage"
                            />
                            {t("common:forArtistPage.set-up-and-manage")}
                          </li>
                          <li>
                            <img src="/shield-check.svg" alt="Verified users" />
                            {t("common:forArtistPage.verified-users")}
                          </li>
                          <li>
                            <img src="/card-icon.svg" alt="Easy payments" />
                            {t("common:forArtistPage.easy-payments")}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="img_box_wrap block_bg_orange justify_content_center">
                      <img
                        src="/mockup-iPhone-business.png"
                        alt="Manage your business"
                        className="w_auto max_w_100pc object_fit_contain object_position img_box_shadow"
                      />
                    </div>
                  </div>
                </div>

                <div className="text_box_wrap left block_bg_black">
                  <div className="img_text_box_inner">
                    <div className="img_box_wrap block_bg_yellow justify_content_center">
                      <img
                        src="/mockup-iPhone-artist-profile.png"
                        alt="Your tattoo business ally"
                        className="w_auto max_w_100pc object_fit_contain object_position img_box_shadow"
                      />
                    </div>
                    <div className="text_box_content justify_content_start">
                      <div className="text_box_content_inner pr_40 m_pr_0">
                        <h2>{t("common:forArtistPage.your-tattoo-business")}</h2>
                        <p className="custom_fs_20 custom_fs_m_16">
                         {t("common:forArtistPage.content1")}  
                        </p>
                        <Link
                          href={"/joinartist"}
                          className="btn_default btn_custom_m bdr_rad_4"
                        >
                      {t("common:forArtistPage.button")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text_box_wrap right block_bg_black">
                  <div className="img_text_box_inner">
                    <div className="text_box_content justify_content_start">
                      <div className="text_box_content_inner m_pr_0">
                        <h2 >{t("common:forArtistPage.title2")}</h2>
                        <p className="custom_fs_20 custom_fs_m_16">
                        {t("common:forArtistPage.content2")}
                        </p>
                        <Link
                          href={"/joinartist"}
                          className="btn_default btn_custom_m bdr_rad_4"
                        >
                     {t("common:forArtistPage.button")}  
                        </Link>
                      </div>
                    </div>
                    <div className="img_box_wrap block_bg_pink_200 justify_content_center">
                      <img
                        src="/mockup-iPhone-loop.png"
                        alt="Keep clients in the Loop"
                        className="w_auto max_w_100pc object_fit_contain object_position"
                      />
                    </div>
                  </div>
                </div>

                <div className="text_box_wrap full-block-wrap">
                  <div className="img_text_box_inner">
                    <div className="justify_content_start container w_100pc">
                      <div className="text_box_content_inner m_pr_0">
                        <h3>
                        {t("common:forArtistPage.title3")}
                        </h3>
                        <Link
                          href={"/joinartist"}
                          className="btn_secondary btn_custom_m bdr_rad_4"
                        >
                  {t("common:forArtistPage.button")}  
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text_box_wrap left block_bg_black">
                  <div className="img_text_box_inner">
                    <div className="img_box_wrap block_bg_aero_blue justify_content_center">
                      <img
                        src="/mockup-iPhone-booking.png"
                        alt="Your booking buddy"
                        className="w_auto max_w_100pc object_fit_contain object_position img_box_shadow"
                      />
                    </div>
                    <div className="text_box_content justify_content_start">
                      <div className="text_box_content_inner pr_40 m_pr_0">
                        <h2>{t("common:forArtistPage.title4")}</h2>
                        <p className="custom_fs_20 custom_fs_m_16">
                        {t("common:forArtistPage.content4")}
                        </p>
                        <Link
                          href={"/joinartist"}
                          className="btn_default btn_custom_m bdr_rad_4"
                        >
                          {t("common:forArtistPage.button")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text_box_wrap right block_bg_black m_pr_0 pr_0">
                  <div className="img_text_box_inner">
                    <div className="text_box_content justify_content_start">
                      <div className="text_box_content_inner m_pr_0">
                        <h2>{t("common:forArtistPage.title5")}</h2>
                        <p className="custom_fs_20 custom_fs_m_16">
                        {t("common:forArtistPage.content5")}
                        </p>
                        <Link
                          href={"/joinartist"}
                          className="btn_default btn_custom_m bdr_rad_4"
                        >
                           {t("common:forArtistPage.button")}
                        </Link>
                      </div>
                    </div>
                    <div className="img_box_wrap block_bg_green_100 justify_content_center">
                      <img
                        src="/mockup-iPhone-payment.png"
                        alt="Manage Payments"
                        className="w_auto max_w_100pc object_fit_contain object_position img_box_shadow img_box_shadow"
                      />
                    </div>
                  </div>
                </div>

                <div className="text_box_wrap left block_bg_black">
                  <div className="img_text_box_inner">
                    <div className="img_box_wrap block_bg_aero_blue_lite justify_content_center">
                      <img
                        src="/mockup-iPhone-studio-features.png"
                        alt="Manage your Studios"
                        className="w_auto max_w_100pc object_fit_contain object_position img_box_shadow"
                      />
                    </div>
                    <div className="text_box_content justify_content_start">
                      <div className="text_box_content_inner pr_40 m_pr_0">
                        <h2>{t("common:forArtistPage.title6")}</h2>
                        <p className="custom_fs_20 custom_fs_m_16">
                        {t("common:forArtistPage.content6")}
                        </p>
                        <Link
                          href={"/joinartist"}
                          className="btn_default btn_custom_m bdr_rad_4"
                        >
                          {t("common:forArtistPage.button")}
                      
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text_box_wrap full-block-wrap block_bg_gray_150">
                  <div className="img_text_box_inner">
                    <div className="justify_content_start container w_100pc ">
                      <div className="text_box_content_inner m_pr_0 pb_20 m_pb_40">
                        <h3 className="mb_0">
                        {t("common:explore")}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}


export async function getServerSideProps(context) {
  try {
      return {
        props: {
         locale:context.locale
        },
      };
    }
   catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
