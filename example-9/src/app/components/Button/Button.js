import React        from 'react';
import { NavLink }  from 'react-router-dom'
import Styles       from './Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul styleName="Navigation">
        <li styleName="Navigation__list-item">
          <NavLink styleName="Navigation__link" exact to="/" activeClassName={Styles['Navigation__link--is-active']}>Home</NavLink>
        </li>
        <li styleName="Navigation__list-item">
          <NavLink styleName="Navigation__link" exact to="/about" activeClassName={Styles['Navigation__link--is-active']}>About</NavLink>
        </li>
        <li styleName="Navigation__list-item">
          <p styleName="Navigation__section-title">Users</p>
        </li>
        <li styleName="Navigation__list-item">
          <NavLink styleName="Navigation__link" exact to="/user/christiaan-m" activeClassName={Styles['Navigation__link--is-active']}>Christiaan M</NavLink>
        </li>
        <li styleName="Navigation__list-item">
          <NavLink styleName="Navigation__link" exact to="/user/david-l" activeClassName={Styles['Navigation__link--is-active']}>David L</NavLink>
        </li>
        <li styleName="Navigation__list-item">
          <NavLink styleName="Navigation__link" exact to="/user/eddy-k" activeClassName={Styles['Navigation__link--is-active']}>Eddy K</NavLink>
        </li>
        <li styleName="Navigation__list-item">
          <NavLink styleName="Navigation__link" exact to="/user/heleen-e" activeClassName={Styles['Navigation__link--is-active']}>Heleen E</NavLink>
        </li>
        <li styleName="Navigation__list-item">
          <NavLink styleName="Navigation__link" exact to="/user/ruben-n" activeClassName={Styles['Navigation__link--is-active']}>Ruben N</NavLink>
        </li>
        <li styleName="Navigation__list-item">
          <NavLink styleName="Navigation__link" exact to="/user/ruben-z" activeClassName={Styles['Navigation__link--is-active']}>Ruben Z</NavLink>
        </li>
        <li styleName="Navigation__list-item">
          <NavLink styleName="Navigation__link" exact to="/user/sebastian-k" activeClassName={Styles['Navigation__link--is-active']}>Sebastian K</NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;
