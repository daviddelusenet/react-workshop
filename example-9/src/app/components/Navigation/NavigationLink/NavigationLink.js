import React        from 'react';
import { NavLink }  from 'react-router-dom'
import PropTypes    from 'prop-types';
import styled       from 'styled-components';

const StyledNavigationLink = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  display: block;
  text-decoration: none;
  color: #fff;

  &.active {
    text-decoration: underline;
  }
`;

const NavigationLink = (props) => (
  <StyledNavigationLink exact={props.exact} to={props.to}>{props.text}</StyledNavigationLink>
);

NavigationLink.propTypes = {
  exact: PropTypes.bool,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default NavigationLink;
