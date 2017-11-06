import React from 'react';
import './About.scss';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Page">
        <div className="Page__inner" styleName="About">This is the About page, such perfection!</div>
      </div>
    );
  }
}

export default About;
