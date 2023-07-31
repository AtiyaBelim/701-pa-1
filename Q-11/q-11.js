const express = require('express');
const app = express();
const http = require('http').createServer(app)
const PORT = process.env.PORT || 5000
var data;
const socket = require('socket.io')(http)
const fetch=require('node-fetch')
var data=fetch("https://cricket-api.vercel.app/cri.php?url=https://www.cricbuzz.com/live-cricket-scores/32057/3rd-test-india-tour-of-england-2022").then(res => res.json())
.then(json => {
 data=json
});
socket.on('connection',function(s){
 console.log("Helloo "+ data)
 s.emit('message',data);
 
})
http.listen(PORT,() => {
 console.log(`Listening on port ${PORT}`);
})
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res) => {
 res.sendFile(__dirname + '/index.html')
})
client.js
const client = io();
client.on('message',function(s){
 console.log(s.livescore)
 var title= document.querySelector('#title')
 title.innerHTML=s.livescore.title;
 var detail= document.querySelector('#details')
 detail.innerHTML+=s.livescore.teamone + '</br>'+ s.livescore.teamtwo ;
 var result= document.querySelector('#result')
 result.innerHTML+=s.livescore.update ;
})



