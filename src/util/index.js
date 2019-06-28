export const validate = (value, type) => {
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
};