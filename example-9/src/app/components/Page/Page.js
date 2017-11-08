import React       from 'react';
import PropTypes   from 'prop-types';
import styled      from 'styled-components';

const PageWrapper = styled.div`
  padding: 0 0 0 300px;
`;

const PageWrapperInner = styled.div`
  padding: 30px;
  background-color: ${props => {
    if (props.type === 'about') {
      return '#fff';
    } else if (props.type === 'home') {
      return 'red';
    } else {
      return 'blue';
    }
  }}
`;

const PageTitle = styled.h1`
  font-size: 40px;
`;

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageWrapper>
        <PageWrapperInner type={this.props.type}>
          {this.props.title &&
            <PageTitle>{this.props.title}</PageTitle>
          }
          {this.props.children}
        </PageWrapperInner>
      </PageWrapper>
    );
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  title: PropTypes.string,
  type: PropTypes.string
};

export default Page;
