//here in this code we use promise consumers
let mypromise = new Promise(function(resolve,reject){
    const x = "JavaScript";
    const y ='JavaScript';
    if(x===y){
        resolve();
        // console.log("your spelling is correct")
 } else{
    reject();
    //console.log("your speliing is incorrect")
 }
});
mypromise.
     then(function(){
     console.log("your spelling is correct")
}).
    catch(function(){
        console.log("your speliing is incorrect")
    });