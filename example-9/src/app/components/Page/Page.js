import React       from 'react';
import PropTypes   from 'prop-types';
import ClassNames  from 'classnames';
import Styles      from './Page.scss';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const PageInnerClasses = ClassNames({
      [Styles['Page__inner']]: true,
      [Styles[`Page__inner--${this.props.type}`]]: this.props.type
    });

    return (
      <div styleName="Page">
        <div className={PageInnerClasses}>
          {this.props.title &&
            <h1 styleName="Page__title">{this.props.title}</h1>
          }
          {this.props.children}
        </div>
      </div>
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
