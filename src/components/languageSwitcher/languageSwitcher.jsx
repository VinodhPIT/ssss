import React, { useState, useEffect } from "react";
import Image from "next/image";
 import setLanguage from "next-translate/setLanguage";
 import Cookies from "js-cookie";
 import { useGlobalState } from "@/context/Context";


 

export default function LanguageSwitcher({theme}) {

  const { state} = useGlobalState();



    const [langList, setLangList] = useState([
        { name: "EN", value: "en" },
        { name: "DE", value: "de" },
        { name: "FR", value: "fr" },
        { name: "IT", value: "it" },
        { name: "ES", value: "es" },
      ]);
    
      const [pageLang, setPageLang] = useState(
       Cookies.get("inckd_language") || "en"
      );

     

      useEffect(() => {
        if (pageLang) {
          const fetchLang = async () => {
            const data = await setLanguage(pageLang);
            return data;
          };
          fetchLang();
        }
      }, [pageLang]);
    
      const languageHandler = async (lang) => {
         Cookies.set("inckd_language", lang);
        setPageLang(lang);
      };
    
    


      


  return (
    <div class="switch-lang">
      <div class= {  theme=== "white" ? 'wh-current-lang' : 'current-lang'}>
        <p class= {  theme=== "white" ?   'wh-select-lang' :  "select-Lang"}>{pageLang}</p>
        <Image
          src={ theme!== "white" ? "/dropDown.svg" : '/down-arrow.png'}
          alt="langDropdown"
          width={15}
          priority
          height={15}
        />
      </div>
      <div class= {  theme=== "white" ?  'wh-lang-dropdown':'lang-dropdown'} >
        {langList.map((lang, index) => (
          <div
            class="selecting-lang"
            key={index}
             onClick={() => languageHandler(lang?.value)}
          >
            <p class="lang-text">{lang?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
