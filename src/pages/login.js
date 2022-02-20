import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "@firebase/auth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useHistory } from "react-router-dom";
import { AuthContext, auth } from "../auth/auth.js";
import Bg from "../components/background.js";
import Footer from "../components/footer.js";
import { BrowserView, MobileView } from "react-device-detect";
import "../App.css";

function App() {
  // All states

  const [bg, setBg] = React.useState(`bg${Math.floor(Math.random() * 2) + 1}`);

  const [passVis, setPassVis] = React.useState("");

  const [email, setEmail] = React.useState("");

  const [pass, setPass] = React.useState("");

  const [formErrVis, setFormErrVis] = React.useState("");

  const [formerr, setFormerr] = React.useState("");

  // Calls when page first renders
  useEffect(() => {
    document.title = "Nexus // Log In";
    setPassVis("password");
    setFormErrVis("main-form--error---invis");
    setBg(`bg${Math.floor(Math.random() * 2) + 1}`);
  }, []);

  const updateVis = () => {
    if (passVis === "password") {
      setPassVis("text");
    } else {
      setPassVis("password");
    }
  };

  // Updates
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePass = (e) => {
    setPass(e.target.value);
  };

  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const SignIn = () => {
    signInWithEmailAndPassword(auth, email, pass, user)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        setFormErrVis("main-form--error");
        setFormerr(err);
      });
  };

  const sendPassReset = () => {
    sendPasswordResetEmail(auth, email);
  };

  const arrow = ">";

  return (
    <React.Fragment>
      <Bg img={bg}></Bg>
      <div className="nav-button--notselected">
        <Link to="/">Home</Link>
      </div>
      {arrow}
      <div className="nav-button--selected">
        <Link to="/Log-In">Log In</Link>
      </div>
      <div className="form-heading">Log In</div>
      <BrowserView>
        <div className="form-heading--desc">
          Log In to an existing account on nexus-cheats.com
        </div>
      </BrowserView>
      <MobileView>
        <div className="form-heading--desc" style={{ fontSize: "19px" }}>
          Log In to an existing account on nexus-cheats.com
        </div>
      </MobileView>
      <BrowserView>
        <div className="form-input--wrapper---a">
          <BrowserView></BrowserView>
          <input
            style={{
              textTransform: "none",
              marginLeft: "0px",
              width: "350px",
            }}
            placeholder="Email"
            onChange={updateEmail}
          ></input>
        </div>
        <div className="form-input--wrapper---b">
          <input
            style={{
              textTransform: "none",
              marginLeft: "0px",
              width: "350px",
            }}
            type={passVis}
            placeholder="Password"
            onChange={updatePass}
          ></input>
          <div onClick={updateVis} className="password-vis--button">
            {passVis === "password" ? (
              <VisibilityIcon></VisibilityIcon>
            ) : (
              <VisibilityOffIcon></VisibilityOffIcon>
            )}
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="form-input--wrapper---a">
          <BrowserView></BrowserView>
          <input
            style={{
              textTransform: "none",
              marginLeft: "0px",
              width: "260px",
            }}
            placeholder="Email"
            onChange={updateEmail}
          ></input>
        </div>
        <div className="form-input--wrapper---b">
          <input
            style={{
              textTransform: "none",
              marginLeft: "0px",
              width: "260px",
            }}
            type={passVis}
            placeholder="Password"
            onChange={updatePass}
          ></input>
          <div onClick={updateVis} className="password-vis--button">
            {passVis === "password" ? (
              <VisibilityIcon></VisibilityIcon>
            ) : (
              <VisibilityOffIcon></VisibilityOffIcon>
            )}
          </div>
        </div>
      </MobileView>
      <div className="log-in--pass--wrapper">
        <div className="log-in--pass">Forgot your password?</div>
        <Link to="/Log-In/Reset">
          <div className="log-in--pass---link" onClick={sendPassReset}>
            Send an email
          </div>
        </Link>
      </div>
      <div className={formErrVis}>{formerr.toString()}</div>
      <div className="form-confirm--button" onClick={SignIn}>
        Log In
      </div>
      <div className="form-other--wrapper">
        <div className="form-other--text">Don't have an account?</div>
        <Link to="/Sign-Up">
          <div className="form-other--link">Register</div>
        </Link>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
