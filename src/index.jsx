import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import styled from 'styled-components/macro';
import GlobalStyle from './components/GlobalStyle';

import autoLogin from './actions/autoLogin';

import NavBar from './components/NavBar';
import Content from './components/Content';

import store from './store';

store.dispatch(autoLogin());

const { Header, Footer } = Layout;

const StyledHeader = styled(Header)`
  background: #1890ff;
  color: #ffffff;
  padding: 0 60px;
  @media screen and (min-width: 480px) {
    padding: 0 80px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 100px;
  }
`;

const StyledFooter = styled(Footer)`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  color: #ffffff;
  text-align: center;
  background: #1890ff;
`;

ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Layout>
          <StyledHeader>
            <NavBar />
          </StyledHeader>
          <Content />
          <StyledFooter>Blog © {new Date().getFullYear()}</StyledFooter>
        </Layout>
      </Router>
    </Provider>
  </>,
  document.getElementById('root')
);
