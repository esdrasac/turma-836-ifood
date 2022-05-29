const os = require('os')


console.log('CPUs:',os.cpus())
console.log('Arquitetura: ',os.arch())
console.log('Memória total:',os.totalmem())
console.log('Memória disponível:', os.freemem())
console.log('Network interfaces:', os.networkInterfaces())
console.log('Host name:', os.hostname())
console.log('Diretório raíz:', os.homedir())
console.log('Informações de usuário:', os.userInfo())