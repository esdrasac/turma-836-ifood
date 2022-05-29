const OperationSystem = require('../models/operation-system')
const FileSystem = require('../models/file-system')

class OperationSystemController {
    static async getPcInformation(req, res) {
        //Validações da requisição
        const obj = {
            'CPU': OperationSystem.getCPUs(),
            'Memória': OperationSystem.getMemoryStatus(),
            'Sistema Operacional': OperationSystem.getSytemInformation(),
        }

        await FileSystem.writeFile(obj)
        
        res.writeHead(200)
        res.end(JSON.stringify(obj))
    }
}

module.exports = OperationSystemController