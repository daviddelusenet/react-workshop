// Import React stuff
import React from 'react';
import ReactDOM from 'react-dom';

// Import shared styles
import './styles/global/global.scss';

// Import application
import App from './app/App';

ReactDOM.render(
  <App />,
  document.querySelector('#main')
);
