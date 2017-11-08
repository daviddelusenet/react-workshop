import React       from 'react';
import PropTypes   from 'prop-types';
import {
  BrowserRouter as Router,
  Route
}                  from 'react-router-dom'

// Import pages
import About       from  'About/About';
import Home        from  'Home/Home';
import User        from  'User/User';

// Import child components
import Navigation  from 'Navigation/Navigation';

class Routing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:username" render={props => (
            <User {...props} users={this.props.users} />
          )} />
        </div>
      </Router>
    );
  }
}

Routing.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};

export default Routing;
