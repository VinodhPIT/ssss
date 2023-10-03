import React from 'react'
import _Form from '@/components/form/form'

import Header from '@/components/customHeader/header'
import useTranslation from "next-translate/useTranslation";






export default function Contact() {

  const { t } = useTranslation();

  return (  
<>
<Header logo={'/inckd-logo.svg'} theme={'black'} isPosition={true}/>


<main>


    <div className="page-wrapper">
      <section class="forms_section default_form_block contact_form_block">
        <div class="container">
          <div class="full_block_wrap">
            <div class="form_block_left">
              <h1 class="page_title">{t("common:contactUsPage.contact-us")}</h1>
              <p>{t("common:contactUsPage.getInTouch")}</p>
             					
            </div>
            <div class="form_block_right">

              
                  <_Form/>
            
              
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
    </>
  )
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
