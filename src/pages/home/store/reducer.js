import { fromJS } from 'immutable';

const defaultState = fromJS({
  popularTopics : [
    {
      id: 1,
      title: '摄影',
      imgURL: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      href: '/c/7b2be866f564?utm_medium=index-collections&utm_source=desktop'
    },
    {
      id: 2,
      title: '旅行·在路上',
      imgURL: '//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      href: '/c/5AUzod?utm_medium=index-collections&utm_source=desktop'
    },
    {
      id: 3,
      title: '手绘',
      imgURL: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      href: '/c/8c92f845cd4d?utm_medium=index-collections&utm_source=desktop'
    },
    {
      id: 4,
      title: '简书电影',
      imgURL: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      href: '/c/1hjajt?utm_medium=index-collections&utm_source=desktop'
    },
    {
      id: 5,
      title: '读书',
      imgURL: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      href: '/c/yD9GAd?utm_medium=index-collections&utm_source=desktop'
    },
    {
      id: 6,
      title: '故事',
      imgURL: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      href: '/c/fcd7a62be697?utm_medium=index-collections&utm_source=desktop'
    },
    {
      id: 7,
      title: '自然科普',
      imgURL: '//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      href: '/c/cc7808b775b4?utm_medium=index-collections&utm_source=desktop'
    },
  ],
  morePopularTopics: {
    title: '更多热门专题',
    href: '/recommendations/collections?utm_medium=index-collections&utm_source=desktop'
  }
});

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
};

export default reducer;