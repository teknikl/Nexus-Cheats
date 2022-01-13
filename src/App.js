import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Firebase Auth
import AuthProvider from "./auth/auth.js";
// Main pages
import home from "./pages/home.js";
import browse from "./pages/browse.js";
import signup from "./pages/signup.js";
import login from "./pages/login.js";
import reset from "./pages/reset.js";
import account from "./pages/account.js";
import ScrollToTop from "./components/ScrollToTop";
// Games
import csgo from "./pages/games/csgo.js";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <Switch>
          <Route exact path="/Nexus" component={home} />
          <Route exact path="/Nexus/Browse" component={browse} />
          <Route exact path="/Nexus/Sign-Up" component={signup} />
          <Route exact path="/Nexus/Log-In" component={login} />
          <Route exact path="/Nexus/Account" component={account} />
          <Route exact path="/Nexus/Log-In/Reset" component={reset} />
          {/* Games */}
          <Route exact path="/Nexus/Browse/CSGO" component={csgo} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
