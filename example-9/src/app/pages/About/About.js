import React      from 'react';
import PropTypes  from 'prop-types';

// Import child components
import Page       from 'Page/Page';
import Paragraph  from 'Paragraph/Paragraph';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page type="about" title="This is the About page, such perfection">
        <Paragraph text="Put whatever text you want in here!" />
      </Page>
    );
  }
}

export default About;
