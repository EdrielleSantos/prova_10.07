// QUESTÃO 1 ✅
// const http = require('http')
// const fs = require('fs')
// const PORT = 5000

// const server = http.createServer((req, res) =>{
//     if(req.url === '/info'){
//         res.setHeader(200, 'Content-Type','text/html', 'utf-8')
//         res.write(os.release())
//         res.write(os.freemem())
//         res.write(os.tmpdir())
//     } else{
//         res.setHeader(404, 'Content-Type','text/html', 'utf-8')
//         res.write('Página não encontrada')
//     }
// })

// const json = JSON.stringify(server)
// console.log(json)

// QUESTÃO 4 ✅
// const http = require('http')
// const fs = require('fs')
// const PORT = 5000

// fs.rename('arquivo.txt', 'novoName.txt', (err)=>{
//     if(err) throw err
//     console.log('O arquivo foi renomeado!!😊')
// })

// QUESTÃO 5 ✅
// const os = require('os')
// const PORT = 5000

// console.log(os.cpus)
// console.log(os.hostname)
// console.log(os.homedir)
// console.log(os.hostname)
// console.log(os.machine)