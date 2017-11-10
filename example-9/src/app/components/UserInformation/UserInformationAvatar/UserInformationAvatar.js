import React      from 'react';
import PropTypes  from 'prop-types';
import styled     from 'styled-components';

const StyledUserInformationAvatar = styled.img`
  display: block;
  width: 200px;
  flex: 0 0 auto;
`;

const UserInformationAvatar = (props) => (
  <StyledUserInformationAvatar src={props.src} />
);

UserInformationAvatar.propTypes = {
  src: PropTypes.string.isRequired
};

export default UserInformationAvatar;
