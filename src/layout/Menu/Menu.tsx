import React, { FC, useState, useEffect } from "react";
import Link from "next/link";

interface MenuItem {
  text: string;
  link: string;
}
interface MenuItemProps {
  item: MenuItem;
  headActive?: boolean;
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

const MenuItem: FC<MenuItemProps> = ({ item, headActive }) => {
  const { text, link } = item;
  let locationPath = "";

  if (typeof window !== "undefined") {
    locationPath = window.location.pathname;
  }

  return (
    <li
      className={`nk-menu-item  ${
        link === locationPath ? "active current-page" : ""
      } ${headActive ? "active current-page" : ""}`}
    >
      <Link href={link}>
        <a className="nk-menu-link">
          <span className="nk-menu-text">{text}</span>
        </a>
      </Link>
    </li>
  );
};

const Menu = () => {
  const [head, setHead] = useState("Dashboards");
  let locationPath = "";

  if (typeof window !== "undefined") {
    locationPath = window.location.pathname;
  }

  useEffect(() => {
    const ActiveHead = menu.find((item: any) => item.link == locationPath);
    if (ActiveHead) {
      setHead(ActiveHead.text);
    }
  }, [locationPath]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ul className="nk-menu nk-menu-main ui-s2">
      {menu.map((item, index) => {
        if (item.text === head) {
          return <MenuItem key={index} item={item} headActive={true} />;
        } else return <MenuItem key={index} item={item} />;
      })}
    </ul>
  );
};

export default Menu;
