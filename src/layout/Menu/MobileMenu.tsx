import React, { useEffect, FC } from "react";
import classNames from "classnames";
import NavLink from "shared/NavLink/NavLink";

interface MenuItemProps {
  mobileView: boolean;
  link: string;
  text: string;
  sidebarToggle: (e: any) => {};
}

interface MobileMenuProps {
  sidebarToggle: (e: any) => {};
  mobileView: boolean;
}

interface MenuItem {
  text: string;
  link: string;
}

const menu: MenuItem[] = [
  {
    text: "Tableau de bord",
    link: "/",
  },
  {
    text: "Projects",
    link: "/list-projects",
  },

  {
    text: "Utilisateurs",
    link: "/list-users",
  },
  {
    text: "Organisations",
    link: "/list-organisations",
  },
];

const MenuItem: FC<MenuItemProps> = ({
  link,
  text,
  sidebarToggle,
  mobileView,
}) => {
  let currentUrl;

  if (window.location.pathname !== undefined) {
    currentUrl = window.location.pathname;
  } else {
    currentUrl = null;
  }

  const toggleActionSidebar = (e: any) => {
    if (mobileView) sidebarToggle(e);
  };

  const makeParentActive = (el: any) => {
    let element = el.parentElement.parentElement.parentElement;
    if (element.classList[0] === "nk-menu-item") {
      element.classList.add("active");
      makeParentActive(element);
    }
  };

  useEffect(() => {
    let element: any = document.getElementsByClassName(
      "nk-menu-item active current-page"
    );
    let arrayElement = [...element]; //--downlevelIteration

    arrayElement.forEach((dom) => {
      if (
        dom.parentElement.parentElement.parentElement.classList[0] ===
        "nk-menu-item"
      ) {
        dom.parentElement.parentElement.parentElement.classList.add("active");
        makeParentActive(dom.parentElement.parentElement.parentElement);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const menuItemClass = classNames({
    "nk-menu-item": true,
    "active current-page": currentUrl === link,
  });
  return (
    <li className={menuItemClass} onClick={(e) => toggleActionSidebar(e)}>
      <NavLink to={link} className={`nk-menu-link`}>
        <span className="nk-menu-text">{text}</span>
      </NavLink>
    </li>
  );
};

const MobileMenu: FC<MobileMenuProps> = ({ sidebarToggle, mobileView }) => {
  return (
    <ul className="nk-menu nk-menu-main ui-s2">
      {menu.map((item) => (
        <MenuItem
          key={item.text}
          link={item.link}
          text={item.text}
          sidebarToggle={sidebarToggle}
          mobileView={mobileView}
        />
      ))}
    </ul>
  );
};

export default MobileMenu;
