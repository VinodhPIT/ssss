import React  from "react";
import Link from "next/link";
import  styles from './sideDrawer.module.css'
import Image from 'next/image'
import useTranslation from "next-translate/useTranslation";


export default function SideDrawer({onCloseToggle}) {

  const { t } = useTranslation();


  const links = [
    {
      id: 1,
      title:t("common:menus.home"),
      url: `/`,
    },
    {
      id: 2,
      title:t("common:menus.styleGuide"),
      url: "/styleguide",
    },
    {
      id: 3,
      title: t("common:menus.dictionary"),
      url: "/dictionary",
    },

    {
      id: 4,
      title: t("common:menus.klarna"),
      url: "/klarna",
    },

    {
      id: 5,
      title:t("common:menus.forTattooArtists"),
      url: "/fortattooartists",
    },

    {
      id: 6,
      title:t("common:menus.contactUs"),
      url: "/contactus",
    },
  ];







  return (
    <div className={styles.sideDrawer}>
<div className={styles.closeWrapper}>

      <Image
      onClick={()=>onCloseToggle()}
      src="/close.png"
      width={50}
      height={50}
      alt="close"
    />

</div>
       
      <ul className={styles.menuList}>
        {links.map((link) => (
          <li key={link.id} >
            <Link href={link.url}onClick={()=>onCloseToggle()}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
