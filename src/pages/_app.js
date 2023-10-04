
import { useRouter } from "next/router";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { GlobalStateProvider } from "@/context/Context";
import { Figtree } from "next/font/google";
import UseLayout from "@/hooks/useLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/customStyles.css";

const figtree = Figtree({
  style: ["normal"],
  weight: ["400", "700", "900", "600"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const shouldHideHeader = () => {
    const hideHeaderRoutes = [
      "/search",
      "/",
      "/tattoo/[detail]",
      "/flash/[detail]",
      "/artist/[detail]",
      "/contactus",
      "/joinartist",
      "/all/[detail]",
      "/404",
      "/faq",
      "/dictionary",
    ];

    return hideHeaderRoutes.includes(router.pathname);
  };

  return (
    <GlobalStateProvider>
      <div className={figtree.className}>
        {!shouldHideHeader() && <Header />}


          <UseLayout pathname={router.pathname}>
            <Component {...pageProps} />
          </UseLayout>
      

        <Footer />
      </div>
    </GlobalStateProvider>
  );
}

export default MyApp;
