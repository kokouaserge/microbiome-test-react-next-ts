import React, { useState, FC } from "react";
import { Card } from "reactstrap";

interface PreviewProps {
  className?: string;
  bodyClass?: string;
  size?: string;
  children?: any;
}

export const PreviewCard: FC<PreviewProps> = ({
  className,
  bodyClass,
  ...props
}) => {
  return (
    <Card className={`card-preview ${className ? className : ""}`}>
      <div className={`card-inner ${bodyClass ? bodyClass : ""}`}>
        {props.children}
      </div>
    </Card>
  );
};

export const PreviewAltCard: FC<PreviewProps> = ({
  className,
  bodyClass,
  ...props
}) => {
  return (
    <Card className={`card-bordered ${className ? className : ""}`}>
      <div className={`card-inner ${bodyClass ? bodyClass : ""}`}>
        {props.children}
      </div>
    </Card>
  );
};

export const PreviewTable: FC<PreviewProps> = ({ className, ...props }) => {
  return (
    <Card className={`card-preview ${className ? className : ""}`}>
      <table
        className={`table preview-reference ${
          props.size ? `table-${props.size}` : ""
        }`}
      >
        {props.children}
      </table>
    </Card>
  );
};
