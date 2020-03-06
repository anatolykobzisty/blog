import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components/macro';

import Feed from '../components/Feed';

import { getArticles } from '../actions/getArticles';

const StyledGlobalFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Loader = styled.div`
  font-size: 16px;
  color: #1890ff;
`;

const ErrorMessage = styled.div`
  font-size: 16px;
  color: #1890ff;
`;

export class GlobalFeed extends Component {
  componentDidMount = () => {
    const { showArticles } = this.props;
    showArticles();
  };

  render() {
    const { isLoading, error, articles } = this.props;
    return (
      <>
        <StyledGlobalFeed>
          {isLoading && <Loader>Loading news feed...</Loader>}
          {error && <ErrorMessage>Some error happened</ErrorMessage>}
          {!isLoading && articles && <Feed articles={articles} />}
        </StyledGlobalFeed>
      </>
    );
  }
}

const mapStateToProps = ({ multipleArticles }) => {
  return {
    isLoading: multipleArticles.loading,
    error: multipleArticles.error,
    articles: multipleArticles.articles,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showArticles: () => dispatch(getArticles()),
  };
};

GlobalFeed.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
  articles: PropTypes.arrayOf(PropTypes.any).isRequired,
  showArticles: PropTypes.func.isRequired,
};

GlobalFeed.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalFeed);
