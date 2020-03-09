import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styled from 'styled-components/macro';

import { Authentication, GlobalFeed } from '../pages';

const StyledContent = styled.main`
  height: 100vh;
  padding: 0 20px;
`;

const Content = () => {
  return (
    <StyledContent>
      <Switch>
        <Route path="/blog/" component={GlobalFeed} exact />
        <Route path="/blog/login" component={Authentication} />
        <Route path="/blog/signup" component={Authentication} />
      </Switch>
    </StyledContent>
  );
};

export default Content;
