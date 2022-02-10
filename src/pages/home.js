import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/auth.js";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BrowserView, MobileView } from "react-device-detect";
import Bg from "../components/background.js";
import "../App.css";

function App() {
  const num = Math.floor(Math.random() * 2) + 1;

  // All states
  const [bg, setBg] = React.useState(`bg${num}`);
  const [addonAnim, setAddonAnim] = React.useState(`heading--addon---${num}`);

  // Calls when page first renders
  useEffect(() => {
    document.title = "Nexus / Home";
  }, []);

  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const userRedirect = () => {
    history.push("/Account");
  };

  const nextBg = () => {
    if (bg === "bg1") {
      setBg("bg2");
      setAddonAnim("heading--addon---2");
    } else {
      setBg("bg1");
      setAddonAnim("heading--addon---1");
    }
  };

  const arrow = ">";

  return (
    <React.Fragment>
      <Bg img={bg}></Bg>
      <div className="nav-button--selected">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-button--notselected">
        <Link to="/Browse">Browse</Link>
      </div>
      <div className="buttons--wrapper">
        <div className="account-icon--wrapper">
          {user === null ? (
            ""
          ) : (
            <AccountCircleIcon
              onClick={userRedirect}
              sx={{ fontSize: "40px" }}
            ></AccountCircleIcon>
          )}
        </div>
        <BrowserView>
          <Link to="/Log-In">
            <div
              className={
                user === null ? "log-in--button" : "log-in--button---invis"
              }
            >
              Log In
            </div>
          </Link>
          <Link to="/Sign-Up">
            <div
              className={
                user === null ? "sign-up--button" : "sign-up--button---invis"
              }
            >
              Sign Up
            </div>
          </Link>
        </BrowserView>
        <MobileView>
          <Link to="/Log-In">
            <div
              className={
                user === null ? "log-in--button" : "log-in--button---invis"
              }
            >
              Log In
            </div>
          </Link>
        </MobileView>
      </div>
      <div className="heading--wrapper">
        <BrowserView>
          <div className="heading">Nexus</div>
        </BrowserView>
        <MobileView>
          <div className="heading" style={{ fontSize: "75px" }}>
            Nexus
          </div>
        </MobileView>
        <BrowserView>
          <div className={addonAnim}>
            x{" "}
            {bg === "bg1" ? "Counter Strike : Global Offensive" : "Garry's Mod"}
          </div>
        </BrowserView>
        <MobileView>
          <div className={addonAnim} style={{ fontSize: "16px" }}>
            x{" "}
            {bg === "bg1" ? "Counter Strike : Global Offensive" : "Garry's Mod"}
          </div>
        </MobileView>
        <div className="next--arrow---wrapper">
          <div onClick={nextBg} className="next--arrow">
            <ArrowForwardIosIcon
              sx={{ fontSize: "75px" }}
            ></ArrowForwardIosIcon>
          </div>
        </div>
      </div>
      <div className="heading-desc">
        An index of commands, tips 'n' tricks and optimizations for any game.
      </div>
      <div className="browse-link">
        <Link to="/Browse">Start browsing supported titles {arrow}</Link>
      </div>
      <BrowserView>
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
      <MobileView>
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
    </React.Fragment>
  );
}

export default App;
