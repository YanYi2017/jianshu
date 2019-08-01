import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CarouselContainer from './CarouselContainer';
import Dots from './Dots';

const StyledCarousel = styled.div`
  position: relative;
  overflow:hidden;
  border-radius: 6px;
  height: 100%;
  padding-bottom: 40%;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  top: 40%;
  width: 6%;
  height: 20%;
  background: rgba(0, 0, 0, .4);
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
`;

const PrevButton = styled(Button)`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  left: 0;
`;

const NextButton = styled(Button)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  right: 0;
`;

class Carousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      realPosition: 0,
      fromPosition: 0,
      toPosition: 0,
      showButton: false,
      animating: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.goTo = this.goTo.bind(this);
    this.onAnimated = this.onAnimated.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  render() {
    const { children, className, effect = 'scrollX', indicators = true, animationSpeed = 700 } = this.props;
    const { realPosition, fromPosition, toPosition, showButton, animating } = this.state;
    let newChildren = React.Children.map(children, child => React.cloneElement(child));
    const length = newChildren.length;
    if (length > 1 && effect === 'scrollX') {
      newChildren.unshift(children[length - 1]);  //将最后一张图片的拷贝插入到数组首位
      newChildren.push(children[0]);  //将第一张图片的拷贝放入数组末尾
    }

    return (
      <StyledCarousel
        className={className}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Wrapper>
          <CarouselContainer
            effect={effect}
            animationSpeed = {animationSpeed}
            realPosition={realPosition}
            fromPosition={fromPosition}
            toPosition={toPosition}
            animating={animating}
            onAnimated={this.onAnimated}
          >
            {newChildren}
          </CarouselContainer>
        </Wrapper>

        {
          length > 1 && (
            <React.Fragment>
              {
                indicators && (
                  <Dots
                    length={children.length}
                    realPosition={realPosition}
                    onClick={this.goTo}
                  />
                )
              }
              {
                showButton && (
                  <Fragment>
                    <PrevButton onClick={this.prev}>{'<'}</PrevButton>
                    <NextButton onClick={this.next}>{'>'}</NextButton>
                  </Fragment>
                )
              }
            </React.Fragment>
          )
        }
      </StyledCarousel>
    );
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  handleMouseEnter() {
    this.clearTimer();
    this.setState({
      showButton: true
    });
  }

  handleMouseLeave() {
    this.setTimer();
    this.setState({
      showButton: false
    });
  }

  prev() {
    const { realPosition } = this.state;
    this.goTo(realPosition - 1);
  }

  next() {
    const { realPosition } = this.state;
    this.goTo(realPosition + 1);
  }

  goTo(to) {
    const { realPosition, animating } = this.state;
    const numbItems = this.props.children.length || 1;
    let newPosition = to;
    if (animating) return;
    if (to < 0) {
      newPosition = numbItems - 1;
    }
    if (to > numbItems - 1) {
      newPosition = 0;
    }
    this.setState({
      realPosition: newPosition,
      fromPosition: realPosition,
      toPosition: to,
      animating: true
    });
  }

  onAnimated() {
    this.setState({
      animating: false
    });
  }

  setTimer() {
    const { autoplay, autoplaySpeed = 5000 } = this.props;
    if (autoplay) {
      this.timer = window.setInterval(this.next, autoplaySpeed);
    }
  }

  clearTimer() {
    window.clearInterval(this.timer);
  }
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
  indicators: PropTypes.bool,
  animationSpeed: PropTypes.number,
  effect: PropTypes.oneOf(['scrollX', 'fade'])
};

export default Carousel;