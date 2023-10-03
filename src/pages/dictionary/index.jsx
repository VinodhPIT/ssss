import React from "react";
import Link from "next/link";
import CarouselComponent from "@/components/carousel/Carousel";
import ImageSwiper from "@/components/slider/ImageSwiper";
import ImageSlider from "@/components/slider/ImageSlider";
import Header from "@/components/customHeader/header";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import useWindowResize from "@/hooks/useWindowSize";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import TattooSearchModalPopup from "@/utils/modalUtils";
import { useModal } from "@/utils/modalUtils";




export default function Dictionary() {

  const { isPopupOpen, openPopup, closePopup } = useModal();

  const { isMobileView } = useWindowResize();

  const { t } = useTranslation();

  const items = [
    {
      heading: t("common:dictionaryPage.carousel.title1"),
      image: "/Group.svg",
      text: t("common:dictionaryPage.carousel.content1"),
      button1: "Trust",
      button2: "Remembrance",
     
    },
    
    { heading:t("common:dictionaryPage.carousel.title2"),
      image: "/Group 82721.png",
      text: t("common:dictionaryPage.carousel.content1"),
      button1:t("common:dictionaryPage.carousel.trust"),
      button2: t("common:dictionaryPage.carousel.remembrance"),
     
    },
    {
      heading: t("common:dictionaryPage.carousel.title1"),
      image: "/Group 82677.svg",
      text: t("common:dictionaryPage.carousel.content1"),
      button1: t("common:dictionaryPage.carousel.trust"),
      button2: t("common:dictionaryPage.carousel.remembrance"),
     
    },
    {
      heading: t("common:dictionaryPage.carousel.title2"),
      image: "/Group 82674.svg",
      text: t("common:dictionaryPage.carousel.content1"),
      button1: t("common:dictionaryPage.carousel.trust"),
      button2: t("common:dictionaryPage.carousel.remembrance"),
     
    },
    {
      heading: t("common:dictionaryPage.carousel.title1"),
      text: t("common:dictionaryPage.carousel.content1"),
      button1:   t("common:dictionaryPage.carousel.trust"),
      button2: t("common:dictionaryPage.carousel.remembrance"),
    
    },
  ];

  return (
    <>
      <Header logo={"/inckd-logo.svg"} theme={"black"} isPosition={true} />

      <main>
        <div className="page_wrapper">
          <section className="img_text_banner_box">
            <div className="col_full">
              <div className="img_text_box_wrapper">
                <div className="text_box_wrap right block_bg_black full_banner_custom_slider">
                  <div className="container">
                    <div className="img_text_box_inner">
                      <div className="text_box_content justify_content_start pl_0 pr_2_pc m_text_center m_pb_0">
                        <div className="text_box_content_inner m_pr_0">
                          <h2>{t("common:dictionaryPage.bannerContent1")}</h2>
                          <p>{t("common:dictionaryPage.bannerContent2")}</p>
                          <Link
                            href={`/search?term=${""}&category=${"artist"}`}
                            className="btn btn_default btn_xxl btn_sm_m"
                          >
                            {t("common:dictionaryPage.findArtist")}
                            <img
                              src="/alt-arrow-right-black.svg"
                              alt=""
                              className="ml-8 mt-2"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="img_box_wrap custom_slick_slider_one">
                        <ImageSwiper />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text_box_wrap full-block-wrap block_bg_yellow_500">
                  <div className="img_text_box_inner">
                    <div className="justify_content_start container w_100pc">
                      <div className="text_box_find_tattoo">
                        <div className="keywords_wrap">
                          <ul className="keywords_list">
                            <li>{t("common:dictionaryPage.remembrance")}</li>
                            <li>{t("common:dictionaryPage.trust")}</li>
                            <li>{t("common:dictionaryPage.remembrance")}</li>
                            <li onClick={openPopup} style={{"cursor":"pointer"}}>
                              {t("common:dictionaryPage.explore-more-emotions")}
                            </li>
                          </ul>
                        </div>
                        <div className="find_tattoo_wrap">
                          <div className="find_tattoo_left">
                            <h3>{t("common:dictionaryPage.title1")}</h3>
                          </div>
                          <div className="find_tattoo_right">
                            <ul className="download_app">
                              <li>
                                <Link target="_blank" href={APP_LINK_APPLE}>
                                  <img src="/app-store.svg" alt="apple store" />
                                </Link>
                              </li>
                              <li>
                                <Link target="_blank" href={APP_LINK_GOOGLE}>
                                  <img src="/g-play.svg" alt="google play" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text_box_wrap left">
                  <div className="img_text_box_inner">
                    <div className="img_box_wrap block_bg_gradient_1">
                      <div className="box_text_img_over custom_spc_left_d_590 color_white">
                        <h2 className="txt_mob_fs50 custom_spc_left_d_430 list_inline_item">
                          {t("common:dictionaryPage.title2")}
                        </h2>
                        <p className="custom_fs_22 custom_fs_m_16 md_max_75 max_m_w_100pc list_inline_item">
                          {t("common:dictionaryPage.content2")}
                        </p>
                      </div>

                      <Image
                        priority
                        src="/mythology.png"
                        alt="Picture of the author"
                        width={500}
                        height={800}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        layout="responsive"
                      />
                    </div>

                    <div className="text_box_content justify_content_start block_bg_gray_150">
                      <div className="text_box_content_inner custom_carousel_wrap">
                        <CarouselComponent
                          items={items}
                          itemStyle="d_flex justify_content_end"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text_box_wrap left app_download_box_wrap mb_0 block_bg_yellow_500 dictionary_app">
                  <div className="img_text_box_inner">
                    {!isMobileView ? (
                      <div className="img_box_wrap">
                        <ul className="app_download_img_list mt_mb_80 after_none justify_content_right text_center mr_0 ml_15">
                          <li>
                            <img
                              src="/image-189-exp.png"
                              alt="Picture of the author"
                            />
                          </li>
                          <li>
                            <img
                              src="/image-189-exp.png"
                              alt="Picture of the author"
                            />
                          </li>
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}

                    <div class="text_box_content justify_content_start">
                      <div class="text_box_content_inner w_100pc pr_0 dictionary_explore">
                        <ul class="download_app ml_0 w_100pc max_w_100pc m_pb_50 text_left">
                          <li class="download_app_title">
                            <h6>{t("common:dictionaryPage.expoloreMore")}</h6>
                            <p>{t("common:dictionaryPage.content3")}</p>
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
                  </div>

                  <div className="img_box_wrap">
                    {isMobileView ? (
                      <ImageSlider
                        imgPath="/image-189-exp.png"
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

                <div class="text_box_wrap right">
                  <div class="img_text_box_inner m_switcher">
                    <div class="text_box_content justify_content_start block_bg_gray_150">
                      <div class="text_box_content_inner custom_carousel_wrap">
                        <CarouselComponent
                          items={items}
                          itemStyle="d_flex justify_content_start m_justify_content_right"
                        />
                      </div>
                    </div>
                    <div class="img_box_wrap block_bg_gradient_2 justify_content_right">
                      <div class="box_text_img_over color_white text_right">
                        <h2 class="txt_mob_fs50 custom_spc_right_d_430 list_inline_item">
                        {t("common:dictionaryPage.title4")}
                        </h2>
                        <p class="custom_fs_22 custom_fs_m_16 md_max_75 max_m_w_100pc list_inline_item">
                        {t("common:dictionaryPage.content4")}
                        </p>
                      </div>

                      <Image
                        priority
                        src="/mythology.png"
                        alt="Greek Mythology"
                        width={500}
                        height={800}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>

                <div class="text_box_wrap full-block-wrap block_bg_yellow_500">
                  <div class="img_text_box_inner">
                    <div class="justify_content_start container w_100pc">
                      <div class="text_box_find_tattoo">
                        <div class="keywords_wrap">
                          <ul class="keywords_list">
                            <li>{t("common:dictionaryPage.remembrance")}</li>
                            <li>{t("common:dictionaryPage.trust")}</li>
                            <li>{t("common:dictionaryPage.remembrance")}</li>
                             <li onClick={openPopup} style={{"cursor":"pointer"}}>
                              {t("common:dictionaryPage.explore-more-emotions")}
                            </li>
                          </ul>
                        </div>
                        <div class="find_tattoo_wrap">
                          <div class="find_tattoo_left">
                            <h3>{t("common:dictionaryPage.title1")}</h3>
                          </div>
                          <div class="find_tattoo_right">
                            <ul class="download_app">
                              <li>
                                <Link target="_blank" href={APP_LINK_APPLE}>
                                  <img src="/app-store.svg" alt="apple store" />
                                </Link>
                              </li>
                              <li>
                                <Link target="_blank" href={APP_LINK_GOOGLE}>
                                  <img src="/g-play.svg" alt="google play" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text_box_wrap left">
                  <div class="img_text_box_inner">
                    <div class="img_box_wrap block_bg_gradient_1">
                      <div class="box_text_img_over color_white">
                        <h2 class="txt_mob_fs50 custom_spc_left_d_430 list_inline_item">
                         {t("common:dictionaryPage.title3")}
                        </h2>
                        <p class="custom_fs_22 custom_fs_m_16 md_max_75 max_m_w_100pc list_inline_item">
                        {t("common:dictionaryPage.content3")}
                        </p>
                      </div>

                      <Image
                        priority
                        src="/aztec-symbols.png"
                        alt="Picture of the author"
                        width={500}
                        height={800}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        layout="responsive"
                      />

                      
                    </div>
                    <div class="text_box_content justify_content_start block_bg_gray_150">
                      <div class="text_box_content_inner custom_carousel_wrap">
                        <CarouselComponent
                          items={items}
                          itemStyle="d_flex justify_content_end"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <TattooSearchModalPopup
          className="custom-modal"
          isOpen={isPopupOpen}
          closeModal={closePopup}
        />

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
