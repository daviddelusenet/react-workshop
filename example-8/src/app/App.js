import React    from 'react';

// Import child components
import Routing  from './Routing';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routing />
    );
  }
}

export default App;
