import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styled from 'styled-components/macro';

import { Authentication, GlobalFeed } from '../pages';

const StyledContent = styled.main`
  background: #ffffff;
  padding: 0 60px;
  @media screen and (min-width: 480px) {
    padding: 0 80px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 100px;
  }
`;

const Content = () => {
  return (
    <StyledContent>
      <Switch>
        <Route path="/blog" component={GlobalFeed} exact />
        <Route path="/blog/login" component={Authentication} />
        <Route path="/blog/signup" component={Authentication} />
      </Switch>
    </StyledContent>
  );
};

export default Content;
