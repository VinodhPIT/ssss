import React, { useState } from "react";
import Header from "@/components/customHeader/header";
import { FAQ_ARTISTS, FAQ_GENERAL, FAQ_CUSTOMERS } from "@/constants/faq";
import useTranslation from "next-translate/useTranslation";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Search from "@/components/tattooSearch/tattooSearch";
import style from "@/pages/search/search.module.css";
export default function FAQ() {
  const [state, setState] = useState("general");

  const changeTab = (id) => {
    setState(id);
  };

  const { t } = useTranslation();

  const faqTab = [
    {
      id: "general",
      label:t("common:tabs.general"),
      image: "/all.svg",
      activeImage: "/all-active.svg",
    },
    { id: "artist",label:t("common:tabs.artist"),image :'/colour-palette-new.svg'  ,activeImage:'/colour-palette-active.svg'} ,

    {
      id: "tattoo",
      label: t("common:tabs.tattooLovers"),
      image: "/flame-new.svg",
      activeImage: "/Flame-active.svg",
    },
  ];





  

  return (
    <>
      <Header
        logo={"/Inckd-logo-footer-black.svg"}
        theme={"white"}
        isPosition={false}
      />

      <main>
        <div className="faq_search_wrap">
          <div className="container">
            <Search currentTab={"all"} />
          </div>
        </div>

        <div className="faq_wrap">
          <div className="container">
            <h1>{t("common:faqScreen.head1")}</h1>
          </div>
          <div className="faq_tab_wrap">
            <div className="container">
              <div className="tabSection">
                <ul>
                  {faqTab.map((tab) => (
                    <li
                      key={tab.id}
                      className={state === tab.id ? "activeTab" : "inActivetab"}
                      onClick={() => changeTab(tab.id)}
                    >
                      <div className={style.tabBox}>
                        <img
                          src={state === tab.id ? tab.activeImage : tab.image}
                        />
                        <p style={{ margin: "0" }}>{tab.label}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="faq_accordion_wrap">
            <div className="container">
              {state === "general" ? (
                <Accordion>
                  {FAQ_GENERAL.map((e) => {
                    return (
                      <>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              {e.summary}
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>{e.details}</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </>
                    );
                  })}
                </Accordion>
              ) : state == "artist" ? (
                <Accordion>
                  {FAQ_ARTISTS.map((e) => {
                    return (
                      <>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              {e.summary}
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>{e.details}</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </>
                    );
                  })}
                </Accordion>
              ) : (
                <Accordion>
                  {FAQ_CUSTOMERS.map((e) => {
                    return (
                      <>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              {e.summary}
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>{e.details}</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </>
                    );
                  })}
                </Accordion>
              )}
            </div>
          </div>
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
