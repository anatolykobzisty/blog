import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import styled from 'styled-components/macro';
import GlobalStyle from './components/GlobalStyle';

import ErrorBoundry from './components/ErrorBoundry';
import NavBar from './components/NavBar';
import Content from './components/Content';

import store from './store';

const { Header, Footer } = Layout;

const StyledHeader = styled(Header)`
  background: #1890ff;
  color: #ffffff;
  padding: 0 150px;
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
      <ErrorBoundry>
        <GlobalStyle />
        <Router>
          <Layout>
            <StyledHeader>
              <NavBar />
            </StyledHeader>
            <Content />
            <StyledFooter>Ant Design © {new Date().getFullYear()} Created by Ant UED</StyledFooter>
          </Layout>
        </Router>
      </ErrorBoundry>
    </Provider>
  </>,
  document.getElementById('root')
);
