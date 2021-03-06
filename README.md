# **仿简书前端项目**
项目刚开始是跟着慕课实战课程做的，但课程主要是讲解React相关技术，只实现了首页、登录注册页、文章页小部分功能。在此基础上，我进一步进行升级，使用响应式设计，添加了轮播图、分页、加载占位内容、模式切换等模块，并使用Easy Mock进行数据模拟，尽可能的重现简书官网的样式和功能。

## **使用的技术**
React全家桶，包括React、Redux、React Router、Redux Thunk、React Transition Group等。

## **项目启动**
```
$ git clone https://github.com/YanYi2017/jianshu.git
$ cd jianshu && npm install
$ npm start
# 访问http://localhost:3000/
```

## **进度**
目前完成了首页、登录页、注册页、文章页的大部分功能。

## **说明**
项目使用Easy Mock模拟数据接口。开发时，使用的是本地部署的服务器。为了方便使用，上传到GitHub的版本使用的是部署在官网服务器上的接口。如果出现网络错误，很可能是官网服务器又挂了，要等一段时间（不定）才能好。