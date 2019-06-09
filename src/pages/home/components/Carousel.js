import React, { PureComponent } from 'react';
import { CarouselWrapper } from '../style';

class Carousel extends PureComponent {
  render() {
    return (
      <CarouselWrapper>
        <a target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/c/c92f147a6db4/r?utm_medium=index-banner&utm_source=desktop">
          <img src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
        </a>
      </CarouselWrapper>
    );
  }
}

export default Carousel;