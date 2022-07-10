const express = require('express')
const app = express()
const https = require('https')

const availableWaivers = ''

// https

//     .get("https://waiive.azurewebsites.net/api/getAvailableWaivers", resp => {
//         let data = "";


//         resp.on("data", chunk => {
//             data+=chunk
//          });

//          resp.on("end" , () => {
//              availableWaivers = data
//          })
      

// })

//  telling express module that the public dir has all of our site assets

app.use(express.static(__dirname+'/public'));

app.get('/',(req, res) => res.sendFile(__dirname + '/index.html'))

app.get('/api/getAvailableWaivers',(req,res) => {
    console.log(res)
    console.log(req)
})

console.log(process.env.PORT)
app.listen(process.env.PORT || 8080)