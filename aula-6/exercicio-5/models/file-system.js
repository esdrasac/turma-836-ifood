const fs = require('fs')

class FileSystem {
    static async writeFile(content) {
        return await fs.promises.writeFile('./tmp/pc-info.json', JSON.stringify(content))
    }
}

module.exports = FileSystem