import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatDistance } from 'date-fns';

import styled from 'styled-components/macro';

import Taglist from '../components/TagList';

import { getArticle } from '../actions/getArticle';
import { deleteArticle } from '../actions/deleteArticle';
import cleanArticle from '../actions/cleanArticle';

const StyledArticle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const Loader = styled.div`
  font-size: 16px;
  color: #1890ff;
  margin-top: 40px;
`;

const ErrorMessage = styled.div`
  font-size: 16px;
  color: #1890ff;
`;

const Banner = styled.div`
  width: 100%;
  padding-top: 35px;
  padding-bottom: 30px;
  border-top: 1px solid #1890ff;
  border-bottom: 1px solid #1890ff;
`;

const Container = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

const ArticleTitle = styled.h1`
  font-size: 44px;
  margin: 0;
  margin-bottom: 20px;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const AvatarAuthorArticle = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  border: 1px solid #1890ff;
  overflow: hidden;
`;

const Info = styled.div``;

const NameAuthorArticle = styled.div`
  color: #1890ff;
  font-size: 16px;
`;

const DateArticle = styled.span`
  font-size: 12px;
`;

const ButtonEdit = styled(Link)`
  border: 1px solid #1890ff;
  display: inline-block;
  padding: 5px 10px;
  text-decoration: none;
  color: #1890ff;
  margin-right: 10px;
  :hover {
    background-color: #1890ff;
    color: white;
  }
`;

const ButtonDelete = styled.button`
  padding: 5px 10px;
  font: inherit;
  border: 1px solid #1890ff;
  background-color: white;
  color: #1890ff;
  cursor: pointer;
  :hover {
    background-color: #1890ff;
    color: white;
  }
`;

const ArticleContent = styled.div`
  padding-top: 30px;
`;

const ArticleBody = styled.div``;

const Body = styled.p``;

class Article extends Component {
  componentDidMount() {
    const { match, showArticle, cleanPrevArticle } = this.props;
    const { slug } = match.params;
    cleanPrevArticle();
    showArticle(slug);
  }

  isAuthor = () => {
    const { currentUser, fetchArticle } = this.props;
    if (!Object.keys(fetchArticle).length || !Object.keys(currentUser).length) {
      return false;
    }
    return fetchArticle.author.username === currentUser.username;
  };

  handleClick = () => {
    const { match, delArticle, history } = this.props;
    const { slug } = match.params;
    delArticle(slug);
    history.push('/blog');
  };

  render() {
    const { fetchArticle, fetchArticleIsError, fetchArticleIsLoading } = this.props;

    return (
      <>
        <StyledArticle>
          {fetchArticleIsLoading && <Loader>Loading...</Loader>}
          {fetchArticleIsError && <ErrorMessage>Some error happened</ErrorMessage>}
          {!fetchArticleIsLoading && Object.keys(fetchArticle).length && (
            <>
              <Banner>
                <Container>
                  <ArticleTitle>{fetchArticle.title}</ArticleTitle>
                  <ArticleMeta>
                    <div>
                      <AvatarAuthorArticle>
                        <img width="45px" height="45px" src={fetchArticle.author.image} alt="" />
                      </AvatarAuthorArticle>
                      <Info>
                        <NameAuthorArticle>{fetchArticle.author.username}</NameAuthorArticle>
                        <DateArticle>
                          {`Created ${formatDistance(new Date(fetchArticle.createdAt), new Date(), {
                            addSuffix: true,
                          })}`}
                        </DateArticle>
                      </Info>
                    </div>
                    {!fetchArticleIsLoading && this.isAuthor() && (
                      <span>
                        <ButtonEdit to={`/blog/articles/${fetchArticle.slug}/edit`}>
                          Edit Article
                        </ButtonEdit>
                        <ButtonDelete onClick={this.handleClick}>Delete Article</ButtonDelete>
                      </span>
                    )}
                  </ArticleMeta>
                </Container>
              </Banner>
              <ArticleContent>
                <Container>
                  <ArticleBody>
                    <Body>{fetchArticle.body}</Body>
                  </ArticleBody>
                  <Taglist tags={fetchArticle.tagList} />
                </Container>
              </ArticleContent>
            </>
          )}
        </StyledArticle>
      </>
    );
  }
}

const mapStateToProps = ({ auth, singleArticle }) => {
  return {
    fetchArticleIsLoading: singleArticle.loading,
    fetchArticleIsError: singleArticle.error,
    fetchArticle: singleArticle.article,
    currentUser: auth.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showArticle: slug => dispatch(getArticle(slug)),
    delArticle: slug => dispatch(deleteArticle(slug)),
    cleanPrevArticle: () => dispatch(cleanArticle()),
  };
};

Article.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchArticleIsLoading: PropTypes.bool.isRequired,
  fetchArticleIsError: PropTypes.objectOf(PropTypes.any),
  fetchArticle: PropTypes.objectOf(PropTypes.any),
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
  showArticle: PropTypes.func.isRequired,
  delArticle: PropTypes.func.isRequired,
  cleanPrevArticle: PropTypes.func.isRequired,
};

Article.defaultProps = {
  fetchArticleIsError: null,
  fetchArticle: {},
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article));
