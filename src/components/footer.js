import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import Tooltip from "@mui/material/Tooltip";
import { BrowserView, MobileView } from "react-device-detect";
import "../App.css";

function Footer() {
  const [tooltip, setTooltip] = React.useState("Share");

  const share = () => {
    navigator.clipboard.writeText("https://nexus-cheats.com/");
    setTooltip("Copied!");
    setTimeout(() => setTooltip("Share"), 1000);
  };

  return (
    <div className="footer">
      <Tooltip title={tooltip}>
        <ShareIcon
          onClick={share}
          style={{
            display: "inline-block",
            fontSize: "30px",
            cursor: "pointer",
          }}
        ></ShareIcon>
      </Tooltip>
      <BrowserView style={{ display: "inline-block" }}>
        <div className="source">
          Running nexus-cheats.com for desktop.
          <br />
          This page is open source. Check it out
          <a href="https://github.com/ArchieMourad/Nexus">
            <div className="source--link">here</div>
          </a>
          .
        </div>
      </BrowserView>
      <MobileView style={{ display: "inline-block" }}>
        <div className="source">
          Running nexus-cheats.com for mobile.
          <br />
          This page is open source. Check it out
          <a href="https://github.com/ArchieMourad/Nexus">
            <div className="source--link">here</div>
          </a>
          .
        </div>
      </MobileView>
    </div>
  );
}

export default Footer;
