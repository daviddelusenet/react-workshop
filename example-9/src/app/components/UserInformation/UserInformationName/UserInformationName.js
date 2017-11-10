import React      from 'react';
import PropTypes  from 'prop-types';
import styled     from 'styled-components';

const StyledUserInformationName = styled.p`
  padding: 0 0 0 30px;
  font-size: 48px;
  flex: 1 1 auto;
`;

const UserInformationName = (props) => (
  <StyledUserInformationName>{props.name}</StyledUserInformationName>
);

UserInformationName.propTypes = {
  name: PropTypes.string.isRequired
};

export default UserInformationName;
