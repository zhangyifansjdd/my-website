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
}


let path = 'E:\\Android\\SDK\\platform-tools\\';
let cmd = 'adb shell input tap 400 2030';
// let cmd = 'adb devices';
// async function main(){
//   try {
//     for (let i=0;i<10;i++){
//       let out = await exeCmd(path, cmd);
//       console.log('out:',out);
//     }
//
//   } catch (e) {
//     console.error(e);
//   }
//
// }
//
// main();
for (let i=0;i<1000;i++){
  // exeCmd(path, cmd)
  //   .then(out=>{
  //     console.log('out:',out);
  //   });
  exeCmd(path, cmd);
}



