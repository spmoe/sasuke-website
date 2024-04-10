import Employment from "@/components/Employment";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import { TITLE } from "@/config";

const GTM_ID = "G-59578BZHR4";

const useGoogleTagManager = () => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Send pageview event to GTM
      window.dataLayer.push({
        event: "pageview",
        pagePath: url,
      });
    };

    if (typeof window !== "undefined") {
      // Load GTM script
      const gtmScript = document.createElement("script");
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      gtmScript.async = true;
      document.head.appendChild(gtmScript);

      // Initialize GTM data layer
      window.dataLayer = window.dataLayer || [];

      // Add route change listener
      window.addEventListener("routeChangeComplete", handleRouteChange);

      return () => {
        // Remove route change listener
        window.removeEventListener("routeChangeComplete", handleRouteChange);
      };
    }
  }, []);
};
export default function Home() {
  useGoogleTagManager();
  return (
    <div className="max-w-[1080px] mx-auto px-0 md:px-6">
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Header />
      <AboutMe />
      <Experience />
      <Employment />
      <Skills />
      <Footer />
    </div>
  );
}
