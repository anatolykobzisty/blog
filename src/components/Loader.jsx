import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components/macro';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <Container>
      <Spin size="large" tip="Loading..." />
    </Container>
  );
};

export default Loader;
