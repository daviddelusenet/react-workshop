import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';

const StyledNavigationSectionTitle = styled.p`
  display: block;
  margin: 20px 0 0;
  font-weight: bold;
  color: #fff;
`;

const NavigationSectionTitle = (props) => (
  <StyledNavigationSectionTitle>{props.children}</StyledNavigationSectionTitle>
);

NavigationSectionTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export default NavigationSectionTitle;
