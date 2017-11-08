import React      from 'react';
import PropTypes  from 'prop-types';
import styled     from 'styled-components';

const UserInformationWrapper = styled.div`
  display: flex;
  margin: 0 0 50px;
  flex-wrap: nowrap;
  align-items: center;
`;

const UserInformationAvatar = styled.img`
  display: block;
  width: 200px;
  flex: 0 0 auto;
`;

const UserInformationName = styled.p`
  padding: 0 0 0 30px;
  font-size: 48px;
  flex: 1 1 auto;
`;

class UserInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UserInformationWrapper>
        <UserInformationAvatar src={this.props.avatar} />
        <UserInformationName>{this.props.name}</UserInformationName>
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
