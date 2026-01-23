import { error } from "console"
import fs from "fs"
console.log("4")
console.log("5")

fs.readFile("../notes.txt","utf-8",(error,result)=>{
    if(error){
         console.log(error);
    }
    else{
      console.log(result);
    }
})
console.log("4")
console.log("5")
console.log("4")
console.log("5")
console.log("4")
console.log("5")
console.log("4")
console.log("5")
