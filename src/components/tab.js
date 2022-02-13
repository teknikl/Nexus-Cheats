import React from "react";
import "../App.css";

function Tab() {
  return <div className={"code-tab--" + this.props.colour}></div>;
}

export default Tab;
