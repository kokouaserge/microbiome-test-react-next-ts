import type { AppProps } from "next/app";
import "../src/assets/scss/custom_framework.scss";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState, useLayoutEffect } from "react";
import Head from "layout/Head/Head";
import Header from "layout/Header/Header";
import Footer from "layout/Footer/Footer";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";

React.useLayoutEffect = React.useEffect;

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  //Sidebar
  const [visibility, setVisibility] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [themeState, setThemeState] = useState({
    main: "ui-shady", //default
    header: "theme", //white
    skin: "light",
  });

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      toDark();
    } else {
      toLight();
    }
    viewChange();
  }, []);

  const toDark = () => {
    setThemeState((item: any) => {
      return {
        skin: "dark",
        header: item.header,
        main: item.main,
      };
    });
    const root = document.querySelector("html");
    if (!root) return;
    !root.classList.contains("dark") && root.classList.add("dark");
    localStorage.theme = "dark";
  };

  const toLight = () => {
    setThemeState((item: any) => {
      return {
        skin: "light",
        header: item.header,
        main: item.main,
      };
    });
    const root = document.querySelector("html");
    if (!root) return;
    root.classList.remove("dark");
    localStorage.theme = "light";
  };

  const changeMode = () => {
    if (localStorage.theme === "light") {
      toDark();
    } else {
      toLight();
    }
  };

  // Stops scrolling on overlay
  useLayoutEffect(() => {
    if (visibility) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
    if (!visibility) {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [visibility]);

  //Adds classes to body
  useEffect(() => {
    document.body.className = `nk-body bg-lighter npc-invest has-touch nk-nio-theme ${
      themeState.skin === "dark" ? "dark-mode" : ""
    }`;
  }, [themeState, visibility]);

  // function to toggle sidebar
  const toggleSidebar: any = (e: any) => {
    e.preventDefault();
    if (visibility === false) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  // function to change the design view under 1200 px
  const viewChange = () => {
    if (window.innerWidth < 992) {
      setMobileView(true);
    } else {
      setMobileView(false);
      setVisibility(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("load", viewChange);
    window.addEventListener("resize", viewChange);
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head title="Loading" />
          <div className="nk-app-root">
            <div className="nk-wrap">
              <Header
                visibility={visibility}
                toggleSidebar={toggleSidebar}
                mobileView={mobileView}
                theme={themeState}
                fixed={true}
                setThemeState={changeMode}
              />
              <Component {...pageProps} />
              <Footer />
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
