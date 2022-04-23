import React from "react";
import Header from "next/head";

const Head = ({ ...props }) => {
  return (
    <Header>
      <title>
        {props.title ? props.title + " | " : null} Microbiome Gestion
      </title>
    </Header>
  );
};
export default Head;
