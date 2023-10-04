import React, { useState } from "react";
import Header from "@/components/customHeader/header";

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
      label: t("common:tabs.general"),
      image: "/all.svg",
      activeImage: "/all-active.svg",
    },
    {
      id: "artist",
      label: t("common:tabs.artist"),
      image: "/colour-palette-new.svg",
      activeImage: "/colour-palette-active.svg",
    },

    {
      id: "tattoo",
      label: t("common:tabs.tattooLovers"),
      image: "/flame-new.svg",
      activeImage: "/Flame-active.svg",
    },
  ];

  const FAQ_GENERAL = [
    {
      id: 1,
      summary: t("common:faqScreen.title1"),
      details: t("common:faqScreen.content1"),
    },
    {
      id: 2,

      summary: t("common:faqScreen.title2"),
      details: t("common:faqScreen.content2"),
    },
    {
      id: 3,
      summary: t("common:faqScreen.title3"),
      details: t("common:faqScreen.content3"),
    },
    {
      id: 4,

      summary: t("common:faqScreen.title4"),
      details: t("common:faqScreen.content4"),
    },

    {
      id: 5,

      summary: t("common:faqScreen.title5"),
      details: t("common:faqScreen.content5"),
    },

    {
      id: 6,

      summary: t("common:faqScreen.title6"),
      details: t("common:faqScreen.content6"),
    },
  ];

  const FAQ_ARTISTS = [
    {
      id: 1,
      summary: t("common:faqScreen.title7"),
      details: t("common:faqScreen.content7")},


    {
      id: 2,
      summary: t("common:faqScreen.title8"),
      details: t("common:faqScreen.content8")},

    {
      id: 3,
      summary: t("common:faqScreen.title9"),
      details: t("common:faqScreen.content9")},



    {
      id: 4,
      summary: t("common:faqScreen.title10"),
      details: t("common:faqScreen.content10")},

    {
      id: 5,
       summary: t("common:faqScreen.title11"),
      details: t("common:faqScreen.content11")},
      
    {
      id: 6,
      summary: t("common:faqScreen.title12"),
      details: t("common:faqScreen.content12")}

  ];

  const FAQ_CUSTOMERS = [
    {
      id: 1,
      summary: t("common:faqScreen.title13"),
      details: t("common:faqScreen.content13")},

    {
      id: 2,
     summary: t("common:faqScreen.title14"),
      details: t("common:faqScreen.content14")},

    {
      id: 3,
      summary: t("common:faqScreen.title15"),
      details: t("common:faqScreen.content15")},
      
    {
      id: 4,
      summary: t("common:faqScreen.title16"),
      details: t("common:faqScreen.content16")},

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
        locale: context.locale,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
