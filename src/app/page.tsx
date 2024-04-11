"use client";

import Head from "next/head";
import { useEffect } from "react";
import AboutMe from "@/components/AboutMe";
import Employment from "@/components/Employment";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import { TITLE } from "@/config";
import { ThemeProvider } from "@/contexts/ThemeProvider";

declare global {
  interface Window {
    dataLayer: any[]; // Define dataLayer as an array of any type
  }
}

export default function Home() {
  const GTM_ID = "G-59578BZHR4";

  const useGoogleTagManager = () => {
    useEffect(() => {
      const handleRouteChange = (url: string) => {
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
        window.addEventListener(
          "routeChangeComplete",
          handleRouteChange as any
        );

        return () => {
          // Remove route change listener
          window.removeEventListener(
            "routeChangeComplete",
            handleRouteChange as any
          );
        };
      }
    }, []);
  };

  useGoogleTagManager();

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
