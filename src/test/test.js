let config ={
  statue: 'success',
  title: '密码重置成功',
  content: '请妥善保管您的新密码，感谢您的使用',
  buttonTxt: '确定',
  buttonAction: () => {
     return '/website/automatic/pages/servicepwdreset.html';
  }
}
let copyConfig = {};
for (let key in config){
  console.log(key);
  copyConfig['_'+key]=config[key];
}

console.log(copyConfig);

