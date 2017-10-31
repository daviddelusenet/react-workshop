import React from 'react';
import './AnimationShowcase.scss';

class AnimationShowcase extends React.Component {
  constructor(props) {
    super(props);

    // Bind functions
    this.animateExampleElement = this.animateExampleElement.bind(this);
    this.resetExampleElement = this.resetExampleElement.bind(this);
  }

  componentDidMount() {
    this.setVariables();
  }

  componentWillUnmount() {
    this.tl.kill();
  }

  setVariables() {
    this.tl = new TimelineMax();
  }

  animateExampleElement() {
    this.tl.clear();
    this.tl
      .to(this.animationShowcaseExampleElement, .5, {
        backgroundColor: '#FFEB3B',
        ease: Quad.easeInOut
      })
      .to(this.animationShowcaseExampleElement, .5, {
        backgroundColor: '#9C27B0',
        ease: Quad.easeInOut
      })
      .to(this.animationShowcaseExampleElement, .5, {
        backgroundColor: '#90CAF9',
        ease: Quad.easeInOut
      })
      .to(this.animationShowcaseExampleElement, .5, {
        backgroundColor: '#0288D1',
        ease: Quad.easeInOut
      })
      .to(this.animationShowcaseExampleElement, .5, {
        backgroundColor: '#C0CA33',
        ease: Quad.easeInOut
      })
      .to(this.animationShowcaseExampleElement, .5, {
        backgroundColor: '#D32F2F',
        ease: Quad.easeInOut
      })
      .to(this.animationShowcaseExampleElement, .5, {
        backgroundColor: '#455A64',
        ease: Quad.easeInOut
      })
      .to(this.animationShowcaseExampleElement, .5, {
        backgroundColor: '#388E3C',
        ease: Quad.easeInOut
      })
      .to(this.animationShowcaseExampleElement, .5, {
        backgroundColor: '#FF5722',
        ease: Quad.easeOut
      });
  }

  resetExampleElement() {
    this.animationShowcaseExampleElement.removeAttribute('style');
  }

  render() {
    return (
      <div styleName="AnimationShowcase">
        <div styleName="AnimationShowcase__example-element" ref={div => this.animationShowcaseExampleElement = div}></div>
        <button styleName="AnimationShowcase__button" onClick={this.animateExampleElement}>Click me</button>
        <a styleName="AnimationShowcase__reset" onClick={this.resetExampleElement}>Reset</a>
      </div>
    );
  }
}

export default AnimationShowcase;
