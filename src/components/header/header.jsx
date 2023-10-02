import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SideDrawer from "@/components/sideDrawer/sideDrawer";
import LanguageSwitcher from "@/components/languageSwitcher/languageSwitcher";
import Image from "next/image";

export default function Header() {



  
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
      title: "Tattoo search",
      url: `/search?term=${""}&category=${"tattoo"}`,
    },
    {
      id: 2,
      title: "Styleguide",
      url: "/styleguide",
    },
    {
      id: 3,
      title: "Dictionary",
      url: "/dictionary",
    },

    {
      id: 4,
      title: "Klarna",
      url: "/klarna",
    },
  ];

  const router = useRouter();

  return (
    <>
      <header className="header_wrapper">
        <div>
          <div className="container">
            <nav className="header_navigation">
              <div className="header_logo">
                <Link href={"/"} className="navbar_brand">
                  <Image
                    src="/inckd-logo.svg"
                    alt="Picture of the author"
                    width={105}
                    height={31}
                    priority
                  />
                </Link>
              </div>

              <div className="nav_block">
                <ul className="nav main_nav navbar_collapse collapse">
                  {links.map((link) => (
                    <li key={link.id} className="nav_item ">
                      <Link href={link.url} className="navColor">
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
                  className="btn btn_tattoo_art "
                  style={{ background: "#000", color: "#fff" }}
                >
                  For Tattoo Artists
                </button>



<LanguageSwitcher/>
                {/* <div class="switch-lang">
                  <div class="current-lang">
                    <p class="select-Lang">EN</p>
                    <Image
                      src={"/dropDown.svg"}
                      alt="langDropdown"
                      width={15}
                      priority
                      height={9}
                    />
                  </div>
                  <div class="lang-dropdown">
                    <div class="selecting-lang">
                      <p class="lang-text">EN</p>
                    </div>
                    <div class="selecting-lang">
                      <p class="lang-text">DE</p>
                    </div>
                    <div class="selecting-lang">
                      <p class="lang-text">FR</p>
                    </div>
                    <div class="selecting-lang">
                      <p class="lang-text">IT</p>
                    </div>
                    <div class="selecting-lang">
                      <p class="lang-text">ES</p>
                    </div>
                  </div>
                </div> */}

                <Image
                  onClick={() => onToggle(true)}
                  className="nav_btn_toggle"
                  src="/hamburger-menu.svg"
                  alt="Picture of the author"
                  width={32}
                  height={32}
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
