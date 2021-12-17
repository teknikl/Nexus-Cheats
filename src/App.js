import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import home from './pages/home.js';
import browse from './pages/browse.js';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/Nexus' component={home} />
                <Route exact path='/Nexus/Browse' component={browse} />
            </Switch>
        </Router>
    );
}

export default App;