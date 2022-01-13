import React from "react";
import "../App.css";

class Bg extends React.Component {
  render() {
    return (
      <div
        className="bg"
        style={{
          backgroundImage:
            "url(" +
            require(`../images/page_images/bgs/${this.props.img}.png`) +
            ")",
        }}
      ></div>
    );
  }
}

export default Bg;
