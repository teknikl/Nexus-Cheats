import React, { useEffect } from "react";
import { AuthContext } from "../../auth/auth.js";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Bg from "../../components/background.js";
import { BrowserView, MobileView } from "react-device-detect";
import "../../App.css";

function App() {
  const data = {
    name: "Gmod",
    link: "Gmod",
    src: "GMOD.png",
    desc: "Garry's Mod is a physics-based sandbox game that, in its base game mode, has no set objectives.",
    bg: "bg2",
  };

  // Calls when page first renders
  useEffect(() => {
    document.title = "Nexus // Gmod"; // MANUAL CHANGE
  }, []);

  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const userRedirect = () => {
    history.push("/Account");
  };

  const arrow = ">";

  return (
    <body>
      <Bg img={data.bg}></Bg>
      <div className="nav-button--notselected">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-button--notselected">
        <Link to="/Browse">Browse</Link>
      </div>
      <div className="nav-button--arrow">{arrow}</div>
      <div className="nav-button--selected">
        <Link to={`${data.link}`}>{data.name}</Link>
      </div>
      <div className="buttons--wrapper">
        <BrowserView>
          <div className="account-icon--wrapper">
            {user === null ? (
              ""
            ) : (
              <AccountCircleIcon
                onClick={userRedirect}
                sx={{ fontSize: "40px", zIndex: "1" }}
              ></AccountCircleIcon>
            )}
          </div>
        </BrowserView>
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
      </div>
      <BrowserView>
        <div className="game--name">{data.name}</div>
      </BrowserView>
      <MobileView>
        <div className="game--name" style={{ marginTop: "100px" }}>
          {data.name}
        </div>
      </MobileView>
      <div className="game--desc">{data.desc}</div>
    </body>
  );
}

export default App;
