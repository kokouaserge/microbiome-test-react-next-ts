import React, { FC } from "react";
import Icon from "components/Icon/Icon";
import classNames from "classnames";
import Link from "next/link";

interface BlockProps {
  className?: string;
  size?: string;
  wide?: string;
  page?: any;
  link?: string;
  icon?: string;
  onClick?: (e: any) => {};
  children?: any;
  tag?: any;
}

export const Block: FC<BlockProps> = ({ className, size, ...props }) => {
  const blockClass = classNames({
    "nk-block": true,
    [`nk-block-${size}`]: size,
    [`${className}`]: className,
  });
  return <div className={blockClass}>{props.children}</div>;
};
export const BlockContent: FC<BlockProps> = ({ className, ...props }) => {
  const blockContentClass = classNames({
    "nk-block-content": true,
    [`${className}`]: className,
  });
  return <div className={blockContentClass}>{props.children}</div>;
};

export const BlockBetween: FC<BlockProps> = ({ className, size, ...props }) => {
  return (
    <div
      className={`${size ? `nk-block-between-${size}` : "nk-block-between"} ${
        className ? className : ""
      }`}
    >
      {props.children}
    </div>
  );
};
export const BlockHead: FC<BlockProps> = ({
  className,
  size,
  wide,
  ...props
}) => {
  const blockHeadClass = classNames({
    "nk-block-head": true,
    [`nk-block-head-${size}`]: size,
    [`wide-${wide}`]: wide,
    [`${className}`]: className,
  });
  return <div className={blockHeadClass}>{props.children}</div>;
};
export const BlockHeadContent: FC<BlockProps> = ({ className, ...props }) => {
  return (
    <div
      className={`[nk-block-head-content${className ? " " + className : ""}]`}
    >
      {props.children}
    </div>
  );
};
export const BlockTitle: FC<BlockProps> = ({ className, page, ...props }) => {
  const classes = `[nk-block-title ${page ? "page-title" : "title"}${
    className ? " " + className : ""
  }]`;
  return (
    <>
      {!props.tag ? (
        <h3 className={classes}>{props.children}</h3>
      ) : (
        <props.tag className={classes}>{props.children}</props.tag>
      )}
    </>
  );
};
export const BlockDes: FC<BlockProps> = ({ className, page, ...props }) => {
  const classes = `[nk-block-des${className ? " " + className : ""}]`;
  return <div className={classes}>{props.children}</div>;
};

export const BlockHeadSub: FC<BlockProps> = ({ className, ...props }) => {
  return (
    <div className={`nk-block-head-sub ${className ? className : ""}`}>
      <span>{props.children}</span>
    </div>
  );
};

export const BlockImage: FC<BlockProps> = ({ className, ...props }) => {
  return (
    <div className={`nk-block-image ${className ? className : ""}`}>
      {props.children}
    </div>
  );
};

export const BackTo: FC<BlockProps> = ({
  className,
  link = "/",
  icon,
  onClick,
  ...props
}) => {
  const classes = `[back-to${className ? " " + className : ""}]`;
  return (
    <div className="nk-block-head-sub" onClick={onClick}>
      <Link href={link}>
        <a className={classes}>
          <Icon name={icon} />
          <span>{props.children}</span>
        </a>
      </Link>
    </div>
  );
};
