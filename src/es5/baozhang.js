console.log('开始工具')

class aaa{

}

function sleep(ms) {
  return new Promise(resolve =>
    setTimeout(resolve, ms)
  )
};

async function start(){
  await sleep(3000);
}

start()
  .then(()=>{
    console.log('aaaaaaa');
  });