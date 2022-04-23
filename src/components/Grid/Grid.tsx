import React, { FC } from "react";
import classnames from "classnames";

interface GridProps {
  sm?: string;
  lg?: string;
  md?: string;
  xxl?: string;
  size?: string;
  className?: string;
  children?: any;
}

export const Col: FC<GridProps> = ({
  sm,
  lg,
  md,
  xxl,
  size,
  className,
  ...props
}) => {
  var classNames = classnames({
    [`col-sm-${sm}`]: sm,
    [`col-lg-${lg}`]: lg,
    [`col-md-${md}`]: md,
    [`col-xxl-${xxl}`]: xxl,
    [`col-${size}`]: size,
    [`${className}`]: className,
  });
  return <div className={classNames}>{props.children}</div>;
};
export const Row: FC<GridProps> = ({ className, ...props }) => {
  const rowClass = classnames({
    row: true,
    [`${className}`]: className,
  });
  return <div className={rowClass}>{props.children}</div>;
};
