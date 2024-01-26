function hello(){
    let count = 0;
    return function(){
        if(count < 1){
            console.log("Hi,you called me!!!")
            count++;
        }else{
            console.log("I am already called!!!!")
        }
    }
}
const ans = hello();
ans();
ans();