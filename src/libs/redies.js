const {promisify} = require("util");
let Redis = require('ioredis');
let client = new Redis(6379, '82.156.87.86');


const redisFunctionList = Object.keys(Object.getPrototypeOf(client))
const promisifiedRedis = redisFunctionList.reduce((acc, functionName) => {
  acc[functionName] = promisify(client[functionName]).bind(client)
  return acc
}, {})

module.exports = promisifiedRedis