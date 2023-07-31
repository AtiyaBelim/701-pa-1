const http = require('http');
const fs=require('fs');
http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.end("Home Page");
        }
        if (req.url === '/gethello') {
            fs.readFile('./files/q-2.html',(err,data)=>{
                if(err)
                {
                    return res.send("errorrr!!");
                }
                else{
                    res.writeHead(200,{
                        'Content-Type':'text/html'});
                    res.write(data);
                    return res.end();
                }
            })
        }
        if (req.url === '/ajaxcall') {
            fs.readFile('./files/ajax.html',(err,data)=>{
                if(err)
                {
                    return res.send("error!!");
                }
                else{
                    res.writeHead(200,{
                        'Content-Type':'text/html'});
                    res.write(data);
                    return res.end();
                }
            })
        }
    }


}).listen(8080, () => {
    console.log("server listening on port 8080");
})
