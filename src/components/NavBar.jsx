import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components/macro';

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-weight: bold;
  color: white;
  font-size: 20px;
  :hover {
    color: black;
  }
`;

const Menu = styled.ul`
  display: flex;
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

const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo to="/blog">Blog</Logo>
      <Menu>
        <MenuItem>
          <StyledNavLink to="/blog" exact>
            Home
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/blog/login">Sign in</StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/blog/signup">Sign up</StyledNavLink>
        </MenuItem>
      </Menu>
    </StyledNavBar>
  );
};

export default NavBar;
