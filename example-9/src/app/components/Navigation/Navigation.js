import React        from 'react';
import { NavLink }  from 'react-router-dom'
import styled       from 'styled-components';

const NavigationList = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  padding: 30px;
  background-color: #000;
`;

const NavigationListItem = styled.li`
  display: block;
`;

const NavigationSectionTitle = styled.p`
  display: block;
  margin: 20px 0 0;
  font-weight: bold;
  color: #fff;
`;

const NavigationLink = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  display: block;
  text-decoration: none;
  color: #fff;

  &.active {
    text-decoration: underline;
  }
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationList>
        <NavigationListItem>
          <NavigationLink exact to="/">Home</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/about" >About</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationSectionTitle>Users</NavigationSectionTitle>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/christiaan-m" >Christiaan M</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/david-l" >David L</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/eddy-k" >Eddy K</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/heleen-e" >Heleen E</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/ruben-n" >Ruben N</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/ruben-z" >Ruben Z</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/sebastian-k" >Sebastian K</NavigationLink>
        </NavigationListItem>
      </NavigationList>
    );
  }
}

export default Navigation;
