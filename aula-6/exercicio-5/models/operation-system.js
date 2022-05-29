const os = require('os')

class OperationSystem {
    static getCPUs() {
        return os.cpus()
    }

    static getSytemInformation() {
        return {
            'Plataforma:': os.platform(),
            'Arquitetura:': os.arch(),
            'Informações de usuário:': os.userInfo()
        }
    }

    static getMemoryStatus() {
        return {
            'Memória total:': os.totalmem(),
            'Memória disponível:': os.freemem()
        }
    }
}

module.exports = OperationSystem