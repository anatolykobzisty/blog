import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/macro';

const ErrorMessages = styled.ul`
  color: red;
`;

const BackendErrorMessages = ({ backendErrors }) => {
  const errorMessages = Object.keys(backendErrors).map(name => {
    const messages = backendErrors[name].join(' ');
    return `${name} ${messages}`;
  });
  return (
    <ErrorMessages>
      {errorMessages.map(errorMessage => (
        <li key={errorMessage}>{errorMessage}</li>
      ))}
    </ErrorMessages>
  );
};

BackendErrorMessages.propTypes = {
  backendErrors: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default BackendErrorMessages;
