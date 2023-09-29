import React from "react";
import styles from "@/pages/tattoo/tattoodetail.module.css";
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import NoData from './noData'
import style from "@/components/styles/listing.module.css";

const All = ({ data }) => {

  return (
    <div className={styles.galleryWrapper} >
      {data.length == 0 ? <div className={style.blockCenter}>   <NoData/>  </div>:
   
        <div className={styles.grid_wrapper_tattoo}>
          {data.map((item) => (
            <Link
            href={
              item.tattoo_type === "normal"
                ? `/tattoo/${item.tattoo_uid}`
                :
                 `/flash/${item.tattoo_uid}`
               
            }
              
              className={styles.listing_gridItem}
              key={item.tattoo_uid}
            >
              <Image
                alt={item.tattoo_type}
                priority
                src={item.image}
                width={100}
                height={100}
                style={{
                 width:"100%",
                 height:"auto"
                }}
               
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </Link>
          ))}
        </div>
}
    </div>
  );
};

export default All;
