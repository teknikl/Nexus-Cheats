import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Bg from "../components/background.js";
import "../App.css";

function App() {
  // All states

  const [bg, setBg] = React.useState(`bg${Math.floor(Math.random() * 4) + 1}`);

  // Calls when page first renders
  useEffect(() => {
    document.title = "Nexus // Email Sent";
    setBg(`bg${Math.floor(Math.random() * 4) + 1}`);
  }, []);

  return (
    <body>
      <Bg img={bg}></Bg>
      <div className="nav-button--notselected">
        <Link to="/Nexus">Home</Link>
      </div>
      <div className="nav-button--notselected">
        <Link to="/Nexus/Browse">Browse</Link>
      </div>
      ❯
      <div className="nav-button--notselected">
        <Link to="/Nexus/Log-In">Log In</Link>
      </div>
      /
      <div className="nav-button--selected">
        <Link to="/Nexus/Log-In/Reset">Reset Password</Link>
      </div>
      <div className="reset---wrapper">
        <div className="reset--title">Email Sent</div>
        <div className="reset--desc">
          A password reset email has been sent to your account. Please check
          your email account and click the link provided to reset your password.
        </div>
        <div className="reset--link---text">Thanks,</div>
        <Link to="/Nexus/Log-In">
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
