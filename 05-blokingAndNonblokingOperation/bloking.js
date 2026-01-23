import fs from "fs"

console.log("1");
const result =fs.readFileSync("../04-filehandling/notes.txt","utf-8");  //block threde here 
console.log(result)
console.log("4")
console.log("5")