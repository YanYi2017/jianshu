import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { CarouselWrapper } from '../style';

class Carousel extends PureComponent {
  render() {
    return (
      <CarouselWrapper>
        <Link to="/detail/0001">
          <img src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
        </Link>
      </CarouselWrapper>
    );
  }
}

export default Carousel;