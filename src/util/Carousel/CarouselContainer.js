import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const StyledContainer = styled.div`
  height: 100%;
  &.scrollX-list {
    display: flex;
    transform: translateX(${props => {
      const { num, realPosition } = props;

      if (num > 1) {
        return ((realPosition + 1) * -100);
      } else {
        return 0;
      }
    }}%);
    &.scrollX-enter {
      transform: translateX(${props => (props.fromPosition + 1) * -100}%);
    }
    &.scrollX-enter-active {
      transition: transform ${props => props.animationSpeed}ms ease;
      transform: translateX(${props => (props.toPosition + 1) * -100}%);
    }
    &.scrollX-enter-done {
      transform: translateX(${props => (props.toPosition + 1) * -100}%);
    }
  }
`;

const CarouselItem = styled.div`
  &.scrollX {
    flex: 1 0 100%;
  }
  &.fade {
    position: absolute;
    opacity: 0;
    transition: opacity ${props => props.animationSpeed}ms ease;
  }
  &.fade.active {
    opacity: 1;
  }
  width: 100%;
  height: 100%;
  * {
    display: block;
    width: 100%;
    height: 100%;
  }
  img {
    object-fit: cover;
  }
`;

function CarouselContainer({
  children, effect, animationSpeed, realPosition, fromPosition, toPosition, animating,
  onAnimated
}) {
  const num = children.length;
  return (
    <CSSTransition
      in={animating}
      timeout={animationSpeed}
      appear={true}
      classNames={effect}
      onEntered={onAnimated}
    >
      <StyledContainer
        className={`${effect}-list`}
        num={num}
        animationSpeed={animationSpeed}
        realPosition={realPosition}
        fromPosition={fromPosition}
        toPosition={toPosition}
      >
        {React.Children.map(children, (child, i) => (
          <CarouselItem
            className={i === realPosition ? `${effect} active` : effect}
            animationSpeed={animationSpeed}
          >{child}</CarouselItem>
        ))}
      </StyledContainer>
    </CSSTransition>
  );
}

CarouselContainer.propTypes = {
  children: PropTypes.node.isRequired,
  effect: PropTypes.oneOf(['scrollX', 'fade']),
  animationSpeed: PropTypes.number.isRequired,
  realPosition: PropTypes.number.isRequired,
  fromPosition: PropTypes.number.isRequired,
  toPosition: PropTypes.number.isRequired,
  animating: PropTypes.bool.isRequired,
  onAnimated: PropTypes.func.isRequired
};

export default CarouselContainer;