import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

import { AuthorWrapper, AuthorInfo } from '../style';

class Author extends PureComponent {
  render() {
    const { author } = this.props;

    return (
      <AuthorWrapper>
        <a href={author.get('authorURL')}>
          <img src={author.get('avatarURL')} alt="avatar"/>
        </a>
        <AuthorInfo>
          <a href={author.get('authorURL')}>{author.get('nickName')}</a>
          <img src="//cdn2.jianshu.io/assets/badges/excellent-34cdda4de26ee9910f190239ffecf886c24045136468fa26f041b0156a143cd9.png" alt="Excellent"/>
          <button>
            <span>+</span>关注
          </button>
          <div className="meta">
            <span className="jsd-meta">
              <span className="iconfont">&#xe600;</span>
              <span>{author.get('diamond')}</span>
            </span>
            <span>{author.get('publishTime')}</span>
            <span>字数 {author.get('wordCount')}</span>
            <span>阅读 {author.get('viewsCount')}</span>
            <span>评论 {author.get('commentsCount')}</span>
            <span>喜欢 {author.get('likeCount')}</span>
          </div>
        </AuthorInfo>
      </AuthorWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  author: state.getIn(['postReducer', 'author'])
});

export default connect(mapStateToProps, null)(Author);