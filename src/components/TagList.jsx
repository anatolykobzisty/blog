import React from 'react';
import { PropTypes } from 'prop-types';

import styled from 'styled-components/macro';

const StyledTaglist = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  color: white;
  background-color: #1890ff;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const TagList = ({ tags }) => {
  return (
    <>
      <StyledTaglist>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        <Tag>test</Tag>
      </StyledTaglist>
    </>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagList;
