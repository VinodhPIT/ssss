
import React from "react";

import Image from "next/image";
import Link from "next/link";
import styles from "./custom.module.css";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import CarouselKlarna from "@/components/carousel/CarouselKlarna";
import ImageSlider from "@/components/slider/ImageSlider";
import useWindowResize from "@/hooks/useWindowSize";
import useTranslation from "next-translate/useTranslation";



export default function Klarna() {

  const { isMobileView } = useWindowResize();
  const { t } = useTranslation();


  
  const items = [
    { heading: t("common:klarnaPage.heading1"),
      image: "/paylater_bg.svg",
      text: t("common:klarnaPage.carouselText1"),
      option1: t("common:klarnaPage.option1"),
      
    },
    {
      heading: t("common:klarnaPage.heading2"),
      image: "/Group.svg",
      text:  t("common:klarnaPage.carouselText2"),
      option1: t("common:klarnaPage.option2"),
     
    },
    { heading: t("common:klarnaPage.heading3"),
      image: "/Group 82677.svg",
      text:  t("common:klarnaPage.carouselText3"),
      option1: t("common:klarnaPage.option3"),
 
    },
    { heading: t("common:klarnaPage.heading4"),
      image: "/Group 82674.svg",
      text:  t("common:klarnaPage.carouselText4"),
      option1: t("common:klarnaPage.option4"),

    },
    {
      text: "Learn about greek mythology and find the tattoo with the right meaning for you in the app",
      option1: "Wake",
      heading: "Itzscuintli",
    },

  ];
  return (
    <main>


    <div className="page-wrapper">
      <div className={styles.banner_block}>
        <div className={styles.banner_wrap}>
          <div className={styles.banner_item}>
            <div className={styles.banner}>
              <div className={styles.banner_inner}>

              <Image
                 src="/pexels-cottonbro-studio-5320148-14-klarna.png"
                  alt="pexels"
                  fill
                  blurDataURL={blurDataURL}
                  placeholder="blur"
                  priority
                  objectFit="cover"
                  className="mob_hidden"
                />

<Image
                   src="/pexels-cottonbro-studio-5320148-14-klarna-mob.png"
                  alt="pexels"
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
              <div className={styles.banner_content_wrap_klarna}>
                <div className={styles.banner_caption}>
                  <Image
                    src="/Klarna-logotype(white.svg)-19.svg"
                    alt="klarna-logo"
                    width={186}
                    height={41}
                    priority
                  />

                  <h1 class="color_pink">
                    <span>
                    {t("common:klarnaPage.bannerTitle1")}
                    </span>
                  </h1>
                  <p>
                  {t("common:klarnaPage.bannerTitle2")}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="img_text_banner_box">
        <div className="col_full">
          <div className="img_text_box_wrapper klarna_wrap">
            <div class="text_box_wrap right">
              <div class="img_text_box_inner">
                <div class="text_box_content justify_content_start">
                  <div class="text_box_content_inner max_w_100pc m_pr_0">
                    <h2 class="color_gray_550"> {t("common:klarnaPage.title1")}</h2>
                    <ul class="custom-listing how_work_list">
                      <li>
                        <img
                          src="/download.svg"
                          alt="Download the inckd. App"
                        />
                        <span>{t("common:klarnaPage.download-inckd")}</span>
                      </li>
                      <li>
                        <img
                          src="/bookmark-square-minimalistic.svg"
                          alt="Accept an offer from your favourite artist."
                        />
                        <span>
                        {t("common:klarnaPage.accept-an-offer")}
                        </span>
                      </li>
                      <li>
                        <img
                          src="/klarna-icon-black.svg"
                          alt="Select Klarna as payment option."
                        />
                        <span> {t("common:klarnaPage.select-Klarna")}.</span>
                      </li>
                      <li>
                        <img
                          src="/heart-icon-black.svg"
                          alt="Get your tattoo done."
                        />
                        <span> {t("common:klarnaPage.get-your-tattoo")}.</span>
                      </li>
                      <li>
                        <img
                          src="/money-bag.svg"
                          alt="Pay later or in instalments."
                        />
                        <span> {t("common:klarnaPage.pay-later")}.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="img_box_wrap block_bg_orange justify_content_center block_bg_gradient_3">
                  <div class="bg_overlay_img z_index_1">
                    <img
                      src="/inckd-klarna-works.png"
                      alt="How it Works!"
                      class="svg_h_inherit img_box_shadow_2 m_klarna_work_reset"
                    />                                    
                  </div>
                  <div class="bg_overlay_img">
                    <img
                      src="/dragon.svg"
                      alt="How it Works!"
                      class="svg_h_inherit"
                    />
                  </div>

                  <Image
                    src="/pay-klarna.png"
                    alt="How it Works!"
                    width={500}
                    height={500}
                    priority
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                </div>
              </div>
            </div>

            <div class="text_box_wrap left ">
              <div class="img_text_box_inner">
                <div class="img_box_wrap block_bg_gradient_1">
                  <div class="klarna_bg">
                    <img src="/klarna-white.svg" alt="" />
                  </div>
                  <div class="box_text_img_over color_pink m_left_0 m_right_0 m_text_center">
                    <h2 class="txt_mob_fs50">
                    {t("common:klarnaPage.title2")}
                    </h2>
                  </div>

                  <Image
                    priority={true}
                    src="/choose-pay.png"
                    alt="Pay all at once? Never again!"
                    width={500}
                    height={711}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    layout="responsive"
                  />
                </div>
                <div class="text_box_content justify_content_start">
                  <div class="text_box_content_inner custom_carousel_wrap">
                    <CarouselKlarna items={items}/>
                  </div>
                </div>
              </div>
            </div>

            <div class="text_box_wrap right ">
              <div class="img_text_box_inner m_switcher">
                <div class="text_box_content justify_content_start align_item_start">
                  <div class="text_box_content_inner w_100pc custom_full_block pr_0">
                    <h2 class="m_text_center">Availability</h2>
                    <ul class="custom-listing-grid">
                      <li>
                        <img src="/afghanistan.svg" alt="afghanistan" />
                        <span>afghanistan</span>
                      </li>
                      <li>
                        <img src="/aland islands.svg" alt="aland islands" />
                        <span>aland islands</span>
                      </li>
                      <li>
                        <img src="/albania.svg" alt="albania" />
                        <span>albania</span>
                      </li>
                      <li>
                        <img src="/Algeria.svg" alt="Algeria" />
                        <span>Algeria</span>
                      </li>
                      <li>
                        <img src="/american samoa.svg" alt="american samoa" />
                        <span>american samoa</span>
                      </li>
                      <li>
                        <img src="/angola.svg" alt="angola" />
                        <span>angola</span>
                      </li>
                      <li>
                        <img src="/anguilla.svg" alt="anguilla" />
                        <span>anguilla</span>
                      </li>
                      <li>
                        <img src="/monaco.svg" alt="monaco" />
                        <span>monaco</span>
                      </li>
                      <li>
                        <img src="/mongolia.svg" alt="mongolia" />
                        <span>mongolia</span>
                      </li>
                      <li>
                        <img src="/montenegro.svg" alt="montenegro" />
                        <span>montenegro</span>
                      </li>
                      <li>
                        <img src="/morocco.svg" alt="morocco" />
                        <span>morocco</span>
                      </li>
                      <li>
                        <img src="/mozambique.svg" alt="mozambique" />
                        <span>mozambique</span>
                      </li>
                      <li>
                        <img src="/myanmar.svg" alt="myanmar" />
                        <span>myanmar</span>
                      </li>
                      <li>
                        <img src="/namibia.svg" alt="namibia" />
                        <span>namibia</span>
                      </li>
                      <li>
                        <img src="/nato.svg" alt="nato" />
                        <span>nato</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="img_box_wrap block_bg_gradient_1 justify_content_right img-btm-7pc">
                  <div class="klarna_bg klarna_page_align">
                    <img src="/klarna-white.svg" alt="" />                    
                  </div>
                  <div class="box_text_img_over color_pink txt-right-align">
                    <h2 class="text_right m_text_center txt_mob_fs50">
                    {t("common:klarnaPage.title4")}
                    </h2>
                  </div>

                  <Image
                    priority={true}
                    src="/tattoo-klarna.png"
                    alt="Where i can pay"
                    width={500}
                    height={711}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>

            <div class="text_box_wrap right app_download_box_wrap block_bg_pink down_klarna-right-spc">
              <div class="img_text_box_inner">
                <div class="text_box_content justify_content_start m_justify_content_center m_pt_45">
                  <div class="text_box_content_inner m_pr_0">
                    <ul class="download_app">
                      <li class="download_app_title">
                        <h6>{t("common:downloadApp")}</h6>
                      </li>
                      <li>
                        <Link href={APP_LINK_APPLE} target="_blank">
                          <img src="/app-store.svg" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link href={APP_LINK_GOOGLE} target="_blank">
                          <img src="/g-play.svg" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {!isMobileView ? (
                <div class="img_box_wrap">
                  <ul class="app_download_img_list img_box_img_m20pc justify_content_right slider_resize">
                    <li>
                      <img
                        src="/mockup-iPhone-download.png"
                        alt="Download the App & Explore more!"
                      />
                    </li>
                    <li>
                      <img
                        src="/mockup-iPhone-download.png"
                        alt="Download the App & Explore more!"
                      />
                    </li>
                  </ul>
                </div>):""}
              </div>
              <div className="img_box_wrap">
                {isMobileView ? (
                  <ImageSlider
                    imgPath="/iPhone-192.png"
                    imgAlt="Picture of the author"
                    imgblurDataURL={blurDataURL}
                    imgWidth={215}
                    imgHeight={443}
                  ></ImageSlider>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
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
