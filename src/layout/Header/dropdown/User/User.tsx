import React, { useState } from "react";
import UserAvatar from "components/User/UserAvatar";
import { DropdownToggle, DropdownMenu, Dropdown } from "reactstrap";
import Icon from "components/Icon/Icon";
import { LinkList, LinkItem } from "components/Links/Links";
import Link from "next/link";

const User = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prevState) => !prevState);

  const handleSignout = () => {};

  return (
    <Dropdown isOpen={open} className="user-dropdown" toggle={toggle}>
      <DropdownToggle
        tag="a"
        href="#toggle"
        className="dropdown-toggle"
        onClick={(ev) => {
          ev.preventDefault();
        }}
      >
        <div className="user-toggle">
          <UserAvatar icon="user-alt" className="sm" />
        </div>
      </DropdownToggle>
      <DropdownMenu right className="dropdown-menu-md dropdown-menu-s1">
        <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
          <div className="user-card sm">
            <div className="user-avatar">
              <span>SK</span>
            </div>
            <div className="user-info">
              <span className="lead-text">Serge KOKOUA</span>
              <span className="sub-text">kokouaserge3@gmail.com</span>
            </div>
            <div className="user-action" onClick={() => setOpen(false)}>
              <Link href="#">
                <a className="btn btn-icon mr-n2">
                  <Icon name="setting"></Icon>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="dropdown-inner user-account-info">
          <h6 className="overline-title-alt">Mon compte</h6>
          <div className="user-balance">
            3 <small>Projects</small>
          </div>
          <div className="user-balance-sub">
            Compte : <span>Super admin</span>
          </div>
        </div>
        <div className="dropdown-inner">
          <LinkList>
            <LinkItem link={"#"} icon="user-alt" onClick={toggle}>
              Profil
            </LinkItem>
            <LinkItem link={"#"} icon="setting-alt" onClick={toggle}>
              Paramètres de compte
            </LinkItem>
          </LinkList>
        </div>
        <div className="dropdown-inner">
          <LinkList>
            <a href="#" onClick={(ev) => ev.preventDefault()}>
              <Icon name="signout"></Icon>
              <span>Se deconnecter</span>
            </a>
          </LinkList>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default User;
