import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import pick from 'lodash/pick';
import size from 'lodash/size';
import { message, Input, Button } from 'antd';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';

import styled from 'styled-components/macro';
import showMessageNetError from '../utils/showMessageNetError';

import axios from '../axios';

import { getArticleSuccess, getArticle } from '../actions/getArticle';
import cleanArticle from '../actions/cleanArticle';

const { TextArea } = Input;

const StyledEditArticle = styled.div`
  display: flex;
  justify-content: center;
`;

const ArticleForm = styled.div`
  margin-top: 35px;
`;

const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  margin-bottom: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ErrorMessage = styled.span`
  color: red;
`;

const TagInput = ({ field, ...props }) => {
  return (
    <>
      <Input {...field} {...props} />
    </>
  );
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('required'),
  description: Yup.string().required('required'),
  body: Yup.string().required('required'),
  tagList: Yup.array().of(Yup.string()),
});

class EditArticle extends Component {
  state = {
    isSubmitted: false,
  };

  componentDidMount = () => {
    const { match, fetchArticle } = this.props;
    const { slug } = match.params;
    fetchArticle(slug);
  };

  setUpdateValuesForm() {
    const { article } = this.props;
    if (size(article)) {
      const updateValuesForm = pick(article, ['title', 'description', 'body', 'tagList']);
      return updateValuesForm;
    }
    return {
      title: '',
      description: '',
      body: '',
      tagList: [],
    };
  }

  handleSubmit = async (values, actions) => {
    const { match, updateArticle } = this.props;
    const { slug } = match.params;
    if (navigator.onLine) {
      try {
        const response = await axios.put(`/articles/${slug}`, { article: values });
        if (response.status === 200) {
          const article = await response.data.article;
          updateArticle(article);
          this.setState({ isSubmitted: true });
        }
      } catch (error) {
        actions.setSubmitting(false);
        this.setState({ isSubmitted: false });
        if (error.response.status === 422) {
          actions.setErrors(error.response.data.errors);
        } else {
          showMessageNetError(error);
        }
      }
    } else {
      actions.setSubmitting(false);
      this.setState({ isSubmitted: false });
      message.error('Please check your network connectivity');
    }
  };

  render() {
    const { article } = this.props;
    const { isSubmitted } = this.state;
    const token = localStorage.getItem('token');

    if (!token) {
      return <Redirect to="/blog/" />;
    }

    if (isSubmitted && size(article)) {
      return <Redirect to={`/blog/articles/${article.slug}`} />;
    }

    return (
      <>
        <StyledEditArticle>
          <ArticleForm>
            <Container>
              <Formik
                initialValues={this.setUpdateValuesForm()}
                onSubmit={(values, actions) => this.handleSubmit(values, actions)}
                validationSchema={validationSchema}
              >
                {({
                  handleSubmit,
                  values,
                  handleChange,
                  handleBlur,
                  touched,
                  errors,
                  isSubmitting,
                }) => {
                  return (
                    <Form onSubmit={handleSubmit}>
                      <FormItem>
                        <Input
                          name="title"
                          placeholder="Article Title"
                          value={values.title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.title && errors.title && (
                          <ErrorMessage>{`title ${errors.title}`}</ErrorMessage>
                        )}
                      </FormItem>
                      <FormItem>
                        <Input
                          name="description"
                          placeholder="What is this article about?"
                          value={values.description}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.description && errors.description && (
                          <ErrorMessage>{`description ${errors.description}`}</ErrorMessage>
                        )}
                      </FormItem>
                      <FormItem>
                        <TextArea
                          name="body"
                          placeholder="Write your article in (markdown)"
                          rows={10}
                          allowClear
                          value={values.body}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.body && errors.body && (
                          <ErrorMessage>{`body ${errors.body}`}</ErrorMessage>
                        )}
                      </FormItem>
                      <FieldArray
                        name="tagList"
                        render={arrayHelpers => (
                          <div>
                            {values.tagList && values.tagList.length > 0 ? (
                              values.tagList.map((tag, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <FormItem key={index}>
                                  <Field
                                    name={`tagList.${index}`}
                                    placeholder="Enter tags"
                                    component={TagInput}
                                  />
                                  <Button onClick={() => arrayHelpers.remove(index)}>-</Button>
                                  <Button onClick={() => arrayHelpers.insert(index, '')}>+</Button>
                                </FormItem>
                              ))
                            ) : (
                              <Button type="button" onClick={() => arrayHelpers.push('')}>
                                Add a tag
                              </Button>
                            )}
                          </div>
                        )}
                      />
                      <ButtonWrap>
                        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                          Publish Article
                        </Button>
                      </ButtonWrap>
                    </Form>
                  );
                }}
              </Formik>
            </Container>
          </ArticleForm>
        </StyledEditArticle>
      </>
    );
  }
}

const mapStateToProps = ({ singleArticle }) => {
  return {
    article: singleArticle.article,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateArticle: values => dispatch(getArticleSuccess(values)),
    fetchArticle: slug => dispatch(getArticle(slug)),
    emptyArticle: () => dispatch(cleanArticle()),
  };
};

EditArticle.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  article: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired,
};

TagInput.propTypes = {
  field: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
