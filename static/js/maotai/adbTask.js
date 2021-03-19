let process = require('child_process');

function exeCmd(path, cmd) {
  return new Promise((resolve, reject) => {
    process.exec(`${path}${cmd}`, function (error, stdout, stderr) {
      console.log(stdout);
      if (error || stderr) {
        reject(error || stderr);
      } else {
        resolve(stdout);
      }
    });
  })
}

function exeCmdSync(path, cmd) {
  let out = process.execSync(`${path}${cmd}`);
  return out;
}


let path = 'E:\\Android\\SDK\\platform-tools\\';
// let cmd = 'adb shell input tap 400 2030';
let cmd = 'adb shell input tap 900 2200';
// for (let i=0;i<1000;i++){
//   exeCmdSync(path, cmd);
// }
while (true){
  exeCmdSync(path, cmd);
}