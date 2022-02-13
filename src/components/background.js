import React from "react";
import "../App.css";

function Bg() {
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

export default Bg;
