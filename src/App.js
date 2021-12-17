import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import home from './pages/home.js';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/Nexus' component={home} />
            </Switch>
        </Router>
    );
}

export default App;