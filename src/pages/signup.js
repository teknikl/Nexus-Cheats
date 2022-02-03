import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useHistory } from "react-router-dom";
import { AuthContext, auth } from "../auth/auth.js";
import Bg from "../components/background.js";
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
    document.title = "Nexus // Sign Up";
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
  const { updateUser } = React.useContext(AuthContext);
  const { user } = React.useContext(AuthContext);

  const Register = () => {
    createUserWithEmailAndPassword(auth, email, pass, user)
      .then(() => {
        history.push("/");
        window.location.reload();
        updateUser(user);
      })
      .catch((err) => {
        setFormErrVis("main-form--error");
        setFormerr(err);
      });
  };

  const arrow = ">";

  return (
    <body>
      <Bg img={bg}></Bg>
      <div className="nav-button--notselected">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-button--notselected">
        <Link to="/Browse">Browse</Link>
      </div>
      {arrow}
      <div className="nav-button--selected">
        <Link to="/Sign-Up">Sign Up</Link>
      </div>
      <div className="form-heading">Sign Up</div>
      <div className="form-heading--desc">
        Register an account for nexus-cheats.com
      </div>
      <div className="form-input--wrapper---a">
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
      <div className={formErrVis}>{formerr.toString()}</div>
      <div className="form-confirm--button" onClick={Register}>
        Register
      </div>
      <div className="form-other--wrapper">
        <div className="form-other--text">Already registered?</div>
        <Link to="/Log-In">
          <div className="form-other--link">Login</div>
        </Link>
      </div>
    </body>
  );
}

export default App;
