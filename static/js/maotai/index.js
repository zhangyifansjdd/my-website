let cp = require('child_process');
let schedule = require('node-schedule');

let rule = new schedule.RecurrenceRule();
rule.hour = 11   // 设置你需要响应的时间
rule.minute = 59
let j = schedule.scheduleJob(rule, function () {
  console.log('开始执行');
  const cores = 16;
  for (let i = 0; i < cores; i++) {
    const sp = cp.spawn('node', ['./adbTask.js']);
  }
})