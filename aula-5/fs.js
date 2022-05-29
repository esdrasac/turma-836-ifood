
const fs = require('fs')
const path = require('path')

const readDir = (path) => fs.promises.readdir(path)
const readFile = (arq) => fs.promises.readFile(arq)

const main = async () => {
    const arquivos = await readDir(__dirname)

    const txtArqarquivos = arquivos.filter(arq => arq.split('.').pop() === 'txt')

    const readedFiles = await Promise.all(txtArqarquivos.map(async (file) => await (await readFile(file)).toString()))
    console.log(readedFiles)
    return readedFiles 
     
    
}

main()
