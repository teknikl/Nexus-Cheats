import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import "../App.css";

function IMG(props) {
  return (
    <div className="WRAPPER">
      <BrowserView>
        <div
          className="img"
          style={{
            width: props.width,
            height: props.height,
            backgroundImage:
              "url(" +
              require(`../images/game_images/${props.game}/${props.img}.png`) +
              ")",
          }}
        ></div>
      </BrowserView>
      <MobileView>
        <div
          className="img"
          style={{
            width: "auto",
            height: props.height,
            transform: "scale(0.8)",
            backgroundPosition: "center",
            backgroundImage:
              "url(" +
              require(`../images/game_images/${props.game}/${props.img}.png`) +
              ")",
          }}
        ></div>
      </MobileView>
    </div>
  );
}

export default IMG;
