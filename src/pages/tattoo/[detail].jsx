import React, { useEffect, useState } from "react";
import Header from "@/components/customHeader/header";
import Image from "next/image";
import styles from "./tattoodetail.module.css";
import { fetchTattooDetail } from "@/action/action";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import { fetchArtistDetail } from "@/action/action";
import Link from "next/link";
import { useGlobalState } from "@/context/Context";
import SearchField from "@/components/tattooSearch/tattooSearch";
import { useRouter } from "next/router";
import style from "@/pages/search/search.module.css";
import TattooSearchModalPopup from "@/utils/modalUtils";
import { useModal } from "@/utils/modalUtils";
import useTranslation from "next-translate/useTranslation";



export default function Detail({ data, status }) {
  const { isPopupOpen, openPopup, closePopup } = useModal();
  const router = useRouter();
  const { state } = useGlobalState();

  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [tattoo, setTattoo] = useState([]);
  const [getStyle, setStyle] = useState([]);
  const [location, setLocation] = useState([]);
 



  
  useEffect(() => {
    if (!data) {
      return null;
    } else {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetchArtistDetail(data.artist.slug);


          setTattoo(res.data.tattoo);
          setStyle(res.data.style);
          setLocation(res.data.studio);
        } catch (error) {}
        setLoading(false);
      };
      fetchData();
    }
  }, []);

  if (!data) {
    return null;
  }

  const searchStyle = (searchStyle) => {
    router.push(`/search?term=${""}&category=${"tattoo"}&style=${searchStyle}`);
  };

  return (
    <>
      <Header logo={"/tattooSearch.svg"} theme={"white"} isPosition={false} />
<main>


      <div className="page_wrapper">
        <div className="container">
          <div className={style.filter_container}>
            <div className={style.tattoo_search_wrap}>
              <div className={style.search_form}>
                <div className="search_form_wrap">
                  <SearchField currentTab={"tattoo"} />
                </div>
              </div>
            </div>

            <div className={style.main_wrap}>
              <div className={style.wrapper_filter}>
                <img
                  src="/setting_tuning.svg"
                  alt="location"
                  className={style.filter_icon}
                />
                <select
                  onChange={(event) => searchStyle(event.target.value)}
                  value={state.selectedStyle}
                >
                  <option value="0">Choose Style</option>
                  {state.styleCollection.map((el) => (
                    <option key={el._id} value={el._id}>
                      {el.sort[0]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className={styles.product_detail_wrap}>
            <Link  href={`/search?term=${""}&category=${"tattoo"}`} className={styles.back_arrow}>
              <Image
                src={'/back-arrow.svg'}
                alt="backArrow"
                width={44} 
                height={44}
                priority
                
              />
            </Link>
            <div className={styles.product_media}>
              <Image
                alt={data.style.name}
                priority
                src={data.tattoo.image}
                height={200}
                width={200}
                sizes="100vw"
                style={{
                  height: "auto",
                  width: "100%",
                }}
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>

            <div className={styles.product_info_col}>
              <div className={styles.search_profile_block}>
                <div className={styles.search_profile_pic}>
                  <Image
                    alt={"data.tattoo.image"}
                    priority
                    src={data.artist.profile_image}
                    width={100}
                    height={100}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                </div>
                <div className={styles.search_profile}>
                  <div className={styles.search_profile_content}>
                    <div className={styles.search_profile_name}>
                      {data.artist.artist_name}
                    </div>
                    <div className={styles.search_profile_details}>
                      Switzerland, Germany
                    </div>
                  </div>
                  <div className={styles.search_profile_link}>
                    <Link
                      href={`/artist/${data.artist.slug}`}
                      className={styles.profile_getin}
                    >
                     {t("common:viewProfile")}
                    </Link>
                    <a
                      onClick={openPopup}
                      target="_blank"
                      className={styles.profile_bookmark}
                    >
                      <img src="/bookmark-icon.svg" alt="bookmark icon" />
                    </a>
                    <a
                      onClick={openPopup}
                      target="_blank"
                      className={styles.profile_share}
                    >
                      <img src="/share-icon.svg" alt="share icon" />
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.product_style}>
                <span className={styles.product_style_label}>
                 {t("common:image-tattoo-style")}</span>

                {getStyle.length > 0 && (
                  <ul className={styles.product_style_list}>
                    {getStyle.map((e) => {
                      return (
                        <li key={e.id}>
                          {" "}
                          <Link
                            href={`/search?term=${e.name}&category=${"tattoo"}`}
                          >
                            {" "}
                            {e.name}{" "}
                          </Link>{" "}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              <div className={styles.product_detail_location}>
                <span className={styles.product_location_label}>{t("common:locations")}</span>
                <div className={styles.product_location_list}>
                  {location.length > 0 &&
                    location.map((el) => {
                      return (
                        <span
                          className={styles.product_loc_title}
                          key={el.studio_uid}
                        >
                          <img
                            src="/location-small.svg"
                            alt="Berlin, Germany"
                          />
                          {el.city}, {el.country}
                        </span>
                      );
                    })}
                </div>
              </div>

              <ul className={styles.download_app}>
                <li className={styles.download_app_title}>
                  <h6>{t("common:download-our-app")}</h6>
                </li>
                <li>
                  <Link target="_blank" href={APP_LINK_APPLE}>
                    <img src="/app-store.svg" alt="app store" />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={APP_LINK_GOOGLE}>
                    <img src="/g-play.svg" alt="g play" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        

<div className={styles.titleWrapper}>
<h1>{t("common:you-might-like")}</h1>
</div>
         


          {loading === true ? null : tattoo && tattoo.length > 0 ? (
            <div className={styles.grid_wrapper_tattoo}>
              

              {tattoo.map((item) => (
                <Link
                  href={`/tattoo/${item.tattoo_uid}`}
                  className={styles.listing_gridItem}
                  key={item.tattoo_uid}
                >
                  <Image
                    alt={item.style_name}
                    priority
                    src={item.image_medium}
                  
fill
objectFit="cover"
             
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <TattooSearchModalPopup
          className="custom-modal"
          isOpen={isPopupOpen}
          closeModal={closePopup}
        />
      </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const data = await fetchTattooDetail(context.query.detail);

    if (!data.data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: data.data,
        status: true,
        locale:context.locale
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
