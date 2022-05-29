const http = require('http')
const urlEncode = require('url')
const qs = require('querystring')

const log = require('./src/utils/log')
const routes = require('./src/routes')

const server = http.createServer((request, response) => {
        const {url} = request
        const { pathname, query } = urlEncode.parse(url)
      
        // // { pathname: /pokemons, query: 'limit=30'}
        // // queryParsed = { limit: 30 }
    
        log.request(pathname)
        const queryParsed = qs.parse(query)

        request.queryParams = queryParsed

        routes[pathname](request, response)
})

const PORT = 3000
server.listen(3000, () => console.log(`::: Server listening on port ${PORT}`))