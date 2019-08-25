import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Menu from '../screens/Menu/Menu';

const createBrowserHistory = require("history").createBrowserHistory;
const customHistory = createBrowserHistory();

class Routers extends Component {
    render() {

        return (
            <Router history={customHistory}>
                <Menu />
            </Router>
        );
    }
}

export default Routers;
