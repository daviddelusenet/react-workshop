import React        from 'react';
import styled       from 'styled-components';

// Import child components
import NavigationLink          from './NavigationLink/NavigationLink';
import NavigationListItem      from './NavigationListItem/NavigationListItem';
import NavigationSectionTitle  from './NavigationSectionTitle/NavigationSectionTitle';

const NavigationList = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  padding: 30px;
  background-color: #000;
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationList>
        <NavigationListItem>
          <NavigationLink exact to="/" text="Home" />
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/about" text="About" />
        </NavigationListItem>
        <NavigationListItem>
          <NavigationSectionTitle text="Users" />
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/christiaan-m" text="Christiaan M" />
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/david-l" text="David L" />
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/eddy-k" text="Eddy K" />
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/heleen-e" text="Heleen E" />
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/ruben-n" text="Ruben N" />
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/ruben-z" text="Ruben Z" />
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink exact to="/user/sebastian-k" text="Sebastian K" />
        </NavigationListItem>
      </NavigationList>
    );
  }
}

export default Navigation;
