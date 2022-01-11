import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
//Firebase Auth
import AuthProvider from './auth/auth.js';
// Main pages
import home from './pages/home.js';
import browse from './pages/browse.js';
import signup from './pages/signup.js';
import login from './pages/login.js';
import reset from './pages/reset.js';
import ScrollToTop from './components/ScrollToTop';
// Games
import csgo from './pages/games/csgo.js';
import minecraft from './pages/games/minecraft.js';
import amongus from './pages/games/amongus.js';
import roblox from './pages/games/roblox.js';
import gmod from './pages/games/gmod.js';
import overwatch from './pages/games/overwatch.js';
import fortnite from './pages/games/fortnite.js';
import warzone from './pages/games/warzone.js';
import valorant from './pages/games/valorant.js';
import apex from './pages/games/apex.js';

const App = () => {

    return (
        <Router>
            <AuthProvider>
                <ScrollToTop />
                    <Switch>
                        <Route exact path='/Nexus' component={home} />
                        <Route exact path='/Nexus/Browse' component={browse} />
                        <Route exact path='/Nexus/Sign-Up' component={signup} />
                        <Route exact path='/Nexus/Log-In' component={login} />
                        <Route exact path='/Nexus/Log-In/Reset' component={reset} />
                        {/* Games */}
                    <Route exact path='/Nexus/Browse/CSGO' component={csgo} />
                    <Route exact path='/Nexus/Browse/Minecraft' component={minecraft} />
                    <Route exact path='/Nexus/Browse/AmongUs' component={amongus} />
                    <Route exact path='/Nexus/Browse/Roblox' component={roblox} />
                    <Route exact path='/Nexus/Browse/Gmod' component={gmod} />
                    <Route exact path='/Nexus/Browse/Overwatch' component={overwatch} />
                    <Route exact path='/Nexus/Browse/Fortnite' component={fortnite} />
                    <Route exact path='/Nexus/Browse/Warzone' component={warzone} />
                    <Route exact path='/Nexus/Browse/Valorant' component={valorant} />
                    <Route exact path='/Nexus/Browse/ApexLegends' component={apex} />
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;