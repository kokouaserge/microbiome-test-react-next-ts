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
                  {/*   <Button color="primary" onClick={() => setThemeState()}> */}
                  <Icon
                    name={theme.skin === "light" ? "moon-fill" : "moon"}
                  ></Icon>
                  {/* </Button> */}
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
