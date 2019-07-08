const config = {
  serverHost: 'http://127.0.0.1:7300/mock/5d130b34bbc69c047c619b06/jianshu'
};

const _util = {
  // 获取服务器地址
  getServerURL(path) {
    return config.serverHost + path;
  },

  // 验证功能，支持非空、昵称格式和手机号判断
  validate(value, type) {
    const valueTrimmed = value.trim();

    const nicknameRegExp = /^[\u4E00-\u9FA5A-za-z0-9_]{2,15}$/;

    // 非空验证
    if ('required' === type) {
      return !!valueTrimmed;
    }

    // 昵称格式验证
    if ('nickname' === type) {
      return nicknameRegExp.test(valueTrimmed);
    }

    // 手机号验证
    if ('phone' === type) {
      return /^1\d{10}$/.test(value);
    }
  }
};

export default _util;