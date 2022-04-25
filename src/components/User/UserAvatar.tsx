import React from "react";
import classNames from "classnames";
import Icon from "../../components/Icon/Icon";
import Image from "next/image";

const UserAvatar = ({
  className = "",
  size = "",
  theme = "",
  icon = "",
  text = "",
  image = "",
  imageAlt = "",
  ...props
}) => {
  const classes = classNames({
    "user-avatar": true,
    [`${className}`]: className,
    [`user-avatar-${size}`]: size,
    [`bg-${theme}`]: theme,
  });
  return (
    <div className={classes}>
      {icon ? <Icon name={icon} /> : null}
      {image && <img src={image} alt={imageAlt} />}
      {text && !image && <span>{text}</span>}
      {props.children}
    </div>
  );
};

export default UserAvatar;
