import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Icon, Input, Button } from 'antd';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import styled from 'styled-components/macro';

import { register } from '../actions/register';
import { login } from '../actions/login';

const StyledAuthentication = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 320px;
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

const ErrorMessage = styled.div`
  color: red;
`;

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .matches(
      /^(?=^.{8,40}$)[0-9a-zA-Z](?=.*[A-Z])(?=.*[0-9])/,
      'The password has to contain: A-Z, a-z, 0-9'
    )
    .required('Required'),
});

class Authentication extends Component {
  handleFormSubmit = (values, isSignUp) => {
    const { authLogin, authRegister } = this.props;
    if (isSignUp) {
      authRegister(values);
    } else {
      authLogin(values);
    }
  };

  render() {
    const { match, isAutheticated, isLoading, authErrors } = this.props;
    const isSignUp = match.path === '/blog/signup';
    const pageTitle = isSignUp ? 'Sign Up' : 'Sign In';
    const descriptionLink = isSignUp ? '/blog/login' : '/blog/signup';
    const descriptionText = isSignUp ? 'Have an account?' : 'Need an account?';
    const errorMsgUsername = authErrors.username ? authErrors.username[0] : null;
    const errorMsgEmail = authErrors.email ? authErrors.email[0] : null;
    const errorMsgLogin = authErrors['email or password']
      ? authErrors['email or password'][0]
      : null;

    if (isAutheticated) {
      return <Redirect to="/blog" />;
    }

    return (
      <StyledAuthentication>
        <Container>
          <PageTitle>{pageTitle}</PageTitle>
          <DescriptionLink>
            <Link to={descriptionLink}>{descriptionText}</Link>
          </DescriptionLink>
          <Formik
            initialValues={{
              username: 'noname2020',
              email: 'noname2020@mail.com',
              password: '8Nkl8dsp',
            }}
            onSubmit={values => this.handleFormSubmit(values, isSignUp)}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, values, handleChange, handleBlur, touched, errors }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  {isSignUp && (
                    <FormItem>
                      <Input
                        type="user"
                        name="username"
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      />
                      {errorMsgUsername && (
                        <ErrorMessage>Username {errorMsgUsername} </ErrorMessage>
                      )}
                      {touched.username && errors.username && (
                        <ErrorMessage>{errors.username}</ErrorMessage>
                      )}
                    </FormItem>
                  )}
                  <FormItem>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    {errorMsgEmail && <ErrorMessage>Email {errorMsgEmail} </ErrorMessage>}
                    {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
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
                    {errorMsgLogin && (
                      <ErrorMessage>Email or password {errorMsgLogin} </ErrorMessage>
                    )}
                    {touched.password && errors.password && (
                      <ErrorMessage>{errors.password}</ErrorMessage>
                    )}
                  </FormItem>
                  <Button type="primary" htmlType="submit" loading={isLoading} block>
                    {pageTitle}
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Container>
      </StyledAuthentication>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isAutheticated: !!auth.token,
    isLoading: auth.loading,
    authErrors: auth.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authLogin: values => dispatch(login(values)),
    authRegister: values => dispatch(register(values)),
  };
};

Authentication.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  isAutheticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  authErrors: PropTypes.objectOf(PropTypes.array).isRequired,
  authLogin: PropTypes.func.isRequired,
  authRegister: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
