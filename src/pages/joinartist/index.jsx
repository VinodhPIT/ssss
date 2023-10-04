import React from "react";
import _Form from "@/components/artistForm/form";
import Header from '@/components/customHeader/header'
import useTranslation from "next-translate/useTranslation";




export default function JoinArtist() {


  const { t } = useTranslation();


  return (

<>

<Header logo={'/inckd-logo.svg'} theme={'black'} isPosition={true}  />



    <div className="page-wrapper">
      <section class="forms_section default_form_block artist_tattoo_form_block">
        <div class="container">
          <div class="full_block_wrap">
            <div class="form_block_left">
              <h1 class="page_title">
              {t("common:joinartistPage.title1")}
              </h1>
              <div class="form_left_wrap">
                <section class="progress_block">
                  <ul class="progressbar">
                    <li class="active">
                      <div className="progressbar_block">
                        <h4> {t("common:joinartistPage.head1")}</h4>
                        <p> {t("common:joinartistPage.text")}</p>
                      </div>
                    </li>
                    <li>
                      <div className="progressbar_block">
                        <h4> {t("common:joinartistPage.head2")}</h4>
                        <p> {t("common:joinartistPage.text")}</p>
                      </div>
                    </li>
                    <li>
                      <div className="progressbar_block">
                        <h4> {t("common:joinartistPage.head3")}</h4>
                        <p> {t("common:joinartistPage.text")}</p>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>

            <div class="form_block_right">
              <_Form />
            </div>
          </div>
        </div>
      </section>
    </div>
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