import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components/macro';

import { Pagination } from 'antd';
import Feed from '../components/Feed';

import { getArticles } from '../actions/getArticles';

const StyledGlobalFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const Loader = styled.div`
  font-size: 16px;
  color: #1890ff;
`;

const StyledPagination = styled(Pagination)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export class GlobalFeed extends Component {
  state = {
    current: 1,
  };

  componentDidMount = () => {
    const { showArticles } = this.props;
    showArticles();
  };

  onChange = (page, pageSize) => {
    this.setState({
      current: page,
    });
    const { showArticles } = this.props;
    const offset = page * 10 - pageSize;
    showArticles(offset, pageSize);
  };

  render() {
    const { current } = this.state;
    const { isLoading, articles, articlesCount } = this.props;
    return (
      <>
        <StyledGlobalFeed>
          {isLoading && <Loader>Loading...</Loader>}
          {!isLoading && articles && (
            <>
              <Feed articles={articles} />
              <StyledPagination
                total={articlesCount}
                current={current}
                pageSize={10}
                onChange={this.onChange}
              />
            </>
          )}
        </StyledGlobalFeed>
      </>
    );
  }
}

const mapStateToProps = ({ multipleArticles }) => {
  return {
    isLoading: multipleArticles.loading,
    articles: multipleArticles.articles,
    articlesCount: multipleArticles.articlesCount,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showArticles: (offset, pageSize) => dispatch(getArticles(offset, pageSize)),
  };
};

GlobalFeed.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  articles: PropTypes.arrayOf(PropTypes.any).isRequired,
  showArticles: PropTypes.func.isRequired,
  articlesCount: PropTypes.number,
};

GlobalFeed.defaultProps = {
  articlesCount: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalFeed);
