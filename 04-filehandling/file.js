import fs from "fs" //syntax to import fs to filehandling 

//sync..
//fs.writeFileSync("./notes.txt","hellow there")

//Async..

//fs.writeFile("./notes1.txt","hellow there",(error)=>{})

//=>read data from a file
//Sync
// const result=fs.readFileSync("./notes.txt","utf-8");
// console.log(result);

//Asyn
// fs.readFile("./notes.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error:",err);
//     }
//     else{
//         console.log(result);
//     }
// });

//fs.appendFileSync("./notes.txt",new Date().getDate().toLocaleString())
//fs.appendFileSync("./notes.txt","hellow there")
//fs.cpSync("./notes.txt" ,"./copy.txt")
fs.unlinkSync("../copy.txt")
