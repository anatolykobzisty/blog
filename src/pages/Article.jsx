import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatDistance } from 'date-fns';
import size from 'lodash/size';

import styled from 'styled-components/macro';

import Loader from '../components/Loader';
import Taglist from '../components/TagList';
import AddToFavorites from '../components/AddToFavorites';

import { getArticle } from '../actions/getArticle';
import { deleteArticle } from '../actions/deleteArticle';
import cleanArticle from '../actions/cleanArticle';

const StyledArticle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
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
  word-wrap: break-word;
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

const ArticleBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BodyWrap = styled.div`
  width: 100%;
  padding: 10px;
  padding-top: 0;
`;

const Body = styled.p`
  word-wrap: break-word;
`;

class Article extends Component {
  componentDidMount() {
    const { match, showArticle, emptyArticle } = this.props;
    const { slug } = match.params;
    showArticle(slug);
    emptyArticle();
  }

  isAuthor = () => {
    const { currentUser, article } = this.props;
    if (!size(article) || !size(currentUser)) {
      return false;
    }
    return article.author.username === currentUser.username;
  };

  handleClickButtonDelete = () => {
    const { match, delArticle, history } = this.props;
    const { slug } = match.params;
    delArticle(slug);
    history.push('/blog');
  };

  render() {
    const { article, isLoading } = this.props;

    if (!navigator.onLine) {
      return <Redirect to="/blog" />;
    }

    return (
      <>
        <StyledArticle>
          {isLoading && <Loader />}
          {!isLoading && size(article) && (
            <>
              <Banner>
                <Container>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleMeta>
                    <div>
                      <AvatarAuthorArticle>
                        <img width="45px" height="45px" src={article.author.image} alt="" />
                      </AvatarAuthorArticle>
                      <Info>
                        <NameAuthorArticle>{article.author.username}</NameAuthorArticle>
                        <DateArticle>
                          {`Created ${formatDistance(new Date(article.createdAt), new Date(), {
                            addSuffix: true,
                          })}`}
                        </DateArticle>
                      </Info>
                    </div>
                    {!isLoading && this.isAuthor() && (
                      <span>
                        <ButtonEdit to={`/blog/articles/${article.slug}/edit`}>
                          Edit Article
                        </ButtonEdit>
                        <ButtonDelete onClick={this.handleClickButtonDelete}>
                          Delete Article
                        </ButtonDelete>
                      </span>
                    )}
                  </ArticleMeta>
                </Container>
              </Banner>
              <ArticleContent>
                <Container>
                  <ArticleBody>
                    <BodyWrap>
                      <Body>{article.body}</Body>
                    </BodyWrap>
                    <AddToFavorites
                      isFavorited={article.favorited}
                      favoritesCount={article.favoritesCount}
                      slug={article.slug}
                    />
                  </ArticleBody>
                  <Taglist tags={article.tagList} />
                </Container>
              </ArticleContent>
            </>
          )}
        </StyledArticle>
      </>
    );
  }
}

const mapStateToProps = ({ user, singleArticle }) => {
  return {
    isLoading: singleArticle.loading,
    article: singleArticle.article,
    currentUser: user.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showArticle: slug => dispatch(getArticle(slug)),
    delArticle: slug => dispatch(deleteArticle(slug)),
    emptyArticle: () => dispatch(cleanArticle()),
  };
};

Article.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool.isRequired,
  article: PropTypes.objectOf(PropTypes.any),
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
  showArticle: PropTypes.func.isRequired,
  delArticle: PropTypes.func.isRequired,
  emptyArticle: PropTypes.func.isRequired,
};

Article.defaultProps = {
  article: {},
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article));
