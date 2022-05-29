const { time } = require('console')
const fs = require('fs')

// fs.readFile('./text.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })


// const nossoReadFile = (path, cb) => {
//     //implementação da leitura de arquivo
//     let err = null
//     const lerArquivo = 'Texto 123' //Chamada externa

//     if(!lerArquivo) {
//         err = 'Deu Ruim'
//     }

//     cb(err, lerArquivo)
// }

// nossoReadFile('./asdasd', (err, data) => {
//     console.log(err)
//     console.log(data)
// })



const readFile = (path) => new Promise((resolve, reject) => fs.readFile(path, (err, data) => {
    if(err) {
        reject(err)
    } else {
        resolve(data.toString())
    }
}))
// const timeout = new Promise((resolve, reject) => setTimeout(() => {
//     console.log('Timeout')
//     resolve('Deu tudo certo')
// }, 3000)).then(msg => console.log(msg))

const readFileAsync = async () => {
    try {
        const _file = await readFile('./text.tt')
        console.log(_file)
    } catch (error) {
        console.log(error)
    }
}

readFileAsync()

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)





