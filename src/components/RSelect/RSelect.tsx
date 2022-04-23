import React from "react";
import Select from "react-select";

const RSelect = ({ ...props }: any) => {
  return (
    <div className="form-control-select">
      <Select
        className={`react-select-container ${
          props.className ? props.className : ""
        }`}
        classNamePrefix="react-select"
        {...props}
      />
    </div>
  );
};

export default RSelect;
