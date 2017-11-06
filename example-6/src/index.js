// Import React stuff
import React     from 'react';
import ReactDOM  from 'react-dom';

// Import shared libraries
import 'gsap';

// Import application
import App       from './app/App';

// Import shared styles
import './styles/global/global.scss';

ReactDOM.render(
  <App />,
  document.querySelector('#main')
);
