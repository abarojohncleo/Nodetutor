const os = require('os');
// using specific built in module in os
// const {} = require('os')

// info of current user

const user = os.userInfo();

console.log(user); //current user
console.log(`The system uptime is ${os.uptime()} seconds`); //system uptime in seconds

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
};

console.log(currentOs)