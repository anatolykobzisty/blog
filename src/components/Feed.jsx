import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { formatDistance } from 'date-fns';

import styled from 'styled-components/macro';

import TagList from './TagList';

const Article = styled.div`
  width: 900px;
  border: 2px solid #1890ff;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 20px 0;
  :first-child {
    border: 2px solid #1890ff;
    border-left: none;
    border-right: none;
  }
`;

const ArticlePreview = styled.div``;

const ArticleMeta = styled.div`
  display: flex;
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

const ArticleContent = styled.div``;

const ArticleTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const ArticleDescription = styled.p`
  color: black;
  font-size: 15px;
`;

const ArticleFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Feed = ({ articles }) => {
  return (
    <>
      {articles.map(article => (
        <Article key={article.createdAt}>
          <ArticlePreview>
            <ArticleMeta>
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
            </ArticleMeta>
          </ArticlePreview>
          <Link to={`blog/articles/${article.slug}`}>
            <ArticleContent>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleDescription>{article.description}</ArticleDescription>
              <ArticleFooter>
                <TagList tags={article.tagList} />
              </ArticleFooter>
            </ArticleContent>
          </Link>
        </Article>
      ))}
    </>
  );
};

const mapStateToProps = ({ multipleArticles }) => {
  return {
    articles: multipleArticles.articles,
  };
};

Feed.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Feed);
