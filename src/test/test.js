function fun1() {
  let count = 0;
  for (let i = 0; i < 10000000; i++) {
    count++;
  }
  console.log(count);
}

function fun2() {

}

let start = new Date().getTime();
let count = 0;
for (let i = 0; i < 10000000; i++) {
  count++;
}
console.log(count);

fun1();
let end = new Date().getTime();
console.log(end - start);