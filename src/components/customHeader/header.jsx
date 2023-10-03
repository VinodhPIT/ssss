import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SideDrawer from "@/components/sideDrawer/sideDrawer";
import Image from "next/image";
import LanguageSwitcher from "@/components/languageSwitcher/languageSwitcher";
import useTranslation from "next-translate/useTranslation";




export default function Header({ logo, theme, isPosition }) {

  const { t } = useTranslation();



  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.body.classList.add("nav_open");
    } else {
      document.body.classList.remove("nav_open");
    }
    return () => {
      document.body.classList.remove("nav_open");
    };
  }, [toggle]);

  const onToggle = () => {
    setToggle(true);
  };

  const onCloseToggle = () => {
    setToggle(false);
  };






  const links = [


    {
      id: 1,
      title:t("common:menus.tattooSearch"),
      url: `/search?term=${""}&category=${"tattoo"}`,
    },
    {
      id: 2,
      title:t("common:menus.styleGuide"),
      url: "/styleguide",
    },
    {
      id: 3,
      title:t("common:menus.dictionary"),
      url: "/dictionary",
    },

    {
      id: 4,
      title:t("common:menus.klarna"),
      url: "/klarna",
    },




  ];

  const router = useRouter();
  return (
    <>
      <header className={isPosition === true ? "header_wrapper" : null}>
        <div>
          <div className="container">
            <nav className="header_navigation">
              <div className="header_logo">
                <Link href={"/"} className="navbar_brand">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={110}
                    height={52}
                    priority
                  />
                </Link>
              </div>



              <div className="nav_block">
                <ul className="nav main_nav navbar_collapse collapse">
                  {links.map((link) => (
                    <li key={link.id} className="nav_item">
                      <Link
                        href={link.url}
                        className={
                          theme === "black" ? "textWhite" : "textBlack"
                        }
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="header_right">
                <button
                  type="button"
                  onClick={() => router.push("/fortattooartists")}
                  className={`btn btn_tattoo_art ${
                    theme === "black" ? "bgWhite" : "bgBlack"
                  }`}
                >
                   {t("common:menus.forTattooArtists")}
                </button>
                
                <LanguageSwitcher theme={theme}   />

                <Image
                  onClick={() => onToggle(true)}
                  src={
                    theme === "white"
                      ? "/blackHamburger.svg"
                      : "/Hamburger Menu.png"
                  }
                  alt="hamburger"
                  width={30}
                  height={30}
                  priority
                />
              </div>
            </nav>
          </div>
        </div>
      </header>

      {toggle === true ? <SideDrawer onCloseToggle={onCloseToggle} /> : null}
    </>
  );
}
