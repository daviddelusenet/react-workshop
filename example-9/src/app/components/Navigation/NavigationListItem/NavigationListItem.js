import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';

const StyledNavigationListItem = styled.li`
  display: block;
`;

const NavigationListItem = (props) => (
  <StyledNavigationListItem>{props.children}</StyledNavigationListItem>
);

NavigationListItem.propTypes = {
  children: PropTypes.any.isRequired
};

export default NavigationListItem;
