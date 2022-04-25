import React from "react";
import Icon from "../../components/Icon/Icon";
import classNames from "classnames";
import Link from "next/link";

export const LinkItem = ({ ...props }) => {
  return (
    <li>
      {props.tag !== "a" ? (
        <Link href={props.link}>
          <a {...props}>
            {props.icon ? <Icon name={props.icon} /> : null}{" "}
            <span>{props.text || props.children}</span>
          </a>
        </Link>
      ) : (
        <a href={props.link} onClick={(ev) => ev.preventDefault()}>
          {props.icon ? <Icon name={props.icon} /> : null}{" "}
          <span>{props.text || props.children}</span>
        </a>
      )}
    </li>
  );
};

export const LinkList = ({ ...props }) => {
  const listClasses = classNames({
    "link-list": !props.opt,
    "link-list-opt": props.opt,
    [`${props.className}`]: props.className,
  });
  return <ul className={listClasses}>{props.children}</ul>;
};
