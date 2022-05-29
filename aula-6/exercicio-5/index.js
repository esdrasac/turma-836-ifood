const http = require('http')
const OperationSystemController = require('./controllers/operation-system-controller')
const OperationSystem = require('./models/operation-system')
const routes = require('./routes')

const server = http.createServer((req, res) => {
    const { url } = req
    routes[url](req, res)
    /**
     * Outras alternativas:
     *  Switch case
     *   switch (url) {
            case '/get-pc-info':
                OperationSystemController.getPcInformation(req, res)
                break;
        
            default:
                res.writeHead(405)
                res.end('Method is not allowed')
                break;
        }

     *  if else
     * 
            if(url === '/get-pc-info') {
                OperationSystemController.getPcInformation(req, res)
            }
     */
})

server.listen(3000, () => console.log('Server listening on port 3000'))