import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Icon, Input, Button, message } from 'antd';

import styled from 'styled-components/macro';
import showMessageNetError from '../utils/showMessageNetError';

import axios from '../axios';

import { getUserSuccess } from '../actions/getUser';

const StyledSignIn = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  color: #1890ff;
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
`;

const DescriptionLink = styled.p`
  font-size: 16px;
  text-align: center;
`;

const FormItem = styled.div`
  margin-bottom: 20px;
`;

const ErrorMessage = styled.span`
  color: red;
`;

const validationSchema = Yup.object().shape({
  email: Yup.string().required('required'),
  password: Yup.string().required('required'),
});

class SignIn extends Component {
  handleSubmit = async (values, actions) => {
    const { getUser } = this.props;
    if (navigator.onLine) {
      try {
        const response = await axios.post('/users/login/', {
          user: values,
        });
        if (response.status === 200) {
          const user = await response.data.user;
          const token = await user.token;
          axios.defaults.headers.common.Authorization = `Token ${token}`;
          localStorage.setItem('token', token);
          getUser(user);
          actions.setSubmitting(false);
        }
      } catch (error) {
        actions.setSubmitting(false);
        if (error.response.status === 422) {
          actions.setErrors(error.response.data.errors);
        } else {
          showMessageNetError(error);
        }
      }
    } else {
      actions.setSubmitting(false);
      message.error('Please check your network connectivity');
    }
  };

  render() {
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/blog" />;
    }

    return (
      <StyledSignIn>
        <Container>
          <PageTitle>Sign In</PageTitle>
          <DescriptionLink>
            <Link to="/blog/signup">Need an account?</Link>
          </DescriptionLink>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, actions) => this.handleSubmit(values, actions)}
            validationSchema={validationSchema}
          >
            {({
              handleSubmit,
              values,
              handleChange,
              handleBlur,
              touched,
              isSubmitting,
              errors,
            }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <FormItem>
                    {errors['email or password'] && (
                      <ErrorMessage>
                        {`email or password ${errors['email or password']}`}
                      </ErrorMessage>
                    )}
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    {touched.email && errors.email && (
                      <ErrorMessage>{`email ${errors.email}`}</ErrorMessage>
                    )}
                  </FormItem>
                  <FormItem>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    {touched.password && errors.password && (
                      <ErrorMessage>{`password ${errors.password}`}</ErrorMessage>
                    )}
                  </FormItem>
                  <Button type="primary" htmlType="submit" disabled={isSubmitting} block>
                    sign in
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Container>
      </StyledSignIn>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    isAuthenticated: !!user.currentUser.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: values => dispatch(getUserSuccess(values)),
  };
};

SignIn.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
