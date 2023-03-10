import React from "react";

const Helmet = (props) => {
  document.title = "Kenya diffensive driving ";
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
