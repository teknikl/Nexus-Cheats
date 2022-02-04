import React from "react";
import "../App.css";

class Tab extends React.Component {
  render() {
    return <div className={"code-tab--" + this.props.colour}></div>;
  }
}

export default Tab;
