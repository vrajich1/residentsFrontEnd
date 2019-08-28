import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Add from './components/Add'
import Residents from './components/Residents'

function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add" component={Add} />
                <Route path="/Residents" component={Residents} />
            </Switch>
        </Router>
    );
}

export default Routing;
