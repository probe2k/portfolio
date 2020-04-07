import React from 'react';
import LandingPage from './landing_page';
import { Switch, Route } from 'react-router-dom';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/resume" component={Resume} />
    </Switch>
);

export default Main;