import React    from 'react';

// Import child components
import Routing  from './Routing';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [{
        "name": "David de Lusenet",
        "avatar": "/img/avatars/david-l.png",
        "url": "david-l"
      }, {
        "name": "Sebastian Kersten",
        "avatar": "/img/avatars/sebastian-k.png",
        "url": "sebastian-k"
      }, {
        "name": "Heleen Emanuel",
        "avatar": "/img/avatars/heleen-e.png",
        "url": "heleen-e"
      }, {
        "name": "Ruben Nascimento",
        "avatar": "/img/avatars/ruben-n.png",
        "url": "ruben-n"
      }, {
        "name": "Ruben Zijlstra",
        "avatar": "/img/avatars/ruben-z.png",
        "url": "ruben-z"
      }, {
        "name": "Eddy Koek",
        "avatar": "/img/avatars/eddy-k.png",
        "url": "eddy-k"
      }, {
        "name": "Christiaan Mutschelknauss",
        "avatar": "/img/avatars/christiaan-m.png",
        "url": "christiaan-m"
      }]
    }
  }

  render() {
    return (
      <Routing users={this.state.users} />
    );
  }
}

export default App;
