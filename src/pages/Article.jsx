import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatDistance } from 'date-fns';

import styled from 'styled-components/macro';

import Taglist from '../components/TagList';

import { getArticle } from '../actions/getArticle';
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

const Button = styled(Link)`
  border: 1px solid #1890ff;
  display: inline-block;
  padding: 5px 15px;
  text-decoration: none;
  color: #1890ff;
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
    const { currentUser, article } = this.props;
    if (!Object.keys(article).length || !Object.keys(currentUser).length) {
      return false;
    }
    return article.author.username === currentUser.username;
  };

  render() {
    const { article, error, isLoading } = this.props;

    return (
      <>
        <StyledArticle>
          {isLoading && <Loader>Loading...</Loader>}
          {error && <ErrorMessage>Some error happened</ErrorMessage>}
          {!isLoading && Object.keys(article).length && (
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
                        <Button to={`/blog/articles/${article.slug}/edit`}>edit</Button>
                      </span>
                    )}
                  </ArticleMeta>
                </Container>
              </Banner>
              <ArticleContent>
                <Container>
                  <ArticleBody>
                    <Body>{article.body}</Body>
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

const mapStateToProps = ({ auth, singleArticle }) => {
  return {
    isLoading: singleArticle.loading,
    error: singleArticle.error,
    article: singleArticle.article,
    currentUser: auth.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showArticle: slug => dispatch(getArticle(slug)),
    cleanPrevArticle: () => dispatch(cleanArticle()),
  };
};

Article.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
  article: PropTypes.objectOf(PropTypes.any).isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
  showArticle: PropTypes.func.isRequired,
  cleanPrevArticle: PropTypes.func.isRequired,
};

Article.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
