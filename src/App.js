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
// Games
import csgo from "./pages/games/csgo.js";
import gmod from "./pages/games/gmod.js";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/Browse" component={browse} />
          <Route exact path="/Sign-Up" component={signup} />
          <Route exact path="/Log-In" component={login} />
          <Route exact path="/Account" component={account} />
          <Route exact path="/Log-In/Reset" component={reset} />
          {/* Games */}
          <Route exact path="/Browse/CSGO" component={csgo} />
          <Route exact path="/Browse/Gmod" component={gmod} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
