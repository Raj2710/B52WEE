// const os = require('os')

// console.log(os.cpus())
// console.log(os.hostname())
// console.log(os.homedir())
// console.log(`Your machine is on for ${Math.floor(os.uptime()/3600)}Hr`)
// console.log(os.version())

// const fs = require('fs')
// fs.mkdir('./Sample',(err)=>{
//     console.log(err)
// })

// setTimeout(()=>{
//     console.log("Delete Folder")
//     fs.rmdir('./Sample',(err)=>{
//         console.log(err)
//     })
// },5000)

// const fs = require('fs')

// const data = "Welcome to the File System"
// fs.writeFile('sample.txt',data,'utf-8',(err)=>{
//     if(err)
//         console.log(err)
// })

// fs.readFile('sample.txt','utf-8',(err,data)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(data)
// })


// let http = require('http')

// const server = http.createServer(async(req,res)=>{
//     res.writeHead(200,{"Content-Type":"application/json"})

//     fetch('https://restcountries.com/v3.1/all')
//     .then((response)=>response.json())
//     .then((data)=>{
//         let country = []

//         for(let e of data)
//             country.push(e.name.common)

//         country.sort()

//         res.end(JSON.stringify({
//             message:"Request Received Successfully",
//             country
//         }))
//     })
// })

// server.listen(8000,()=>console.log("Server listening port 8000"))


let http = require('http')
let fs = require('fs')
const server = http.createServer(async(req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})

    let fileData = fs.readFileSync('index.html','utf-8')

    res.end(fileData)

})

server.listen(8000,()=>console.log(
    "Server listening port 8000"))