import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={require('../asset/profile.png')}
                            alt="Yash Singh | probe2k"
                            className="profile-img"
                        />

                        <div className="name">
                            <h1>Yash Singh</h1>
                        </div>

                        <div className="banner-text">
                            <h1>Machine Learning Enthusiast</h1>
                            <hr></hr>

                            <p>
                                Android/iOS Developer | Java | Python | DevOps | *NIX SysAdmin | CyberSec | SME - ML/AI | Network Specialist | RESTful API
                            </p>

                            <div className="social">
                                {/*GitHub*/}
                                <a href="https://github.com/probe2k" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github" aria-hidden="true" />
                                </a>

                                {/*Facebook*/}
                                <a href="https://facebook.com/probe2k" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </a>

                                {/*LinkedIn*/}
                                <a href="https://linkedin.com/in/probe2k" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </a>

                                {/*Telegram*/}
                                <a href="https://t.me/probe2k" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-telegram" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;