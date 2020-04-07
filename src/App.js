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
            <Link to="/resume"><strong>Resume</strong></Link>
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
