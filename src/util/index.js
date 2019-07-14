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

    const nicknameRegExp = /^[\u4E00-\u9FA5A-Za-z0-9_]{2,15}$/;
    const phoneRegExp = /^1\d{10}$/;
    const passwordRegExp = /^[A-Za-z0-9]{6,12}$/;

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
      return phoneRegExp.test(value);
    }

    // 密码验证
    if ('password' === type) {
      return passwordRegExp.test(value);
    }
  }
};

export default _util;