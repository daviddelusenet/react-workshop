import React      from 'react';
import PropTypes  from 'prop-types';
import styled     from 'styled-components';

// Import child components
import UserInformationAvatar  from './UserInformationAvatar/UserInformationAvatar';
import UserInformationName    from './UserInformationName/UserInformationName';

const UserInformationWrapper = styled.div`
  display: flex;
  margin: 0 0 50px;
  flex-wrap: nowrap;
  align-items: center;
`;

class UserInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UserInformationWrapper>
        <UserInformationAvatar src={this.props.avatar} />
        <UserInformationName name={this.props.name} />
      </UserInformationWrapper>
    );
  }
}

UserInformation.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default UserInformation;
