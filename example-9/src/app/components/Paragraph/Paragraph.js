import React      from 'react';
import PropTypes  from 'prop-types';
import styled     from 'styled-components';

const ParagraphElement = styled.p`
  font-size: 18px;
`;

const Paragraph = (props) => (
  <ParagraphElement>{props.text}</ParagraphElement>
);

Paragraph.propTypes = {
  text: PropTypes.string.isRequired
};

export default Paragraph;
