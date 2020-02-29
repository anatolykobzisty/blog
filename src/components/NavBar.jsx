import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';

import styled from 'styled-components/macro';

import logout from '../actions/logout';

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-weight: bold;
  color: white;
  font-size: 25px;
  :hover {
    color: black;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.li`
  margin-right: 10px;
  :last-child {
    margin-right: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  :hover {
    color: black;
  }
`;

const Logout = styled(Button)`
  margin-left: 30px;
`;

const NavBar = ({ isAutheticated, authLogout }) => {
  const handleClick = () => {
    localStorage.removeItem('token');
    authLogout();
  };
  return (
    <StyledNavBar>
      <Logo to="/blog">Blog</Logo>
      <Menu>
        <MenuItem>
          <StyledNavLink to="/blog" exact>
            Home
          </StyledNavLink>
        </MenuItem>
        {isAutheticated ? (
          <Logout onClick={handleClick}>Log out</Logout>
        ) : (
          <>
            <MenuItem>
              <StyledNavLink to="/blog/login">Sign in</StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink to="/blog/signup">Sign up</StyledNavLink>
            </MenuItem>
          </>
        )}
      </Menu>
    </StyledNavBar>
  );
};

const mapStateToProps = ({ auth }) => {
  return { isAutheticated: !!auth.token };
};

const mapDispatchToProps = dispatch => {
  return {
    authLogout: () => dispatch(logout()),
  };
};

NavBar.propTypes = {
  isAutheticated: PropTypes.bool.isRequired,
  authLogout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
