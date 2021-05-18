import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './views/About';
import Home from './views/Home';
import NotFound from './views/NotFound';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/a-propos" exact component={About} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;