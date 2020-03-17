import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.css';
import styled from 'styled-components/macro';
import GlobalStyle from './GlobalStyle';

import Loader from './Loader';
import NavBar from './NavBar';
import Content from './Content';

import { getUser } from '../actions/getUser';

const Page = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1890ff;
  color: #ffffff;
  padding: 0 20px;
`;

class App extends Component {
  componentDidMount = () => {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  };

  render() {
    const { isLoading } = this.props;
    return (
      <>
        <GlobalStyle />
        <Router>
          <Page>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <Header>
                  <NavBar />
                </Header>
                <Content />
              </>
            )}
          </Page>
        </Router>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isLoading: auth.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(getUser()),
});

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
