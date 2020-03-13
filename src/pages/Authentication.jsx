import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Icon, Input, Button } from 'antd';
import { Formik, Form } from 'formik';

import styled from 'styled-components/macro';

import BackendErrorMessages from '../components/BackendErrorMessages';

import { register } from '../actions/register';
import { login } from '../actions/login';

const StyledAuthentication = styled.div`
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
    const { match, isAuthenticated, error } = this.props;
    const isSignUp = match.path === '/blog/signup';
    const pageTitle = isSignUp ? 'Sign Up' : 'Sign In';
    const descriptionLink = isSignUp ? '/blog/login' : '/blog/signup';
    const descriptionText = isSignUp ? 'Have an account?' : 'Need an account?';

    if (isAuthenticated) {
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
              username: '',
              email: '',
              password: '',
            }}
            onSubmit={values => this.handleFormSubmit(values, isSignUp)}
          >
            {({ handleSubmit, values, handleChange, handleBlur }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  {isSignUp && error && !error.errors['email or password'] && (
                    <BackendErrorMessages backendErrors={error.errors} />
                  )}
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
                    </FormItem>
                  )}
                  {!isSignUp && error && error.errors['email or password'] && (
                    <BackendErrorMessages backendErrors={error.errors} />
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
                  </FormItem>
                  <Button type="primary" htmlType="submit" block>
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
    isAuthenticated: !!auth.currentUser.token,
    isLoading: auth.loading,
    error: auth.error,
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
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.objectOf(PropTypes.objectOf(PropTypes.array)),
  authLogin: PropTypes.func.isRequired,
  authRegister: PropTypes.func.isRequired,
};

Authentication.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
