import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';

const navigationSectionTitle = styled.p`
  display: block;
  margin: 20px 0 0;
  font-weight: bold;
  color: #fff;
`;

const NavigationSectionTitle = (props) => (
  <navigationSectionTitle>{props.children}</navigationSectionTitle>
);

NavigationSectionTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default NavigationSectionTitle;
