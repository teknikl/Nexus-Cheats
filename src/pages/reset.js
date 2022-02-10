import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Bg from "../components/background.js";
import { BrowserView, MobileView } from "react-device-detect";
import "../App.css";

function App() {
  // All states

  const [bg, setBg] = React.useState(`bg${Math.floor(Math.random() * 2) + 1}`);

  // Calls when page first renders
  useEffect(() => {
    document.title = "Nexus // Email Sent";
    setBg(`bg${Math.floor(Math.random() * 2) + 1}`);
  }, []);

  const arrow = ">";

  return (
    <body>
      <Bg img={bg}></Bg>
      <BrowserView>
        <div className="nav-button--notselected">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-button--notselected">
          <Link to="/Browse">Browse</Link>
        </div>
        {arrow}
        <div className="nav-button--notselected">
          <Link to="/Log-In">Log In</Link>
        </div>
        /
        <div className="nav-button--selected">
          <Link to="/Log-In/Reset">Reset Password</Link>
        </div>
      </BrowserView>
      <MobileView>
        <div className="nav-button--notselected">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-button--notselected">
          <Link to="/Browse">Browse</Link>
        </div>
        /
        <div className="nav-button--selected">
          <Link to="/Log-In/Reset">Reset Pass</Link>
        </div>
      </MobileView>
      <div className="reset---wrapper">
        <BrowserView>
          <div className="reset--title">Email Sent</div>
          <div className="reset--desc">
            A password reset email has been sent to your account. Please check
            your email account and click the link provided to reset your
            password.
          </div>
        </BrowserView>
        <MobileView>
          <div className="reset--title" style={{ fontSize: "60px" }}>
            Email Sent
          </div>
          <div className="reset--desc" style={{ fontSize: "17px" }}>
            A password reset email has been sent to your account. Please check
            your email account and click the link provided to reset your
            password.
          </div>
        </MobileView>
        <div className="reset--link---text">Thanks,</div>
        <Link to="/Log-In">
          <div className="reset--link">take me to login</div>
        </Link>
        <div className="reset--link---help">
          Didn't receive an email? Please check that your account exists, or
          that the email you entered was correct.
        </div>
      </div>
    </body>
  );
}

export default App;
