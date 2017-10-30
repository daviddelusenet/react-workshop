// Import React stuff
import React from 'react';
import ReactDOM from 'react-dom';

// Import application
import HelloWorld from './app/HelloWorld';

ReactDOM.render(
  <HelloWorld name="John" />,
  document.querySelector('#main')
);
