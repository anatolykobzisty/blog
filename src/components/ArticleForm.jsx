import React from 'react';
import { PropTypes } from 'prop-types';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Input, Button } from 'antd';
import * as Yup from 'yup';

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

const ArticleForm = ({
  handleFormSubmit,
  updateValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  },
}) => {
  return (
    <>
      <StyledArticleForm>
        <Container>
          <Formik
            initialValues={updateValues}
            onSubmit={(values, actions) => handleFormSubmit(values, actions)}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, values, handleChange, handleBlur, touched, errors }) => {
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
  error: PropTypes.objectOf(PropTypes.objectOf(PropTypes.array)),
  updateValues: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    tagList: PropTypes.array,
  }),
};

TagInput.propTypes = {
  field: PropTypes.objectOf(PropTypes.any).isRequired,
};

ArticleForm.defaultProps = {
  updateValues: {},
  error: null,
};

export default ArticleForm;
