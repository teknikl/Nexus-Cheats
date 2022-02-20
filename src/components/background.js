import React from "react";
import "../App.css";

function Bg({ img }) {
  return (
    <div
      className="bg"
      style={{
        backgroundImage:
          "url(" + require(`../images/page_images/bgs/${img}.png`) + ")",
      }}
    ></div>
  );
}

export default Bg;
