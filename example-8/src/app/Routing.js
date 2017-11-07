import React       from 'react';
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
            <User {...props} />
          )} />
        </div>
      </Router>
    );
  }
}

export default Routing;
