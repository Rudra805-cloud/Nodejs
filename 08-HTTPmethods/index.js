import fs from "fs";
import http, { get } from "http"
import  url from "url";

const myserver=http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url}:new req Recived \n`
    const myurl=url.parse(req.url,String)
    console.log(myurl);
     fs.appendFile("log.txt",log,(err,data)=>{
         switch (myurl.pathname) {
            case '/':
                res.end("HOME PAGE");
                break;
            case '/about':
                res.end(`hii ${myurl.query.myname}`);
                break;
            case '/signup':
                if(req.method=="GET"){                              //  ---|
                    res.end("this is sign up page ");             //       | 
                }                                               //         |
                else if(req.method=="POST"){                  //           |
                    //db quary                                  //         |=>DUE TO REMOVE SUCH COMPLECASY WEUSE EXPRESS
                    res.end("form submitted ")                    //       |
                                                                    //     |
                }                                                     //   |
                break;                                                  //-|
            
            default:
                res.end("4O4:page not found");
        }
     })
    
})
myserver.listen(8000,()=>{"server started"});

