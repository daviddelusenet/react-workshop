import React       from 'react';
import PropTypes   from 'prop-types';
import styled      from 'styled-components';

// Import child components
import PageTitle         from './PageTitle/PageTitle';
import PageWrapperInner  from './PageWrapperInner/PageWrapperInner';

const PageWrapper = styled.div`
  padding: 0 0 0 300px;
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
            <PageTitle text={this.props.title} />
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
