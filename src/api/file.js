const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

function saveFile(file) {
  const reader = fs.createReadStream(file.path, {
    autoClose: true, //默认读取完毕后自动关闭
  }); // 创建可读流
  const target = path.join(__dirname, `../../static/upload/${file.name}`);
  const upStream = fs.createWriteStream(target); // 创建可写流
  reader.pipe(upStream); // 可读流通过管道写入可写流
}

router.post('/upload', async (ctx) => {
  const files = ctx.request.files.file; // 获取上传文件
  if (Array.isArray(files)) {
    for (let file of files) {
      saveFile(file);
    }
  } else {
    saveFile(files);
  }
  
  return ctx.body = '上传成功';
})

module.exports = router;