import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/auth.js";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BrowserView, MobileView } from "react-device-detect";
import Footer from "../components/footer.js";
import Bg from "../components/background.js";
import "../App.css";

function App() {
  const num = Math.floor(Math.random() * 2) + 1;

  // All states
  const [bg] = React.useState(`bg${num}`);
  const [addonAnim] = React.useState(`heading--addon---${num}`);

  // Calls when page first renders
  useEffect(() => {
    document.title = "Nexus / Home";
  }, []);

  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const userRedirect = () => {
    history.push("/Account");
  };

  const arrow = ">";

  return (
    <React.Fragment>
      <Bg img={bg}></Bg>
      <div className="nav-button--selected">
        <Link to="/">Home</Link>
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
      </div>
      <div className="heading-desc">
        An index of commands, tips 'n' tricks and optimizations for any game.
      </div>
      <div className="browse-link">
        <Link to={bg === "bg1" ? "/CSGO" : "/Gmod"}>
          Checkout {bg === "bg1" ? "CS:GO" : "Gmod"} {arrow}
        </Link>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
