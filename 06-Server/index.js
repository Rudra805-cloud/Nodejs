//create server
// import http, { Server } from "http"

// const myserver=http.createServer((req,res)=>{
//     res.end("heloo server ")
// })

// myserver.listen(8000,()=>{"server started"});

//*******************************************************************

//=>ASSIGNMENT
 import http from "http"
 import fs from "fs"
import { url } from "inspector"


const myserver=http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url}:new req Recived \n`
       fs.appendFile("log.txt",log,(err,data)=>{
        switch (req.url) {
            case '/':
                res.end("HOME PAGE");
                break;
            case '/about':
                res.end("About my self");
                break;
            default:
                res.end("4O4:page not found");
        }
       })
    
})

myserver.listen(8000,()=>{"server started"});
