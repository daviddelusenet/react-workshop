import React      from 'react';
import PropTypes  from 'prop-types';
import styled     from 'styled-components';

const StyledPageTitle = styled.h1`
  font-size: 40px;
`;

const PageTitle = (props) => (
  <StyledPageTitle>{props.text}</StyledPageTitle>
);

PageTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default PageTitle;
