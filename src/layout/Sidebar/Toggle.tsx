import React, { FC } from "react";
import Icon from "../../components/Icon/Icon";

interface ToggleProps {
  className: string;
  icon: string;
  click: (ev: any) => {};
}
const Toggle: FC<ToggleProps> = ({ className, click, icon }) => {
  return (
    <a
      href="#toggle"
      className={className ? className : ""}
      onClick={(ev) => {
        ev.preventDefault();
        click(ev);
      }}
    >
      <Icon name={icon} />
    </a>
  );
};
export default Toggle;
