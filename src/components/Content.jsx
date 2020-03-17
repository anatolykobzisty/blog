import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Authentication, GlobalFeed, Article, CreateArticle, EditArticle } from '../pages';

const Content = () => {
  return (
    <Switch>
      <Route path="/blog/" component={GlobalFeed} exact />
      <Route path="/blog/login" component={Authentication} />
      <Route path="/blog/signup" component={Authentication} />
      <Route path="/blog/articles/new" component={CreateArticle} />
      <Route path="/blog/articles/:slug/edit" component={EditArticle} />
      <Route path="/blog/articles/:slug" component={Article} />
    </Switch>
  );
};

export default Content;
