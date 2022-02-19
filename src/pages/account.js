import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext, auth } from "../auth/auth.js";
import { deleteUser } from "@firebase/auth";
import { useHistory } from "react-router-dom";
import { signOut, updateEmail, updateProfile } from "@firebase/auth";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Bg from "../components/background.js";
import Footer from "../components/footer.js";
import { BrowserView, MobileView } from "react-device-detect";
import "../App.css";

function App() {
  // All states

  const [bg, setBg] = React.useState(`bg${Math.floor(Math.random() * 2) + 1}`);

  const [verifyVis, setVerifyVis] = React.useState("");

  const [inputVis, setInputVis] = React.useState("");

  const [tickVis, setTickVis] = React.useState("");

  const [crossVis, setCrossVis] = React.useState("");

  const [emailVal, setEmailVal] = React.useState("");

  const [errVis, setErrVis] = React.useState("");

  const [errVis2, setErrVis2] = React.useState("");

  const [pageErr, setPageErr] = React.useState("");

  const [pageErr2, setPageErr2] = React.useState("");

  // Username states
  const [username, setUsername] = React.useState("");

  const [inputVis2, setInputVis2] = React.useState("");

  const [tickVis2, setTickVis2] = React.useState("");

  const [crossVis2, setCrossVis2] = React.useState("");

  const [pageErr3, setPageErr3] = React.useState("");

  const [errVis3, setErrVis3] = React.useState("");

  // Calls when page first renders
  useEffect(() => {
    document.title = "Nexus / Account";
    setVerifyVis("verify---wrapper----invis");
    setTickVis("input--tick---invis");
    setCrossVis("input--cross---invis");
    setInputVis("input--invis");
    setErrVis("user--error---invis");
    setErrVis2("user--error---invis");
    setTickVis2("input--tick---invis");
    setCrossVis2("input--cross---invis");
    setInputVis2("input--invis");
    setErrVis3("user--error---invis");
    setErrVis3("user--error---invis");
    setBg(`bg${Math.floor(Math.random() * 2) + 1}`);
  }, []);

  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const logout = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        setErrVis2("user--error");
        setPageErr2(err);
      });
  };

  const delaccvis = () => {
    if (verifyVis === "verify---wrapper----invis") {
      setVerifyVis("verify---wrapper");
    } else {
      setVerifyVis("verify---wrapper----invis");
    }
  };

  const delacc = () => {
    deleteUser(user)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        setErrVis2("user--error");
        setPageErr2(err);
      });
  };

  const emailVis = () => {
    if (tickVis === "input--tick---invis" && inputVis === "input--invis") {
      setTickVis("input--tick");
      setCrossVis("input--cross");
      setInputVis("input");
    } else {
      setTickVis("input--tick---invis");
      setCrossVis("input--cross---invis");
      setInputVis("input--invis");
    }
  };

  const userVis = () => {
    if (tickVis2 === "input--tick---invis" && inputVis2 === "input--invis") {
      setTickVis2("input--tick");
      setCrossVis2("input--cross");
      setInputVis2("input");
    } else {
      setTickVis2("input--tick---invis");
      setCrossVis2("input--cross---invis");
      setInputVis2("input--invis");
    }
  };

  const updateUsername = () => {
    updateProfile(user, {
      displayName: username,
    })
      .then(() => {
        setTickVis2("input--tick---invis");
        setCrossVis2("input--cross---invis");
        setInputVis2("input--invis");
      })
      .catch((err) => {
        setErrVis3("user--error");
        setPageErr3(err);
      });
  };

  const closeUsername = () => {
    setTickVis2("input--tick---invis");
    setCrossVis2("input--cross---invis");
    setInputVis2("input--invis");
  };

  const emailChange = (e) => {
    setEmailVal(e.target.value);
  };

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const updateUserEmail = () => {
    updateEmail(user, emailVal)
      .then(() => {
        setTickVis("input--tick---invis");
        setCrossVis("input--cross---invis");
        setInputVis("input--invis");
      })
      .catch((err) => {
        setErrVis("user--error");
        setPageErr(err);
      });
  };

  const closeEmail = () => {
    setTickVis("input--tick---invis");
    setCrossVis("input--cross---invis");
    setInputVis("input--invis");
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
        <Link to="/Account">Account</Link>
      </div>
      <BrowserView>
        <div className={verifyVis}>
          <div className="verify--box">
            <div className="verify--box---title">Are you sure?</div>
            <div className="verify--box---warning">
              Accounts that are deleted CAN NOT be recovered. Do you want to
              continue?
            </div>
            <div onClick={delaccvis} className="user--action---button---cancel">
              Cancel
            </div>
            <div onClick={delacc} className="user--action---button---continue">
              Confirm
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className={verifyVis}>
          <div className="verify--box" style={{ width: "250px" }}>
            <div className="verify--box---title">Are you sure?</div>
            <div className="verify--box---warning">
              Accounts that are deleted CAN NOT be recovered. Do you want to
              continue?
            </div>
            <div onClick={delaccvis} className="user--action---button---cancel">
              Cancel
            </div>
            <div onClick={delacc} className="user--action---button---continue">
              Confirm
            </div>
          </div>
        </div>
      </MobileView>
      <div className="account--wrapper">
        <div className="account-title">Account</div>

        <div className="section-desc">Username:</div>
        <div className="section-name">
          {user === null ? "" : user.displayName}
        </div>
        <div onClick={userVis} className="user--action---button">
          {user === null
            ? ""
            : user.displayName === null
              ? "Add Username"
              : "Update Username"}
        </div>
        <div className={inputVis2}>
          <BrowserView>
            <input
              onChange={usernameChange}
              style={{
                textTransform: "none",
                margin: "10px auto",
              }}
              placeholder="New Username"
            ></input>
          </BrowserView>
          <MobileView>
            <input
              onChange={usernameChange}
              style={{
                textTransform: "none",
                margin: "10px auto",
                width: "160px",
              }}
              placeholder="New Username"
            ></input>
          </MobileView>
        </div>
        <div onClick={closeUsername} className={crossVis2}>
          <CloseIcon></CloseIcon>
        </div>
        <div onClick={updateUsername} className={tickVis2}>
          <DoneIcon></DoneIcon>
        </div>
        <div className={errVis3}>{pageErr3.toString()}</div>

        <div className="section-desc">Email:</div>
        <div className="section-name">{user === null ? "" : user.email}</div>
        <div onClick={emailVis} className="user--action---button">
          Change Email
        </div>
        <div className={inputVis}>
          <BrowserView>
            <input
              onChange={emailChange}
              style={{
                textTransform: "none",
                margin: "10px auto",
              }}
              placeholder="New Email"
            ></input>
          </BrowserView>
          <MobileView>
            <input
              onChange={emailChange}
              style={{
                textTransform: "none",
                margin: "10px auto",
                width: "160px",
              }}
              placeholder="New Email"
            ></input>
          </MobileView>
        </div>
        <div onClick={closeEmail} className={crossVis}>
          <CloseIcon></CloseIcon>
        </div>
        <div onClick={updateUserEmail} className={tickVis}>
          <DoneIcon></DoneIcon>
        </div>
        <div className={errVis}>{pageErr.toString()}</div>

        <div className="section-desc">Email Verified:</div>
        <div className="section-name">
          {user === null ? "" : user.emailVerified.toString()}
        </div>

        <div className="section-desc">UID:</div>
        <div className="section-name">{user === null ? "" : user.uid}</div>

        <div className="section-desc">Created At:</div>
        <div className="section-name">
          {user === null ? "" : user.metadata.creationTime}
        </div>

        <div className="section-desc">Last Signed In:</div>
        <div className="section-name">
          {user === null ? "" : user.metadata.lastSignInTime}
        </div>

        <div onClick={logout} className="user--action---button">
          Logout
        </div>
        <div onClick={delaccvis} className="user--action---button">
          Delete Account
        </div>
        <div className={errVis2}>{pageErr2.toString()}</div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
