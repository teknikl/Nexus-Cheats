import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import "../App.css";

class IMG extends React.Component {
  render() {
    return (
      <div className="WRAPPER">
        <BrowserView>
          <div
            className="img"
            style={{
              width: this.props.width,
              height: this.props.height,
              backgroundImage:
                "url(" +
                require(`../images/game_images/${this.props.game}/${this.props.img}.png`) +
                ")",
            }}
          ></div>
        </BrowserView>
        <MobileView>
          <div
            className="img"
            style={{
              width: "auto",
              height: this.props.height,
              transform: "scale(0.8)",
              backgroundPosition: "center",
              backgroundImage:
                "url(" +
                require(`../images/game_images/${this.props.game}/${this.props.img}.png`) +
                ")",
            }}
          ></div>
        </MobileView>
      </div>
    );
  }
}

export default IMG;
