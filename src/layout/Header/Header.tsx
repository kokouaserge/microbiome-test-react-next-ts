import React, { FC, useState, useEffect } from "react";
import classNames from "classnames";
import Toggle from "layout/Sidebar/Toggle";
import Logo from "layout/Logo/Logo";
import Menu from "layout/Menu/Menu";
import User from "layout/Header/dropdown/User/User";
import MobileMenu from "layout/Menu/MobileMenu";
import Icon from "components/Icon/Icon";
import Button from "components/Button/Button";

interface HeaderProps {
  fixed: boolean;
  theme: any;
  visibility: boolean;
  toggleSidebar: () => {};
  mobileView: boolean;
  className?: string;
  setThemeState: any;
}

const Header: FC<HeaderProps> = ({
  fixed,
  theme,
  visibility,
  toggleSidebar,
  mobileView,
  className,
  setThemeState,
}) => {
  /*  const [darkMode, setDarkMode] = useState(theme.skin);

  useEffect(() => {
    setDarkMode(theme.skin);
  }, [theme]); */
  const headerClass = classNames({
    "nk-header is-regular": true,
    "nk-header-fixed": fixed,
    [`is-light`]: theme.header === "white",
    [`is-${theme}`]: theme.header !== "white" && theme.header !== "light",
    [`${className}`]: className,
  });

  return (
    <div className={headerClass}>
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger mr-sm-2 d-lg-none">
            <Toggle
              className="nk-nav-toggle nk-quick-nav-icon"
              icon="menu"
              click={toggleSidebar}
            />
          </div>
          <div className="nk-header-brand">
            <Logo />
          </div>
          <div
            className={`nk-header-menu ml-auto ${
              mobileView ? "mobile-menu" : ""
            }  ${visibility ? "nk-header-active" : ""}`}
          >
            <div className="nk-header-mobile">
              <div className="nk-header-brand">
                <Logo />
              </div>
              <div className="nk-menu-trigger mr-n2">
                <Toggle
                  className="nk-nav-toggle nk-quick-nav-icon"
                  icon="arrow-left"
                  click={toggleSidebar}
                />
              </div>
            </div>
            {mobileView ? (
              <MobileMenu
                sidebarToggle={toggleSidebar}
                mobileView={mobileView}
              />
            ) : (
              <Menu />
            )}
          </div>
          {visibility && (
            <div className="nk-header-overlay" onClick={toggleSidebar}></div>
          )}
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="">
                <div
                  className="icon-status icon-status-na"
                  style={{ cursor: "pointer" }}
                  onClick={() => setThemeState()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon-lg"
                  >
                    {theme.skin !== "light" ? (
                      <>
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line
                          x1="18.36"
                          y1="18.36"
                          x2="19.78"
                          y2="19.78"
                        ></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                      </>
                    ) : (
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    )}
                  </svg>
                </div>
              </li>
              <li className="user-dropdown">
                <User />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
