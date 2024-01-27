// this is a simple promise exmple 
let mypromise = new Promise(function(resolve,reject){
    const x = "JavaScript";
    const y ='JavaScript';
    if(x===y){
        resolve();
        console.log("your spelling is correct")
 } else{
    reject();
    console.log("your speliing is incorrect")
 }
});