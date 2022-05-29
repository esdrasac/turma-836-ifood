const fs = require('fs')

const main = async () => {
    const list = await fs.promises.readdir('./docs')
    const txtFiles = list.filter(file => file.split('.').pop() === 'txt')
    
    const files = txtFiles.map(async (file) => {
        return await (await fs.promises.readFile(`./docs/${file}`)).toString()
    })

    const _files = await Promise.all(files)
    
    return await fs.promises.writeFile('./allfiles.txt', JSON.stringify(_files), 'utf8')
}

main()