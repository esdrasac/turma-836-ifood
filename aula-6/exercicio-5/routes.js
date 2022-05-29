const OperationSystemController = require('./controllers/operation-system-controller')

module.exports = {
    '/get-pc-info': OperationSystemController.getPcInformation
}