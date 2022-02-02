import React from "react";
import "../App.css";

class IMG extends React.Component {
  render() {
    return (
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
    );
  }
}

export default IMG;
