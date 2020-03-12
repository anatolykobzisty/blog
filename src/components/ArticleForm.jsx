import React from 'react';
import { PropTypes } from 'prop-types';

import { Input, Button } from 'antd';

import { Formik, Form, Field, FieldArray } from 'formik';

import styled from 'styled-components/macro';

const { TextArea } = Input;

const StyledArticleForm = styled.div`
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

const TagInput = ({ field, ...props }) => {
  return (
    <>
      <Input {...field} {...props} />
    </>
  );
};

const ArticleForm = ({ handleFormSubmit }) => {
  return (
    <>
      <StyledArticleForm>
        <Container>
          <Formik
            initialValues={{
              title: '',
              description: '',
              body: '',
              tagList: [],
            }}
            onSubmit={values => handleFormSubmit(values)}
          >
            {({ handleSubmit, values, handleChange, handleBlur }) => {
              return (
                // BackendErrorMessages
                <Form onSubmit={handleSubmit}>
                  <FormItem>
                    <Input
                      name="title"
                      placeholder="Article Title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormItem>
                  <FormItem>
                    <Input
                      name="description"
                      placeholder="What is this article about?"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
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
                    <Button type="primary" htmlType="submit">
                      Publish Article
                    </Button>
                  </ButtonWrap>
                </Form>
              );
            }}
          </Formik>
        </Container>
      </StyledArticleForm>
    </>
  );
};

ArticleForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

TagInput.propTypes = {
  field: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ArticleForm;
