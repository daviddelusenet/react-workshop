import React      from 'react';
import PropTypes  from 'prop-types';

// Import child components
import Page       from 'Page/Page';
import Paragraph  from 'Paragraph/Paragraph';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page type="home" title="This is the Home page, so amazing">
        <Paragraph text="We did it!" />
      </Page>
    );
  }
}

export default Home;
