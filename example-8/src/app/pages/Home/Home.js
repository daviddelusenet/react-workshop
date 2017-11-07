import React from 'react';
import './Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Page">
        <div className="Page__inner" styleName="Home">This is the Home page, so amazing!</div>
      </div>
    );
  }
}

export default Home;
