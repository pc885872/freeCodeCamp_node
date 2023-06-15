const os = require('os')

//User Info
console.log(os.userInfo())

//uptime in second
console.log(os.uptime())

const currentOs = {
    type : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)