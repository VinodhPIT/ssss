import React, { useEffect } from "react";
import Header from "@/components/customHeader/header";
import Head from "next/head";
import { fetchCategoryData, fetchMultiData } from "@/action/action";
import Autocomplete from "react-google-autocomplete";
import { Parameters } from "@/components/parameters/params";
import { renderCategoryComponent } from "@/components/customTabs/tab";
import style from "@/pages/search/search.module.css";
import { useRouter } from "next/router";

import SearchField from "@/components/tattooSearch/tattooSearch";
import { addAdsToResults } from "@/helpers/helper";
import { getUrl } from "@/utils/getUrl";
import Image from 'next/image'
import { useGlobalState } from "@/context/Context";
import useTranslation from "next-translate/useTranslation";

const MobileDetect = require('mobile-detect');
const Search = ({
  data,
  currentTab,
  pageNo,
  totalItems,
  searchKey,
  selectedStyle,
  lat,
  lon,
  loading,locale
}) => {
  const { state, fetchServerlData, changeTab, loadMore } = useGlobalState();

  const { t } = useTranslation();


  const categoryTab = [
    { id: "all", label:t("common:tabs.all"), image: '/all.svg', activeImage: '/all-active.svg' },
    { id: "tattoo", label:t("common:tabs.tattoo"), image: '/flame-new.svg', activeImage: '/Flame-active.svg' },
    { id: "flash", label:t("common:tabs.flash"), image: '/bolt-new.svg', activeImage: '/bolt-active.svg' },
    { id: "artist",label:t("common:tabs.artist"),image :'/colour-palette-new.svg'  ,activeImage:'/colour-palette-active.svg'} 
];





  useEffect(() => {
    try {
      fetchServerlData({
        data,
        currentTab,
        pageNo,
        totalItems,
        searchKey,
        selectedStyle,
        lat,
        lon,locale
      });
    } catch (error) {}
  }, [data]);

  const collectionLength = state.categoryCollection.filter(
    (e) => e._index !== "ad"
  );

  const router = useRouter();

  const handlePlaceSelected = async (place) => {
    const { lat, lng } = place.geometry.location;
    const latitude = lat();
    const longitude = lng();
    getUrl(searchKey, currentTab, selectedStyle, latitude, longitude, router)

  };

  const updateTab = (tab) => {

    getUrl(searchKey, tab, selectedStyle, lat, lon, router);
  };

  const searchStyle = (searchStyle) => {
    getUrl(searchKey, currentTab, searchStyle, lat, lon, router);
  };

  return (
    <>
      <Header logo={"/tattooSearch.svg"} theme={"white"} isPosition={false} />
<main>


      <div className={style.page_search_wrapper}>
        <div className="container">
        

          <div className={style.filter_container}>
            <div className={style.tattoo_search_wrap}>
              <div className={style.search_form}>
                <div className="search_form_wrap">
                  <SearchField currentTab={currentTab} />
                </div>
              </div>
            </div>

            <div className={style.main_wrap}>
              {state.currentTab === "artist" && (
                <div className={style.wrapper_block}>


<Image
    src="/location-small.svg"
      width={16}
      height={17}
      alt="location"
      className={style.location_icon}
      priority
    />


                  <Autocomplete
                    apiKey={process.env.googlePlacesApiKey}
                    onPlaceSelected={handlePlaceSelected}
                    placeholder={t("common:enterLocation")}
                  />
                </div>
              )}

              <div className={style.wrapper_filter}>

              <Image
      src="/setting_tuning.svg"
      width={20}
      height={21}
      alt="style"
      className={style.filter_icon}
      priority
    />

           
                <select
                  onChange={(event) => searchStyle(event.target.value)}
                  value={state.selectedStyle}
                >
                  <option value="0">{t("common:chooseStyle")}</option>
                  {state.styleCollection.map((el) => (
                    <option key={el._id} value={el._id}>
                      {el.sort[0]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className={style.tab_container}>
            <div className={style.tabSection}>
              <ul>
                {categoryTab.map((tab) => (
                  <li
                    key={tab.id}
                    className={
                      currentTab === tab.id
                        ? style.activeTab
                        : style.inActivetab
                    }
                    onClick={() => updateTab(tab.id)}
                  >
                    <div className={style.tabBox}>
                      <img
                        src={
                          currentTab === tab.id
                            ? tab.activeImage
                            : tab.image
                        }
                      />

                      <p style={{ margin: "0" }}>{tab.label}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {renderCategoryComponent(state.currentTab, state.categoryCollection)}

          {!state.loading &&
            collectionLength.length !== 0 &&
            collectionLength.length !== state.totalItems && (
              <div className={style.grid_more_view}>
                <p>
                  See out of {state.categoryCollection.length}/
                  {state.totalItems}
                </p>
                <div className={style.btn_wrapper}>
                  <button
                    onClick={() => {
                      loadMore();
                    }}
                    className="btn_secondary btn_view_more"
                  >
                    {t("common:loadMore")}
                  
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
      </main>
    </>
  );
};

export default Search;

export async function getServerSideProps(context) {

 



  const userAgent = context.req.headers["user-agent"];

  const md = new MobileDetect(userAgent);

  const isMobile = md.mobile();

  try {
    if (context.query.category === "all") {
      const results = await fetchMultiData({
        ...Parameters,
        category: context.query.category,
        search_key: context.query.term,
        style: context.query.style ?? "",
        latitude: context.query.lat ?? "",
        longitude: context.query.lon ?? "",
      });

      let addData = await addAdsToResults(results.data, isMobile);

      return {
        props: {
          data: addData,
          currentTab: context.query.category,
          pageNo: 0,
          totalItems: results.totalCount,
          searchKey: context.query.term,
          selectedStyle: context.query.style ?? "",
          lat: context.query.lat ?? "",
          lon: context.query.lon ?? "",
          locale:context.locale
          
        },
      };
    } else {
      const data = await fetchCategoryData({
        ...Parameters,
        category: context.query.category,
        style: context.query.style ?? "",
        search_key: context.query.term,
        latitude: context.query.lat ?? "",
        longitude: context.query.lon ?? "",
      });

      let addData = await addAdsToResults(data.rows.hits, isMobile);

      return {
        props: {
          data: addData,
          currentTab: context.query.category,
          pageNo: 0,
          totalItems: data.rows.total.value,
          searchKey: context.query.term,
          selectedStyle: context.query.style ?? "",
          lat: context.query.lat ?? "",
          lon: context.query.lon ?? "",
          locale:context.locale
        },
      };
    }
  } catch (error) {
    console.log(error);

    return {
      props: {
        data: null,
      },
    };
  }
}
