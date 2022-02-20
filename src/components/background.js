import React from "react";
import "../App.css";

function Bg(props) {
  return (
    <div
      className="bg"
      style={{
        backgroundImage:
          "url(" + require(`../images/page_images/bgs/${props.img}.png`) + ")",
      }}
    ></div>
  );
}

export default Bg;
