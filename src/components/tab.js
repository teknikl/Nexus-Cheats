import React from "react";
import "../App.css";

function Tab(props) {
  return <div className={"code-tab--" + props.colour}></div>;
}

export default Tab;
