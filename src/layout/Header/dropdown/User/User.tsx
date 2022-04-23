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
              <span>AB</span>
            </div>
            <div className="user-info">
              <span className="lead-text">Abu Bin Ishtiyak</span>
              <span className="sub-text">info@softnio.com</span>
            </div>
            <div className="user-action" onClick={() => setOpen(false)}>
              <Link href={`/user-profile-setting`}>
                <a className="btn btn-icon mr-n2">
                  <Icon name="setting"></Icon>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="dropdown-inner user-account-info">
          <h6 className="overline-title-alt">Account Balance</h6>
          <div className="user-balance">
            1,494.23 <small className="currency currency-usd">USD</small>
          </div>
          <div className="user-balance-sub">
            Locked{" "}
            <span>
              15,495.39 <span className="currency currency-usd">USD</span>
            </span>
          </div>
          <a
            href="#checkout"
            onClick={(ev) => ev.preventDefault()}
            className="link"
          >
            <span>Withdraw Balance</span> <Icon name="wallet-out"></Icon>
          </a>
        </div>
        <div className="dropdown-inner">
          <LinkList>
            <LinkItem
              link={"/user-profile-regular"}
              icon="user-alt"
              onClick={toggle}
            >
              View Profile
            </LinkItem>
            <LinkItem
              link={"/user-profile-setting"}
              icon="setting-alt"
              onClick={toggle}
            >
              Account Setting
            </LinkItem>
            <LinkItem
              link={"/user-profile-activity"}
              icon="activity-alt"
              onClick={toggle}
            >
              Login Activity
            </LinkItem>
          </LinkList>
        </div>
        <div className="dropdown-inner">
          <LinkList>
            <a
              href={`${process.env.PUBLIC_URL}/auth-login`}
              onClick={handleSignout}
            >
              <Icon name="signout"></Icon>
              <span>Sign Out</span>
            </a>
          </LinkList>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default User;
