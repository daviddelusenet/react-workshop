import React      from 'react';
import PropTypes  from 'prop-types';
import styled     from 'styled-components';

const StyledPageWrapperInner = styled.div`
  padding: 30px;
  background-color: ${props => {
    if (props.type === 'about') {
      return '#fff';
    } else if (props.type === 'home') {
      return 'red';
    } else {
      return 'blue';
    }
  }}
`;

const PageWrapperInner = (props) => (
  <StyledPageWrapperInner type={props.type}>{props.children}</StyledPageWrapperInner>
);

PageWrapperInner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  type: PropTypes.string
};

export default PageWrapperInner;
