import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';

import styled from 'styled-components/macro';

import logout from '../actions/logout';

const StyledNavBar = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
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
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 30px;
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

const NavBar = ({ isAutheticated, user, authLogout }) => {
  const handleClick = () => {
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
        {!isAutheticated && (
          <>
            <MenuItem>
              <StyledNavLink to="/blog/login">Sign in</StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink to="/blog/signup">Sign up</StyledNavLink>
            </MenuItem>
          </>
        )}
        {isAutheticated && (
          <>
            <MenuItem>
              <StyledNavLink to="/blog/articles/new">New Post</StyledNavLink>
            </MenuItem>
            <MenuItem>
              <Button onClick={handleClick}>Log out</Button>
            </MenuItem>
            <MenuItem>
              <span>{user}</span>
            </MenuItem>
          </>
        )}
      </Menu>
    </StyledNavBar>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    isAutheticated: !!auth.currentUser.token,
    user: auth.currentUser.username,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authLogout: () => dispatch(logout()),
  };
};

NavBar.propTypes = {
  isAutheticated: PropTypes.bool.isRequired,
  user: PropTypes.string,
  authLogout: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  user: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
