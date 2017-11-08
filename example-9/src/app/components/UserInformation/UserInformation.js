import React      from 'react';
import PropTypes  from 'prop-types';
import './UserInformation.scss';

class UserInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="UserInformation">
        <img styleName="UserInformation__avatar" src={this.props.avatar} />
        <p styleName="UserInformation__name">{this.props.name}</p>
      </div>
    );
  }
}

UserInformation.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default UserInformation;
