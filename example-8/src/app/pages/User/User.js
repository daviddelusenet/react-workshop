import React            from 'react';
import PropTypes        from 'prop-types';

// Import child components
import Page             from 'Page/Page';
import Paragraph        from 'Paragraph/Paragraph';
import UserInformation  from 'UserInformation/UserInformation';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userData;

    for (let user of this.props.users) {
      if (user.url === this.props.match.params.username) {
        userData = user;
      }
    }

    return (
      <Page type="user">
        <UserInformation {...userData} />
        <Paragraph text="Of course it's possible to have multiple components here" />
      </Page>
    );
  }
}

User.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};

export default User;
