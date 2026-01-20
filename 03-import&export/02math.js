// Syntax ->1

// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// export default {add,sub};

// Syntax->2
import crypto from "crypto";

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
export {add,sub};