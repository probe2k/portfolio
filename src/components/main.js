import React from 'react';
import LandingPage from './landing_page';
import AboutMe from './about_me';
import { Switch, Route } from 'react-router-dom';
import Contact from './contact';
import Resume from './resume';
import Project from './project';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about_me" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/project" component={Project} />
    </Switch>
);

export default Main;