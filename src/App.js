import React from 'react';
import './App.css';
import { Layout, Navigation, Header, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="parent-tag">
      <Layout fixedHeader>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Yash Singh / <span><strong>probe2k</strong></span></Link>} scroll>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/about_me">About Me</Link>
            <Link to="/project">Project</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
