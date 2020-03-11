import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styled from 'styled-components/macro';

import { Authentication, GlobalFeed, Article } from '../pages';

const StyledContent = styled.main`
  height: 100vh;
`;

const Content = () => {
  return (
    <StyledContent>
      <Switch>
        <Route path="/blog/" component={GlobalFeed} exact />
        <Route path="/blog/login" component={Authentication} />
        <Route path="/blog/signup" component={Authentication} />
        <Route path="/blog/articles/:slug" component={Article} />
      </Switch>
    </StyledContent>
  );
};

export default Content;
